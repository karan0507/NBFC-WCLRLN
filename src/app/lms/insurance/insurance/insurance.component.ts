import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { differenceInCalendarDays } from 'date-fns';
import * as moment from 'moment';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.css']
})
export class InsuranceComponent implements OnInit {


  page = 1;
  globalPageSize = 30
  api_calling_loader: boolean;
  total_count: any;
  list_data: any;
  date = ''
  search_params = ''
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

  
  constructor(public http: HttpService, private message: NzMessageService,
    private router : Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.fetchInsuranceData()
  }
  
  fetchInsuranceData(tableFilter?) {
    this.page = tableFilter?.pageIndex ? tableFilter?.pageIndex : 1;
    this.globalPageSize = tableFilter?.pageSize ? tableFilter?.pageSize : 30;
    let data = {
      datapoint: 'fetch_insurance',
      source: 'Onboarding',
      // endpoint: this.selectedTab,
      page: this.page,
      search_param: this.search_params ? this.search_params : '',
      limit: this.globalPageSize,
      start_date: this.date[0] ? moment(this.date[0]).format("YYYY-MM-DD") : '',
      end_date: this.date[1] ? moment(this.date[1]).format("YYYY-MM-DD") : '',
    }
    this.api_calling_loader = true
    this.http.fetchLoanApplicationList(data).subscribe(res => {
      this.api_calling_loader = false
      this.list_data = res['data']
      this.total_count = res['total_count']
      // this.message.success(res['message'])
    }, (err) => {
      this.api_calling_loader = false
    })
  }
  exportGlobalFunction(file_formate){
    let data = {
      datapoint: 'export_insurance',
      // endpoint: 'LoanApplicationTransactions',
      source: 'Onboarding',
      // page: this.page,
      // limit: this.globalPageSize,
      // product_type: this.master_product_id ? this.master_product_id : '',
      // is_blocked: this.is_blocked ? (this.is_blocked == 1 ? false : true) : '',
      // search_param: this.search_params ? this.search_params : '',
      // account_status: this.is_active ? this.is_active : '',
      // corporate_id: this.selectedCorporate ? this.selectedCorporate : '',
      // spent: this.is_spend ? this.is_spend : '',
      // file_type: file_formate
    }
    const generateloader = this.message.loading('Generating File..', { nzDuration: 0 }).messageId;
    this.http.fetchLoanApplicationListExportGet(data).subscribe(res => {
      this.http.exportMasterSectionModule(res, 'insurance_list', file_formate, generateloader)
      // this.isVisible = false
    })
  }
}
