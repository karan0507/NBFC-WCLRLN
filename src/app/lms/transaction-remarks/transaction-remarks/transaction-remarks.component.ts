import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { differenceInCalendarDays } from 'date-fns';
import * as moment from 'moment';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-transaction-remarks',
  templateUrl: './transaction-remarks.component.html',
  styleUrls: ['./transaction-remarks.component.css']
})
export class TransactionRemarksComponent implements OnInit {

  isImport = false
  uploaded_file: any;

  page = 1;
  previewBeforeUpload: any;
  isLineError: any;
  isPreviewBeforeUpload: boolean;
  isFail: boolean;
  preview_file_name: any;
  searchValue = ''
  total_count;
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
  globalPageSize = 100
  api_calling_loader: boolean;
  listOfData;
  selectedTab = 'pending'
  date = ''
  is_upload_loading: boolean = false;
  uploadSuccessfully: boolean;
  is_approve_loading: boolean = false;
  approve_id: any;
  isPreview: boolean;
  isApprove: boolean;
  previewData: any;
  isApprovedSuccess: boolean;
  isReject: boolean;
  reject_id: any;
  rejactRemarks: string | Blob;
  isRejectSuccess: boolean;
  preview_page = 1;
  preview_globalPageSize = 100;
  preview_value: any;
  preview_total_count: any;

  constructor(public http: HttpService, private message: NzMessageService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getManualTransactionList()
  }

  downloadSampleFile() {
    var link = document.createElement('a');
    link.href = 'assets/static files/TRANSACTION_REMARKS_SAMPLE.xlsx';
    link.download = 'TRANSACTION_REMARKS_SAMPLE.xlsx';
    link.click();
  }
  getManualTransactionList(tabelFilter?) {
    if (tabelFilter) {
      this.page = tabelFilter?.pageIndex ? tabelFilter?.pageIndex : this.page;
      this.globalPageSize = tabelFilter?.pageSize ? tabelFilter?.pageSize : this.globalPageSize;
    }
    let data = {
      source: 'LMS',
      datapoint: 'bulk_transaction_remarks_file_list',
      status: this.selectedTab.toUpperCase(),
      // date: this.date ? moment(this.date).format("YYYY-MM-DD") : '',
      keyword: this.searchValue,
      page: this.page,
      start_date: this.date[0] ? moment(this.date[0]).format("YYYY-MM-DD") : '',
      end_date: this.date[1] ? moment(this.date[1]).format("YYYY-MM-DD") : '',
      limit: this.globalPageSize
    }
    this.api_calling_loader = true
    this.http.fetchLoanApplicationList(data).subscribe(res => {
      this.api_calling_loader = false
      if (res['data']) {
        this.listOfData = res['data'].result
        this.total_count = res['data'].count
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
      data.append('datapoint', 'bulk_transaction_remarks_file_validate_pre_save'),
      data.append('file', value)
    var generateloader = this.message.loading('Uploading..', { nzDuration: 0 }).messageId;
    this.http.fetchLoanApplicationUpload(data).subscribe(res => {
      this.message.remove(generateloader);
      this.preview_file_name = res['data'].file_name
      if (res['data'].file_content.list[0]) {
        this.isImport = false
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
      data.append('datapoint', 'bulk_transaction_remarks_file_upload'),
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
      })
    } else {
      this.isFail = true
      this.isPreviewBeforeUpload = false;
    }
  }

  fetchPreviewAfterList(value, isPreview, tabelFilter?) {
    if (tabelFilter) {
      this.preview_page = tabelFilter?.pageIndex ? tabelFilter?.pageIndex : this.preview_page;
      this.preview_globalPageSize = tabelFilter?.pageSize ? tabelFilter?.pageSize : this.preview_globalPageSize;
    } else {
      this.preview_page = 1
      this.preview_globalPageSize = 100
    }
    let data = {
      source: 'LMS',
      datapoint: 'bulk_transaction_remarks_file_view_content',
      endpoint: value?.id,
      page: this.preview_page,
      limit: this.preview_globalPageSize
    }
    this.preview_value = value
    this.preview_file_name = value.file_name
    this.approve_id = value.id
    this.is_approve_loading = false
    const generateloader = this.message.loading('Generating Preview..', { nzDuration: 0 }).messageId;
    this.http.fetchLoanApplicationList(data).subscribe(res => {
      if (res.success) {
        if (isPreview) {
          this.isPreview = true;
        } else {
          this.isApprove = true;
        }
        this.message.remove(generateloader);
        this.previewData = res['data'].result
        this.preview_total_count = res['data'].count
      }

      this.message.remove(generateloader);
      // this.message.success(res['message'])
    }, (err) => {
      this.message.remove(generateloader);
    })
  }
  approveTransaction() {
    let data = new FormData()
    data.append('source', 'LMS')
    data.append('datapoint', 'bulk_transaction_remarks_file_verify')
    data.append('status', 'Approved')
    data.append('id', this.approve_id)
    this.is_approve_loading = true
    this.http.postLoanApplicationApi(data).subscribe(res => {
      if (res.success) {
        this.isApprove = false;
        this.isApprovedSuccess = true
        this.is_approve_loading = false
        setTimeout(() => {
          this.isApprovedSuccess = false
          this.getManualTransactionList()
        }, 2000);
      } else {
        this.is_approve_loading = false
        this.message.error(res.message)
      }
    }, (err) => {
      this.is_approve_loading = false
    })
  }

  clickOnReject(id) {
    this.isReject = true;
    this.reject_id = id
  }
  
  rejectTransaction() {
    let data = new FormData()
    data.append('source', 'LMS')
    data.append('datapoint', 'bulk_transaction_remarks_file_verify')
    data.append('status', 'Rejected')
    data.append('remarks', this.rejactRemarks)
    data.append('id', this.reject_id)
    this.is_approve_loading = true
    this.http.postLoanApplicationApi(data).subscribe(res => {
      if (res.success) {
        this.isReject = false;
        this.is_approve_loading = false
        this.isRejectSuccess = true;
        this.getManualTransactionList()
      }
    }, (err) => {
      this.is_approve_loading = false
    })
  }

  
}
