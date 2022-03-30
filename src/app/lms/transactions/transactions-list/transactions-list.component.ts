import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { differenceInCalendarDays } from 'date-fns';
import * as moment from 'moment';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.css']
})
export class TransactionsListComponent implements OnInit {
  selectedTab = 'all'
  searchValue = '';
  _apiLoader = {
    'list': false,
  }
  reverse_type;
  reverse_amount;
  page = 1;
  globalPageSize: number;
  is_set_amt;
  total_count;
  listOfData = [];
  setOfCheckedId = new Set<number>();
  listOfCurrentPageData = [];
  checked = false;
  indeterminate = false;
  api_calling_loader: boolean;
  selectedType = ''
  selectedStatus = ''
  date = ''
  isReverseCharges = false
  isRefundTransaction = false
  reverseId: any;
  is_revese_loading: boolean;
  master_product_id = ''
  final_reverse_amount: any;
  reverse_sub_title: string;
  
  constructor(public http: HttpService, private message: NzMessageService,
    private router : Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.page = 1;
    this.globalPageSize = 30
    this.fetchTransactionList()
  }
  fetchTransactionList(tabelFilter?) {
    // if (tabelFilter) {
      this.page = tabelFilter?.pageIndex ? tabelFilter?.pageIndex : 1;
      this.globalPageSize = tabelFilter?.pageSize ? tabelFilter?.pageSize : 30;
    // }
    let data = {
      datapoint: 'loan_service',
      endpoint: 'LoanApplicationTransactions',
      source: 'LMS',
      page: this.page,
      limit: this.globalPageSize,
      product_type: this.master_product_id ? this.master_product_id : '',
      txn_status: this.selectedStatus ? this.selectedStatus : '',
      txn_type: this.selectedType ? this.selectedType : '',
      start_date: this.date[0] ? moment(this.date[0]).format("YYYY-MM-DD") : '',
      end_date: this.date[1] ? moment(this.date[1]).format("YYYY-MM-DD") : '',
      search_param: this.searchValue,
      tab_filter: this.selectedTab
    }
    this.api_calling_loader = true
    this.http.fetchLoanApplicationList(data).subscribe(res => {
      this.api_calling_loader = false
      this.listOfData = res['data']
      this.total_count = res.total_count
      // this.message.success(res['message'])
    }, (err) => {
      this.api_calling_loader = false
    })
  }
  resetFilter(){
    this.searchValue = ''
    this.selectedType = ''
    this.selectedStatus = ''
    this.date = ''
    this.master_product_id = ''
    this.fetchTransactionList();
  }

  onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }
  onAllChecked(checked: boolean): void {
    this.listOfCurrentPageData
      .filter(({ disabled }) => !disabled)
      .forEach(({ id }) => this.updateCheckedSet(id, checked));
    this.refreshCheckedStatus();
  }
  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }
  refreshCheckedStatus(): void {
    const listOfEnabledData = this.listOfCurrentPageData.filter(({ disabled }) => !disabled);
    this.checked = listOfEnabledData.every(({ id }) => this.setOfCheckedId.has(id));
    this.indeterminate = listOfEnabledData.some(({ id }) => this.setOfCheckedId.has(id)) && !this.checked;
  }

  onChange(result: Date[]): void {
    console.log('onChange: ', this.date);
  }

  // export function
  exportGlobalFunction(file_formate){
    let data = {
      datapoint: 'lender_master_export',
      endpoint: 'LoanApplicationTransactions',
      source: 'LMS',
      start_date: this.date[0] ? moment(this.date[0]).format("YYYY-MM-DD") : '',
      end_date: this.date[1] ? moment(this.date[1]).format("YYYY-MM-DD") : '',
      txn_status: this.selectedStatus ? this.selectedStatus : '',
      product_type: this.master_product_id ? this.master_product_id : '',
      txn_type: this.selectedType ? this.selectedType : '',
      search_param: this.searchValue,
      // tab_filter: this.selectedTab,
      file_type: file_formate
    }
    const generateloader = this.message.loading('Generating File..', { nzDuration: 0 }).messageId;
    this.http.fetchLoanApplicationListExportGet(data).subscribe(res => {
      this.http.exportMasterSectionModule(res, 'transaction', file_formate, generateloader)
    })
  }
  reverseChargesToggle(id) {
    // this.isReverseCharges = true
    this.reverseId = id
    this.getTnxAmount()
  }
  getTnxAmount() {
    let data = {
      datapoint: 'get_transaction_amount',
      endpoint: this.reverseId,
      source: 'LMS',
    }
    this.http.fetchLoanApplicationList(data).subscribe(res => {
      if (res.data.amount > 0) {
        this.isReverseCharges = true
        this.final_reverse_amount = res.data.amount
      } else {
        this.message.warning("You don't have amount for reverse transaction.")
      }
    }, (err) => {
    })
  }

  setTypeandAmt() {
    if (!this.reverse_type) {
      this.message.error('Please select reverse type')
      return false
    }
    if (!this.reverse_amount) {
      this.message.error('Please enter amount')
      return false
    }
    if (this.reverse_amount > this.final_reverse_amount) {
      this.message.error('Amount should be less than or equal to' + this.final_reverse_amount)
      return false
    }
    this.is_set_amt = true
    this.reverse_sub_title = 'Amount to be reversed - ₹' + this.reverse_amount+ '<br/> Are you sure about performing this action?'
  }
  reverseChargesFunction() {
    let data = new FormData()
    data.append('source', 'LMS'),
    data.append('datapoint', 'reverse_transaction'),
    data.append('endpoint', this.reverseId)
    data.append('amount', this.reverse_amount)
    this.is_revese_loading = true
    this.http.fetchLoanApplicationUpload(data).subscribe(res => {
      this.is_revese_loading = false
      this.isReverseCharges = false
      this.is_set_amt = false
      this.message.success(res['message'])
    }, (err) => {
      this.is_revese_loading = false
    })
  }
  disabledDate = (current: Date): boolean =>
    // Can not select days before today and today
    differenceInCalendarDays(current, new Date()) > 0;
}