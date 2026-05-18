import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-limits',
  templateUrl: './limits.component.html',
  styleUrls: ['./limits.component.css']
})
export class LimitsComponent implements OnInit {

  createEditForm: FormGroup;
  product_id: any;
  @Input() productDetails: any;
  productlimit_id: any;
  productlimitData: any;
  loading: boolean;
  constructor(private fb: FormBuilder, public http: HttpService, private message: NzMessageService,
    private router: Router,
    private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['id']) {
        this.product_id = params['id']
        if (this.product_id) {
          this.fetchProductLimits()
        }
      } else {
        this.productlimitData = null
        this.productlimit_id = null
        this.createEditFormFuction();
      }
    });
    this.createEditFormFuction();
  }

  fetchProductLimits() {
    let data = {
      product_id: this.product_id
    }
    this.http.fetchProductLimits(data).subscribe(res => {
      this.productlimitData = res['data'].results[0]
      this.productlimit_id = res['data'].results[0]?.id
      this.createEditFormFuction();
    })
  }

  createEditFormFuction() {
    this.createEditForm = this.fb.group({
      product: [this.product_id],
      first_txn_limit: [this.productlimitData ? this.productlimitData.first_txn_limit : ''],
      global_txn_limit: [this.productlimitData ? this.productlimitData.global_txn_limit : ''],
      daily_txn_limit: [this.productlimitData ? this.productlimitData.daily_txn_limit : ''],
      disbursement_min_amount: [this.productlimitData ? this.productlimitData.disbursement_min_amount : ''],
      disbursement_max_amount: [this.productlimitData ? this.productlimitData.disbursement_max_amount : ''],
      interest_min_percentage: [this.productlimitData ? this.productlimitData.interest_min_percentage : ''],
      interest_max_percentage: [this.productlimitData ? this.productlimitData.interest_max_percentage : ''],
      global_min_limit: [this.productlimitData ? this.productlimitData.global_min_limit : ''],
      global_max_limit: [this.productlimitData ? this.productlimitData.global_max_limit : ''],
    })
    
    if (this.router.url.includes('view-product')) {
      this.createEditForm.disable()
    }
  }

  submitForm() {
    if (this.createEditForm.value.disbursement_min_amount && this.createEditForm.value.disbursement_max_amount) {
      if (this.createEditForm.value.disbursement_min_amount >= this.createEditForm.value.disbursement_max_amount) {
        this.message.error("Minimum Disbursement amount should be less than Maximum Disbursement amount")
        return false
      }
    }
    if (this.createEditForm.value.interest_min_percentage && this.createEditForm.value.interest_max_percentage) {
      if (this.createEditForm.value.interest_min_percentage >= this.createEditForm.value.interest_max_percentage) {
        this.message.error("Minimum interest % should be less than Maximum interest %")
        return false
      }
    }
    if (this.createEditForm.value.global_min_limit && this.createEditForm.value.global_max_limit) {
      if (this.createEditForm.value.global_min_limit >= this.createEditForm.value.global_max_limit) {
        this.message.error("Minimum interest % should be less than Maximum interest %")
        return false
      }
    }
    if ((!this.createEditForm.touched || this.createEditForm.touched) && this.createEditForm.pristine && this.productlimit_id) {
      this.message.warning('data saved already')
      return false
    }
    if (this.productlimit_id) {
      this.editLimits()
    } else {
      this.createLimits();
    }
  }
  createLimits() {
    this.loading = true
    this.http.createLimits(this.createEditForm.value).subscribe(res => {
      this.loading = false
      this.productlimit_id = res['data'].productlimit_id
      this.http.limitCollapse.next()
      this.fetchProductLimits()
      this.message.success(res['message'])
    }, (err)=> {
      this.loading = false
    })
  }
  editLimits() {
    this.loading = true
    this.http.editLimits(this.createEditForm.value, this.product_id).subscribe(res => {
      this.loading = false
      this.productlimit_id = res['data'].productlimit_id
      this.http.limitCollapse.next()
      this.fetchProductLimits()
      this.message.success(res['message'])
    },(err)=> {
      this.loading = false
    })
  }

}
