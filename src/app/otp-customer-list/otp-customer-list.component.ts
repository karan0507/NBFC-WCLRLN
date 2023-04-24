import { Component, OnInit } from '@angular/core';
import { differenceInCalendarDays } from 'date-fns';
import * as moment from 'moment';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-otp-customer-list',
  templateUrl: './otp-customer-list.component.html',
  styleUrls: ['./otp-customer-list.component.css']
})
export class OtpCustomerListComponent implements OnInit {
  otpFailuerResponse: any;
  apiLoader: boolean;
  page: any = 1;
  globalPageSize: any = 100;
  total_count: any;
  searchValue: string;
  date = '';
  disabledDate = (current: Date): boolean => {
    // Can not select days before today and today
    return differenceInCalendarDays(current, this.today) > 0;
  };
  today = new Date();

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

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.fetListOfFailOTP();
  }

  resetFilters(){
    this.page =1;
    this.globalPageSize = 100;
    this.searchValue = '';
    this.date = '';
    this.fetListOfFailOTP();
  }

  fetListOfFailOTP(tableFilter?){
    let data = [];
    this.page = tableFilter?.pageIndex ? tableFilter?.pageIndex : 1;
    this.globalPageSize = tableFilter?.pageSize ? tableFilter?.pageSize : 100;
    data['page'] = tableFilter?.pageIndex ? tableFilter?.pageIndex : 1
    data['limit'] = tableFilter?.pageSize ? tableFilter?.pageSize : this.globalPageSize
    data['start_date'] = this.date[0] ? moment(this.date[0]).format("YYYY-MM-DD") : '';
    data['end_date'] = this.date[1] ? moment(this.date[1]).format("YYYY-MM-DD") : '';
    if (this.searchValue) {
      data["search_param"] = this.searchValue;
    }
    this.apiLoader = true;
    this.http.getListOfOTPSent(data).subscribe((res: any)=>{
      this.otpFailuerResponse = res?.data?.results;
      this.total_count = res?.data?.total_count
      this.apiLoader = false;
    }, error=>{
      this.apiLoader = false;
    });
  }

}
