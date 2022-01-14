import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  search_params = ''
  page = 1
  api_calling_loader: boolean;
  total_count: any;
  employeeList: any;

  constructor(public http: HttpService, private message: NzMessageService,
    private router : Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.fetchEmployeeList()
  }
  
  fetchEmployeeList() {
    let data = {
      page: this.page,
      // product_master: this.product_master,
      name: this.search_params
      // id: this.product_id
    }
    this.api_calling_loader = true
    this.http.fetchEmployeeList(data).subscribe(res => {
      this.api_calling_loader = false
      this.employeeList = res['data'].results
      this.total_count = res['data'].total_count
      // this.message.success(res['message'])
    }, (err) => {
      this.api_calling_loader = false
    })
  }

  
  resetFilters() {
    this.search_params = ''
    this.fetchEmployeeList();
  }
}
