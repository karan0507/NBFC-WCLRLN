import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-black-box-testing',
  templateUrl: './black-box-testing.component.html',
  styleUrls: ['./black-box-testing.component.css']
})
export class BlackBoxTestingComponent implements OnInit {
  createEditForm: FormGroup;
  debounce: any;
  loading: boolean;
  employementData;
  corporateData;

  constructor(private fb: FormBuilder, public http: HttpService, private message: NzMessageService,
    private router: Router,
    private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.createEditFormFuction();
  }
  createEditFormFuction() {
    this.createEditForm = this.fb.group({
      income: ['', [Validators.required]],
      cibil_score: ['', [Validators.required]],
      age: ['', [Validators.required]],
      sms_score: ['', [Validators.required]],
      vintage_in_company: ['', [Validators.required]],
      corporate_category: ['', [Validators.required]],
      employment_type: ['', [Validators.required]],
      employee_type: ['permanent', [Validators.required]],
      flag: ['card', [Validators.required]],
      global_product_min: [''],
      global_product_max: [''],
      corporate_permanent_min: [''],
      corporate_permanent_max: [''],
      corporate_permanent_agreed: [''],
      corporate_contractual_min: [''],
      corporate_contractual_max: [''],
      corporate_contractual_agreed: [''],
      max_salary_percent: [''],
      ewa_percent: [''],
      number_of_worked_days: [''],
      total_days: ['']

    })
  }

  fetchEmployementType() {
    
    this.http.fetchEmploymentType('').subscribe(res => {
      this.employementData = res['data'].results
    })
  }

  fetchCorporateCategory() {
    
    this.http.fetchCorporationCategory('').subscribe(res => {
      this.corporateData = res['data']
    })
  }

  searchStaticDataGlobalFunction(search_param) {
    clearTimeout(this.debounce);
    this.debounce = setTimeout(() => {
      // this.fetchMasterPartnerData(search_param);
    }, 500);
  }

  submitForm() {
    var data = this.createEditForm.value
    this.loading = true
    this.http.createBlackBox(this.createEditForm.value).subscribe(res => {
      this.loading = false
      if (res['success']) {
        this.message.success('Application Score : ' + res['data'].application_score + ', Product limit : ' + res['data'].product_limit)
      } else {
        this.message.success(res['message'])
      }
    }, (err)=> {
      this.loading = false
    })
  }
}
