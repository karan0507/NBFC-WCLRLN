import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { differenceInCalendarDays } from 'date-fns';
import * as moment from 'moment';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-deductions-list',
  templateUrl: './deductions-list.component.html',
  styleUrls: ['./deductions-list.component.css']
})
export class DeductionsListComponent implements OnInit {

  selectedTab = 'PENDING'
  page = 1;
  globalPageSize = 30
  api_calling_loader: boolean;
  total_count: any;
  list_data: any;
  date = ''
  search_params = ''
  currentEmployee: any;
  disabledDate = (current: Date): boolean =>
    // Can not select days before today and today
    differenceInCalendarDays(current, new Date()) > 0;
  customRanges = {
    Today: [new Date(), new Date()],
    'Last 7 days': [new Date().setDate(new Date().getDate() - 7), new Date()],
    'This Month': [new Date(new Date().getFullYear(), new Date().getMonth(), 1), new Date()],
    'Last Month': [new Date(new Date().getFullYear(), new Date().getMonth(), 1).setMonth(new Date().getMonth() - 1), new Date(new Date().getFullYear(), new Date().getMonth(), -1, 30, 31)],
    'Last 3 Months': [new Date(new Date().getFullYear(), new Date().getMonth(), 1).setMonth(new Date().getMonth() - 3), new Date(new Date().getFullYear(), new Date().getMonth(), -1, 30, 31)],
    'Last 6 Months': [new Date(new Date().getFullYear(), new Date().getMonth(), 1).setMonth(new Date().getMonth() - 6), new Date(new Date().getFullYear(), new Date().getMonth(), -1, 30, 31)],
    'This Year': [new Date(new Date().getFullYear(), 0, 1), new Date()],
    // 'Last Year': [new Date(new Date().getFullYear(), new Date().getMonth(), 1).setMonth(new Date().getMonth() - 12), new Date(new Date().getFullYear(), new Date().getMonth(), 1)],
    'Last Year': [new Date(new Date().getFullYear() - 1, 0, 1), new Date(new Date().getFullYear() - 1, 11, 31)],
    // d.setMonth(d.getMonth() - 3);
  };
  type = ''
  status = ''
  isVisible = false
  isApprove = false
  deduction_id: any;
  debounce: any;
  corporateList: any;
  constructor(public http: HttpService, private message: NzMessageService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.fetchDeductionList()
  }

  fetchDeductionList(tableFilter?) {
    this.page = tableFilter?.pageIndex ? tableFilter?.pageIndex : 1;
    this.globalPageSize = tableFilter?.pageSize ? tableFilter?.pageSize : 30;
    let data = {
      page: this.page,
      search_param: this.search_params ? this.search_params : '',
      limit: this.globalPageSize,
      status: this.selectedTab ? this.selectedTab : '',
      type_deduction: this.type ? this.type : '',
      type_status: this.status ? this.status : '',
      export: false
    }
    if (this.date) {
      data['start_date'] = this.date[0] ? moment(this.date[0]).format("YYYY-MM-DD") : '';
      data['end_date'] = this.date[1] ? moment(this.date[1]).format("YYYY-MM-DD") : '';
    }

    if (this.currentEmployee) {
      data['corporate'] = this.currentEmployee
    }
    this.api_calling_loader = true
    this.http.fetchDeductionList(data).subscribe(res => {
      this.api_calling_loader = false
      this.list_data = res['data'].results
      this.total_count = res['data']['total_count']
      // this.message.success(res['message'])
    }, (err) => {
      this.api_calling_loader = false
    })
  }

  exportGlobalFunction(file_formate) {
    let data = {
      // page: this.page,
      // search_param: this.search_params ? this.search_params : '',
      // limit: this.globalPageSize,
      // status: this.selectedTab ? this.selectedTab : '',
      type_deduction: this.type ? this.type : '',
      corporate: this.currentEmployee ? this.currentEmployee : '',
      start_date: this.date[0] ? moment(this.date[0]).format("YYYY-MM-DD") : '',
      end_date: this.date[1] ? moment(this.date[1]).format("YYYY-MM-DD") : '',
      export: true
    }
    if (this.date) {
      data['start_date'] = this.date[0] ? moment(this.date[0]).format("YYYY-MM-DD") : '';
      data['end_date'] = this.date[1] ? moment(this.date[1]).format("YYYY-MM-DD") : '';
    }


    // let data = {
    //   datapoint: 'lender_master_export',
    //   endpoint: 'LoanApplicationTransactions',
    //   source: 'LMS',
    //   start_date: this.date[0] ? moment(this.date[0]).format("YYYY-MM-DD") : '',
    //   end_date: this.date[1] ? moment(this.date[1]).format("YYYY-MM-DD") : '',
    //   txn_status: this.selectedStatus ? this.selectedStatus : '',
    //   product_type: this.master_product_id ? this.master_product_id : '',
    //   txn_type: this.selectedType ? this.selectedType : '',
    //   search_param: this.searchValue,
    //   corporate: this.selectedCorporate ? this.selectedCorporate : '',
    //   // tab_filter: this.selectedTab,
    //   file_type: file_formate
    // }
    let date = Date.now();
    const formatedDate = moment(date[0]).format("YYYY-MM-DD")
    const generateloader = this.message.loading('Generating File..', { nzDuration: 0 }).messageId;
    this.http.exportDeductionList(data).subscribe(res => {
      this.http.exportMasterSectionModule(res, 'deduction_approval ' + formatedDate, file_formate, generateloader)
    })
  }
  resetFilters() {
    this.date = ''
    this.search_params = '';
    this.type = '';
    this.currentEmployee = '';
    this.status = '';
    this.fetchDeductionList();
  }

  OnTypeSearchList(event) {
    clearTimeout(this.debounce);
    this.debounce = setTimeout(() => {
      this.fetchPartnerList(event);
    }, 500);
  }
  fetchPartnerList(e?) {
    let data = {};
    if (e) {
      data['name'] = e;
    }
    this.http.fetchPartner(data).subscribe((res: any) => {
      if (res?.success) {
        this.corporateList = [];
        res?.data?.results.map((res: any) => {
          if (res?.name) {
            this.corporateList.push(res)
          }
        })
        // this.corporateList = res?.data?.results;
        console.log(this.corporateList);
      }
    });
    // }
  }
  deductionApproval() {
    this.http.deductionApprovalAmount(this.deduction_id).subscribe(res => {
      if (res['success']) {
        this.message.success(res['message'])
        this.fetchDeductionList()
      } else {
        this.message.error(res['message'])
      }
      this.isVisible = false
    }, (err) => {
      this.api_calling_loader = false
      this.isVisible = false
    })
  }
  getDeductionDetails(id) {
    this.deduction_id = id
  }
  deductionReject() {
    this.http.deductionRejectAmount(this.deduction_id).subscribe(res => {
      if (res['success']) {
        this.message.success(res['message'])
        this.fetchDeductionList()
      } else {
        this.message.error(res['message'])
      }
      this.isVisible = false
    }, (err) => {
      this.api_calling_loader = false
      this.isVisible = false
    })
  }

}
