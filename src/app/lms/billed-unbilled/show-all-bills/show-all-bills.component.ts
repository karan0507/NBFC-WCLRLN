import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-show-all-bills',
  templateUrl: './show-all-bills.component.html',
  styleUrls: ['./show-all-bills.component.css']
})
export class ShowAllBillsComponent implements OnInit {
  bill_id: any;
  api_calling_loader: boolean;
  latest_bill: any;
  previous_bill: any;
  api_calling_loader1: boolean;
  pdf_viewer_object_values = {
    'boolean': false,
    'url': null,
    'title': ''
  }
  monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

  constructor(private fb: FormBuilder, public http: HttpService, private message: NzMessageService,
    private router: Router,
    private route: ActivatedRoute,
    private sanitized: DomSanitizer,) {
    this.route.queryParams.subscribe(params => {
      if (params['id']) {
        this.bill_id = params['id']
      }
    });
  }

  ngOnInit(): void {
    this.fetchPreviousBilledData();
  }


  fetchPreviousBilledData(tableFilter?) {
    var data;
    // this.page = tableFilter?.pageIndex ? tableFilter?.pageIndex : 1;
    // this.globalPageSize = tableFilter?.pageSize ? tableFilter?.pageSize : 30;
    data = {
      datapoint: 'get_previous_bills',
      endpoint: this.bill_id,
      source: 'LMS',
      // page: this.page,
      // limit: this.globalPageSize,
      // product_type: this.master_product_id ? this.master_product_id : '',
      // txn_status: this.selectedStatus ? this.selectedStatus : '',
      // txn_type: this.selectedType ? this.selectedType : '',
      // start_date: this.date[0] ? moment(this.date[0]).format("YYYY-MM-DD") : '',
      // end_date: this.date[1] ? moment(this.date[1]).format("YYYY-MM-DD") : '',
      // keyword: this.searchValue,
      // corporate: this.selectedCorporate ? this.selectedCorporate : '',
      // section: this.selectedTab
    }
    this.api_calling_loader = true
    this.http.fetchLoanApplicationList(data).subscribe(res => {
      this.api_calling_loader = false
      this.previous_bill = res['data']
      // this.total_count = res['data'].total_count
      // this.message.success(res['message'])
    }, (err) => {
      this.api_calling_loader = false
    })
  }
  
  handleCancel() {
    this.pdf_viewer_object_values['boolean'] = false
    this.pdf_viewer_object_values['url'] = null
  }
  pdfViewerAndDownload(url, date) {
    this.sanatizeUrlToSafe(url)
    this.pdf_viewer_object_values['boolean'] = true
    this.pdf_viewer_object_values['title'] = this.monthNames[new Date(date).getMonth()] + ' Bill Statement'
  }
  
  sanatizeUrlToSafe(value) {
    this.pdf_viewer_object_values['url'] = this.sanitized.bypassSecurityTrustResourceUrl(value);
  }

}
