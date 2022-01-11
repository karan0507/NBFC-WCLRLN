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
      slab_specific : ['', [Validators.required]],
      amount_include_gst : ['', [Validators.required]],
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
      maximum_charge: ['', [Validators.required]],
      minimum_charge: ['', [Validators.required]],
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
    
  }
  
  submitForm() {
    // this.createProductDetail();
  }

}
