import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { differenceInCalendarDays } from 'date-fns';
import * as moment from 'moment';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-upload-transactions-list',
  templateUrl: './upload-transactions-list.component.html',
  styleUrls: ['./upload-transactions-list.component.css']
})
export class UploadTransactionsListComponent implements OnInit {

  selectedTab = 'pending'
  isReject =  false
  isImport = false
  isFail;
  isApprove = false
  isApprovedSuccess = false
  isPreview;
  rejactRemarks;
  searchValue = '';
  _apiLoader = {
    'list': false,
  }
  page = 1;
  total_count;
  listOfData = [];
  setOfCheckedId = new Set<number>();
  listOfCurrentPageData = [];
  checked = false;
  indeterminate = false;
  api_calling_loader: boolean;
  date = '';
  previewData: any;
  preview_file_name = ''
  approve_id: string | Blob;
  is_approve_loading: boolean;
  reject_id: string | Blob;
  isRejectSuccess: boolean = false;
  previewBeforeUpload: any;
  isPreviewBeforeUpload: boolean;
  isLineError: any;
  customRanges = {
    Today: [new Date(), new Date()],
    'Last 7 days': [new Date().setDate(new Date().getDate() - 7), new Date()],
    'This Month': [new Date(new Date().getFullYear(), new Date().getMonth(), 1), new Date()],
    'Last Month': [new Date(new Date().getFullYear(), new Date().getMonth(), 1).setMonth(new Date().getMonth() - 1), new Date(new Date().getFullYear(), new Date().getMonth(), -1,30,31)],
    'Last 3 Months': [new Date(new Date().getFullYear(), new Date().getMonth(), 1).setMonth(new Date().getMonth() - 3), new Date(new Date().getFullYear(), new Date().getMonth(), -1,30,31)],
    'Last 6 Months': [new Date(new Date().getFullYear(), new Date().getMonth(), 1).setMonth(new Date().getMonth() - 6), new Date(new Date().getFullYear(), new Date().getMonth(), -1,30,31)],
    'This Year': [new Date(new Date().getFullYear(), 0, 1), new Date()],
    // 'Last Year': [new Date(new Date().getFullYear(), new Date().getMonth(), 1).setMonth(new Date().getMonth() - 12), new Date(new Date().getFullYear(), new Date().getMonth(), 1)],
    'Last Year': [new Date(new Date().getFullYear() - 1, new Date().getMonth(), 0).setDate(1), new Date(new Date().getFullYear() - 1, 11, 31)],
    // d.setMonth(d.getMonth() - 3);
};
  uploaded_file: any;
  uploadSuccessfully: boolean;
  is_upload_loading: boolean;
  globalPageSize = 30

  disabledDate = (current: Date): boolean =>
    // Can not select days before today and today
    differenceInCalendarDays(current, new Date()) > 0;
  
  constructor(public http: HttpService, private message: NzMessageService,
    private router : Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getManualTransactionList()
  }
  
  getManualTransactionList(tabelFilter?) {
    if (tabelFilter) {
      this.page = tabelFilter?.pageIndex ? tabelFilter?.pageIndex : this.page;
      this.globalPageSize = tabelFilter?.pageSize ? tabelFilter?.pageSize : this.globalPageSize;
    }
    let data = {
      source: 'LMS',
      datapoint: 'loan_services',
      endpoint: 'fetch-offline-transactions',
      status: this.selectedTab,
      start_date: this.date[0] ? moment(this.date[0]).format("YYYY-MM-DD") : '',
      end_date: this.date[1] ? moment(this.date[1]).format("YYYY-MM-DD") : '',
      keyword: this.searchValue,
      page: this.page,
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
  resetFilter(){
    this.date = '';
    this.searchValue = ''
    this.getManualTransactionList()
  }
  getResultBasedOnSearch(){

  }

  onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }
  onAllChecked(checked: boolean): void {
    this.listOfCurrentPageData
      .filter(({ disabled }) => !disabled)
      .forEach(({ id }) => this.updateCheckedSet(id, checked));
    this.refreshCheckedStatus();
  }
  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }
  refreshCheckedStatus(): void {
    const listOfEnabledData = this.listOfCurrentPageData.filter(({ disabled }) => !disabled);
    this.checked = listOfEnabledData.every(({ id }) => this.setOfCheckedId.has(id));
    this.indeterminate = listOfEnabledData.some(({ id }) => this.setOfCheckedId.has(id)) && !this.checked;
  }

