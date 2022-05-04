import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { differenceInCalendarDays } from 'date-fns';
import * as moment from 'moment';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-credit-line-inc-desc',
  templateUrl: './credit-line-inc-desc.component.html',
  styleUrls: ['./credit-line-inc-desc.component.css']
})
export class CreditLineIncDescComponent implements OnInit {

  isImport = false
  page = 1;
  total_count;
  customRanges = {
    Today: [new Date(), new Date()],
    'Last 7 days': [new Date().setDate(new Date().getDate() - 7), new Date()],
    'This Month': [new Date(new Date().getFullYear(), new Date().getMonth(), 1), new Date()],
    'Last Month': [new Date(new Date().getFullYear(), new Date().getMonth(), 1).setMonth(new Date().getMonth() - 1), new Date(new Date().getFullYear(), new Date().getMonth(), -1)],
    'Last 3 Months': [new Date(new Date().getFullYear(), new Date().getMonth(), 1).setMonth(new Date().getMonth() - 3), new Date()],
    'Last 6 Months': [new Date(new Date().getFullYear(), new Date().getMonth(), 1).setMonth(new Date().getMonth() - 6)],
    'This Year': [new Date(new Date().getFullYear(), 0, 1), new Date()],
    // 'Last Year': [new Date(new Date().getFullYear(), new Date().getMonth(), 1).setMonth(new Date().getMonth() - 12), new Date(new Date().getFullYear(), new Date().getMonth(), 1)],
    'Last Year': [new Date(new Date().getFullYear() - 1, new Date().getMonth(), 0).setDate(1), new Date(new Date().getFullYear() - 1, 11, 31)],
    // d.setMonth(d.getMonth() - 3);
  };
  disabledDate = (current: Date): boolean =>
    // Can not select days before today and today
    differenceInCalendarDays(current, new Date()) > 0;
  globalPageSize = 30
  api_calling_loader: boolean;
  listOfData;
  selectedTab = 'pending'
  preview_file_name: any;
  approve_id: any;
  isPreview: boolean;
  isApprove: boolean;
  previewData: any;
  uploaded_file: any;
  previewBeforeUpload: any;
  date = ''
  isLineError: any;
  isPreviewBeforeUpload: boolean;
  isFail: boolean;
  is_approve_loading: boolean;
  isApprovedSuccess: boolean;
  is_upload_loading: boolean;
  uploadSuccessfully: boolean;
  isReject: boolean;
  isRejectSuccess: boolean;
  reject_id: any;
  rejactRemarks = '';
  changeBillTab = '1';
  constructor(public http: HttpService, private message: NzMessageService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getManualTransactionList()
  }


  downloadSampleFile() {
    var link = document.createElement('a');
    link.href = 'assets/static files/change_credit_line_sample.xlsx';
    link.download = 'change_credit_line_sample.xlsx';
    link.click();
  }

  getManualTransactionList(tabelFilter?) {
    if (tabelFilter) {
      this.page = tabelFilter?.pageIndex ? tabelFilter?.pageIndex : this.page;
      this.globalPageSize = tabelFilter?.pageSize ? tabelFilter?.pageSize : this.globalPageSize;
    }
    let data = {
      source: 'LMS',
      datapoint: 'get_change_credit_line_list',
      status: this.selectedTab.toUpperCase(),
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


  fetchPreviewAfterList(value, isPreview) {
    let data = {
      source: 'LMS',
      datapoint: 'preview_change_credit_line',
      endpoint: value?.id
    }
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
        this.previewData = res['data'].file_content
      }

      this.message.remove(generateloader);
      // this.message.success(res['message'])
    }, (err) => {
      this.message.remove(generateloader);
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
      data.append('datapoint', 'check_credit_line_file'),
      data.append('file', value)
    var generateloader = this.message.loading('Uploading..', { nzDuration: 0 }).messageId;
    this.http.fetchLoanApplicationUpload(data).subscribe(res => {
      this.message.remove(generateloader);
      if (res['data'].file_content?.list[0]) {
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

  approveTransaction() {
    let data = new FormData()
    data.append('source', 'LMS')
    data.append('datapoint', 'approve_reject_change_credit_line')
    data.append('action', 'APPROVE')
    data.append('id', this.approve_id)
    this.is_approve_loading = true
    this.http.postLoanApplicationApi(data).subscribe(res => {
      if (res.success) {
        this.isApprove = false;
        this.isApprovedSuccess = true
        this.is_approve_loading = false
      } else {
        this.is_approve_loading = false
        this.message.error(res.message)
      }
    }, (err) => {
      this.is_approve_loading = false
    })
  }

  uploadTransaction() {
    let data = new FormData()
    data.append('source', 'LMS'),
      data.append('datapoint', 'import_change_credit_line'),
      data.append('file', this.uploaded_file)
    if (this.isLineError) {
      this.is_upload_loading = true
      this.http.fetchLoanApplicationUpload(data).subscribe(res => {
        if (res.success) {
          this.is_upload_loading = false
          this.isImport = false
          this.isPreviewBeforeUpload = false;
          this.uploadSuccessfully = true
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

  clickOnReject(id) {
    this.isReject = true;
    this.reject_id = id
  }

  rejectTransaction() {
    let data = new FormData()
    data.append('source', 'LMS')
    data.append('datapoint', 'approve_reject_change_credit_line')
    data.append('action', 'REJECT')
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

  onchangeBillTab() {

  }

  resetFilters() {
    this.getManualTransactionList();
    this.date = null
  }
}
