import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-loan-agreement',
  templateUrl: './loan-agreement.component.html',
  styleUrls: ['./loan-agreement.component.css']
})
export class LoanAgreementComponent implements OnInit {

  createEditForm: FormGroup;
  @Input() product_id: any;
  @Input() productDetails: any;
  loanAgreementData: any;
  isLoanCreated: boolean;
  loanAgreementDataMaster: any;
  radioValue: any;
  pdf_viewer_object_values = {
    'boolean': false,
    'url': '',
    'title': ''
  }
  loading: boolean;

  constructor(private fb: FormBuilder, public http: HttpService, private message: NzMessageService,
    private router : Router,
    private route: ActivatedRoute,
    private sanitized: DomSanitizer) { 
      this.route.queryParams.subscribe(params => {
        if(params['id']){
          this.product_id = params['id']
          this.fetchLoanAgreement()
        }
      });
    }

    ngOnInit(): void {
      this.fetchLoanAgreementMaster()
    }

    fetchLoanAgreementMaster() {
      this.http.fetchLoanAgreementMaster().subscribe(res => {
        this.loanAgreementDataMaster = res['data']
        this.radioValue = this.loanAgreementDataMaster[0].id
        if (this.loanAgreementData) {
          this.radioValue = this.loanAgreementData.agreement.id
        }
      })
    }

    fetchLoanAgreement() {
      let data = {
        product_id: this.product_id
      };
      this.http.fetchLoanAgreement(data).subscribe(res => {
        this.loanAgreementData = res['data']
        if (this.loanAgreementData) {
          this.radioValue = this.loanAgreementData.agreement.id
          this.isLoanCreated = true
        } else {
          this.isLoanCreated = false
        }
        // this.message.success(res['message'])
      })
    }
  
    submitForm() {
      var data = {
        product: this.product_id,
        agreement: this.radioValue
      }
      this.loading = true
      this.http.createLoanAgreement(data).subscribe(res => {
        this.loading = false
        this.isLoanCreated = true
        this.fetchLoanAgreement()
        this.message.success(res['message'])
      }, (err) => {
        this.loading = false
      })
    }

    handleCancel() {
      this.pdf_viewer_object_values['boolean'] = false
      this.pdf_viewer_object_values['url'] = ''
    }

    sanatizeUrlToSafe(value) {
      return this.sanitized.bypassSecurityTrustResourceUrl(value);
    }
    modalPreview(value) {
      const generateloader = this.message.loading('Generating Report..', { nzDuration: 0 }).messageId;
      this.pdf_viewer_object_values['title'] = value.name
      this.pdf_viewer_object_values['url'] = value.agreement_file
      this.pdf_viewer_object_values['boolean'] = true
      this.message.remove(generateloader);
    }
}
