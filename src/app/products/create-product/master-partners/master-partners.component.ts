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
  masterParnerData: any = []
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
  debounce: any;
  masterParnerPayout: any = [];
  loading: boolean = true;
  isMasterCreated: boolean;
  isloading: boolean;

  constructor(private fb: FormBuilder, public http: HttpService, private message: NzMessageService,
    public router: Router,
    private route: ActivatedRoute,) {
  }

  ngOnInit(): void {
    this.createEditFormFuction()
    this.route.queryParams.subscribe(params => {
      if(params['id']){
        this.product_id = params['id']
        if (this.product_id) {
          this.fetchPartnerPayout()
        }
      } else {
        this.masterParnerPayout = null
        this.createEditFormFuction()
      }
    });
  }

  createEditFormFuction() {
    this.createEditForm = this.fb.group({
      master_partner_arr: this.fb.array([]),
    })
    this.setFormData(this.masterParnerPayout)
    
    if (this.router.url.includes('view-product')) {
      this.createEditForm.disable()
    }
  }

  get master_partner_arr(): FormArray {
    return <FormArray>this.createEditForm.get('master_partner_arr');
  }

  addMasterPartner(data?) {
    this.master_partner_arr.push(this.addSlabControlsMasterPartner(data))
  }
  public addSlabControlsMasterPartner(data): FormGroup {
    if (data) {
      return this.fb.group({
        id: [data.id],
        product: [this.product_id],
        name: [data.master_partner?.id, [Validators.required]],
        no_of_partner: [data.no_of_partner, [Validators.required]],
        amount_per_partner: [data.amount_per_partner, [Validators.required]],
        slab_array: this.fb.array([]),
        time_period: [data.time_period, [Validators.required]],
        slab_array_Activation: this.fb.array([]),
        slab_array_Acquisition_Customers: this.fb.array([])
      });
    } else {
      
      return this.fb.group({
        name: ['', [Validators.required]],
        no_of_partner: ['', [Validators.required]],
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
  setFormData(data?) {
    if (data?.length > 0) {
      data.forEach((element, index) => {
        this.addMasterPartner(element)
        element.slabs?.forEach(slab => {
          if (slab.trigger_master.id == 1) {
            this.setSlabControlsFormData(slab, index)
          }
          if (slab.trigger_master.id == 2) {
            this.setSlabControlsActivationFormData(slab, index)
          }
          if (slab.trigger_master.id == 3) {
            this.setSlabControlsAcquisition_CustomersFormData(slab, index)
          }
        });
      });
      this.fetchMasterPartnerData();
    } else {
      this.addMasterPartner()
    }
  }

  fetchPartnerPayout() {
    let data = {
      product: this.product_id,
      master: 'yes'
    };
    this.loading = true
    this.http.fetchPartnerPayout(data).subscribe(res => {
      this.loading = false
      this.masterParnerPayout = res['data'].results
      if (this.masterParnerPayout[0]) {
        this.createEditFormFuction();
        this.isMasterCreated = true
      } else {
        this.isMasterCreated = false
      }
      // this.message.success(res['message'])
    })
  }

  // **************** At the time of acquisition of partners Start ****************** //
  public addSlabControls(data?): FormGroup {
    if (data) {
      return this.fb.group({
        id: [data.id],
        trigger_master: [data.trigger_master.id],
        min_amount: [data.min_amount, [Validators.required]],
        max_amount: [data.max_amount, [Validators.required]],
        commission: [data.commission, [Validators.required]],
        time_period: [data.time_period],
      });
    } else {
      return this.fb.group({
        trigger_master: ['1'],
        min_amount: ['', [Validators.required]],
        max_amount: ['', [Validators.required]],
        commission: ['', [Validators.required]],
        time_period: [0],
      });
    }
  }
  addSlabpartners(k, data?) {
    const control = <FormArray>this.createEditForm.get('master_partner_arr')['controls'][k].get('slab_array');
    control.push(this.addSlabControls(data))
  }
  // **************** At the time of acquisition of partners End ****************** //
  // **************** At the time of activation of partners Start ****************** //
  private addSlabControlsActivation(data?): FormGroup {
    if (data) {
      return this.fb.group({
        id: [data.id],
        trigger_master: [data.trigger_master.id],
        min_amount: [data.min_amount, [Validators.required]],
        max_amount: [data.max_amount, [Validators.required]],
        commission: [data.commission, [Validators.required]],
        time_period: [data.time_period],
      });
    } else {
      return this.fb.group({
        trigger_master: ['2'],
        min_amount: ['', [Validators.required]],
        max_amount: ['', [Validators.required]],
        commission: ['', [Validators.required]],
        time_period: [0],
      });
    }
  }
  add_Activation(k, data?) {
    const control = <FormArray>this.createEditForm.get('master_partner_arr')['controls'][k].get('slab_array_Activation');
    control.push(this.addSlabControlsActivation(data))
  }
  // **************** At the time of activation of partners End ****************** //
  // **************** At the time of acquisition of customers Start ****************** //
  private addSlabControlsAcquisition_Customers(data?): FormGroup {
    if (data) {
      return this.fb.group({
        id: [data.id],
        trigger_master: [data.trigger_master.id],
        min_amount: [data.min_amount, [Validators.required]],
        max_amount: [data.max_amount, [Validators.required]],
        commission: [data.commission, [Validators.required]],
        time_period: [data.time_period],
      });
    } else {
      return this.fb.group({
        trigger_master: ['3'],
        min_amount: ['', [Validators.required]],
        max_amount: ['', [Validators.required]],
        commission: ['', [Validators.required]],
        time_period: [0],
      });
    }
  }
  add_Acquisition_Customers(k, data?) {
    const control = <FormArray>this.createEditForm.get('master_partner_arr')['controls'][k].get('slab_array_Acquisition_Customers');
    control.push(this.addSlabControlsAcquisition_Customers(data))
  }
  // **************** At the time of acquisition of customers End ****************** //

  submitForm() {
    if (this.isMasterCreated) {
      this.editMasterProduct()
    } else {
      this.addMasterProduct()
    }
  }
  addMasterProduct() {
    let slab = []
    let data = []
    this.createEditForm.value.master_partner_arr.forEach(form => {
      slab = []
      form.slab_array.forEach(element => {
        slab.push(
          {
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
          product: Number(this.product_id),
          no_of_partner: form.no_of_partner,
          amount_per_partner: form.amount_per_partner,
          slabs: slab,
        }
      )
    });
    let formdata = {
      data: data
    }
    this.isloading = true
    this.http.createPartnerPayout(formdata).subscribe(res => {
      this.isloading = false
      this.isMasterCreated = true
      this.fetchPartnerPayout()
      this.message.success(res['message'])
    }, (err)=> {
      this.isloading = false
    })
  }
  editMasterProduct() {
    let slab = []
    let data = []
    this.createEditForm.value.master_partner_arr.forEach(form => {
      slab = []
      form.slab_array.forEach(element => {
        slab.push(
          {
            id: element.id,
            trigger_master: element.trigger_master,
            min_amount: element.min_amount,
            max_amount: element.max_amount,
            commission: element.commission,
            time_period: element.time_period,
            is_deleted: element.is_deleted,
          }
        )
      });
      form.slab_array_Activation.forEach(element => {
        slab.push(
          {
            id: element.id,
            trigger_master: element.trigger_master,
            min_amount: element.min_amount,
            max_amount: element.max_amount,
            commission: element.commission,
            time_period: form.time_period,
            is_deleted: element.is_deleted,
          }
        )
      });
      form.slab_array_Acquisition_Customers.forEach(element => {
        slab.push(
          {
            id: element.id,
            trigger_master: element.trigger_master,
            min_amount: element.min_amount,
            max_amount: element.max_amount,
            commission: element.commission,
            time_period: element.time_period,
            is_deleted: element.is_deleted,
          }
        )
      });
      data.push(
        {
          id: form.id,
          master_partner: form.name,
          product: Number(this.product_id),
          no_of_partner: form.no_of_partner,
          amount_per_partner: form.amount_per_partner,
          slabs: slab,
        }
      )
    });
    let formdata = {
      data: data
    }
    this.isloading = true
    this.http.createPartnerPayout(formdata).subscribe(res => {
      this.isloading = false
      this.fetchPartnerPayout()
      this.message.success(res['message'])
    }, (err)=> {
      this.isloading = false
    })
  }

  searchStaticDataGlobalFunction(search_param) {
    clearTimeout(this.debounce);
    this.debounce = setTimeout(() => {
      // this.fetchMasterPartnerData(search_param);
    }, 500);
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

  setSlabControlsFormData(data, i) {
    if (data) {
      this.addSlabpartners(i, data)
    }
  }
  setSlabControlsActivationFormData(data, i) {
    if (data) {
      this.add_Activation(i, data)
    }
  }
  setSlabControlsAcquisition_CustomersFormData(data, i) {
    if (data) {
      this.add_Acquisition_Customers(i, data)
    }
  }

  removeSlab(control, index, slab_index) {
    control = <FormArray>this.createEditForm.get('master_partner_arr')['controls'][index].get('slab_array');
    console.log(control);
    if (control.value[slab_index].id) {
      control.value[slab_index].is_deleted = true;
      control.controls.splice(slab_index, 1)
    } else {
      control.value[slab_index].is_deleted = false;
      control.removeAt(slab_index)
    }
  }
  removeSlabActivation(control, index, slab_index) {
    control = <FormArray>this.createEditForm.get('master_partner_arr')['controls'][index].get('slab_array_Activation');
    console.log(control);
    if (control.value[slab_index].id) {
      control.value[slab_index].is_deleted = true;
      control.controls.splice(slab_index, 1)
    } else {
      control.value[slab_index].is_deleted = false;
      control.removeAt(slab_index)
    }
  }
  removeSlabAcquisitionCustomers(control, index, slab_index) {
    control = <FormArray>this.createEditForm.get('master_partner_arr')['controls'][index].get('slab_array_Acquisition_Customers');
    console.log(control);
    if (control.value[slab_index].id) {
      control.value[slab_index].is_deleted = true;
      control.controls.splice(slab_index, 1)
    } else {
      control.value[slab_index].is_deleted = false;
      control.removeAt(slab_index)
    }
  }

}
