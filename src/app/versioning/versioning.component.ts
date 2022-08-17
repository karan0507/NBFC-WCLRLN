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
  constructor(private service: HttpService, private message: NzMessageService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createVersionForm();
    this.getVersion();
  }

  createVersionForm(){
    this.versionForm = this.fb.group({
      app_version: [null, [Validators.required],
      ],
      is_optional: [false]
    })
  }

  getVersion(){
    this.apiLoader['getLoader'] = true;
    this.service.getAppVersion().subscribe((res: any)=>{
      if(res?.success){
        // this.message.success(res?.message)
        // console.log(res?.data['VERSION']);
        this.versionForm.patchValue({
          app_version: res?.data['VERSION']
        })
      } else {
        this.message.error(res?.message)
      }
      this.apiLoader['getLoader'] = false;
    }, error=>{
      this.apiLoader['getLoader'] = false;
    })
  }

  onClickUpdateVersion(){
    let data = new FormData();
    // console.log(this.versionForm.value);
    // data.append()
    this.apiLoader['onUpdate'] = true;
    this.service.updateAppVersion(this.versionForm.value).subscribe((res: any)=>{
      if(res?.success){
        this.message.success(res?.message);
        this.apiLoader['onUpdate'] = false;
        // this.getVersion();
      } else {
        this.message.error(res?.message);
        this.apiLoader['onUpdate'] = false;
      }
    }, error=>{this.apiLoader['onUpdate'] = false;})
  }

}
