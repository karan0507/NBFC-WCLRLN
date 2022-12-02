import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { differenceInCalendarDays } from 'date-fns';
import * as moment from 'moment';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-third-party-api-call',
  templateUrl: './third-party-api-call.component.html',
  styleUrls: ['./third-party-api-call.component.css']
})
export class ThirdPartyApiCallComponent implements OnInit {
  api_calling_loader: boolean;
  ApiStatsData: any;
  date = ''
  disabledDate = (current: Date): boolean =>
    // Can not select days before today and today
    differenceInCalendarDays(current, new Date()) > 0;
  
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

  constructor(public http: HttpService, private message: NzMessageService,
    private router : Router,
    private route: ActivatedRoute,private fb: FormBuilder,) { }

  ngOnInit(): void {
    this.getApiBucketStats()
  }

  getApiBucketStats() {
    let data = {
      start_date: this.date[0] ? moment(this.date[0]).format("YYYY-MM-DD") : '',
      end_date: this.date[1] ? moment(this.date[1]).format("YYYY-MM-DD") : '',
    }
    this.api_calling_loader = true
    this.http.getApiBucketStats(data).subscribe(res => {
      this.api_calling_loader = false
      this.ApiStatsData = res['data']
      // this.message.success(res['message'])
    }, (err) => {
      this.api_calling_loader = false
    })
  }
  exportGlobalFunction(file_type, api_name) {
    let data = {
      start_date: this.date[0] ? moment(this.date[0]).format("YYYY-MM-DD") : '',
      end_date: this.date[1] ? moment(this.date[1]).format("YYYY-MM-DD") : '',
      api_name: api_name ? api_name : '',
      file_type: file_type
    }
    const generateloader = this.message.loading('Generating File..', { nzDuration: 0 }).messageId;
    this.http.exportApiStats(data).subscribe(res => {
      this.http.exportMasterSectionModule(res, 'export' + api_name + moment(this.date[0]).format("YYYY-MM-DD") + 'to' + moment(this.date[1]).format("YYYY-MM-DD"), file_type, generateloader)
    })
  }
}
