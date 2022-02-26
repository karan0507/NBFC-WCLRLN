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
  isTerminate = false
  page : any
  api_calling_loader: boolean;
  total_count = 0;
  search_param = '';
  globalPageSize: number;
  master_product_id = '';
  is_blocked = '';
  search_params = '';
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

}
