import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-billed-unbilled',
  templateUrl: './billed-unbilled.component.html',
  styleUrls: ['./billed-unbilled.component.css']
})
export class BilledUnbilledComponent implements OnInit {

  selectedTab = 'billed'
  page = 1;
  globalPageSize: number;
  searchValue = '';
  selectedCorporate: any;
  api_calling_loader: boolean;
  listOfData: any;
  total_count: any;
  corporateList: any[];
  debounce: any;
  latest_bill: any;
  latest_bill_show: boolean;
  month = ''
  month_list = [
    { name: 'January', value: 1 },
    { name: 'February', value: 2 },
    { name: 'March', value: 3 },
    { name: 'April', value: 4 },
    { name: 'May', value: 5 },
    { name: 'June', value: 6 },
    { name: 'July', value: 7 },
    { name: 'August', value: 8 },
    { name: 'September', value: 9 },
    { name: 'October', value: 10 },
    { name: 'November', value: 11 },
    { name: 'December', value: 12 }
  ]

  constructor(public http: HttpService, private message: NzMessageService,
    private router: Router,
    private route: ActivatedRoute,
    private sanitized: DomSanitizer,) { }

  ngOnInit(): void {
    this.fetchBilledData()
  }

  fetchBilledData(tableFilter?) {
    var data;
    this.page = tableFilter?.pageIndex ? tableFilter?.pageIndex : 1;
    this.globalPageSize = tableFilter?.pageSize ? tableFilter?.pageSize : 30;
    data = {
      datapoint: 'admin_bill_section',
      endpoint: this.selectedTab,
      source: 'LMS',
      page: this.page,
      limit: this.globalPageSize,
      month_year_filter: this.month ? moment(this.month).format("MM/YYYY") : '',
      // txn_status: this.selectedStatus ? this.selectedStatus : '',
      // txn_type: this.selectedType ? this.selectedType : '',
      // start_date: this.date[0] ? moment(this.date[0]).format("YYYY-MM-DD") : '',
      // end_date: this.date[1] ? moment(this.date[1]).format("YYYY-MM-DD") : '',
      keyword: this.searchValue,
      corporate: this.selectedCorporate ? this.selectedCorporate : '',
      // section: this.selectedTab
    }
    this.api_calling_loader = true
    this.http.fetchLoanApplicationList(data).subscribe(res => {
      this.api_calling_loader = false
      this.listOfData = res['data'].results
      this.total_count = res['data'].total_count
      // this.message.success(res['message'])
    }, (err) => {
      this.api_calling_loader = false
    })
  }
  
  resetFilter() {
    this.searchValue = ''
    // this.selectedType = ''
    // this.selectedStatus = ''
    this.month = ''
    this.selectedCorporate = ''
    this.fetchBilledData();
  }

  OnTypeSearchList(event){
    clearTimeout(this.debounce);
    this.debounce = setTimeout(() => {
      this.fetchPartnerList(event);
    }, 500);
  }
  
  fetchPartnerList(e?) {
    let data = {};
    if(e){
      data['name'] = e;
    }
    this.http.fetchPartner(data).subscribe((res: any) => {
      if (res?.success) {
        this.corporateList = [];
        res?.data?.results.map((res: any)=>{
          if(res?.name){
            this.corporateList.push(res)    
          }
        })
        // this.corporateList = res?.data?.results;
        console.log(this.corporateList);
      }
    });
    // }
  }

  fetchLatestBilledData(bill_id) {
    var data;
    data = {
      datapoint: 'get_latest_bill',
      endpoint: bill_id,
      source: 'LMS',
    }
    const generateloader = this.message.loading('Generating File..', { nzDuration: 0 }).messageId;
    this.http.fetchLoanApplicationList(data).subscribe(res => {
      this.message.remove(generateloader);
      this.latest_bill = this.sanitized.bypassSecurityTrustResourceUrl(res['data'].url)
      this.latest_bill_show = true
    }, (err) => {
      this.message.remove(generateloader);
    })
  }
}
