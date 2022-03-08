import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
  page = 1;
  globalPageSize: number;
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
  
  constructor(public http: HttpService, private message: NzMessageService,
    private router : Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.page = 1;
    this.globalPageSize = 30
    this.fetchTransactionList()
  }
  fetchTransactionList(tabelFilter?) {
    if (tabelFilter) {
      this.page = tabelFilter?.pageIndex ? tabelFilter?.pageIndex : this.page;
      this.globalPageSize = tabelFilter?.pageSize ? tabelFilter?.pageSize : this.globalPageSize;
    }
    let data = {
      datapoint: 'loan_service',
      endpoint: 'LoanApplicationTransactions',
      source: 'LMS',
      page: this.page,
      limit: this.globalPageSize,
      txn_status: this.selectedStatus,
      txn_type: this.selectedType,
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
      file_type: file_formate
    }
    const generateloader = this.message.loading('Generating File..', { nzDuration: 0 }).messageId;
    this.http.fetchLoanApplicationListExport(data).subscribe(res => {
      this.http.exportMasterSectionModule(res, 'transaction', file_formate, generateloader)
    })
  }
  reverseChargesToggle(id) {
    this.isReverseCharges = true
    this.reverseId = id
  }
  reverseChargesFunction() {
    let data = new FormData()
    data.append('source', 'LMS'),
    data.append('datapoint', 'reverse_transaction'),
    data.append('endpoint', this.reverseId)
    this.is_revese_loading = true
    this.http.fetchLoanApplicationUpload(data).subscribe(res => {
      this.is_revese_loading = false
      this.isReverseCharges = false
      this.message.success(res['message'])
    }, (err) => {
      this.is_revese_loading = false
    })
  }
}
