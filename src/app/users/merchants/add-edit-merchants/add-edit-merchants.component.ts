import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-add-edit-merchants',
  templateUrl: './add-edit-merchants.component.html',
  styleUrls: ['./add-edit-merchants.component.css']
})
export class AddEditMerchantsComponent implements OnInit {

  isVerified: any;
  isEdit: boolean;
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
        this.isEdit = true
        this.masterPartnerId = params['id']
        if (this.masterPartnerId) {
          this.getMerchantDetailById()
        }
      } else {
        // this.masterParnerPayout = null
        this.isEdit = false
        this.createMasterProductForm();
        // this.getListOfDocumentRequired();
      }
    });
  }


  getMerchantDetailById(){

    this.http.getMerchantDetail(this.masterPartnerId).subscribe((res: any)=> {
      console.log(res);
      this.createMasterProductForm(res?.data);
    })
  }

  setFormData(data) {
    if (data) {
      const documentArray = [];
      data.documents?.forEach(element => {
        const documents = {
          pk: element?.document_master['id'],
          documents: element?.document_file,
          name: element?.document_master['name'],
          document_name: element?.file_name,
          id: element?.id,
          is_verified: element?.is_verified,

        }
        documentArray.push(documents);
        this.documentArray?.forEach(( entity, index) => {
          if (entity.pk == element?.document_master['id']) {
            this.documentArray.splice(index,1)
          }
        });
        this.addSkills(documents)
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
      primary_upi: [data ? data?.primary_upi : null, [Validators.required]],
      secondary_upi: [data ? data?.secondary_upi : null, [Validators.required]],
      mdr: [data ? data?.mdr : null, [Validators.required]],
      interest_subvention: [data ? data?.interest_subvention : null, [Validators.required]],
      payout: [data ? data?.payout : null, [Validators.required]],
      unique_code: [data ? data?.unique_code : null, [Validators.required]],

      // Attribute Type under business detail
      // business_type: [data ? data?.name : null, [Validators.required]],
      // Attribute Nature under business detail
      // business_nature: [data ? data?.name : null, [Validators.required]],



      contact_person_name: [data ? data?.contact_person_name : null, [Validators.required]],
      contact_person_phone: [data ? data?.contact_person_phone : null, [Validators.required]],
      contact_person_email: [data ? data?.contact_person_email : null, [Validators.required]],
      master: [0, [Validators.required]],
      document_data:  this.fb.array([]),
      partner_nature: ['merchant', [Validators.required]],
      
    });
    if(data){
      this.setFormData(data);
    }
  }
  

  getListOfDocumentRequired(){
    this.http.getListOfDocumentRequired().subscribe((res: any)=>{
      this.documentArray = res?.data?.results;
    })
  }

  addRule() {
    if (this.documentArray.includes(this.selectedDocument)) {
      const index = this.documentArray.indexOf(this.selectedDocument)
      this.documentArray.splice(index,1)
    }
    // this.addUnderWriting(this.selectedDocument, false)
      this.addSkills(this.selectedDocument);
    this.isVisible = false
  }

  get skills() : FormArray {
    return this.addEditProductForm.get("document_data") as FormArray
  }
 
  newSkill(data?): FormGroup {
    return this.fb.group({
      id: [data ? data?.id : null],
      document_master: [data?.pk],
      label_name: [data?.name],
      documents: [data?.documents],
      document_name:[data?.document_name],
      is_verified:[ data?.is_verified ? data?.is_verified : false]
    })
  }

  get_underwritingArr(form) {
    return form.controls.document_data.controls;
  }


  handleCancel(): void {
    this.isVisible = false;
  }
  // this.fb.array([])
 
  onUpload(e,i){
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


  addSkills(data?) {
    this.skills.push(this.newSkill(data));
  }
 
  removeSkill(i:number) {
    this.skills.removeAt(i);
  }

  onClickSubmitForm(){

    for (const i in this.addEditProductForm.controls) {
      this.addEditProductForm.controls[ i ].markAsDirty();
      this.addEditProductForm.controls[ i ].updateValueAndValidity();
    }

    if(this.addEditProductForm.valid) {
      if(!this.isEdit) {
      let data = new FormData();
    
      var sendDate = this.addEditProductForm.value
      
      for (var i in sendDate.document_data) {
        // if(sendDate?.document_data[i]?.documents?.includes('/')){
        // break;  
        // }
        if(!sendDate.document_data[i].id){
          delete sendDate?.document_data[i]?.id;
        }
        data.append('documents', sendDate?.document_data[i]?.documents)
        delete sendDate?.document_data[i]?.documents
      }
  
      for (var i in sendDate) {
        if(i == 'document_data'){
          data.append(i, JSON.stringify(sendDate[i]))
        } else {
          data.append(i, sendDate[i])
        }
      }
      const  url = this.http.createMerchantForm(data);
      url.subscribe((res)=> {
        console.log(res);
      })
    }
     else  {
      let data = new FormData();
    
      var sendDate = this.addEditProductForm.value
      for (var i in sendDate.document_data) {
        // console.log(sendDate.document_data[i]?.documents);
        // console.log(sendDate.document_data[i].documents?.['uid']);
        // console.log(sendDate.document_data[i].id);
        if(!sendDate.document_data[i].id){
          delete sendDate?.document_data[i]?.id;
        }
        // console.log('working' + sendDate.document_data +  ' ' +  i);
        if(sendDate.document_data[i].documents?.['uid']){
          data.append('documents', sendDate?.document_data[i]?.documents)  
          delete sendDate?.document_data[i]?.documents
        } else {
          delete sendDate?.document_data[i]?.documents
        }
      }
  
      for (var i in sendDate) {
        if(i == 'document_data'){
          data.append(i, JSON.stringify(sendDate[i]))
        } else {
          data.append(i, sendDate[i])
        }
      }
      const  url =  this.http.updateMerchantForm(this.masterPartnerId, data) 
      url.subscribe((res)=> {
        console.log(res);
      })
    }
  }

  

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
