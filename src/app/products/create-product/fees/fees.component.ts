import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
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
  feeTypeData: any;
  frequencyData: any;
  triggerData: any;
  debounce: any;

  constructor(private fb: FormBuilder, public http: HttpService, private message: NzMessageService,
    private router : Router,
    private route: ActivatedRoute,) { }

    ngOnInit(): void {
      this.createEditFormFuction()
      this.route.queryParams.subscribe(params => {
        if(params['id']){
          this.product_id = params['id']
        }
        // if (this.product_id) {
        //   this.fetchPartnerPayout()
        // } else {
        //   this.createEditFormFuction()
        // }
      });
    }
  createEditFormFuction(data?) {
    this.createEditForm = this.fb.group({
      fees: this.fb.array([]),
    })
    this.setFormData(data)
  }
  get fees(): FormArray {
    return <FormArray>this.createEditForm.get('fees');
  }

  addFees(data?) {
    this.fees.push(this.addSlabControlsFees(data))
  }
  public addSlabControlsFees(data): FormGroup {
    return this.fb.group({
      fees_type : ['', [Validators.required]],
      frequency : ['', [Validators.required]],
      start_month : ['', [Validators.required]],
      buffer_months : ['', [Validators.required]],
      trigger : ['', [Validators.required]],
      slab_specific : [true, [Validators.required]],
      amount_include_gst : [true, [Validators.required]],
      gst_rate : ['', [Validators.required]],
      active_start_month : ['', [Validators.required]],
      active_end_month : ['', [Validators.required]],
      threshold_min : ['', [Validators.required]],
      threshold_max : ['', [Validators.required]],
      slabs: this.fb.array([this.addSlabControls()]),
    });
  }

  public addSlabControls(data?): FormGroup {
    return this.fb.group({
      minimum_charge: ['', [Validators.required]],
      maximum_charge: ['', [Validators.required]],
      amount: ['', [Validators.required]]
    });
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
    this.addFees(data)
  }
  
  submitForm() {
    console.log(this.createEditForm.value)
    // this.createProductDetail();
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

}
