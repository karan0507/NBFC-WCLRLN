import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-transaction-config',
  templateUrl: './transaction-config.component.html',
  styleUrls: ['./transaction-config.component.css']
})
export class TransactionConfigComponent implements OnInit {

  createEditForm: FormGroup;
  product_id: any;
  api_calling_loader: boolean;
  transactionConfig: any;
  loading: boolean;

  
  constructor(private fb: FormBuilder, public http: HttpService, private message: NzMessageService,
    public router: Router,
    private route: ActivatedRoute,) {
      this.route.queryParams.subscribe(params => {
        if (params['id']) {
          this.product_id = params['id']
          if (this.product_id) {
            this.fetchOnboardingRules()
          }
        } else {
          this.createEditFormFuction()
        }
      });
      // this.fetchEmploymentTypeData()
    }

  ngOnInit(): void {
  }

  createEditFormFuction(data?) {
    this.createEditForm = this.fb.group({
      allow_scan_and_pay: [data ? data.allow_scan_and_pay : false],
      allow_bank_transfer: [data ? data.allow_bank_transfer : false],
      allow_repayment: [data ? data.allow_repayment : false],
      allow_imps: [data ? data.allow_imps : false],
      allow_neft: [data ? data.allow_neft : false],
      allow_bbps: [data ? data.allow_bbps : false],
    })

  }

  fetchOnboardingRules() {
    let data = {
      product_id: this.product_id
    };
    this.api_calling_loader = true
    this.http.fetchTransactionConfig(data).subscribe(res => {
      if (res['success']) {
        this.transactionConfig = res['data']
        this.createEditFormFuction(this.transactionConfig)
      } else {
        this.createEditFormFuction()
      }
      this.api_calling_loader = false
    }, (err) => {
      this.api_calling_loader = false
    })
  }

  submitForm() {
    if ((!this.createEditForm.touched || this.createEditForm.touched) && this.createEditForm.pristine) {
      this.message.warning('data saved already')
      return false
    }
    let data = {
      // product_priority : product_priority,
      // field_rules : this.createEditForm.value.field_rules,
      product: this.product_id,
      allow_scan_and_pay : this.createEditForm.get('allow_scan_and_pay').value,
      allow_bank_transfer : this.createEditForm.get('allow_bank_transfer').value,
      allow_repayment : this.createEditForm.get('allow_repayment').value,
      allow_imps : this.createEditForm.get('allow_imps').value,
      allow_neft : this.createEditForm.get('allow_neft').value,
      allow_bbps : this.createEditForm.get('allow_bbps').value,
    }
    console.log(data)
    // return;
    this.createRules(data);
    // this.createProductDetail();
  }

  createRules(data) {
    this.loading = true
    this.http.createRules(data, this.product_id).subscribe(res => {
      this.loading = false
      this.fetchOnboardingRules()
      this.message.success(res['message'])
    }, (err) => {
      this.loading = false
    })
  }
}
