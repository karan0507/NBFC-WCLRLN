import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-add-edit-partners',
  templateUrl: './add-edit-partners.component.html',
  styleUrls: ['./add-edit-partners.component.css']
})
export class AddEditPartnersComponent implements OnInit {

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
        if (this.documentArray.includes(element?.document_master['id'])) {
            const index = this.documentArray.indexOf(element?.document_master['id'])
            this.documentArray.splice(index,1)
        }
        this.addDocument(element)
      });
    }
  }

  
  createMasterProductForm(data?) {
    this.addEditProductForm = this.fb.group({
      name: [data ? data?.name : null, [Validators.required]],
      address_line_1: [data ? data?.name : null, [Validators.required]],
      address_line_2: [data ? data?.name : null, [Validators.required]],
      city: [data ? data?.name : null, [Validators.required]],
      state: [data ? data?.name : null, [Validators.required]],
      pincode: [data ? data?.name : null, [Validators.required]],
      phone: [data ? data?.name : null, [Validators.required]],


      bank_name: [data ? data?.name : null],
      account_no: [data ? data?.name : null],
      ifsc: [data ? data?.name : null],
      branch: [data ? data?.name : null],

      // Attribute Type under business detail
      // business_type: [data ? data?.name : null, [Validators.required]],
      // Attribute Nature under business detail
      // business_nature: [data ? data?.name : null, [Validators.required]],
      contact_person_name: [data ? data?.name : null, [Validators.required]],
      contact_person_phone: [data ? data?.name : null, [Validators.required]],
      contact_person_email: [data ? data?.name : null, [Validators.required]],
      // employee: [data ? data?.name : null, [Validators.required]],
      payout: [data ? data?.name : null, [Validators.required]],
      document_data:  this.fb.array([]),
      // documents: [null, [Validators.required]],
      // if m creating master always share the value 1  
      master: [data ? data?.name : 1, [Validators.required]],
    });
    if(data){
      this.setFormData(data);
    }
  }
  

  getListOfDocumentRequired(){
    this.http.getListOfDocumentRequired().subscribe((res: any)=>{
      this.documentArray = res?.data?.results;
      // this.addDocument(this.documentArray);
      // this.documentArray.forEach(element => {
      //   this.addDocument(element);
      // });
    })
  }

  // addUnderWriting(data: any, value) {
  //   this.rules.push(this.addSlabControlsUnderWriting(data, value))
  // }

  addKycDocument() {
    if (this.documentArray.includes(this.selectedDocument)) {
      const index = this.documentArray.indexOf(this.selectedDocument)
      this.documentArray.splice(index,1)
    }
    // this.addUnderWriting(this.selectedDocument, false)
      this.addDocument(this.selectedDocument);
    this.isVisible = false
  }

  get kycDocument() : FormArray {
    return this.addEditProductForm.get("document_data") as FormArray
  }
 
  newSkill(data?): FormGroup {
    // if(data){
    //   return this.fb.group({
    //     document_master: [data?.document_master?.id],
    //     label_name: [data?.document_master?.name],
    //     documents: [data?.document_file],
    //     id:[data?.id]
    //   })
    // } else{
      return this.fb.group({
        document_master: [data?.pk],
        label_name: [data?.name],
        documents: [''],
        document_name:[null]
      })
    // }
  }

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


  addDocument(data?) {
    this.kycDocument.push(this.newSkill(data));
  }
 
  removeSkill(i:number) {
    this.kycDocument.removeAt(i);
  }

  onClickSubmitForm(){
    for (const i in this.addEditProductForm.controls) {
      this.addEditProductForm.controls[ i ].markAsDirty();
      this.addEditProductForm.controls[ i ].updateValueAndValidity();
    }
    if(this.addEditProductForm.valid){
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

