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
  constructor(private fb: FormBuilder, public http: HttpService, private message: NzMessageService,
    private router: Router,
    private route: ActivatedRoute,) { }

  ngOnInit(): void {
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
    this.createEditFormFuction()
  }

  createEditFormFuction() {
    this.createEditForm = this.fb.group({
      nbfcs_arr: this.fb.array([]),
    })
    this.setFormData()
  }
  setFormData() {
    this.addNbfcs_arr()
    this.addNbfcs_arr()
    this.addNbfcs_arr()
    this.addNbfcs_arr()
  }

  get nbfcs_arr(): FormArray {
    return <FormArray>this.createEditForm.get('nbfcs_arr');
  }

  addNbfcs_arr(data?) {
    this.nbfcs_arr.push(this.addSlabControlsnbfcs(data))
  }

  public addSlabControlsnbfcs(data): FormGroup {
    if (data) {
      return this.fb.group({
        id: [data.id],
        product: [this.product_id],
        nbfc: [data.master_partner?.id, [Validators.required]],
        interest_rate: [data.interest_rate, [Validators.required]],
        credit_line: [data.credit_line, [Validators.required]],
      });
    } else {
      return this.fb.group({
        nbfc: ['', [Validators.required]],
        interest_rate: ['', [Validators.required]],
        credit_line: ['', [Validators.required]],
      });
    }
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
    console.log(this.createEditForm.controls.nbfcs_arr.value)

    let formdata = {
      product_id: this.product_id,
      nbfc_list: this.createEditForm.controls.nbfcs_arr.value
    }
    this.http.createNbfcMapping(formdata).subscribe(res => {
      this.message.success(res['message'])
    })
  }

}
