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
  @Input() productDetails: any;
  slap_based_form: FormGroup;
  slap_based_form_Activation: FormGroup;
  slap_based_form_Acquisition_Customers: FormGroup;
  
  constructor(private fb: FormBuilder, public http: HttpService, private message: NzMessageService,
    private router : Router,
    private route: ActivatedRoute,) { }

    ngOnInit(): void {
      console.log(this.product_id)
      this.createEditForm = this.fb.group({
        name: ['', [Validators.required]],
        unique_code: ['', [Validators.required]],
        no_of_partner: ['', [Validators.required]],
        amount_per_partner: ['', [Validators.required]],
        master: [true, [Validators.required]],
      })
      this.createSlabForm()
      this.createSlabFormActivation()
      this.createSlabFormAcquisition_Customers()
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
          partner_master: [ this.product_id, [Validators.required]],
          trigger_master: ['1', [Validators.required]],
          min_amount: ['', [Validators.required]],
          max_amount: ['', [Validators.required]],
          commission: ['', [Validators.required]],
          time_period: [0, [Validators.required]],
          commission_unit: ['%']
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
          partner_master: [ this.product_id, [Validators.required]],
          trigger_master: ['2', [Validators.required]],
          min_amount: ['', [Validators.required]],
          max_amount: ['', [Validators.required]],
          commission: ['', [Validators.required]],
          time_period: ['', [Validators.required]],
          commission_unit: ['%']
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
          partner_master: [ this.product_id, [Validators.required]],
          trigger_master: ['3', [Validators.required]],
          min_amount: ['', [Validators.required]],
          max_amount: ['', [Validators.required]],
          commission: ['', [Validators.required]],
          time_period: [0, [Validators.required]],
          commission_unit: ['₹']
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
      // this.createProductDetail();
    }
}
