import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/services/http.service';
import * as moment from 'moment'

@Component({
  selector: 'app-bulk-nominee-upload',
  templateUrl: './bulk-nominee-upload.component.html',
  styleUrls: ['./bulk-nominee-upload.component.css']
})
export class BulkNomineeUploadComponent implements OnInit {
  uploaded_file: any;
  date: any;
  page = 1;
  api_calling_loader: any;
  isImport = false
  preViewBeforUpload: any;
  isLineError: any;
  isPreviewBeforeUpload: boolean;
  isFail: boolean;
  preview_file_name: any;
  searchValue = ''
  total_count;
  globalPageSize = 100
  selectedTab = '';
  nomineeData: any = []
  current_id: any;
  view_api_calling_loader: boolean = false;
  view_total_count: any;
  view_page = 1;
  view_global_page_limit = 100;
  isModalVisible: boolean = false;
  viewNomineeFileContent: any;
  Nominee_Bulk_Upload: any;

  constructor(private service: HttpService, private message: NzMessageService) { }

  ngOnInit(): void {
    this.getNomineeData();
  }

  getNomineeData(tabelFilter?) {
    if (tabelFilter) {
      this.page = tabelFilter?.pageIndex ? tabelFilter?.pageIndex : this.page;
      this.globalPageSize = tabelFilter?.pageSize ? tabelFilter?.pageSize : this.globalPageSize;
    }
    let data = {
      // status: this.selectedTab,
      // date: this.date ? moment(this.date).format("YYYY-MM-DD") : '',
      // keyword: this.searchValue,
      page: this.page,
      limit: this.globalPageSize,
      start_date: this.date[0] ? moment(this.date[0]).format("YYYY-MM-DD") : '',
      end_date: this.date[1] ? moment(this.date[1]).format("YYYY-MM-DD") : '',
    }
    console.log("data",data);
    
    this.api_calling_loader = true
    this.service.getNomineeDataList(data).subscribe((res) => {
      // console.log(res);
      this.api_calling_loader = false
      if (res['data']) {
        this.nomineeData = res['data'].results
        this.total_count = res['data'].total_count
      } else {
        this.nomineeData = null
        this.total_count = 0
      }
      // this.message.success(res['message'])
    }, (err) => {
      this.api_calling_loader = false
    })
  }
  objectKeys = Object.keys;
  
  viewNomineeData(id, tabelFilter?) {
    var data = {
      id: id,
    }
    
    this.view_api_calling_loader = true
    if (tabelFilter) {
      this.view_page = tabelFilter?.pageIndex ? tabelFilter?.pageIndex : this.view_page;
      this.view_global_page_limit = tabelFilter?.pageSize ? tabelFilter?.pageSize : this.view_global_page_limit;
    }
    
    this.service.getNomineeFileContent(data).subscribe((res: any) => {
      console.log(res);

      if (res.success) {
        this.view_total_count = res?.data?.total_count
        this.viewNomineeFileContent = res?.data?.records;
        this.view_api_calling_loader = false
      } else {
        this.view_api_calling_loader = false
        this.message.error(res.message)
      }
    }, error => {
      this.view_api_calling_loader = false
    })
  }


  downloadSampleFile(type?, res?) {
    
    let data={
      section_name : "Nominee Bulk Upload"
    }
    this.service.sampleNomineeFile(data).subscribe((res:any)=>{
      var link = document.createElement('a');
      if (type) {
        link.href = res
        link.download = type + '.xlsx'
        console.log(true);
        
      } else {
        link.href = 'assets/static files/Nominee.xlsx';
        link.download = 'Sample_Nominee.xlsx';
        console.log(false);
        
      }
      link.click();
    })
   
  }

  downloadFile(type?, res?) {
    var link = document.createElement('a');
    if (type) {
      link.href = res
      link.download = type + '.xlsx'
    } else {
      link.href = 'assets/static files/Nominee.xlsx';
      link.download = 'Nominee.xlsx';
    }
    link.click();
  }

  beforeUploadName = (file) => {
    console.log(file)
    this.uploaded_file = file
    this.uploadNomineeFile(this.uploaded_file)
    return false;
  };

  uploadNomineeFile(file?) {
    let data = new FormData()
    data.append('nominee_file', file)
    console.log(data);
    
    var generateloader = this.message.loading('Uploading..', { nzDuration: 0 }).messageId;
    this.service.uploadNomineeData(data).subscribe((res: any) => {
      console.log(res);
      
      if (res.success) {
        this.message.remove(generateloader);
        this.message.success(res.message);
        this.isImport = false;
        this.page = 1;
        this.globalPageSize = 100;
        this.getNomineeData()
      }
    }, (err) => {
      generateloader = this.message.loading('Error in file upload..', { nzDuration: 0 }).messageId;
      this.isImport = true
      this.message.remove(generateloader);
      this.isFail = true
    })
  }
}
