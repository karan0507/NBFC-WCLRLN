import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { differenceInCalendarDays } from 'date-fns';
import * as moment from 'moment';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-downloads',
  templateUrl: './downloads.component.html',
  styleUrls: ['./downloads.component.css']
})
export class DownloadsComponent implements OnInit {

  search_params = ''
  page = 1
  disabledDate = (current: Date): boolean =>
    // Can not select days before today and today
    differenceInCalendarDays(current, new Date()) > 0;
  api_calling_loader: boolean;
  total_count: any;
  listData: any = [];
  globalPageSize: number;
  date = ''
  
  constructor(public http: HttpService, private message: NzMessageService,
    private router: Router,
    private route: ActivatedRoute, private fb: FormBuilder,) { }

  ngOnInit(): void {
    this.fetchDownloads()
  }

  fetchDownloads(tabelFilter?) {
    // if (tabelFilter) {
    this.page = tabelFilter?.pageIndex ? tabelFilter?.pageIndex : 1;
    this.globalPageSize = tabelFilter?.pageSize ? tabelFilter?.pageSize : 30;
    // }
    let data = {
      page: this.page,
      name: this.search_params ? this.search_params : '',
      limit: this.globalPageSize,
      from_date: this.date[0] ? moment(this.date[0]).format("YYYY-MM-DD") : '',
      to_date: this.date[1] ? moment(this.date[1]).format("YYYY-MM-DD") : '',
    }
    this.listData = null
    this.total_count = null
    this.api_calling_loader = true
    this.http.fetchDownloads(data).subscribe(res => {
      this.api_calling_loader = false
      this.listData = res['data']
      this.total_count = res['data'].total_count
      // this.message.success(res['message'])
    }, (err) => {
      this.api_calling_loader = false
    })
  }

}
