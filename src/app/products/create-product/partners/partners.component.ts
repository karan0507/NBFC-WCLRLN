import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent implements OnInit {

  createEditForm: FormGroup;
  @Input() product_id: any;
  productDetails: any;
  slap_based_form: FormGroup;
  slap_based_form_Activation: FormGroup;
  slap_based_form_Acquisition_Customers: FormGroup;
  partnermaster_id: any;
  masterParnerData: any
  time_period_arr = [
    {name: '1 Month', value: 1},
    {name: '2 Months', value: 2},
    {name: '3 Months', value: 3},
    {name: '4 Months', value: 4},
    {name: '5 Months', value: 5},
    {name: '6 Months', value: 6},
    {name: '7 Months', value: 7},
    {name: '8 Months', value: 8},
    {name: '9 Months', value: 9},
    {name: '10 Months', value: 10},
    {name: '11 Months', value: 11},
    {name: '12 Months', value: 12}
  ]
  partnerData: any;
  masterParnerPayout: any;

  constructor(private fb: FormBuilder, public http: HttpService, private message: NzMessageService,
    private router: Router,
    private route: ActivatedRoute,) {
  }

  ngOnInit(): void {
    this.createEditFormFuction();
    this.fetchPartnerPayout()
  }
  
  createEditFormFuction() {
    this.createEditForm = this.fb.group({
      master_partner_arr: this.fb.array([]),
    })
    this.addMasterPartner()
  }
  get master_partner_arr(): FormArray {
    return <FormArray>this.createEditForm.get('master_partner_arr');
  }
  
  addMasterPartner(data?) {
    this.master_partner_arr.push(this.addSlabControlsMasterPartner(data))
  }
  public addSlabControlsMasterPartner(data: any): FormGroup {
    if (data) {
      return this.fb.group({
        // min_amount: [data.start_amount, [Validators.required, Validators.min(1)]],
        // max_amount: [data.end_amount, [Validators.min(1)]],
        // commission: [data.incentive_amount > 0 ? data.incentive_amount : data.incentive_percentage, [Validators.required, Validators.min(0)]],
        // incentive_unit: [data.incentive_amount > 0 ? '₹' : '%', [Validators.required]],
        // id: [data.id]
      });
    } else {
      return this.fb.group({
        name: ['', [Validators.required]],
        partnersName: [[], [Validators.required]],
        // no_of_partner: ['', [Validators.required]],
        amount_per_partner: ['', [Validators.required]],
        slab_array: this.fb.array([this.addSlabControls()]),
        time_period: ['', [Validators.required]],
        slab_array_Activation: this.fb.array([this.addSlabControlsActivation()]),
        slab_array_Acquisition_Customers: this.fb.array([this.addSlabControlsAcquisition_Customers()])
      });
    }
  }

  fetchMasterPartnerData() {
    let data;
    this.http.fetchMasterPartner(data).subscribe(res => {
      this.masterParnerData = res['data'].results
      // this.message.success(res['message'])
    })
  }
  fetchPartnerData() {
    let data;
    this.http.fetchPartner(data).subscribe(res => {
      this.partnerData = res['data'].results
      // this.message.success(res['message'])
    })
  }

  
  fetchPartnerPayout() {
    let data = {
      product: this.product_id,
      master: 'no'
    };
    this.http.fetchPartnerPayout(data).subscribe(res => {
      this.masterParnerPayout = res['data'].results
      // this.message.success(res['message'])
    })
  }

  // **************** At the time of acquisition of partners Start ****************** //
  public addSlabControls(data?): FormGroup {
    if (data) {
      return this.fb.group({
        // min_amount: [data.start_amount, [Validators.required, Validators.min(1)]],
        // max_amount: [data.end_amount, [Validators.min(1)]],
        // commission: [data.incentive_amount > 0 ? data.incentive_amount : data.incentive_percentage, [Validators.required, Validators.min(0)]],
        // incentive_unit: [data.incentive_amount > 0 ? '₹' : '%', [Validators.required]],
        // id: [data.id]
      });
    } else {
      return this.fb.group({
        partner_master: [ this.product_id],
        trigger_master: ['1'],
        min_amount: ['', [Validators.required]],
        max_amount: ['', [Validators.required]],
        commission: ['', [Validators.required]],
        time_period: [0],
      });
    }
  }
  addSlabpartners(k, i) {
    const control = <FormArray>this.createEditForm.get('master_partner_arr')['controls'][k].get('slab_array');
    control.push(this.addSlabControls())
  }
  // **************** At the time of acquisition of partners End ****************** //
  // **************** At the time of activation of partners Start ****************** //
  private addSlabControlsActivation(data?): FormGroup {
    if (data) {
      return this.fb.group({
        // min_amount: [data.start_amount, [Validators.required, Validators.min(1)]],
        // max_amount: [data.end_amount, [Validators.min(1)]],
        // commission: [data.incentive_amount > 0 ? data.incentive_amount : data.incentive_percentage, [Validators.required, Validators.min(0)]],
        // incentive_unit: [data.incentive_amount > 0 ? '₹' : '%', [Validators.required]],
        // id: [data.id]
      });
    } else {
      return this.fb.group({
        partner_master: [ this.product_id],
        trigger_master: ['2'],
        min_amount: ['', [Validators.required]],
        max_amount: ['', [Validators.required]],
        commission: ['', [Validators.required]],
        time_period: [0],
      });
    }
  }
  add_Activation(k) {
    const control = <FormArray>this.createEditForm.get('master_partner_arr')['controls'][k].get('slab_array_Activation');
    control.push(this.addSlabControlsActivation())
  }
  // **************** At the time of activation of partners End ****************** //
  // **************** At the time of acquisition of customers Start ****************** //
  private addSlabControlsAcquisition_Customers(data?): FormGroup {
    if (data) {
      return this.fb.group({
        // min_amount: [data.start_amount, [Validators.required, Validators.min(1)]],
        // max_amount: [data.end_amount, [Validators.min(1)]],
        // commission: [data.incentive_amount > 0 ? data.incentive_amount : data.incentive_percentage, [Validators.required, Validators.min(0)]],
        // incentive_unit: [data.incentive_amount > 0 ? '₹' : '%', [Validators.required]],
        // id: [data.id]
      });
    } else {
      return this.fb.group({
        partner_master: [ this.product_id],
        trigger_master: ['3'],
        min_amount: ['', [Validators.required]],
        max_amount: ['', [Validators.required]],
        commission: ['', [Validators.required]],
        time_period: [0],
      });
    }
  } 
  add_Acquisition_Customers(k) {
    const control = <FormArray>this.createEditForm.get('master_partner_arr')['controls'][k].get('slab_array_Acquisition_Customers');
    control.push(this.addSlabControlsAcquisition_Customers())
  }
  // **************** At the time of acquisition of customers End ****************** //

  submitForm() {
    // if (this.product_id) {
    //   this.editMasterProduct()
    // } else {
      this.addMasterProduct()
    // }
    // console.log(this.slap_based_form.value)
    // console.log(this.slap_based_form_Acquisition_Customers.value)
    // console.log(this.slap_based_form_Activation.value)
  }
  addMasterProduct() {
    
    let slab = []
    let data = []
    this.createEditForm.value.master_partner_arr.forEach(form => {
      slab = []
      form.slab_array.forEach(element => {
        slab.push(
          {
            product: this.product_id,
            partner_master: form.name,
            partner: '',
            trigger_master: element.trigger_master,
            min_amount: element.min_amount,
            max_amount: element.max_amount,
            commission: element.commission,
            time_period: element.time_period,
          }
        )
      });
      form.slab_array_Activation.forEach(element => {
        slab.push(
          {
            product: this.product_id,
            partner_master: form.name,
            partner: '',
            trigger_master: element.trigger_master,
            min_amount: element.min_amount,
            max_amount: element.max_amount,
            commission: element.commission,
            time_period: form.time_period,
          }
        )
      });
      form.slab_array_Acquisition_Customers.forEach(element => {
        slab.push(
          {
            product: this.product_id,
            partner_master: form.name,
            partner: '',
            trigger_master: element.trigger_master,
            min_amount: element.min_amount,
            max_amount: element.max_amount,
            commission: element.commission,
            time_period: element.time_period,
          }
        )
      });
      data.push(
        {
          master_partner: form.name,
          product: this.product_id,
          // no_of_partner: form.no_of_partner,
          amount_per_partner: form.amount_per_partner,
          partner_ids: form.partnersName,
          slabs: slab,
        }
      )
    });

    let formdata = {
      data : data
    }
    this.http.createPartnerPayout(formdata).subscribe( res => {
      this.message.success(res['message'])
    })
  }
  editMasterProduct() {
    // this.http.editProductDetail(this.createEditForm.value, this.partnermaster_id).subscribe( res => {
    //   this.message.success(res['message'])
    // })
  }
  get_master_partner_arr(form) {
    return form.controls.master_partner_arr.controls;
  }

  get_slab_array(form) {
    return form.controls.slab_array.controls;
  }
  get_slab_array_Activation(form) {
    return form.controls.slab_array_Activation.controls;
  }
  get_slab_array_Acquisition_Customers(form) {
    return form.controls.slab_array_Acquisition_Customers.controls;
  }
}
