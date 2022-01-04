import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/services/http.service';

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
  @Input() productDetails: any;

  constructor(private fb: FormBuilder, public http: HttpService, private message: NzMessageService,
    private router : Router,
    private route: ActivatedRoute,) {
   }

  ngOnInit(): void {
    console.log(this.product_id)
    this.createEditForm = this.fb.group({
    name: ['', [Validators.required]],
    product_master: ['1', [Validators.required]],
    product_code: ['', [Validators.required]],
    activation_date: ['', [Validators.required]],
    inactivation_date: [''],
    instructions: ['', [Validators.required]],
    default_nbfc_id: ['', [Validators.required]],
    tenure_unit: ['Months', [Validators.required]],
    tenure: [''],
    rate_of_interest: [''],
    // no_of_emis: ['', [Validators.required]],
    // emi_details: ['', [Validators.required]],
    // buffer_days: ['', [Validators.required]],
    // advance_emi: ['', [Validators.required]],
    // date_of_emi: ['', [Validators.required]],
    })
    this.fetchNBFCdata()
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
    this.http.createProductDetail(this.createEditForm.value).subscribe(res => {
      this.product_id = res['data'].product_id
      this.message.success(res['message'])
    })
  }
  
  editProductDetail() {
    console.log(this.createEditForm.value)
    this.http.editProductDetail(this.createEditForm.value, this.product_id).subscribe(res => {
      this.product_id = res['data'].product_id
      this.message.success(res['message'])
    })
  }

}
