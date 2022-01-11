import { Component, OnInit } from "@angular/core";
import {  FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';


@Component({
  selector: "app-add-edit-masters",
  templateUrl: "./add-edit-masters.component.html",
  styleUrls: ["./add-edit-masters.component.css"],
})
export class AddEditMastersComponent implements OnInit {
  // masterForm
  addEditProductForm!: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createMasterProductForm();
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
      business_type: [null, [Validators.required]],
      business_nature: [null, [Validators.required]],
      contact_person_name: [null, [Validators.required]],
      contact_person_phone: [null, [Validators.required]],
      contact_person_email: [null, [Validators.required]],
      employee: [null, [Validators.required]],
      payout: [null, [Validators.required]],
      document_data: [null, [Validators.required]],
      documents: [null, [Validators.required]],
      master: [null, [Validators.required]],
    });
  }

  onClickSubmitForm(){
    console.log(this.addEditProductForm.value);
    
  }
}
