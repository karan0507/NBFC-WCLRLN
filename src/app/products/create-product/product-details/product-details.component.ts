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
  dateTillEnd = [];
  indexOfLatestNach: any;

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
    for (let i = 0; i < 31; i++) {
      const data = {
        id: i + 1,
      };
      this.dateTillEnd.push(data);
    }
    this.createEditFormFuction();
  }
  createEditFormFuction() {
    this.createEditForm = this.fb.group({
      version_name: [ this.productDetails ? this.productDetails.version_name : ''],
      name: [ this.productDetails ? this.productDetails.name : '', [Validators.required]],
      expiry: [ this.productDetails ? this.productDetails.expiry : '', [Validators.required]],
      product_master: [ this.productDetails ? this.productDetails.product_master.id.toString() : '1', [Validators.required]],
      activation_date: [ this.productDetails ? this.productDetails.activation_date : '', [Validators.required]],
      inactivation_date: [ this.productDetails ? this.productDetails.inactivation_date : ''],
      bill_day: [ this.productDetails ? this.productDetails.bill_day : ''],
      due_days: [ this.productDetails ? this.productDetails.due_days : ''],
      product_type: [ this.productDetails ? this.productDetails.product_type : '' , [Validators.required]],
      tenures: this.fb.array([]),
      nach_date_time_mappings: this.fb.array([]),
      })
    if (this.productDetails) {
      this.fetchNBFCdata()
      this.setFormDataForNach(this.productDetails)
    }
    if (!this.product_id) {
      this.createEditForm.get('version_name').setValidators([Validators.required])
    } else {
      this.createEditForm.get('version_name').clearValidators()
    }

    if (this.router.url.includes('view-product')) {
      this.createEditForm.disable()
    }
  }

  setFormDataForNach(data) {
    if (data) {
      const nachArray = [];
      data.nach_date_time_mappings?.forEach((element) => {
        var date1 = new Date("2020-06-24" + element?.time_of_day);
        const nachDateTime = {
          day_of_month: element?.day_of_month,
          time_of_day: moment("2020-06-24 " + element?.time_of_day),
        };
        this.addNach(nachDateTime);
      });
    }
  }

  get_nachArr(form) {
    this.indexOfLatestNach =
      form.controls.nach_date_time_mappings.controls?.length;
    return form.controls.nach_date_time_mappings.controls;
  }
  
  addNach(data?) {
    this.nach.push(this.newNach(data));
  }

  newNach(data?): FormGroup {
    // const datePipe = new DatePipe('en-US');
    return this.fb.group({
      day_of_month: [data ? data?.day_of_month : null],
      time_of_day: [data ? data?.time_of_day : null],
    });
    // moment(data?.time_of_day).format('yyyy-mm ,HH:mm:ss')
  }
  
  get nach(): FormArray {
    return this.createEditForm.get("nach_date_time_mappings") as FormArray;
  }
  
  deleteNachByKey(i) {
    this.nach.removeAt(i);
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
    
    for (var i in this.createEditForm.value.nach_date_time_mappings) {
      if(this.createEditForm.value.nach_date_time_mappings.length == 0){
        this.createEditForm.value.nach_date_time_mappings = null;
      } else {
      if (
        this.createEditForm.value.nach_date_time_mappings[i].time_of_day &&
        this.createEditForm.value.nach_date_time_mappings[i].day_of_month
      ) {
        this.createEditForm.value.nach_date_time_mappings[i].time_of_day = moment(
          this.createEditForm.value.nach_date_time_mappings[i]?.time_of_day
        ).format("HH:mm:ss");
      } else {
        delete this.createEditForm.value.nach_date_time_mappings[i];
        this.deleteNachByKey(i);
      }
    }
    }
    if (this.createEditForm.value.tenures[0]) {
      data = {
        activation_date: moment(this.createEditForm.get('activation_date').value).format("YYYY-MM-DD"),
        inactivation_date: this.createEditForm.get('inactivation_date').value ? moment(this.createEditForm.get('inactivation_date').value).format("YYYY-MM-DD") : '',
        name: this.createEditForm.value.name,
        version_name : this.createEditForm.value.version_name,
        expiry: this.createEditForm.value.expiry,
        product_master: this.createEditForm.value.product_master,
        bill_day: this.createEditForm.value.bill_day,
        tenures: this.createEditForm.value.tenures,
        due_days: this.createEditForm.value.due_days,
        nach_date_time_mappings: this.createEditForm.value.nach_date_time_mappings,
        product_type: this.createEditForm.value.product_type
      }          
    } else {
      data = {
        activation_date: moment(this.createEditForm.get('activation_date').value).format("YYYY-MM-DD"),
        inactivation_date: this.createEditForm.get('inactivation_date').value ? moment(this.createEditForm.get('inactivation_date').value).format("YYYY-MM-DD") : '',
        name: this.createEditForm.value.name,
        version_name : this.createEditForm.value.version_name,
        expiry: this.createEditForm.value.expiry,
        product_master: this.createEditForm.value.product_master,
        bill_day: this.createEditForm.value.bill_day,
        due_days: this.createEditForm.value.due_days,
        nach_date_time_mappings: this.createEditForm.value.nach_date_time_mappings,
        product_type: this.createEditForm.value.product_type
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
    }, (err)=> {
      this.isLoading = false
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
    }, (err)=> {
      this.isLoading = false
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
