import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { differenceInCalendarDays } from 'date-fns';
import * as moment from 'moment';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-credit-line-inc-dec',
  templateUrl: './credit-line-inc-dec.component.html',
  styleUrls: ['./credit-line-inc-dec.component.css']
})
export class CreditLineIncDecComponent implements OnInit {

  borrowertList
  isIncLine = false
  isDescLine = false
  createIncLine: FormGroup;
  createDescLine: FormGroup;
  api_calling_loader: boolean;
  total_count: any;
  search_param: any = '';
  page: any;
  globalPageSize: any;
  master_product_id = '';
  is_blocked;
  search_params = '';
  selectedLine: any;
  is_change_line: boolean;
  disabledDate = (current: Date): boolean =>
    // Can not select days before today and today
    differenceInCalendarDays(current, new Date()) < 0;
  is_active: any;
  constructor(private fb: FormBuilder, public http: HttpService, private message: NzMessageService,
    private router : Router,
    private route: ActivatedRoute,) { 
      http.refreshCreditLine.subscribe(res => {
        this.fetchLoanApplicationList()
      })
    }

  ngOnInit(): void {
    this.page = 1;
    this.globalPageSize = 30
    this.createIncLineFunction()
    this.fetchLoanApplicationList()
  }

  createIncLineFunction() {
    this.createIncLine = this.fb.group({
      incBy: ['', [Validators.required]],
      activation_from: ['', [Validators.required]]
    })
  }
  
  fetchLoanApplicationList(tabelFilter?) {
    // if (tabelFilter) {
      this.page = tabelFilter?.pageIndex ? tabelFilter?.pageIndex : 1;
      this.globalPageSize = tabelFilter?.pageSize ? tabelFilter?.pageSize : 30;
    // }
    let data = {
      datapoint: 'loan_service',
      endpoint: 'LoanApplicationCreditlineUpdation',
      source: 'LMS',
      page: this.page,
      limit: this.globalPageSize,
      product_type: this.master_product_id ? this.master_product_id : '',
      is_blocked: this.is_blocked ? (this.is_blocked == 1 ? false : true) : '',
      search_param: this.search_params,
      account_status: this.is_active ? this.is_active : '',
      risk_policy_tab: 'canceled_token'
    }
    this.api_calling_loader = true
    this.http.fetchLoanApplicationList(data).subscribe(res => {
      this.api_calling_loader = false
      this.borrowertList = res['data']
      this.total_count = res.total_count
      // this.message.success(res['message'])
    }, (err) => {
      this.api_calling_loader = false
    })
  }
  resetFilters() {
    this.search_params = ''
    this.is_blocked = ''
    this.master_product_id = ''
    this.is_active = ''
    this.fetchLoanApplicationList()
  }

  openChangeCreditModal(data) {
    this.selectedLine = data;
    this.isIncLine = true
  }

  convertToFloat(num) {
    return parseFloat(num)
  }

  changeCreditLineFunction() {
    let data = new FormData()
    data.append('source', 'LMS')
    data.append('datapoint', 'change_credit_line')
    data.append('accepted_loan_application', this.selectedLine.id)
    data.append('amount_change', String(this.convertToFloat(this.selectedLine.loan_amount_provided) + this.convertToFloat(this.createIncLine.get('incBy').value ? this.createIncLine.get('incBy').value : 0)))
    data.append('activation_date', this.createIncLine.get('activation_from').value ? moment(this.createIncLine.get('activation_from').value).format("YYYY-MM-DD 00:00") : '')
    this.is_change_line = true
    this.http.postLoanApplicationApi(data).subscribe(res => {
      this.isIncLine = false
      this.is_change_line = false
      this.fetchLoanApplicationList()
      this.createIncLine.reset()
    }, (err) => {
      this.is_change_line = false
    })
  }

}
