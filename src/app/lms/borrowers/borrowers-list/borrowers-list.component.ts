import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-borrowers-list',
  templateUrl: './borrowers-list.component.html',
  styleUrls: ['./borrowers-list.component.css']
})
export class BorrowersListComponent implements OnInit {
  borrowertList = []

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
    // this.fetchBorrowerList()
  }

  fetchBorrowerList() {
    let data = {
      page: this.page,
      name: this.search_params
      // id: this.product_id
    }
    this.api_calling_loader = true
    this.http.fetchBorrowerList(data).subscribe(res => {
      this.api_calling_loader = false
      this.borrowertList = res['data']
      this.total_count = res['data'].total_count
      // this.message.success(res['message'])
    }, (err) => {
      this.api_calling_loader = false
    })
  }

}
