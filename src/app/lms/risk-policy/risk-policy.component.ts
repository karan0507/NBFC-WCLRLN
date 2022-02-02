import { Component, OnInit } from '@angular/core';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';

@Component({
  selector: 'app-risk-policy',
  templateUrl: './risk-policy.component.html',
  styleUrls: ['./risk-policy.component.css']
})
export class RiskPolicyComponent implements OnInit {

  selectedTab = '1'
  isUpload = false
  isPreview = false
  constructor() { }

  ngOnInit(): void {
  }

  onClickChangeTab(e) {

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
}
