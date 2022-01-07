import { Component, Input, OnInit } from '@angular/core';
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
  @Input() product_id: any;
  @Input() productDetails: any;
  productlimit_id: any;
  productlimitData: any;
  constructor(private fb: FormBuilder, public http: HttpService, private message: NzMessageService,
    private router: Router,
    private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.createEditFormFuction();
    if (this.product_id) {
      this.fetchProductLimits()
    } else {
    }
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
      product: [this.product_id, [Validators.required]],
      first_txn_limit: [this.productlimitData ? this.productlimitData.first_txn_limit : '', [Validators.required]],
      global_txn_limit: [this.productlimitData ? this.productlimitData.global_txn_limit : '', [Validators.required]],
      daily_txn_limit: [this.productlimitData ? this.productlimitData.daily_txn_limit : '', [Validators.required]],
      disbursement_min_amount: [this.productlimitData ? this.productlimitData.disbursement_min_amount : '', [Validators.required]],
      disbursement_max_amount: [this.productlimitData ? this.productlimitData.disbursement_max_amount : '', [Validators.required]],
      intrest_min_percentage: [this.productlimitData ? this.productlimitData.intrest_min_percentage : '', [Validators.required]],
      intrest_max_percentage: [this.productlimitData ? this.productlimitData.intrest_max_percentage : '', [Validators.required]],
    })
  }

  submitForm() {
    if (this.productlimit_id) {
      this.editLimits()
    } else {
      this.createLimits();
    }
  }
  createLimits() {
    this.http.createLimits(this.createEditForm.value).subscribe(res => {
      this.productlimit_id = res['data'].productlimit_id
      this.message.success(res['message'])
    })
  }
  editLimits() {
    this.http.editLimits(this.createEditForm.value, this.product_id).subscribe(res => {
      this.productlimit_id = res['data'].productlimit_id
      this.message.success(res['message'])
    })
  }

}
