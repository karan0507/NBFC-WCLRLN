import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { differenceInCalendarDays } from 'date-fns';
import * as moment from 'moment';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-gst-invoices',
  templateUrl: './gst-invoices.component.html',
  styleUrls: ['./gst-invoices.component.css']
})
export class GstInvoicesComponent implements OnInit {

  page = 1;
  globalPageSize = 100
  api_calling_loader: boolean;
  total_count: any;
  list_data: any;
  pdf_viewer_object_values = {
    'boolean': false,
    'url': null,
    'title': ''
  }
  selectedCorporate: any;
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
  debounce: any;
  corporateList: any[];
  search_params = '';
  constructor(public http: HttpService, private message: NzMessageService,
    private router : Router,
    private route: ActivatedRoute,
    private sanitized: DomSanitizer) { }

  ngOnInit(): void {
    this.fetchGSTInvoiceList()
  }

  fetchGSTInvoiceList(tableFilter?) {
    this.page = tableFilter?.pageIndex ? tableFilter?.pageIndex : 1;
    this.globalPageSize = tableFilter?.pageSize ? tableFilter?.pageSize : 100;
    let data = {
      page: this.page,
      search_param: this.search_params,
      limit: this.globalPageSize,
      start_date: this.date[0] ? moment(this.date[0]).format("YYYY-MM-DD") : '',
      end_date: this.date[1] ? moment(this.date[1]).format("YYYY-MM-DD") : '',
      corporate_id: this.selectedCorporate ? this.selectedCorporate : '',
      // id: this.product_id
    }
    this.list_data = null
    this.total_count = null
    this.api_calling_loader = true
    this.http.fetchGSTInvoiceList(data).subscribe(res => {
      this.api_calling_loader = false
      this.list_data = res['data']
      this.total_count = res['total_count']
      // this.message.success(res['message'])
    }, (err) => {
      this.api_calling_loader = false
    })
  }

  
  handleCancel() {
    this.pdf_viewer_object_values['boolean'] = false
    this.pdf_viewer_object_values['url'] = null
  }
  sanitizeUrlToSafe(value) {
    this.pdf_viewer_object_values['url'] = this.sanitized.bypassSecurityTrustResourceUrl(value);
  }
  viewDownloadPdf(file, name) {
    this.pdf_viewer_object_values['boolean'] = true
    this.pdf_viewer_object_values['title'] = name
    this.sanitizeUrlToSafe(file)
  }

  
  resetFilters() {
    this.date = ''
    this.selectedCorporate = ''
    this.search_params = ''
    this.fetchGSTInvoiceList();
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
  exportGlobalFunction(file_formate){
    let data = {
      start_date: this.date[0] ? moment(this.date[0]).format("YYYY-MM-DD") : '',
      end_date: this.date[1] ? moment(this.date[1]).format("YYYY-MM-DD") : '',
      corporate_id: this.selectedCorporate ? this.selectedCorporate : '',
    }
    const generateloader = this.message.loading('Generating File..', { nzDuration: 0 }).messageId;
    this.http.exportGSTList(data).subscribe(res => {
      this.http.exportMasterSectionModule(res, 'gst_invoice_list', file_formate, generateloader)
    })
  }

}
