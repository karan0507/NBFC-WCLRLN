import { Component, OnInit } from '@angular/core';
import { differenceInCalendarDays } from 'date-fns';
import * as moment from 'moment';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  constructor(private http: HttpService,public message: NzMessageService) { }

  reportList = [
    {id: 1 ,name: 'Export Total Outstanding Report', url: 'total-outstanding-report'},
    {id: 2 ,name: 'Fees Charges Report',url: 'export-fees-charges-report'},
    {id: 3 ,name: 'Transaction Dump',url: 'export-transaction-dump'},
    {id: 4 ,name: 'Total Outstanding Report Corporate Wise', url: 'total-outstanding-report-corporate-wise'},
  ];
  selectedRole: any;
  date = '';
  today = new Date();
  partner: any;
  debounce: any;
  disabledDate = (current: Date): boolean => {
    // Can not select days before today and today
    return differenceInCalendarDays(current, this.today) > 0;
    };

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
  apiLoader = {
    'onOk' : false
  };

  partnerList: any;
  ngOnInit(): void {
    this.fetchPartnerList();
  }

  onChange(e){
    console.log(e);
  }

  fetchPartnerList(e?){
    let data;
    if(e){
      data['name'] = e;
    }
    this.http.fetchPartner(data).subscribe((res: any) => {
      this.partnerList = res?.data?.results
    })
  }

  onClickCheckDate(){
    console.log(this.date);
  }

  onClickUpdateCorporate(){
    console.log('testing');
  }

  OnTypeSearchList(event){
    clearTimeout(this.debounce);
    this.debounce = setTimeout(() => {
      this.fetchPartnerList(event);
    }, 500);
  }



  downloadReportOnClick(){
    console.log(this.date);

    var data = {
      'start_date' : this.date[0] ? moment(this.date[0]).format("YYYY-MM-DD") : '',
      'end_date' : this.date[1] ? moment(this.date[1]).format("YYYY-MM-DD") : '',
    };

    if(this.selectedRole == 'total-outstanding-report-corporate-wise'){
      data['company'] = this.partner;
    }
    if(this.selectedRole == 'total-outstanding-report-corporate-wise' && !this.partner){
      this.message.error('Partner Selection Mandatory !');
      return;
    }
    this.apiLoader['onOk'] = true;
    const generateloader = this.message.loading('Generating File..', { nzDuration: 0 }).messageId;
    this.http.downloadReport(data, this.selectedRole).subscribe((res)=>{
      this.apiLoader['onOk'] = false;
      this.http.exportMasterSectionModule(res, this.selectedRole + 'export', 'xlsx', generateloader)
      console.log(res);
    }, error=>{
      this.apiLoader['onOk'] = false;
    })
  }
}
