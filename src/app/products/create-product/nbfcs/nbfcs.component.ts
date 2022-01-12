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

  createEditFormFuction(data?) {
    this.createEditForm = this.fb.group({
      nbfcs_arr: this.fb.array([]),
    })
    this.setFormData(data)
  }
  setFormData(data) {
    if (data) {
      data.forEach(element => {
        this.addNbfcs_arr(element)
      });
      this.fetchNbfcPartner()
    } else {
      this.addNbfcs_arr()
      this.addNbfcs_arr()
      this.addNbfcs_arr()
      this.addNbfcs_arr()
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
    this.http.createNbfcMapping(formdata).subscribe(res => {
      this.message.success(res['message'])
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

}
