import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-nbfcs',
  templateUrl: './nbfcs.component.html',
  styleUrls: ['./nbfcs.component.css']
})
export class NbfcsComponent implements OnInit {

  createEditForm: FormGroup;
  product_id: any;
  @Input() productDetails: any;
  nbfcData: any;
  debounce: any;
  productNbfscData: any;
  productNbfsc_id: any;
  loading: boolean;
  constructor(private fb: FormBuilder, public http: HttpService, private message: NzMessageService,
    private router: Router,
    private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if(params['id']){
        this.product_id = params['id']
        if (this.product_id) {
          this.fetchNbfcs()
        } 
      } else {
        this.productNbfscData = null
      }
    });
    this.createEditFormFuction()
  }

  amountFromatterFinction(value){
    var val : any
    val = Math.abs(value)
    if (val >= 10000000) {
      val = (val / 10000000).toFixed(2) + ' Cr';
    } else if (val >= 100000) {
      val = (val / 100000).toFixed(2) + ' Lacs';
    }
    if(typeof val == 'string'){
    } else{
      val = val.toFixed(2)
    }
    return val;
  }

  createEditFormFuction(data?) {
    this.createEditForm = this.fb.group({
      nbfcs_arr: this.fb.array([]),
    })
    this.setFormData(data)
    
    if (this.router.url.includes('view-product')) {
      this.createEditForm.disable()
    }
  }
  setFormData(data) {
    if (data) {
      data.forEach(element => {
        this.addNbfcs_arr(element)
      });
      this.fetchNbfcPartner()
    } else {
      this.addNbfcs_arr()
      // this.addNbfcs_arr()
      // this.addNbfcs_arr()
      // this.addNbfcs_arr()
    }
  }

  get nbfcs_arr(): FormArray {
    return <FormArray>this.createEditForm.get('nbfcs_arr');
  }

  
  addNbfcs_arr(data?) {
    this.nbfcs_arr.push(this.addSlabControlsnbfcs(data))
  }

  public addSlabControlsnbfcs(data): FormGroup {
    return this.fb.group({
      nbfc: [data ? data.nbfc?.id : '', [Validators.required]],
      interest_rate: [data ? data.interest_rate : '', [Validators.required]],
      credit_line: [data ? data.credit_line : '', [Validators.required]],
    });
  }

  get_nbfcs_arr(form) {
    return form.controls.nbfcs_arr.controls;
  }

  fetchNbfcPartner() {
    let data;
    this.http.fetchNBFCdata().subscribe(res => {
      this.nbfcData = res.data.results
      // this.message.success(res['message'])
    })
  }

  searchStaticDataGlobalFunction(search_param) {
    clearTimeout(this.debounce);
    this.debounce = setTimeout(() => {
      // this.fetchNbfcPartner(search_param);
    }, 500);
  }

  submitForm() {
    this.createNbfcMapping();
  } 

  createNbfcMapping() {
    let formdata = {
      product_id: this.product_id,
      nbfc_list: this.createEditForm.controls.nbfcs_arr.value
    }
    this.loading = true
    this.http.createNbfcMapping(formdata).subscribe(res => {
      this.loading = false
      this.message.success(res['message'])
    }, (err) => {
      this.loading = false
    })
  }

  fetchNbfcs() {
    let data = {
      product_id: this.product_id
    }
    this.http.fetchNbfcs(data).subscribe(res => {
      this.productNbfscData = res['data']
      if (this.productNbfscData[0]) {
        this.createEditFormFuction(this.productNbfscData);
      }
    },(err) =>{
    })
  }

  
  removeMaster(control, slab_index) {
    control = <FormArray>this.createEditForm.get('nbfcs_arr')
    console.log(control);
    if (control.value[slab_index]?.id) {
      control.value[slab_index].is_deleted = true;
      control.controls.splice(slab_index, 1)
    } else {
      control.value[slab_index].is_deleted = false;
      control.removeAt(slab_index)
    }
  }

  
  restrictType(event) {
    console.log(event.which)
    if (event.which == 107 || event.which == 109) {
      return false;
    }
  }
}
