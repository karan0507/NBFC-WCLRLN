import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-escrow-statement',
  templateUrl: './escrow-statement.component.html',
  styleUrls: ['./escrow-statement.component.css']
})
export class EscrowStatementComponent implements OnInit {

  
  page = 1;
  globalPageSize = 30
  api_calling_loader: boolean;
  total_count: any;
  list_data: any;
  constructor(public http: HttpService, private message: NzMessageService,
    private router : Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.fetchEscrowStatementList()
  }

  fetchEscrowStatementList(tableFilter?) {
    this.page = tableFilter?.pageIndex ? tableFilter?.pageIndex : 1;
    this.globalPageSize = tableFilter?.pageSize ? tableFilter?.pageSize : 30;
    let data = {
      page: this.page,
      // name: this.search_params,
      limit: this.globalPageSize,
      // start_date: this.date[0] ? moment(this.date[0]).format("YYYY-MM-DD") : '',
      // end_date: this.date[1] ? moment(this.date[1]).format("YYYY-MM-DD") : '',
      // id: this.product_id
    }
    this.list_data = null
    this.total_count = null
    this.api_calling_loader = true
    this.http.fetchEscrowStatementList(data).subscribe(res => {
      this.api_calling_loader = false
      this.list_data = res['data']
      this.total_count = res['total_count']
      // this.message.success(res['message'])
    }, (err) => {
      this.api_calling_loader = false
    })
  }

}
