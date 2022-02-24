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
  borrower_id: any;
  
  constructor(private fb: FormBuilder, public http: HttpService, private message: NzMessageService,
    private router : Router,
    private route: ActivatedRoute,
    private sanitized: DomSanitizer,) {
      this.route.queryParams.subscribe(params => {
        if(params['id']){
          this.borrower_id = params['id']
        }
      });
     }

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

  pdfViewerAndDownload(title, index) {
    const generateloader = this.message.loading('Generating Report..', { nzDuration: 0 }).messageId;
    var data;
    if (index == 1) {
      data = {
        datapoint: 'download_transaction_letter',
        endpoint: this.borrower_id,
        source: 'LMS',
      }
    } else if (index == 2) {
      data = {
        datapoint: 'download_outstanding_letter',
        endpoint: this.borrower_id,
        source: 'LMS',
      }
    } else if (index == 3) {
      // data = {
      //   datapoint: 'loan_service',
      //   endpoint: this.borrower_id,
      //   source: 'LMS',
      // }
    } else if (index == 4) {
      data = {
        datapoint: 'download_closure_letter',
        endpoint: this.borrower_id,
        source: 'LMS',
      }
    } else if (index == 5) {
      // data = {
      //   datapoint: 'loan_service',
      //   endpoint: this.borrower_id,
      //   source: 'LMS',
      // }
    }
    if (data) {
      this.http.fetchLoanApplicationList(data).subscribe(res => {

      });
    }
    this.pdf_viewer_object_values['title'] = title
    this.pdf_viewer_object_values['url'] = ''
    this.pdf_viewer_object_values['boolean'] = true
    this.message.remove(generateloader);
  }
}
