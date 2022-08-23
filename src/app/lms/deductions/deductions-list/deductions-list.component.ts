import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { differenceInCalendarDays } from 'date-fns';
import * as moment from 'moment';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-deductions-list',
  templateUrl: './deductions-list.component.html',
  styleUrls: ['./deductions-list.component.css']
})
export class DeductionsListComponent implements OnInit {

  selectedTab = 'PENDING'
  page = 1;
  globalPageSize = 30
  api_calling_loader: boolean;
  total_count: any;
  list_data: any;
  date = ''
  search_params = ''
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
  type = ''
  isVisible = false
  isApprove = false
  deduction_id: any;
  constructor(public http: HttpService, private message: NzMessageService,
    private router : Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.fetchDeductionList()
  }

  fetchDeductionList(tableFilter?) {
    this.page = tableFilter?.pageIndex ? tableFilter?.pageIndex : 1;
    this.globalPageSize = tableFilter?.pageSize ? tableFilter?.pageSize : 30;
    let data = {
      page: this.page,
      search_param: this.search_params ? this.search_params : '',
      limit: this.globalPageSize,
      start_date: this.date[0] ? moment(this.date[0]).format("YYYY-MM-DD") : '',
      end_date: this.date[1] ? moment(this.date[1]).format("YYYY-MM-DD") : '',
      status: this.selectedTab ? this.selectedTab : ''
    }
    this.api_calling_loader = true
    this.http.fetchDeductionList(data).subscribe(res => {
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
    this.search_params = ''
    this.fetchDeductionList();
  }
  deductionApproval() {
    this.http.deductionApproval(this.deduction_id).subscribe(res => {
      if (res['success']) {
        this.message.success(res['message'])
      } else {
        this.message.error(res['message'])
      }
    }, (err) => {
      this.api_calling_loader = false
    })
  }
  getDeductionDetails(data) {
    this.deduction_id = data.id
  }

}
