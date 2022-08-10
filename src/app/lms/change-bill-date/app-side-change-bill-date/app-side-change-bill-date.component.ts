import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-app-side-change-bill-date',
  templateUrl: './app-side-change-bill-date.component.html',
  styleUrls: ['./app-side-change-bill-date.component.css']
})
export class AppSideChangeBillDateComponent implements OnInit {

  selectedTab = 'pending'
  page = 1;
  total_count;
  globalPageSize = 30
  api_calling_loader: boolean;
  listOfData: any;
  customRanges = {
    Today: [new Date(), new Date()],
    'Last 7 days': [new Date().setDate(new Date().getDate() - 7), new Date()],
    'This Month': [new Date(new Date().getFullYear(), new Date().getMonth(), 1), new Date()],
    'Last Month': [new Date(new Date().getFullYear(), new Date().getMonth(), 1).setMonth(new Date().getMonth() - 1), new Date(new Date().getFullYear(), new Date().getMonth(), -1,30,31)],
    'Last 3 Months': [new Date(new Date().getFullYear(), new Date().getMonth(), 1).setMonth(new Date().getMonth() - 3), new Date(new Date().getFullYear(), new Date().getMonth(), -1,30,31)],
    'Last 6 Months': [new Date(new Date().getFullYear(), new Date().getMonth(), 1).setMonth(new Date().getMonth() - 6), new Date(new Date().getFullYear(), new Date().getMonth(), -1,30,31)],
    'This Year': [new Date(new Date().getFullYear(), 0, 1), new Date()],
    // 'Last Year': [new Date(new Date().getFullYear(), new Date().getMonth(), 1).setMonth(new Date().getMonth() - 12), new Date(new Date().getFullYear(), new Date().getMonth(), 1)],
    'Last Year': [new Date(new Date().getFullYear() - 1, 0, 1), new Date(new Date().getFullYear() - 1, 11, 31)],
    // d.setMonth(d.getMonth() - 3);
};
  isReject: boolean;
  reject_id: any;
  rejactRemarks;
  is_approve_loading: boolean;
  isRejectSuccess: boolean;
  isApprove: boolean;
  isApprovedSuccess: boolean;
  approve_id: any;
  constructor(public http: HttpService, private message: NzMessageService,
    private router : Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getManualTransactionList();
  }

  getManualTransactionList(tabelFilter?) {
    if (tabelFilter) {
      this.page = tabelFilter?.pageIndex ? tabelFilter?.pageIndex : this.page;
      this.globalPageSize = tabelFilter?.pageSize ? tabelFilter?.pageSize : this.globalPageSize;
    }
    let data = {
      source: 'Onboarding',
      datapoint: 'list_change_bill_day_app_request',
      status: this.selectedTab,
      // date: this.date ? moment(this.date).format("YYYY-MM-DD") : '',
      // keyword: this.searchValue,
      page: this.page,
      // start_date: this.date[0] ? moment(this.date[0]).format("YYYY-MM-DD") : '',
      // end_date: this.date[1] ? moment(this.date[1]).format("YYYY-MM-DD") : '',
      limit: this.globalPageSize
    }
    this.api_calling_loader = true
    this.http.fetchLoanApplicationList(data).subscribe(res => {
      this.api_calling_loader = false
      if (res['data']) {
        this.listOfData = res['data']
        this.total_count = res['total_count']
      } else {
        this.listOfData = null
        this.total_count = 0
      }
      // this.message.success(res['message'])
    }, (err) => {
      this.api_calling_loader = false
    })
  }
  clickOnReject(id) {
    this.isReject = true; 
    this.reject_id = id
  }

  rejectTransaction() {
    let data = new FormData()
    data.append('source', 'LMS')
    data.append('datapoint', 'approve_reject_change_bill_day_app_request')
    data.append('status', 'REJECTED')
    data.append('remarks', this.rejactRemarks)
    data.append('id', this.reject_id)
    this.is_approve_loading = true
    this.http.postLoanApplicationApi(data).subscribe(res => {
      if (res.success) {
        this.isReject = false;
        this.isRejectSuccess = true;
        setTimeout(() => {
          this.isRejectSuccess = false
          this.getManualTransactionList()
        }, 2000);
      }
      this.is_approve_loading = false
    }, (err) => {
      this.is_approve_loading = false
    })
  }
  approveTransaction() {
    let data = new FormData()
    data.append('source', 'LMS')
    data.append('datapoint', 'approve_reject_change_bill_day_app_request')
    data.append('status', 'APPROVED')
    data.append('id', this.approve_id)
    this.is_approve_loading = true
    this.http.postLoanApplicationApi(data).subscribe(res => {
      if (res.success) {
        this.isApprove = false;
        this.isApprovedSuccess = true
        this.is_approve_loading = false
        setTimeout(() => {
          this.isApprovedSuccess = false
          this.getManualTransactionList()
        }, 2000);
      } else {
        this.message.warning(res.message[0])
        this.is_approve_loading = false
      }
    }, (err) => {
      this.is_approve_loading = false
    })
  }
  
  fetchPreviewAfterList(value) {
    this.approve_id = value.id
    this.isApprove = true;
  }
}
