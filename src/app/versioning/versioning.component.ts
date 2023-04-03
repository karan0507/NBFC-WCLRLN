import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-version`ing',
  templateUrl: './versioning.component.html',
  styleUrls: ['./versioning.component.css']
})
export class VersioningComponent implements OnInit {

  apiLoader = {
    'getLoader': false,
    'onUpdate': false
  };
  checked;
  versionForm: FormGroup;
  page = 1;
  globalPageSize: number;
  searchValue = '';
  api_calling_loader: boolean;
  total_count: any;
  listOfData: any;
  constructor(private service: HttpService, private message: NzMessageService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.page = 1;
    this.globalPageSize = 100;
    this.createVersionForm();
    this.getVersion();
    this.fetchVersionList();
  }

  createVersionForm() {
    this.versionForm = this.fb.group({
      app_version: [null, [Validators.required]],
      is_optional: [false],
      system_status:[false]
    })
  }

  getVersion() {
    this.apiLoader['getLoader'] = true;
    this.service.getAppVersion().subscribe((res: any) => {
      if (res?.success) {
        // this.message.success(res?.message)
        // console.log(res?.data['VERSION']);
        this.versionForm.patchValue({
          app_version: res?.data['VERSION'],
          system_status:res?.data['SYSTEM STATUS']
        })
      } else {
        this.message.error(res?.message)
      }
      this.apiLoader['getLoader'] = false;
    }, error => {
      this.apiLoader['getLoader'] = false;
    })
  }

  onClickUpdateVersion() {
    let data = new FormData();
    // console.log(this.versionForm.value);
    // data.append()
    this.apiLoader['onUpdate'] = true;
    this.service.updateAppVersion(this.versionForm.value).subscribe((res: any) => {
      if (res?.success) {
        this.message.success(res?.message);
        this.apiLoader['onUpdate'] = false;
        // this.getVersion();
      } else {
        this.message.error(res?.message);
        this.apiLoader['onUpdate'] = false;
      }
    }, error => { this.apiLoader['onUpdate'] = false; })
  }

  fetchVersionList(tableFilter?) {
    var data;
    this.page = tableFilter?.pageIndex ? tableFilter?.pageIndex : 1;
    this.globalPageSize = tableFilter?.pageSize ? tableFilter?.pageSize : 30;
    data = {
      page: this.page,
      limit: this.globalPageSize,
      keyword: this.searchValue,
    }
    this.api_calling_loader = true
    this.service.fetchVersionList(data).subscribe(res => {
      this.api_calling_loader = false
      this.listOfData = res['data']
      this.versionForm.get('is_optional').setValue(this.listOfData[0].is_optional)
      this.total_count = res['data'].total_count
      // this.message.success(res['message'])
    }, (err) => {
      this.api_calling_loader = false
    })
  }

}