  rejectTransaction() {
    let data = new FormData()
    data.append('source', 'LMS')
    data.append('datapoint', 'reject_excel')
    data.append('id', this.reject_id)
    data.append('remarks', this.rejactRemarks)
    this.is_approve_loading = true
    this.http.postLoanApplicationApi(data).subscribe(res => {
      if (res.success) {
        this.isReject = false;
        this.is_approve_loading = false
        this.rejactRemarks = ''
        this.isRejectSuccess = true;
        this.getManualTransactionList()
      }
    }, (err) => {
      this.is_approve_loading = false
    })
  }
  clickOnReject(id) {
    this.isReject = true; 
    this.reject_id = id
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
    data.append('datapoint', 'check_excel'),
    data.append('file', value)
    var generateloader = this.message.loading('Uploading..', { nzDuration: 0 }).messageId;
    this.http.fetchLoanApplicationUpload(data).subscribe(res => {
      this.message.remove(generateloader);
      if (res.data.file_content.list[0]) {
        this.isImport = false
        this.previewBeforeUpload = res.data.file_content.list
        this.preview_file_name = res.data.file_name
        this.isLineError = res.data.file_content.status
        this.isPreviewBeforeUpload = true;
      } else {
        this.message.error(res.data.file_content.message)
      }
    }, (err) => {
      this.message.remove(generateloader);
      generateloader = this.message.loading('Error in file upload..', { nzDuration: 0 }).messageId;
      this.isImport = false
      this.message.remove(generateloader);
      this.isFail = true
    })
  }

  uploadTransaction() {
    let data = new FormData()
    data.append('source', 'LMS'),
    data.append('datapoint', 'upload_excel'),
    data.append('file', this.uploaded_file)
    if (this.isLineError) {
      this.is_upload_loading = true
      this.http.fetchLoanApplicationUpload(data).subscribe(res => {
        this.is_upload_loading = false
        this.isImport = false
        this.isPreviewBeforeUpload = false;
        this.uploadSuccessfully = true
        this.getManualTransactionList()
      }, (err) => {
        this.isPreviewBeforeUpload = false;
        this.isFail = true
        this.is_upload_loading = false
      })
    } else {
      this.isFail = true
      this.isPreviewBeforeUpload = false;
    }
  }

  fetchPreviewAfterList(value, isPreview) {
    let data = {
      source: 'LMS',
      datapoint: 'preview_excel',
      endpoint: value?.id
    }
    this.preview_file_name = value.file_name
    this.approve_id = value.id
    const generateloader = this.message.loading('Generating Preview..', { nzDuration: 0 }).messageId;
    this.http.fetchLoanApplicationList(data).subscribe(res => {
      if (res.success) {
        if (isPreview) {
          this.isPreview = true;
        } else {
          this.isApprove = true;
        }
        this.message.remove(generateloader);
        this.previewData = res.data.file_content
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
    data.append('datapoint', 'approve_excel')
    data.append('id', this.approve_id)
    this.is_approve_loading = true
    this.http.postLoanApplicationApi(data).subscribe(res => {
      if (res.success) {
        this.isApprove = false;
        this.isApprovedSuccess = true
        this.is_approve_loading = false
      }
    }, (err) => {
      this.is_approve_loading = false
    })
  }

  downloadSampleFile() {
    var link = document.createElement('a');
    link.href = 'assets/static files/Manual transactions sample file.xlsx';
    link.download = 'Manual transactions sample file.xlsx';
    link.click();
  }
}
