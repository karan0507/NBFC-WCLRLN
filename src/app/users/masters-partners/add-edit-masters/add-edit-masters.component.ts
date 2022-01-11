import { Component, OnInit } from "@angular/core";
import {  FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import { HttpService } from "src/app/services/http.service";


@Component({
  selector: "app-add-edit-masters",
  templateUrl: "./add-edit-masters.component.html",
  styleUrls: ["./add-edit-masters.component.css"],
})
export class AddEditMastersComponent implements OnInit {
  // masterForm
  addEditProductForm!: FormGroup;
  constructor(private fb: FormBuilder, private http: HttpService ) {}

  ngOnInit(): void {
    this.createMasterProductForm();
    this.getListOfDocumentRequired();
  }

  getListOfDocumentRequired(){
    this.http.getListOfDocumentRequired().subscribe((res)=>{
      console.log('Res ', + res );
    })
    
  }
  createMasterProductForm() {
    this.addEditProductForm = this.fb.group({
      name: [null, [Validators.required]],
      address_line_1: [null, [Validators.required]],
      address_line_2: [null, [Validators.required]],
      city: [null, [Validators.required]],
      state: [null, [Validators.required]],
      pincode: [null, [Validators.required]],
      phone: [null, [Validators.required]],


      bank_name: [null, [Validators.required]],
      account_no: [null, [Validators.required]],
      ifsc: [null, [Validators.required]],
      branch: [null, [Validators.required]],

      // Attribute Type under business detail
      business_type: [null, [Validators.required]],
      // Attribute Nature under business detail
      business_nature: [null, [Validators.required]],
      contact_person_name: [null, [Validators.required]],
      contact_person_phone: [null, [Validators.required]],
      contact_person_email: [null, [Validators.required]],
      employee: [null, [Validators.required]],
      payout: [null, [Validators.required]],
      document_data: [null, [Validators.required]],
      documents: [null, [Validators.required]],

      // if m creating master always share the value 1  
      master: [null, [Validators.required]],
    });
  }

  onClickSubmitForm(){
    console.log(this.addEditProductForm.value, 'Values');
    
  }
}
