import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
  total_count = 10;
  listOfData = [];
  setOfCheckedId = new Set<number>();
  listOfCurrentPageData = [];
  checked = false;
  indeterminate = false;
  api_calling_loader: boolean;
  date: any;
  previewData: any;
  preview_file_name = ''
  approve_id: string | Blob;
  is_approve_loading: boolean;
  reject_id: string | Blob;
  
  constructor(public http: HttpService, private message: NzMessageService,
    private router : Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getManualTransactionList()
  }
  
  getManualTransactionList(e?) {
    let data = {
      source: 'LMS',
      datapoint: 'loan_services',
      endpoint: 'fetch-offline-transactions',
      status: this.selectedTab,
      // date: this.date ? moment(this.date).format("YYYY-MM-DD") : '',
      keyword: this.searchValue
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
  resetFilter(){

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
      this.isReject = false;
      this.is_approve_loading = false
      this.rejactRemarks = ''
      this.message.success(res['message'])
      this.getManualTransactionList()
    }, (err) => {
      this.is_approve_loading = false
    })
  }
  clickOnReject(id) {
    this.isReject = true; 
    this.reject_id = id
  }
  handleChange({ file, fileList }: NzUploadChangeParam): void {
    const status = file.status;
    if (status !== 'uploading') {
      console.log(file, fileList);
    }
    if (status === 'done') {
      // this.msg.success(`${file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      // this.msg.error(`${file.name} file upload failed.`);
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
      if (isPreview) {
        this.isPreview = true;
      } else {
        this.isApprove = true;
      }
      this.message.remove(generateloader);
      this.previewData = res['data']
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
      this.isApprove = false; 
      this.isApprovedSuccess = true
      this.is_approve_loading = false
    }, (err) => {
      this.is_approve_loading = false
    })
  }

}
