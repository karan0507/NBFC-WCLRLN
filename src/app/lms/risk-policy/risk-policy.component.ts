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
      this.fetchLoanApplicationUserAc(file, 'USER')
    } else if (this.selectedTab == '2') {
      this.fetchLoanApplicationUpload(file)
    } else if (this.selectedTab == '3') {
      this.fetchLoanApplicationUserAc(file, 'ACCOUNT')
    } else if (this.selectedTab == '4') {
      this.fetchLoanApplicationUploadCreditLine(file)
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

  fetchLoanApplicationUserAc(file, toggle_type) {
    let data = new FormData();
      data.append('datapoint', 'toggle_risk_policy_file_stage'),
      data.append('source', 'LMS'),
      data.append('toggle_type', toggle_type),
      data.append('file', file),
    this.http.fetchLoanApplicationUpload(data).subscribe(res => {
      this.message.success(res['message'])
      this.isUpload = false
      this.isPreview = false
      if (toggle_type == 'USER') {
        this.http.refreshUser.next(true)
      } else {
        this.http.refreshAccount.next(true)
      }
    }, (err) => {
    })
  }

  fetchLoanApplicationUploadCreditLine(file) {
    let data = new FormData();
      data.append('datapoint', 'change_credit_line_file'),
      data.append('source', 'LMS'),
      data.append('file', file),
    this.http.fetchLoanApplicationUpload(data).subscribe(res => {
      this.message.success(res['message'])
      this.isUpload = false
      this.isPreview = false
      this.http.refreshCreditLine.next(true)
    }, (err) => {
    })
  }

  downloadSampleFile() {
    var link = document.createElement('a');
    if (this.selectedTab == '1') {
      link.href = 'assets/static files/block_unblock_line.xlsx';
      link.download = 'User_sample_file.xlsx';
    } else if (this.selectedTab == '2') {
      link.href = 'assets/static files/block_unblock_line.xlsx';
      link.download = 'Line_sample_file.xlsx';
    } else if (this.selectedTab == '3') {
      link.href = 'assets/static files/block_unblock_line.xlsx';
      link.download = 'Account_sample_file.xlsx';
    } else if (this.selectedTab == '4') {
      link.href = 'assets/static files/increase_decrease_creditline.xlsx';
      link.download = 'Credit_line_sample_file.xlsx';
    }
    link.click();
  }
}
