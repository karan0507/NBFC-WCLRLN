import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { differenceInCalendarDays } from 'date-fns';
import * as moment from 'moment';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-nach-upload',
  templateUrl: './nach-upload.component.html',
  styleUrls: ['./nach-upload.component.css']
})
export class NachUploadComponent implements OnInit {


  selectedTab = 'pending'
  page = 1;
  total_count = 0;
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
  disabledDate = (current: Date): boolean =>
    // Can not select days before today and today
    differenceInCalendarDays(current, new Date()) > 0;
  globalPageSize = 30
  api_calling_loader: boolean;
  listOfData;
  date = ''
  isImport = false
  uploaded_file: any;
  previewBeforeUpload: any;
  isPreviewBeforeUpload: boolean;
  isLineError: any;
  isFail: boolean;
  preview_file_name: any;
  is_upload_loading: boolean;
  uploadSuccessfully: boolean;
  constructor(public http: HttpService, private message: NzMessageService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getManualTransactionList()
  }

  downloadSampleFile() {
    var link = document.createElement('a');
    link.href = 'assets/static files/SAMPLE_BULK_NACH_FILE.xlsx';
    link.download = 'Bulk Enach Upload Sample.xlsx';
    link.click();
  }

  getManualTransactionList(tabelFilter?) {
    if (tabelFilter) {
      this.page = tabelFilter?.pageIndex ? tabelFilter?.pageIndex : this.page;
      this.globalPageSize = tabelFilter?.pageSize ? tabelFilter?.pageSize : this.globalPageSize;
    }
    let data = {
      source: 'LMS',
      datapoint: 'fetch_bulk_enach',
      status: this.selectedTab,
      // endpoint:'',
      // date: this.date ? moment(this.date).format("YYYY-MM-DD") : '',
      // keyword: this.searchValue,
      page: this.page,
      start_date: this.date[0] ? moment(this.date[0]).format("YYYY-MM-DD") : '',
      end_date: this.date[1] ? moment(this.date[1]).format("YYYY-MM-DD") : '',
      limit: this.globalPageSize
    }
    this.api_calling_loader = true
    this.http.fetchLoanApplicationList(data).subscribe(res => {
      this.api_calling_loader = false
      if (res['data']) {
        this.listOfData = res['data'].results
        this.total_count = res['data'].total_count
      } else {
        this.listOfData = null
        this.total_count = 0
      }
      // this.message.success(res['message'])
    }, (err) => {
      this.api_calling_loader = false
    })
  }

  beforeUploadName = (file) => {
    console.log(file)
    this.uploaded_file = file
    this.fetchPreviewBeforeUpload(this.uploaded_file)
    return false;
  };

  fetchPreviewBeforeUpload(value) {
    let data = new FormData()
    data.append('source', 'LMS'),
      data.append('datapoint', 'check_bulk_enach'),
      data.append('file', value)
    var generateloader = this.message.loading('Uploading..', { nzDuration: 0 }).messageId;
    this.http.fetchLoanApplicationUpload(data).subscribe(res => {
      this.message.remove(generateloader);
      if (res['data'].file_content?.list[0]) {
        this.isImport = false
        this.preview_file_name = res['data'].file_name
        this.previewBeforeUpload = res['data'].file_content?.list
        this.isLineError = res['data'].file_content?.status
        this.isPreviewBeforeUpload = true;
      } else {
        this.message.error('File is empty')
      }

    }, (err) => {
      generateloader = this.message.loading('Error in file upload..', { nzDuration: 0 }).messageId;
      this.isImport = true
      this.message.remove(generateloader);
      this.isFail = true
    })
  }
  uploadTransaction() {
    let data = new FormData()
    data.append('source', 'LMS'),
      data.append('datapoint', 'bulk_enach_upload'),
      data.append('file', this.uploaded_file)
    if (this.isLineError) {
      this.is_upload_loading = true
      this.http.fetchLoanApplicationUpload(data).subscribe(res => {
        if (res.success) {
          this.is_upload_loading = false
          this.isImport = false
          this.isPreviewBeforeUpload = false;
          this.uploadSuccessfully = true
          setTimeout(() => {
            this.uploadSuccessfully = false
            this.getManualTransactionList()
          }, 2000);
        } else {
          this.isFail = true
          this.isPreviewBeforeUpload = false;
        }
      }, (err) => {
        this.isImport = true
        this.is_upload_loading = false
        this.isPreviewBeforeUpload = false;
      })
    } else {
      this.isFail = true
      this.isPreviewBeforeUpload = false;
    }
  }

  updateStatus(id,type){
    let data = {id:id,status_of_file:type}
    this.http.updateNachStatus(data).subscribe((res:any)=>{
      if(res.success){
        this.message.success(res.message);
        this.getManualTransactionList();
      }
    })
  }

}
