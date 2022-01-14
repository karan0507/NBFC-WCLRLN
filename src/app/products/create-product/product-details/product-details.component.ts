import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    {name: 'Days', value: 'Days'},
    {name: 'Months', value: 'Months'},
    {name: 'Years', value: 'Years'},
  ]
  @Input() product_id: any;
  productDetails: any;

  constructor(private fb: FormBuilder, public http: HttpService, private message: NzMessageService,
    private router : Router,
    private route: ActivatedRoute,) {
    http.globalProductData.subscribe(res => {
      this.productDetails = res

      this.createEditFormFuction();
      this.productDetails.tenures.forEach(element => {
        this.addTenure(element)  
      });
    })
   }

  ngOnInit(): void {
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
      tenures: this.fb.array([]),
      })
    if (this.productDetails) {
      this.fetchNBFCdata()
    }
  }

  get tenures(): FormArray {
    return <FormArray>this.createEditForm.get('tenures');
  }

  addTenure(data?) {
    this.tenures.push(this.addSlabControlsTenure(data))
  }
  public addSlabControlsTenure(data): FormGroup {
    if (data) {
      return this.fb.group({
        id: [data.id],
        tenure_unit: [ data ? data.tenure_unit : 'Months', [Validators.required]],
        tenure: [ data ? data.tenure : ''],
        no_of_emis: [ data ? data.no_of_emis : ''],
        rate_of_interest: [ data ? data.rate_of_interest : ''],
        emi_details: [ data ? data.emi_details : ''],
        advance_emi: [ data ? data.advance_emi : ''],
      });
    } else {
      return this.fb.group({
        tenure_unit: ['Months', [Validators.required]],
        tenure: [''],
        no_of_emis: [''],
        rate_of_interest: [''],
        emi_details: [''],
        advance_emi: [''],
      });
    }
  }

  get_tenures(form) {
    return form.controls.tenures.controls;
  }

  fetchNBFCdata() {
    this.http.fetchNBFCdata().subscribe(res => {
      this.nbfcsList = res.data.results
    });
    
  }

  submitForm() {
    let data;
    if (this.createEditForm.value.tenures[0]) {
      data = {
        activation_date: moment(this.createEditForm.get('activation_date').value).format("YYYY-MM-DD"),
        default_nbfc: this.createEditForm.value.default_nbfc,
        inactivation_date: moment(this.createEditForm.get('inactivation_date').value).format("YYYY-MM-DD"),
        name: this.createEditForm.value.name,
        product_code: this.createEditForm.value.product_code,
        product_master: this.createEditForm.value.product_master,
        remarks: this.createEditForm.value.remarks,
        tenures: this.createEditForm.value.tenures
      }          
    } else {
      data = {
        activation_date: moment(this.createEditForm.get('activation_date').value).format("YYYY-MM-DD"),
        default_nbfc: this.createEditForm.value.default_nbfc,
        inactivation_date: moment(this.createEditForm.get('inactivation_date').value).format("YYYY-MM-DD"),
        name: this.createEditForm.value.name,
        product_code: this.createEditForm.value.product_code,
        product_master: this.createEditForm.value.product_master,
        remarks: this.createEditForm.value.remarks
      }        
    }
    if (this.product_id) {
      this.editProductDetail(data);
    } else {
      this.createProductDetail(data);
    }
  }

  createProductDetail(data) {
    this.http.createProductDetail(data).subscribe(res => {
      this.product_id = res['data'].product_id
      this.router.navigate([], {
      relativeTo: this.route, queryParams: {id: this.product_id}});
      this.message.success(res['message'])
    })
  }
  
  editProductDetail(data) {
    this.http.editProductDetail(data, this.product_id).subscribe(res => {
      this.product_id = res['data'].product_id
      this.router.navigate([], {
      relativeTo: this.route, queryParams: {id: this.product_id}});
      this.message.success(res['message'])
    })
  }

  changeProductMaster(e) {
    if (e==2) {
      this.addTenure()
    } else {
      this.removeTenure()
    }
  }
  removeTenure() {
    this.createEditForm.controls.tenures['controls'].forEach((element, index) => {
      this.tenures.removeAt(index)
    });
  }

  setNoOfEmisValue(index) {
    this.createEditForm.controls.tenures['controls'][index].controls.no_of_emis.setValue(this.createEditForm.controls.tenures['controls'][index].controls.tenure.value)
    console.log(this.createEditForm.controls.tenures['controls'][index].controls.no_of_emis.value)
  }

}
