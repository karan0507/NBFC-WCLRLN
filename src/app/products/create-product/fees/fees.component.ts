import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-fees',
  templateUrl: './fees.component.html',
  styleUrls: ['./fees.component.css']
})
export class FeesComponent implements OnInit {
  createEditForm: FormGroup;
  product_id: any;
  @Input() productDetails: any;
  
  time_period_arr = [
    { name: '1 Month', value: 1 },
    { name: '2 Months', value: 2 },
    { name: '3 Months', value: 3 },
    { name: '4 Months', value: 4 },
    { name: '5 Months', value: 5 },
    { name: '6 Months', value: 6 },
    { name: '7 Months', value: 7 },
    { name: '8 Months', value: 8 },
    { name: '9 Months', value: 9 },
    { name: '10 Months', value: 10 },
    { name: '11 Months', value: 11 },
    { name: '12 Months', value: 12 }
  ]
  time_period_arr1 = [
    { name: '0 Month', value: 0 },
    { name: '1 Month', value: 1 },
    { name: '2 Months', value: 2 },
    { name: '3 Months', value: 3 },
    { name: '4 Months', value: 4 },
    { name: '5 Months', value: 5 },
    { name: '6 Months', value: 6 },
    { name: '7 Months', value: 7 },
    { name: '8 Months', value: 8 },
    { name: '9 Months', value: 9 },
    { name: '10 Months', value: 10 },
    { name: '11 Months', value: 11 },
    { name: '12 Months', value: 12 }
  ]
  feeTypeData: any;
  frequencyData: any;
  triggerData: any;
  debounce: any;
  isFeesCreated: any;
  feesData: any;
  loading: boolean;

  constructor(private fb: FormBuilder, public http: HttpService, private message: NzMessageService,
    private router : Router,
    private route: ActivatedRoute,) { }

    ngOnInit(): void {
      this.createEditFormFuction()
      this.route.queryParams.subscribe(params => {
        if(params['id']){
          this.product_id = params['id']
          if (this.product_id) {
            this.fetchProductFees()
          }
        } else {
          this.feesData = null
          this.createEditFormFuction()
        }
      });
    }
  fetchProductFees() {
    let data = {
      product_id: this.product_id
    };
    this.http.fetchProductFees(data).subscribe(res => {
      this.feesData = res['data']
      if (this.feesData[0]) {
        this.isFeesCreated = true
        this.createEditFormFuction(this.feesData);
      } else {
        this.isFeesCreated = false
      }
      // this.message.success(res['message'])
    })
  }
  createEditFormFuction(data?) {
    this.createEditForm = this.fb.group({
      fees: this.fb.array([]),
    })
    this.setFormData(data)
    
    if (this.router.url.includes('view-product')) {
      this.createEditForm.disable()
    }
  }
  get fees(): FormArray {
    return <FormArray>this.createEditForm.get('fees');
  }

  addFees(data?) {
    this.fees.push(this.addSlabControlsFees(data))
  }
  public addSlabControlsFees(data): FormGroup {
    if (data) {
      return this.fb.group({
        fees_type : [ data ? data.fees_type.id : '', [Validators.required]],
        frequency : [ data ? data.frequency.id : '', [Validators.required]],
        start_month : [ data ? data.start_month : '', [Validators.required]],
        buffer_months : [ data ? data.buffer_months : '', [Validators.required]],
        trigger : [ data ? data.trigger.id : '', [Validators.required]],
        slab_specific : [ data ? data.slab_specific : true, [Validators.required]],
        fees_based_on : [ data ? data.fees_based_on : 'Transaction Amount', [Validators.required]],
        amount_include_gst : [ data ? data.amount_include_gst : true, [Validators.required]],
        gst_rate : [ data ? data.gst_rate : ''],
        active_start_month : [ data ? data.active_start_month : '', [Validators.required]],
        active_end_month : [ data ? data.active_end_month : '', [Validators.required]],
        threshold_min : [ data ? data.threshold_min : '', [Validators.required]],
        threshold_max : [ data ? data.threshold_max : '', [Validators.required]],
        slabs: this.fb.array([]),
        id: [data ? data.id : ''],
        amount: [data?.amount ? data?.amount : ''],
        fee_calculation_type: [ data ? data?.fee_calculation_type :'Flat'],
        gst_flag: [ data ? data.gst_flag : true, [Validators.required]],
        activate_from: [ data?.activate_from ? data.activate_from : ''],
        deactivate_from: [ data?.deactivate_from ? data.deactivate_from : ''],
      });
    } else {
      return this.fb.group({
        fees_type : ['', [Validators.required]],
        frequency : ['', [Validators.required]],
        start_month : ['', [Validators.required]],
        buffer_months : ['', [Validators.required]],
        trigger : ['', [Validators.required]],
        slab_specific : [true, [Validators.required]],
        fees_based_on : ['Transaction Amount', [Validators.required]],
        amount_include_gst : [true, [Validators.required]],
        gst_rate : [''],
        active_start_month : ['', [Validators.required]],
        active_end_month : ['', [Validators.required]],
        threshold_min : ['', [Validators.required]],
        threshold_max : ['', [Validators.required]],
        slabs: this.fb.array([this.addSlabControls()]),
        amount: [''],
        fee_calculation_type: ['Flat'],
        gst_flag: [true, [Validators.required]],
        activate_from: [ ''],
        deactivate_from: [ ''],
      });
    }
  }

