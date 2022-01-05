import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-master-partners',
  templateUrl: './master-partners.component.html',
  styleUrls: ['./master-partners.component.css']
})
export class MasterPartnersComponent implements OnInit {
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

  constructor(private fb: FormBuilder, public http: HttpService, private message: NzMessageService,
    private router: Router,
    private route: ActivatedRoute,) {

    http.globalProductData.subscribe(res => {
      this.productDetails = res

      this.createEditFormFuction(this.productDetails);
    })
  }

  ngOnInit(): void {
    this.createEditFormFuction();
    this.createSlabForm()
    this.createSlabFormActivation()
    this.createSlabFormAcquisition_Customers()
    this.fetchMasterPartnerData()
  }
  
  createEditFormFuction(productDetails?) {
    this.createEditForm = this.fb.group({
      name: ['', [Validators.required]],
      no_of_partner: ['', [Validators.required]],
      amount_per_partner: ['', [Validators.required]],
    })
  }

  fetchMasterPartnerData() {
    let data;
    this.http.fetchMasterPartner(data).subscribe(res => {
      this.masterParnerData = res['data'].results
      // this.message.success(res['message'])
    })
  }

  // **************** At the time of acquisition of partners Start ****************** //
  createSlabForm(slab?: any) {
    this.slap_based_form = this.fb.group({
      slab_array: this.fb.array([])
    });
    // adding control in slab_array
    if (slab) {
      slab.slab_wise_values.forEach(element => {
        this.add(element);
      });
    } else {
      this.add();
    }
  }
  private addSlabControls(data?): FormGroup {
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
  get slab_array(): FormArray {
    return <FormArray>this.slap_based_form.get('slab_array');
  }
  add(data?) {
    this.slab_array.push(this.addSlabControls(data))
  }
  // **************** At the time of acquisition of partners End ****************** //
  // **************** At the time of activation of partners Start ****************** //
  createSlabFormActivation(slab?: any) {
    this.slap_based_form_Activation = this.fb.group({
      time_period: ['', [Validators.required]],
      slab_array_Activation: this.fb.array([])
    });
    // adding control in slab_array_Activation
    if (slab) {
      slab.slab_wise_values.forEach(element => {
        this.add_Activation(element);
      });
    } else {
      this.add_Activation();
    }
  }
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
  get slab_array_Activation(): FormArray {
    return <FormArray>this.slap_based_form_Activation.get('slab_array_Activation');
  }
  add_Activation(data?) {
    this.slab_array_Activation.push(this.addSlabControlsActivation(data))
  }
  // **************** At the time of activation of partners End ****************** //
  // **************** At the time of acquisition of customers Start ****************** //
  createSlabFormAcquisition_Customers(slab?: any) {
    this.slap_based_form_Acquisition_Customers = this.fb.group({
      slab_array_Acquisition_Customers: this.fb.array([])
    });
    // adding control in slab_array_Acquisition_Customers
    if (slab) {
      slab.slab_wise_values.forEach(element => {
        this.add_Acquisition_Customers(element);
      });
    } else {
      this.add_Acquisition_Customers();
    }
  }
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
  get slab_array_Acquisition_Customers(): FormArray {
    return <FormArray>this.slap_based_form_Acquisition_Customers.get('slab_array_Acquisition_Customers');
  }
  add_Acquisition_Customers(data?) {
    this.slab_array_Acquisition_Customers.push(this.addSlabControlsAcquisition_Customers(data))
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
    this.slap_based_form.value.slab_array.forEach(element => {
      slab.push(
        {
          partner_master: this.createEditForm.value.name,
          partner: '',
          trigger_master: element.trigger_master,
          min_amount: element.min_amount,
          max_amount: element.max_amount,
          commission: element.commission,
          time_period: element.time_period,
        }
      )
    });
    this.slap_based_form_Activation.value.slab_array_Activation.forEach(element => {
      slab.push(
        {
          partner_master: this.createEditForm.value.name,
          partner: '',
          trigger_master: element.trigger_master,
          min_amount: element.min_amount,
          max_amount: element.max_amount,
          commission: element.commission,
          time_period: this.slap_based_form_Activation.value.time_period,
        }
      )
    });
    this.slap_based_form_Acquisition_Customers.value.slab_array_Acquisition_Customers.forEach(element => {
      slab.push(
        {
          partner_master: this.createEditForm.value.name,
          partner: '',
          trigger_master: element.trigger_master,
          min_amount: element.min_amount,
          max_amount: element.max_amount,
          commission: element.commission,
          time_period: element.time_period,
        }
      )
    });
    let data = {
      data : [
        {
          master_partner: this.createEditForm.value.name,
          product: this.product_id,
          no_of_partner: this.createEditForm.value.no_of_partner,
          amount_per_partner: this.createEditForm.value.amount_per_partner,
          slabs: slab,
        }
      ]
    }
    this.http.createPartnerPayout(data).subscribe( res => {
      this.message.success(res['message'])
    })
  }
  editMasterProduct() {
    // this.http.editProductDetail(this.createEditForm.value, this.partnermaster_id).subscribe( res => {
    //   this.message.success(res['message'])
    // })
  }

}
