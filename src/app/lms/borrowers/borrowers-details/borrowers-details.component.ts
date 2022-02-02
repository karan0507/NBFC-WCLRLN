import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-borrowers-details',
  templateUrl: './borrowers-details.component.html',
  styleUrls: ['./borrowers-details.component.css']
})
export class BorrowersDetailsComponent implements OnInit {

  selectedTab = '1'
  dataSet = [{},{}]
  isAddPayment = false
  formLoading = false
  paymentTitle = ''
  typeLabel = ''
  isAcClosure = false
  isAcClosureError = false
  isReverseCharges = false
  isRefundTransaction = false
  isWaiveOff = false
  isChangeBillDate = false
  createAddPaymentOrChargeForm: FormGroup;
  constructor(private fb: FormBuilder, public http: HttpService, private message: NzMessageService,
    private router : Router,
    private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.createAddPaymentOrChargeFormFunction()
  }

  createAddPaymentOrChargeFormFunction() {
    this.createAddPaymentOrChargeForm = this.fb.group({
      amount: ['', [Validators.required]],
      mode_of_payment: ['', [Validators.required]],
      paid_on: ['', [Validators.required]],
      payment_type: ['', [Validators.required]],
      received_by: ['', [Validators.required]],
    })
  }
  onClickChangeTab(e) {

  }

  addPayment(form) {

  }
  closeAccount(){}

}