  public addSlabControls(data?): FormGroup {
    if (data) {
      return this.fb.group({
        minimum_charge: [ data ? data.minimum_charge : ''],
        maximum_charge: [ data ? data.maximum_charge : ''],
        amount: [ data ? data.amount : ''],
        id: [data ? data.id : ''],
        amount_include_gst: [data.amount_include_gst],
        fee_calculation_type: [data ? data?.fee_calculation_type : "Flat"]
      });
    } else {
      return this.fb.group({
        minimum_charge: [''],
        maximum_charge: [''],
        amount: [''],
        amount_include_gst: [true],
        fee_calculation_type: ["Flat"]
      });
    }
  }
  
  addSlabpartners(k, data?) {
    const control = <FormArray>this.createEditForm.get('fees')['controls'][k].get('slabs');
    control.push(this.addSlabControls(data))
  }

  get_fees(form) {
    return form.controls.fees.controls;
  }
  get_slabs(form) {
    return form.controls.slabs.controls;
  }

  setFormData(data: any) {
    if (data) {
      data.forEach((element, index) => {
        this.addFees(element)
        element.slabs?.forEach(slab => {
          this.addSlabpartners(index, slab)
        });
      });
      this.fetchFeeTypeMaster();
      this.fetchFrequencyMaster();
      this.fetchTriggerMaster();
    } else {
      this.addFees(data)
    }
  }
  
  submitForm() {
    if ((!this.createEditForm.touched || this.createEditForm.touched) && this.createEditForm.pristine) {
      this.message.warning('data saved already')
      return false
    }
    if (this.isFeesCreated) {
      this.editProductFees()
    } else {
      this.createProductFees()
    }
  }
  editProductFees() {
    this.createEditForm.value.fees.forEach(element => {
      element.gst_rate = element.gst_flag ? element.gst_rate : ''
      element.slabs = element.slab_specific ? element.slabs : []
      element.activate_from = element.activate_from ? moment(element.activate_from).format("YYYY-MM-DD") : ''
      element.deactivate_from = element.deactivate_from ? moment(element.deactivate_from).format("YYYY-MM-DD") : ''
      if (element.slab_specific) {
        element.amount = ''
      }
    });
    this.loading = true
    this.http.editProductFees(this.createEditForm.value, this.product_id).subscribe(res => {
      this.loading = false
      this.fetchProductFees()
      this.message.success(res['message'])
    }, (err) => {
      this.loading = false
    })
  }
  createProductFees() {
    this.createEditForm.value.fees.forEach(element => {
      element.gst_rate = element.gst_flag ? element.gst_rate : ''
      element.slabs = element.slab_specific ? element.slabs : []
      element.activate_from = element.activate_from ? moment(element.activate_from).format("YYYY-MM-DD") : ''
      element.deactivate_from = element.deactivate_from ? moment(element.deactivate_from).format("YYYY-MM-DD") : ''
      if (element.slab_specific) {
        element.amount = ''
      }
    });
    this.loading = true
    this.http.createProductFees(this.createEditForm.value, this.product_id).subscribe(res => {
      this.loading = false
      this.isFeesCreated = true
      this.fetchProductFees()
      this.message.success(res['message'])
    }, (err) => {
      this.loading = false
    })
  }

  fetchFeeTypeMaster() {
    let data;
    this.http.fetchFeeTypeMaster(data).subscribe(res => {
      this.feeTypeData = res['data'].results
      // this.message.success(res['message'])
    })
  }
  fetchFrequencyMaster() {
    let data;
    this.http.fetchFrequencyMaster(data).subscribe(res => {
      this.frequencyData = res['data'].results
      // this.message.success(res['message'])
    })
  }
  fetchTriggerMaster() {
    let data;
    this.http.fetchTriggerMaster(data).subscribe(res => {
      this.triggerData = res['data'].results
      // this.message.success(res['message'])
    })
  }
  
  searchStaticDataGlobalFunction(search_param) {
    clearTimeout(this.debounce);
    this.debounce = setTimeout(() => {
      // this.fetchMasterPartnerData(search_param);
    }, 500);
  }
  restrictType(event) {
    if (event.which == 107 || event.which == 109 || event.which == 69) {
      return false;
    }
  }

  removeSlab(control, index, slab_index) {
    control = <FormArray>this.createEditForm.get('fees')['controls'][index].get('slabs');
    console.log(control);
    if (control.value[slab_index].id) {
      control.value[slab_index].is_deleted = true;
      control.controls.splice(slab_index, 1)
    } else {
      control.value[slab_index].is_deleted = false;
      control.removeAt(slab_index)
    }
  }

  removeFees(control, slab_index) {
    control = <FormArray>this.createEditForm.get('fees');
    console.log(control);
    if (control.value[slab_index].id) {
      control.value[slab_index].is_deleted = true;
      control.controls.splice(slab_index, 1)
    } else {
      control.value[slab_index].is_deleted = false;
      control.removeAt(slab_index)
    }
  }
  removevalidators(k) {
  }
}
