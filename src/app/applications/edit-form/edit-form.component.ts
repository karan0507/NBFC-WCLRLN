import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {
  personalDetails: FormGroup;
  employementDetails: FormGroup;
  preApprovedForm : FormGroup;
  documentForm : FormGroup;
  userId: any;
  constructor(private fb: FormBuilder, public https: HttpService, public route: ActivatedRoute, public router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['id']) {
        this.userId = params['id'];
        this.getFormLoanData();
      }
    })
    this.personalDetails = this.fb.group(
      {
        email: ['', Validators.required],
        date_of_birth: [],
        income: []
      })

    this.employementDetails = this.fb.group({
      company_name: [],
      address: []
    })
    this.preApprovedForm = this.fb.group({
      limitProcessed:[],
      product_name: [] 
    })
    
    this.documentForm = this.fb.group({
      document_name : ['1'],
      document_name_2:['1']
    })
  }

  onChange(event) {

  }

  cancelForm(){
    
  }
  getFormLoanData() {
      let data = { 'datapoint': 'loan_application', 'endpoint': 'LoanApplication?id=' + this.userId, 'source': 'Onboarding' };
    this.https.fetchLoanApplicationList(data).subscribe(res => {
      console.log(res);
      if (res.success) {
        res.data.results.forEach(element => {
          this.personalDetails.patchValue({ email: element?.user?.email ? element?.user?.email : '' })
          this.personalDetails.patchValue({ date_of_birth: element?.user?.dob ? element?.user?.dob : '' })
          this.personalDetails.patchValue({ income: element?.income ? element?.income : '' })
        });
        console.log(this.personalDetails);
      }

    })
  }

  submitForm(){
    console.log('Save these details', this.personalDetails.value);
  }
}
