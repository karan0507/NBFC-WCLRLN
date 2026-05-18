import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-offline-emi',
  templateUrl: './offline-emi.component.html',
  styleUrls: ['./offline-emi.component.css']
})
export class OfflineEmiComponent implements OnInit {
  mobile = '';
  section = 1
  loading: boolean;
  userData: any;
  createEditForm: FormGroup;
  productList: any;
  tenureDetails: any;
  tenureData: any;

  constructor(private fb: FormBuilder, public http: HttpService, private message: NzMessageService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.fetchLoanApplicationEMIData()
    // this.createEditFormFuction()
  }

  fetchLoanApplicationEMIData() {
    var data = {
      mobile: this.mobile
      // mobile: '7887982535'
    }
    this.loading = true
    this.http.fetchLoanApplicationEMIData(data).subscribe(res => {
      if (res['success']) {
        console.log(res)
        this.userData = res['data']
        this.section = 2
        // this.createEditFormFuction()
      } else {
        this.message.error(res['message'])
      }
      this.loading = false
    }, (error) => {
      this.loading = false
    })

  }

  createOfflineEMI() {
    this.createEditForm.value.disbursement_date = moment(this.createEditForm.value.disbursement_date).format("YYYY-MM-DD")
    console.log(this.createEditForm.value)
    let data = this.createEditForm.value
    data['datapoint'] = 'create_entries_offline_emi'
    data['source'] = 'Onboarding'
    data['tenure'] = this.createEditForm.value.tenure.tenure
    this.loading = true
    this.http.editLoanData(data).subscribe(res => {
      if (res['success']) {
        console.log(res)
        this.message.success(res['message'])
        this.section = 1
        this.mobile = ''
      } else {
        this.message.error(res['message'])
      }
      this.loading = false
    }, (error) => {
      this.loading = false
    })
  }
  viewScheduler() {

  }
  createEditFormFuction() {
    this.createEditForm = this.fb.group({
      product_id: ['', [Validators.required]],
      loan_amount: ['', [Validators.required]],
      tenure: ['', [Validators.required]],
      mobile: [this.userData?.user_dataset?.mobile ? this.userData?.user_dataset?.mobile : '', [Validators.required]],
      disbursement_date: ['', [Validators.required]],
      roi: ['', [Validators.required]],
      pre_emi_interest: ['', [Validators.required]]
    })
  }

  fetchProductList(id) {
    let data = {
      product_master: 2
    }
    if (id) {
      data['id'] = id
    }
    this.http.fetchProductList(data).subscribe(res => {
      if (id) {
        this.tenureDetails = res['data'].results[0].tenures
      } else {
        this.productList = res['data'].results
      }
    }, (err) => {
    })
  }
  changeModel() {
    this.createEditForm.get('roi').setValue(this.tenureData.interest_rate)
  }

  fetchProductEMI(id) {
    this.http.fetchProductEMI(id).subscribe(res => {
      this.tenureData = res['data'][0]
    })
  }
}
