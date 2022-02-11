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
  search_params = '';
  globalPageSize: number;
  constructor(public http: HttpService, private message: NzMessageService,
    private router : Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.page = 1;
    this.globalPageSize = 30
    this.fetchBorrowerList()
  }

  fetchBorrowerList() {
    let data = {
      datapoint: 'loan_service',
      endpoint: 'LoanApplicationAcceptedProduct',
      source: 'LMS',
      // txn_status: this.selectedStatus,
      // txn_type: this.selectedType,
      // start_date: this.date[0] ? moment(this.date[0]).format("YYYY-MM-DD") : '',
      // end_date: this.date[1] ? moment(this.date[1]).format("YYYY-MM-DD") : '',
      // search_param: this.searchValue,
      // tab_filter: this.selectedTab
    }
    this.api_calling_loader = true
    this.http.fetchLoanApplicationList(data).subscribe(res => {
      this.api_calling_loader = false
      this.borrowertList = res['data']
      this.total_count = res['data'].total_count
      // this.message.success(res['message'])
    }, (err) => {
      this.api_calling_loader = false
    })
  }

}
