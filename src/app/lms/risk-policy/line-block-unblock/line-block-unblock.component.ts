import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-line-block-unblock',
  templateUrl: './line-block-unblock.component.html',
  styleUrls: ['./line-block-unblock.component.css']
})
export class LineBlockUnblockComponent implements OnInit {

  borrowertList = []
  isblock = false
  isUnblock = false
  page : any
  api_calling_loader: boolean;
  total_count = 0;
  search_param = '';
  globalPageSize: number;
  master_product_id = '';
  is_blocked = '';
  search_params = '';
  accepted_loan_application: any;
  constructor(public http: HttpService, private message: NzMessageService,
    private router : Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.page = 1;
    this.globalPageSize = 30
    this.fetchBorrowerList()
  }

  fetchBorrowerList(tabelFilter?) {
    if (tabelFilter) {
      this.page = tabelFilter?.pageIndex ? tabelFilter?.pageIndex : this.page;
      this.globalPageSize = tabelFilter?.pageSize ? tabelFilter?.pageSize : this.globalPageSize;
    }
    let data = {
      datapoint: 'loan_service',
      endpoint: 'LoanApplicationAcceptedProduct',
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
    this.fetchBorrowerList()
  }

  toggleUserLineStatus(value) {
    let data = {
      datapoint: 'toggle_risk_policy',
      // endpoint: 'LoanApplicationAcceptedProduct',
      source: 'LMS',
      toggle_type: 'LINE',
      toggle_value: value,
      accepted_loan_application: this.accepted_loan_application,
    }

    this.http.fetchLoanApplicationUpload(data).subscribe(res => {
      this.isblock = false
      this.isUnblock = false
      this.message.success(res['message'])
      this.fetchBorrowerList()
    }, (err) => {
    })
  }

}
