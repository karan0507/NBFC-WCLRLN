import { ActivatedRoute } from '@angular/router';
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
  index: any;
  isVisible;
  selectedDocument;
  masterPartnerId: any;
  constructor(private fb: FormBuilder, private http: HttpService, private route: ActivatedRoute ) {
    this.getListOfDocumentRequired();
  }

  ngOnInit(): void {
    this.createMasterProductForm();
    
    this.route.queryParams.subscribe(params => {
      if(params['id']){
        this.masterPartnerId = params['id']
        if (this.masterPartnerId) {
          this.fetchMasterPartner()
        }
      } else {
        // this.masterParnerPayout = null
        this.createMasterProductForm();
        // this.getListOfDocumentRequired();
      }
    });
  }


  fetchMasterPartner(){

    this.http.getMasterPartnerById(this.masterPartnerId).subscribe((res: any)=> {
      console.log(res);
      this.createMasterProductForm(res?.data);
    })
  }

  setFormData(data) {
    if (data) {
      data.documents?.forEach(element => {
        // alert('Id '+ element?.document_master['id'])
        // this.selectedTab = element.employment_type.id
        // this.addUnderWriting(element, true)
        console.log('Document MAster ID', element?.document_master);
        if (this.documentArray.includes(element?.document_master)) {
            const index = this.documentArray.indexOf(element?.document_master)
            this.documentArray.splice(index,1)
        }
        this.addSkills(element?.document_master, 'fetchedDocument')
      });
    }
  }

  
  createMasterProductForm(data?) {
    this.addEditProductForm = this.fb.group({
      name: [data ? data?.name : null, [Validators.required]],
      address_line_1: [data ? data?.address_line_1 : null, [Validators.required]],
      address_line_2: [data ? data?.address_line_2 : null, [Validators.required]],
      city: [data ? data?.city : null, [Validators.required]],
      state: [data ? data?.state : null, [Validators.required]],
      pincode: [data ? data?.pincode : null, [Validators.required]],
      phone: [data ? data?.phone : null, [Validators.required]],


      bank_name: [data ? data?.bank_name : null, [Validators.required]],
      account_no: [data ? data?.account_no : null, [Validators.required]],
      ifsc: [data ? data?.ifsc : null, [Validators.required]],
      branch: [data ? data?.branch : null, [Validators.required]],

      // Attribute Type under business detail
      business_type: [data ? data?.business_type : null, [Validators.required]],
      // Attribute Nature under business detail
      business_nature: [data ? data?.business_nature : null, [Validators.required]],
      contact_person_name: [data ? data?.contact_person_name : null, [Validators.required]],
      contact_person_phone: [data ? data?.contact_person_phone : null, [Validators.required]],
      contact_person_email: [data ? data?.contact_person_email : null, [Validators.required]],
      employee: [data ? data?.employee : null, [Validators.required]],
      payout: [data ? data?.payout : null, [Validators.required]],
      document_data:  this.fb.array([]),
      // documents: [null, [Validators.required]],
      // if m creating master always share the value 1  
      master: [data ? 1 : 1, [Validators.required]],
    });
    if(data){
      this.setFormData(data);
    }
    // this.getListOfDocumentRequired();
  }
  

  getListOfDocumentRequired(){
    this.http.getListOfDocumentRequired().subscribe((res: any)=>{
      this.documentArray = res?.data?.results;
      // this.addSkills(this.documentArray);
      // this.documentArray.forEach(element => {
      //   this.addSkills(element);
      // });
    })
  }

  // addUnderWriting(data: any, value) {
  //   this.rules.push(this.addSlabControlsUnderWriting(data, value))
  // }

  addRule() {
    if (this.documentArray.includes(this.selectedDocument)) {
      const index = this.documentArray.indexOf(this.selectedDocument)
      this.documentArray.splice(index,1)
    }
    // this.addUnderWriting(this.selectedDocument, false)
      this.addSkills(this.selectedDocument, 'addDocument');
    this.isVisible = false
  }

  get skills() : FormArray {
    return this.addEditProductForm.get("document_data") as FormArray
  }
 
  newSkill(data?,action?): FormGroup {
    console.log(data);
    if(action === 'fetchedDocument'){
        return this.fb.group({
        document_master: [data?.id],
        label_name: [data?.name],
        documents: [''],
        // id:[data?.id]
      })
    } else if(action === 'addDocument'){
      return this.fb.group({
        document_master: [data?.pk],
        label_name: [data?.name],
        documents: [''],
        document_name:[null]
      })
    }
  }
  // if(data){
    //   return this.fb.group({
    //     document_master: [data?.document_master?.id],
    //     label_name: [data?.document_master?.name],
    //     documents: [data?.document_file],
    //     id:[data?.id]
    //   })
    // } else{

  get_underwritingArr(form) {
    return form.controls.document_data.controls;
  }


  handleCancel(): void {
    this.isVisible = false;
  }
  // this.fb.array([])
 
  onUpload(e,i){
    console.log(e)
    console.log(e?.file?.originFileObj)
    // this.index = i;
    let fileName = this.addEditProductForm.get('document_data') as FormArray;
    fileName.controls?.[i].patchValue({document_name: e?.file?.name});
    let value = this.addEditProductForm.get('document_data') as FormArray;
    value.controls?.[i].patchValue({documents: e?.file?.originFileObj});
    // value.setValue(e.target.files[0])
    // if(value){
    //   this.addEditProductForm.addControl('documents',e.target.files[0])
    // }
    // this.addEditProductForm.get('document_data')['controls'][i].controls.documents.setValue(e.target.files[0])



  }


  addSkills(data?, action?) {
    this.skills.push(this.newSkill(data,action));
  }
 
  removeSkill(i:number) {
    this.skills.removeAt(i);
  }

  onClickSubmitForm(){
    for (const i in this.addEditProductForm.controls) {
      this.addEditProductForm.controls[ i ].markAsDirty();
      this.addEditProductForm.controls[ i ].updateValueAndValidity();
    }
    if(this.addEditProductForm.valid && !this.masterPartnerId){
      let data = new FormData();
    
      var sendDate = this.addEditProductForm.value
      
      for (var i in sendDate.document_data) {
        data.append('documents', sendDate?.document_data[i]?.documents)
        delete sendDate?.document_data[i]?.documents
      }
  
      for (var i in sendDate) {
        if(i == 'document_data'){
          data.append(i, JSON.stringify(sendDate[i]))
        }  else {
          data.append(i, sendDate[i])
        }
      }
      this.http.createMasterPartnerForm(data).subscribe((res)=> {
        console.log(res);
      })
    } else {
      console.log('Working', this.addEditProductForm.value)
    }
    
    // console.log(data);
  }

  handleChange(e,index){
    // console.log('in Progress', i);
    console.log(index, 'index');
    this.index = index
    // console.log(this.addEditProductForm.get('document_data')['controls'][index].controls.document_master.value)
    this.addEditProductForm.get('document_data')['controls'][index].controls.documents.setValue(e.file.originFileObj)

    // console.log(e + '  ' + this.addEditProductForm.controls.document_data['controls'][index].document_master)
  }

  customUpload = (file: NzUploadFile): boolean => {
    const data = []
    // data.push({documents: file});
    // let value = this.addEditProductForm.get('document_data') as FormArray;
    // value.controls?.[this.index].patchValue({documents:file});
    // console.log(file)
    // console.log(this.addEditProductForm.get('document_data')['controls'])
    // this.addEditProductForm.get('document_data')['controls'][this.index].controls.documents.setValue(file)
    
    // this.addEditProductForm.get('document_data')['controls']['documents'].setValue(file)
    console.log(file)
    return false;
  };

//   onUpload(e, i){
// console.log(e)
// console.log(i)
//   }

  // beforeUpload = (file: NzUploadFile): boolean => {
  //   // this.newGallery.patchValue({document: file});
  //   // console.log(file)
  //   // this.generateBase64View(file)
  //   // this.galleryDocument = file
  //   // this.logoStockistObject['fileObject'] = file;
  //   // this.handleChange(this.logoStockistObject['fileObject'])
  //   return false;
  // };


  // add(data?) {
  //   this.slab_array.push(this.addSlabControls(data))
  // }

}
