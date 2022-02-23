import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-credit-line-inc-dec',
  templateUrl: './credit-line-inc-dec.component.html',
  styleUrls: ['./credit-line-inc-dec.component.css']
})
export class CreditLineIncDecComponent implements OnInit {

  borrowertList = []
  isIncLine = false
  isDescLine = false
  createIncLine: FormGroup;
  createDescLine: FormGroup;
  api_calling_loader: boolean;
  total_count: any;
  constructor(private fb: FormBuilder, public http: HttpService, private message: NzMessageService,
    private router : Router,
    private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.createDescLineFunction()
    this.createIncLineFunction()
    this.fetchLoanApplicationList()
  }

  createIncLineFunction() {
    this.createIncLine = this.fb.group({
      incBy: [],
      newCred: [],
      activation_from: []
    })
  }
  createDescLineFunction() {
    this.createDescLine = this.fb.group({
      incBy: [],
      newCred: [],
      activation_from: []
    })
  }
  
  fetchLoanApplicationList() {
    let data = {
      datapoint: 'loan_service',
      endpoint: 'LoanApplicationCreditlineUpdation',
      source: 'LMS',
    }
    this.api_calling_loader = true
    this.http.fetchLoanApplicationList(data).subscribe(res => {
      this.api_calling_loader = false
      this.borrowertList = res['data']
      this.total_count = res['data'].total_count
      // this.message.success(res['message'])
    }, (err) => {
      this.api_calling_loader = false
    })
  }

}
