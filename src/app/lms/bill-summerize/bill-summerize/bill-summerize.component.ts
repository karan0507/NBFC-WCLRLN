import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { differenceInCalendarDays } from 'date-fns';
import * as moment from 'moment';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-bill-summerize',
  templateUrl: './bill-summerize.component.html',
  styleUrls: ['./bill-summerize.component.css']
})
export class BillSummerizeComponent implements OnInit {


  expandSet = new Set<number>();
  _currentId: any;
  page = 1;
  globalPageSize = 100
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
  selectedTab = 'bill'
  isVisible = false
  corporate_Id: any;
  time_period_arr = [
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
  start_month: any;
  corporateList: any[];
  day: any;
  selectedCorporate = ''
  result_type: any;
  
  constructor(public http: HttpService, private message: NzMessageService,
    private router : Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.fetchBillDateSummarization()
  }

  fetchBillDateSummarization(tableFilter?) {
    this.page = tableFilter?.pageIndex ? tableFilter?.pageIndex : 1;
    this.globalPageSize = tableFilter?.pageSize ? tableFilter?.pageSize : 100;
    let data = {
      datapoint: 'admin_bill_summarization_section',
      source: 'LMS',
      endpoint: this.selectedTab,
      page: this.page,
      result_type: this.result_type ? this.result_type : '',
      limit: this.globalPageSize,
      // start_date: this.date[0] ? moment(this.date[0]).format("YYYY-MM-DD") : '',
      // end_date: this.date[1] ? moment(this.date[1]).format("YYYY-MM-DD") : '',
    }
    this.api_calling_loader = true
    this.http.fetchLoanApplicationList(data).subscribe(res => {
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
    this.result_type = ''
    this.expandSet.clear()
    this.fetchBillDateSummarization();
  }


  exportOutstandingGlobalFunction(file_formate){
    let data = {
      datapoint: 'export_outstanding_data',
      endpoint: this.corporate_Id,
      source: 'LMS',
      month: this.start_month,
      day: this.day,
      bill_date_type: 'bill_date'
    }
    const generateloader = this.message.loading('Generating File..', { nzDuration: 0 }).messageId;
    this.http.fetchLoanApplicationListExportGet(data).subscribe(res => {
      // if (!res?.success) {
      //   this.message.remove(generateloader);
      //   this.message.warning('Data not found')
      // } else {
        this.http.exportMasterSectionModule(res, 'outstanding_list', file_formate, generateloader)
        this.start_month = ''
      // }
      this.isVisible = false
    })
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

  onExpandChange(id: number, checked: boolean, index?): void {

    if (checked) {
      this.expandSet.add(id);
      this.fetchBillDateSummarizationDetails(this._currentId = id, index);
    } else {
      this.expandSet.delete(id);
    }
  }
  fetchBillDateSummarizationDetails(id, index) {
    let data = {
      datapoint: 'admin_corporate_bill_summarization_section',
      source: 'LMS',
      endpoint: 'bill',
      corporate: id,
    }
    // this.api_calling_loader = true
    this.http.fetchLoanApplicationList(data).subscribe(res => {
      this.api_calling_loader = false
      this.list_data[index] = res.data.results[0]
      // this.message.success(res['message'])
    }, (err) => {
      this.api_calling_loader = false
    })
  }
}