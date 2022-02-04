import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
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
  pdf_viewer_object_values = {
    'boolean': false,
    'url': '',
    'title': ''
  }
  
  constructor(private fb: FormBuilder, public http: HttpService, private message: NzMessageService,
    private router : Router,
    private route: ActivatedRoute,
    private sanitized: DomSanitizer,) { }

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

  handleCancel() {
    this.pdf_viewer_object_values['boolean'] = false
    this.pdf_viewer_object_values['url'] = ''
  }
  sanatizeUrlToSafe(value) {
    return this.sanitized.bypassSecurityTrustResourceUrl(value);
  }

  pdfViewerAndDownload(title) {
    const generateloader = this.message.loading('Generating Report..', { nzDuration: 0 }).messageId;
    this.pdf_viewer_object_values['title'] = title
    this.pdf_viewer_object_values['url'] = ''
    this.pdf_viewer_object_values['boolean'] = true
    this.message.remove(generateloader);
  }
}
