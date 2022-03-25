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
  product_id: any;
  @Input() isLoading: any;
  productDetails: any;

  constructor(private fb: FormBuilder, public http: HttpService, private message: NzMessageService,
    private router : Router,
    private route: ActivatedRoute,) {
      this.route.queryParams.subscribe(params => {
        if(params['id']){
          this.product_id = params['id']
        } else {
          this.product_id = null
        }
      });
    http.globalProductData.subscribe(res => {
      this.isLoading = true
      this.productDetails = res
      if (this.productDetails) {
        this.createEditFormFuction();
        this.productDetails.tenures?.forEach(element => {
          this.addTenure(element)
        });
      }
      this.isLoading = false
    })
   }

  ngOnInit(): void {
    this.createEditFormFuction();
  }
  createEditFormFuction() {
    this.createEditForm = this.fb.group({
      name: [ this.productDetails ? this.productDetails.name : '', [Validators.required]],
      product_master: [ this.productDetails ? this.productDetails.product_master.id.toString() : '1', [Validators.required]],
      activation_date: [ this.productDetails ? this.productDetails.activation_date : '', [Validators.required]],
      inactivation_date: [ this.productDetails ? this.productDetails.inactivation_date : ''],
      remarks: [ this.productDetails ? this.productDetails.remarks : ''],
      tenures: this.fb.array([]),
      })
    if (this.productDetails) {
      this.fetchNBFCdata()
    }

    if (this.router.url.includes('view-product')) {
      this.createEditForm.disable()
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
        rate_of_interest: [ data ? data.rate_of_interest : '', [Validators.required]],
        emi_details: [ data ? data.emi_details : ''],
        advance_emi: [ data ? data.advance_emi : ''],
        emi_type: [ data ? data.emi_type : 'Single'],
      });
    } else {
      return this.fb.group({
        tenure_unit: ['Months', [Validators.required]],
        tenure: [''],
        no_of_emis: [''],
        rate_of_interest: ['', [Validators.required]],
        emi_details: [''],
        advance_emi: [''],
        emi_type: ['Single'],
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
    if ((!this.createEditForm.touched || this.createEditForm.touched) && this.createEditForm.pristine) {
      this.message.warning('data saved already')
      return false
    }
    let data;
    if (this.createEditForm.value.tenures[0]) {
      data = {
        activation_date: moment(this.createEditForm.get('activation_date').value).format("YYYY-MM-DD"),
        inactivation_date: this.createEditForm.get('inactivation_date').value ? moment(this.createEditForm.get('inactivation_date').value).format("YYYY-MM-DD") : '',
        name: this.createEditForm.value.name,
        product_master: this.createEditForm.value.product_master,
        remarks: this.createEditForm.value.remarks,
        tenures: this.createEditForm.value.tenures
      }          
    } else {
      data = {
        activation_date: moment(this.createEditForm.get('activation_date').value).format("YYYY-MM-DD"),
        inactivation_date: this.createEditForm.get('inactivation_date').value ? moment(this.createEditForm.get('inactivation_date').value).format("YYYY-MM-DD") : '',
        name: this.createEditForm.value.name,
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
  removeSlab(control, slab_index) {
    control = <FormArray>this.createEditForm.get('tenures');
    console.log(control);
    if (control.value[slab_index].id) {
      control.value[slab_index].is_deleted = true;
      control.controls.splice(slab_index, 1)
    } else {
      control.value[slab_index].is_deleted = false;
      control.removeAt(slab_index)
    }
  }

  createProductDetail(data) {
    this.isLoading = true
    this.http.createProductDetail(data).subscribe(res => {
      this.isLoading = false
      this.product_id = res['data'].product_id
      this.router.navigate([], {
      relativeTo: this.route, queryParams: {id: this.product_id}});
      this.message.success(res['message'])
    })
  }
  
  editProductDetail(data) {
    this.isLoading = true
    this.http.editProductDetail(data, this.product_id).subscribe(res => {
      this.isLoading = false
      // this.product_id = res['data'].product_id
      // this.router.navigate([], {
      // relativeTo: this.route, queryParams: {id: this.product_id}});
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
  }

}
