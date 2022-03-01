import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-risk-policy',
  templateUrl: './risk-policy.component.html',
  styleUrls: ['./risk-policy.component.css']
})
export class RiskPolicyComponent implements OnInit {

  selectedTab;
  isUpload = false
  isPreview = false
  constructor(public http: HttpService, private message: NzMessageService,
    private router : Router,
    private route: ActivatedRoute) { }

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

  beforeUploadName = (file) => {
    console.log(file)
    if (this.selectedTab == '1') {
      
    } else if (this.selectedTab == '2') {
      this.fetchLoanApplicationUpload(file)
    } else if (this.selectedTab == '3') {
      
    } else if (this.selectedTab == '4') {
      
    } else {
      
    }
    return false;
  };

  fetchLoanApplicationUpload(file) {
    let data = new FormData();
      data.append('datapoint', 'toggle_risk_policy_file'),
      data.append('source', 'LMS'),
      data.append('file', file),
    this.http.fetchLoanApplicationUpload(data).subscribe(res => {
      this.message.success(res['message'])
      this.isUpload = false
      this.isPreview = false
      this.http.refreshBorrower.next(true)
    }, (err) => {
    })
  }
}
