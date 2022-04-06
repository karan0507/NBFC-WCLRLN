import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-user-terminate-unblock',
  templateUrl: './user-terminate-unblock.component.html',
  styleUrls: ['./user-terminate-unblock.component.css']
})
export class UserTerminateUnblockComponent implements OnInit {

  borrowertList = []
  isUnblock = false
  isTerminate
  page : any
  api_calling_loader: boolean;
  total_count = 0;
  search_param = '';
  globalPageSize: number;
  master_product_id = '';
  is_blocked;
  search_params = '';
  applications: any;
  is_active: any;
  constructor(public http: HttpService, private message: NzMessageService,
    private router : Router,
    private route: ActivatedRoute) {
      http.refreshUser.subscribe(res => {
        this.fetchBorrowerList()
      })
    }

  ngOnInit(): void {
    this.page = 1;
    this.globalPageSize = 30
    this.fetchBorrowerList()
  }

  fetchBorrowerList(tabelFilter?) {
    // if (tabelFilter) {
      this.page = tabelFilter?.pageIndex ? tabelFilter?.pageIndex : 1;
      this.globalPageSize = tabelFilter?.pageSize ? tabelFilter?.pageSize : 30;
    // }
    let data = {
      datapoint: 'loan_service',
      endpoint: 'LoanApplicationAcceptedProduct',
      source: 'LMS',
      page: this.page,
      limit: this.globalPageSize,
      product_type: this.master_product_id ? this.master_product_id : '',
      is_blocked: this.is_blocked ? (this.is_blocked == 1 ? false : true) : '',
      search_param: this.search_params,
      account_status: this.is_active ? this.is_active : '',
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

  toggleUserLineStatus(value) {
    let data = new FormData
      data.append('datapoint', 'toggle_risk_policy'),
      // endpoint: 'LoanApplicationAcceptedProduct',
      data.append('source', 'LMS'),
      data.append('toggle_type', 'USER'),
      data.append('accepted_loan_application', this.applications),
      data.append('toggle_value', value),

    this.http.fetchLoanApplicationUpload(data).subscribe(res => {
      if (res.success) {
        this.isTerminate = false
        this.isUnblock = false
        this.message.success(res['message'])
        this.fetchBorrowerList()
      } else {
        this.message.error(res['message'])
      }
    }, (err) => {
    })
  }

  resetFilters() {
    this.search_params = ''
    this.is_blocked = ''
    this.master_product_id = ''
    this.is_active = ''
    this.fetchBorrowerList()
  }

}
