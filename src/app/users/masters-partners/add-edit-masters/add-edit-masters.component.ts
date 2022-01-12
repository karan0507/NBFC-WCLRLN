import { Component, OnInit } from "@angular/core";
import {  FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import { NzUploadFile } from "ng-zorro-antd/upload";
import { HttpService } from "src/app/services/http.service";


@Component({
  selector: "app-add-edit-masters",
  templateUrl: "./add-edit-masters.component.html",
  styleUrls: ["./add-edit-masters.component.css"],
})
export class AddEditMastersComponent implements OnInit {
  // masterForm
  addEditProductForm!: FormGroup;
  documentBasedForm: FormGroup;
  documentArray: any;
  constructor(private fb: FormBuilder, private http: HttpService ) {}

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

      // Attribute Type under business detail
      business_type: [null, [Validators.required]],
      // Attribute Nature under business detail
      business_nature: [null, [Validators.required]],
      contact_person_name: [null, [Validators.required]],
      contact_person_phone: [null, [Validators.required]],
      contact_person_email: [null, [Validators.required]],
      employee: [null, [Validators.required]],
      payout: [null, [Validators.required]],
      document_data:  this.fb.array([]),
      // documents: [null, [Validators.required]],
      // if m creating master always share the value 1  
      master: [null, [Validators.required]],
    });
    this.getListOfDocumentRequired();
  }

  getListOfDocumentRequired(){
    this.http.getListOfDocumentRequired().subscribe((res: any)=>{
      this.documentArray = res?.data?.results;
      // this.addSkills(this.documentArray);
      this.documentArray.forEach(element => {
        this.addSkills(element);
      });
    })
    
  }

  get skills() : FormArray {
    return this.addEditProductForm.get("document_data") as FormArray
  }
 
  newSkill(data?): FormGroup {
    return this.fb.group({
      document_master: [data?.pk],
      label_name: [data?.name],
      document_name: [''],
      documents: ['']
    })
  }
 
  addSkills(data?) {
    this.skills.push(this.newSkill(data));
  }
 
  removeSkill(i:number) {
    this.skills.removeAt(i);
  }

  onClickSubmitForm(){
    console.log('Working')
    console.log(this.addEditProductForm.value)
  }

  handleChange(e, index){
    // console.log('in Progress', i);
    console.log(e);
    
    console.log(this.addEditProductForm.get('document_data')['controls'][index].controls.document_master.value)
    this.addEditProductForm.get('document_data')['controls'][index].controls.documents.setValue(e.file.originFileObj)

    // console.log(e + '  ' + this.addEditProductForm.controls.document_data['controls'][index].document_master)
  }
  

  beforeUpload = (file: NzUploadFile): boolean => {
    // this.newGallery.patchValue({document: file});
    // console.log(file)
    // this.generateBase64View(file)
    // this.galleryDocument = file
    // this.logoStockistObject['fileObject'] = file;
    // this.handleChange(this.logoStockistObject['fileObject'])
    return false;
  };


  // add(data?) {
  //   this.slab_array.push(this.addSlabControls(data))
  // }

}
