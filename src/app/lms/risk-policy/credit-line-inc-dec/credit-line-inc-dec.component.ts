import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-credit-line-inc-dec',
  templateUrl: './credit-line-inc-dec.component.html',
  styleUrls: ['./credit-line-inc-dec.component.css']
})
export class CreditLineIncDecComponent implements OnInit {

  borrowertList = []
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
  is_blocked = '';
  search_params = '';
  constructor(private fb: FormBuilder, public http: HttpService, private message: NzMessageService,
    private router : Router,
    private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.page = 1;
    this.globalPageSize = 30
    this.createDescLineFunction()
    this.createIncLineFunction()
    this.fetchLoanApplicationList()
  }

  createIncLineFunction() {
    this.createIncLine = this.fb.group({
      incBy: [],
      newCred: [],
      activation_from: []
    })
  }
  createDescLineFunction() {
    this.createDescLine = this.fb.group({
      incBy: [],
      newCred: [],
      activation_from: []
    })
  }
  
  fetchLoanApplicationList(tabelFilter?) {
    if (tabelFilter) {
      this.page = tabelFilter?.pageIndex ? tabelFilter?.pageIndex : this.page;
      this.globalPageSize = tabelFilter?.pageSize ? tabelFilter?.pageSize : this.globalPageSize;
    }
    let data = {
      datapoint: 'loan_service',
      endpoint: 'LoanApplicationCreditlineUpdation',
      source: 'LMS',
      page: this.page,
      limit: this.globalPageSize,
      product_id: this.master_product_id,
      is_blocked: this.is_blocked,
      search_param: this.search_params,
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
    this.fetchLoanApplicationList()
  }

}
