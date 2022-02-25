import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';

@Component({
  selector: 'app-risk-policy',
  templateUrl: './risk-policy.component.html',
  styleUrls: ['./risk-policy.component.css']
})
export class RiskPolicyComponent implements OnInit {

  selectedTab;
  isUpload = false
  isPreview = false
  constructor(private router: Router,
    private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if(params['index']){
        this.selectedTab = params['index']
      } else {
        this.selectedTab = '1'
      }
    });
  }

  onClickChangeTab(e) {
    this.router.navigate([], {queryParams: {index: this.selectedTab}})
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
