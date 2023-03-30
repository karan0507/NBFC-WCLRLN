import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/services/http.service';
import { Component, OnInit } from '@angular/core';
import { differenceInCalendarDays } from 'date-fns';
import * as moment from 'moment';

@Component({
  selector: 'app-emi-eligibility-list',
  templateUrl: './emi-eligibility-list.component.html',
  styleUrls: ['./emi-eligibility-list.component.css']
})
export class EmiEligibilityListComponent implements OnInit {
  isImport = false
  uploaded_file: any;
  date: any
  page = 1;
  api_calling_loader: any;
  previewBeforeUpload: any;
  isLineError: any;
  isPreviewBeforeUpload: boolean;
  isFail: boolean;
  preview_file_name: any;
  searchValue = ''
  total_count;
  globalPageSize = 30
  selectedTab = '';
  // customRanges = {
  //   Today: [new Date(), new Date()],
  //   'Last 7 days': [new Date().setDate(new Date().getDate() - 7), new Date()],
  //   'This Month': [new Date(new Date().getFullYear(), new Date().getMonth(), 1), new Date()],
  //   'Last Month': [new Date(new Date().getFullYear(), new Date().getMonth(), 1).setMonth(new Date().getMonth() - 1), new Date(new Date().getFullYear(), new Date().getMonth(), -1, 30, 31)],
  //   'Last 3 Months': [new Date(new Date().getFullYear(), new Date().getMonth(), 1).setMonth(new Date().getMonth() - 3), new Date(new Date().getFullYear(), new Date().getMonth(), -1, 30, 31)],
  //   'Last 6 Months': [new Date(new Date().getFullYear(), new Date().getMonth(), 1).setMonth(new Date().getMonth() - 6), new Date(new Date().getFullYear(), new Date().getMonth(), -1, 30, 31)],
  //   'This Year': [new Date(new Date().getFullYear(), 0, 1), new Date()],
  //  'Last Year': [new Date(new Date().getFullYear() - 1, 0, 1), new Date(new Date().getFullYear() - 1, 11, 31)],
  // };
  // disabledDate = (current: Date): boolean =>
  //   differenceInCalendarDays(current, new Date()) > 0;

  emiEligibilityData: any = []
  viewEmiEligibilityData: any = []
  view_total_count: any;
  view_page = 1;
  view_global_page_limit = 30;
  isModalVisible: boolean = false;
  view_api_calling_loader: boolean = false;
  constructor(private http: HttpService, private message: NzMessageService) { }

  ngOnInit(): void {
    this.getEmiEligibility();
  }

  getEmiEligibility(tabelFilter?) {
    if (tabelFilter) {
      this.page = tabelFilter?.pageIndex ? tabelFilter?.pageIndex : this.page;
      this.globalPageSize = tabelFilter?.pageSize ? tabelFilter?.pageSize : this.globalPageSize;
    }
    let data = {
      status: this.selectedTab,
      // date: this.date ? moment(this.date).format("YYYY-MM-DD") : '',
      // keyword: this.searchValue,
      page: this.page,
      limit: this.globalPageSize
    }
    this.api_calling_loader = true
    this.http.fetchEMIEligibilityList(data).subscribe(res => {
      this.api_calling_loader = false
      if (res['data']) {
        this.emiEligibilityData = res['data'].results
        this.total_count = res['data'].total_count
      } else {
        this.emiEligibilityData = null
        this.total_count = 0
      }
      // this.message.success(res['message'])
    }, (err) => {
      this.api_calling_loader = false
    })
  }

  current_id:any;
  viewEligibleData(id, tabelFilter?) {
    this.current_id = id;
    console.log(this.current_id);
    
    this.view_api_calling_loader = true
    if (tabelFilter) {
      this.view_page = tabelFilter?.pageIndex ? tabelFilter?.pageIndex : this.view_page;
      this.view_global_page_limit = tabelFilter?.pageSize ? tabelFilter?.pageSize : this.view_global_page_limit;
    }
    let data = {
      status: this.selectedTab,
      page: this.view_page,
      limit: this.view_global_page_limit
    }
    this.http.viewEMIEligibilityList(id, data).subscribe((res: any) => {
      if (res.success) {
        this.view_total_count = res.data.total_count
        this.viewEmiEligibilityData = res.data;
        this.view_api_calling_loader = false
      } else {
        this.view_api_calling_loader = false
        this.message.error(res.message)
      }
    },error=>{
      this.view_api_calling_loader = false
    })
  }

  downloadSampleFile(type?, res?) {
    var link = document.createElement('a');
    if (type) {
      link.href = res
      link.download = type + '.xlsx'
    } else {
      link.href = 'assets/static files/EMI_Eligibility(1).xlsx';
      link.download = 'EMI_Eligibility.xlsx';
    }
    link.click();
  }

  beforeUploadName = (file) => {
    console.log(file)
    this.uploaded_file = file
    this.uploadEMIEligibilityFile(this.uploaded_file)
    return false;
  };

  uploadEMIEligibilityFile(file?) {
    let data = new FormData()
    data.append('file', file)
    var generateloader = this.message.loading('Uploading..', { nzDuration: 0 }).messageId;
    this.http.uploadEMIEligibilityData(data).subscribe((res: any) => {
      if (res.success) {
        this.message.remove(generateloader);
        this.message.success(res.message);
        this.isImport = false;
        this.page = 1;
        this.globalPageSize = 30;
        this.getEmiEligibility()
      }
    }, (err) => {
      generateloader = this.message.loading('Error in file upload..', { nzDuration: 0 }).messageId;
      this.isImport = true
      this.message.remove(generateloader);
      this.isFail = true
    })
  }

}
