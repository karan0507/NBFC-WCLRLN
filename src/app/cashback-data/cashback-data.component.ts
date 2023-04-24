import { Component, OnInit } from '@angular/core';
import { differenceInCalendarDays } from 'date-fns';
import * as moment from 'moment';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from '../services/http.service';
import { GlobalservicesService } from '../shared/globalservices.service';

@Component({
  selector: 'app-cashback-data',
  templateUrl: './cashback-data.component.html',
  styleUrls: ['./cashback-data.component.css']
})
export class CashbackDataComponent implements OnInit {

  api_calling_loader = {
    'listLoader': false
  }
  listData: any[];
  page = 1
  globalPageSize = 100
  total_count: any;
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

  constructor(public https: HttpService, public global: GlobalservicesService, private message: NzMessageService) { }

  ngOnInit(): void {
    this.getCashbackList()
  }
  getCashbackList(tableFilter?) {
    this.listData = []
    this.api_calling_loader['listLoader'] = true;
    let param = new FormData()
    if (tableFilter) {
      this.page = tableFilter?.pageIndex
      this.globalPageSize = tableFilter?.pageSize
      param['page'] = tableFilter?.pageIndex
      param['limit'] = tableFilter?.pageSize
    } else {
      param['page'] = this.page
      param['limit'] = this.globalPageSize
    }

    param['start_date'] = this.date[0] ? moment(this.date[0]).format("YYYY-MM-DD") : ''
    param['end_date'] = this.date[1] ? moment(this.date[1]).format("YYYY-MM-DD") : ''
    this.https.getCashbackList(param).subscribe((res: any) => {
      if (res?.success) {
        this.total_count = res.total;
        this.listData = res?.data
        this.api_calling_loader['listLoader'] = false;
      } else {
        this.api_calling_loader['listLoader'] = false;
      }
    }, err => {
      this.api_calling_loader['listLoader'] = false;
    })
  }
  exportCashback(id) {
    const generateloader = this.message.loading('Generating File..', { nzDuration: 0 }).messageId;
    this.https.exportCashback(id).subscribe(res => {
      this.https.exportMasterSectionModule(res, 'cashback program list', 'xlsx', generateloader)
    })
  }
  exportReferral(id) {
    const generateloader = this.message.loading('Generating File..', { nzDuration: 0 }).messageId;
    this.https.exportReferral(id).subscribe(res => {
      this.https.exportMasterSectionModule(res, 'referral program list', 'xlsx', generateloader)
    })
  }
}
