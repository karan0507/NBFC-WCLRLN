import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { differenceInCalendarDays } from 'date-fns';
import * as moment from 'moment';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-refunds',
  templateUrl: './refunds.component.html',
  styleUrls: ['./refunds.component.css']
})
export class RefundsComponent implements OnInit {

  page = 1;
  globalPageSize = 100
  api_calling_loader: boolean;
  total_count: any;
  list_data: any;
  date = ''
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
  refund_status = '';
  constructor(public http: HttpService, private message: NzMessageService,
    private router : Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.fetchRefundsList()
  }

  fetchRefundsList(tableFilter?) {
    this.page = tableFilter?.pageIndex ? tableFilter?.pageIndex : 1;
    this.globalPageSize = tableFilter?.pageSize ? tableFilter?.pageSize : 100;
    let data = {
      page: this.page,
      // name: this.search_params,
      limit: this.globalPageSize,
      start_date: this.date[0] ? moment(this.date[0]).format("YYYY-MM-DD") : '',
      end_date: this.date[1] ? moment(this.date[1]).format("YYYY-MM-DD") : '',
      refund_status: this.refund_status
    }
    this.list_data = null
    this.total_count = null
    this.api_calling_loader = true
    this.http.fetchRefundsList(data).subscribe(res => {
      this.api_calling_loader = false
      this.list_data = res['data'].results
      this.total_count = res['data']['total_count']
      // this.message.success(res['message'])
    }, (err) => {
      this.api_calling_loader = false
    })
  }

  
  resetFilters() {
    this.date = ''
    this.refund_status = ''
    this.fetchRefundsList();
  }

}
