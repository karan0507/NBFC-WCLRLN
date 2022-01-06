import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/services/http.service';
import * as moment from "moment";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  createEditForm: FormGroup;
  nbfcsList: any;
  tenureList = [
    {name: '3 Months', value: 3},
    {name: '6 Months', value: 6},
    {name: '9 Months', value: 9},
    {name: '12 Months', value: 12}
  ]
  @Input() product_id: any;
  productDetails: any;

  constructor(private fb: FormBuilder, public http: HttpService, private message: NzMessageService,
    private router : Router,
    private route: ActivatedRoute,) {
    http.globalProductData.subscribe(res => {
      this.productDetails = res

      this.createEditFormFuction();
    })
   }

  ngOnInit(): void {
    console.log(this.product_id)
    this.createEditFormFuction();
  }
  createEditFormFuction() {
    this.createEditForm = this.fb.group({
      name: [ this.productDetails ? this.productDetails.name : '', [Validators.required]],
      product_master: [ this.productDetails ? this.productDetails.product_master.id.toString() : '1', [Validators.required]],
      product_code: [ this.productDetails ? this.productDetails.product_code : '', [Validators.required]],
      activation_date: [ this.productDetails ? this.productDetails.activation_date : '', [Validators.required]],
      inactivation_date: [ this.productDetails ? this.productDetails.inactivation_date : ''],
      remarks: [ this.productDetails ? this.productDetails.remarks : '', [Validators.required]],
      default_nbfc: [ this.productDetails ? this.productDetails.default_nbfc?.id : '', [Validators.required]],
      tenure_unit: [ this.productDetails ? this.productDetails.tenure_unit : 'Months', [Validators.required]],
      tenure: [ this.productDetails ? this.productDetails.tenure : ''],
      rate_of_interest: [ this.productDetails ? this.productDetails.rate_of_interest : ''],
      // no_of_emis: ['', [Validators.required]],
      // emi_details: ['', [Validators.required]],
      // buffer_days: ['', [Validators.required]],
      // advance_emi: ['', [Validators.required]],
      // date_of_emi: ['', [Validators.required]],
      })
    if (this.productDetails) {
      this.fetchNBFCdata()
    }
  }

  fetchNBFCdata() {
    this.http.fetchNBFCdata().subscribe(res => {
      this.nbfcsList = res.data.results
    });
    
  }

  submitForm() {
    if (this.product_id) {
      this.editProductDetail();
    } else {
      this.createProductDetail();
    }
  }

  createProductDetail() {
    console.log(this.createEditForm.value)
    this.createEditForm.get('activation_date').setValue(moment(this.createEditForm.get('activation_date').value).format("YYYY-MM-DD"))
    this.createEditForm.get('inactivation_date').setValue(moment(this.createEditForm.get('inactivation_date').value).format("YYYY-MM-DD"))
    this.http.createProductDetail(this.createEditForm.value).subscribe(res => {
      this.product_id = res['data'].product_id
      this.router.navigate([], {
      relativeTo: this.route, queryParams: {id: this.product_id}});
      this.message.success(res['message'])
    })
  }
  
  editProductDetail() {
    console.log(this.createEditForm.value)
    this.createEditForm.get('activation_date').setValue(moment(this.createEditForm.get('activation_date').value).format("YYYY-MM-DD"))
    this.createEditForm.get('inactivation_date').setValue(moment(this.createEditForm.get('inactivation_date').value).format("YYYY-MM-DD"))
    this.http.editProductDetail(this.createEditForm.value, this.product_id).subscribe(res => {
      this.product_id = res['data'].product_id
      this.router.navigate([], {
      relativeTo: this.route, queryParams: {id: this.product_id}});
      this.message.success(res['message'])
    })
  }

}
