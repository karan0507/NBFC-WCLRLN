import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from "@angular/core";
import {  FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import { NzUploadFile } from "ng-zorro-antd/upload";
import { HttpService } from "src/app/services/http.service";
import { NzMessageService } from 'ng-zorro-antd/message';


@Component({
  selector: "app-add-edit-masters",
  templateUrl: "./add-edit-masters.component.html",
  styleUrls: ["./add-edit-masters.component.css"],
})
export class AddEditMastersComponent implements OnInit {
  // masterForm
  addEditProductForm: FormGroup;
  documentBasedForm: FormGroup;
  documentArray: any;
  index: any;
  isVisible;
  selectedDocument;
  masterPartnerId: any;
  isVerified: any;
  isEdit: boolean;
  businessNatureArr: any;
  businessTypeArr: any;
  stateArr: any;
  apiLoader = {
    'formSave': false,
    'saveAddNew': false
  } 
  debounce: any;

  constructor(private fb: FormBuilder,private router: Router, private http: HttpService, private route: ActivatedRoute, private message: NzMessageService ) {
    this.getListOfDocumentRequired();
  }

  ngOnInit(): void {
    // this.addEditProductForm = this.fb.group({
    //   name: [null, [Validators.required]]
    // })
    this.createMasterProductForm();
    this.route.queryParams.subscribe(params => {
      if(params['id']){
        this.isEdit = true
        this.masterPartnerId = params['id']
        if (this.masterPartnerId) {
          this.fetchMasterPartner();
          this.getListOfBusinessType();
          this.getListOfBusinessNature();
          this.getListOfStates();
        }
      } else {
        this.isEdit = false
        // this.masterParnerPayout = null
        // this.createMasterProductForm();
        // this.getListOfDocumentRequired();
      }
    });
  }

  getListOfBusinessNature(){
    let action = 'get-business-natures'
    this.http.fetchDetailForUserModuleDropDown(action).subscribe((res: any)=> {
      this.businessNatureArr = res?.data;
    }) 
  }

  getListOfBusinessType(){
    let action = 'get-business-types'
    this.http.fetchDetailForUserModuleDropDown(action).subscribe((res: any)=> {
      this.businessTypeArr = res?.data;
    }) 
  }

  getListOfStates(){
    let action = 'get-states'
    this.http.fetchDetailForUserModuleDropDown(action).subscribe((res: any)=> {
      console.log(res);
      this.stateArr = res?.data;
    })
  }
  
  onSearchGetList(e, action){
    // if(action === 'sta'){
      clearTimeout(this.debounce);
      this.debounce = setTimeout(() => {
        // this.getListOfCorp(search_param);
      }, 500);
    // }

  }

  fetchMasterPartner(){

    this.http.getMasterPartnerById(this.masterPartnerId).subscribe((res: any)=> {
      console.log(res);
      this.setDataForNow(res?.data)
      // this.createMasterProductForm(res?.data);
    })
  }

  setDataForNow(data){
    for( var i in this.addEditProductForm.value){
      if(i == 'business_nature' || i == 'business_type' || i == 'state'){
        data[i] = data[i]?.id;
      }
      if(i != 'document_data'){
        if(data[i]){
          this.addEditProductForm.controls[i].setValue(data[i], {emitEvent: false});
        }
      }
    }
    this.setFormData(data)
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

  onClickOpenPopUp(e){
    if(e?.pointerType == 'mouse'){
      this.isVisible = true;
    }
  }

  omit_special_char(event) {
    // to avoid special Character
    // var k;
    // k = event.charCode;  //         k = event.keyCode;  (Both can be used)
    // return ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || (k >= 48 && k <= 57));

    // to avoid special Character && Number
    var charCode = event.keyCode;
    if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || charCode == 32 ||  charCode == 8)
        return true;
    else
        return false;
}

  
  createMasterProductForm(data?) {
    this.addEditProductForm = this.fb.group({
      name: [data ? data?.name : null, [Validators.required]],
      address_line_1: [data ? data?.address_line_1 : null, [Validators.required]],
      address_line_2: [data ? data?.address_line_2 : null, [Validators.required]],
      city: [data ? data?.city : null, [Validators.required]],
      state: [data ? data?.state?.id : null, [Validators.required]],
      pincode: [data ? data?.pincode : null, [Validators.required, Validators.pattern('^[1-9][0-9]{5}$')]],
      phone: [data ? data?.phone : null, [Validators.required, Validators.pattern('^[6-9][0-9]{9}$')]],


      bank_name: [data ? data?.bank_name : null],
      account_no: [data ? data?.account_no : null],
      ifsc: [data ? data?.ifsc : null, [ Validators.pattern("^[A-Z]{4}0[A-Z0-9]{6}$")] ],
      // "^[A-Z]{4}0[A-Z0-9]{6}$"
      branch: [data ? data?.branch : null],

      // Attribute Type under business detail
      display_name: [data ? data?.display_name : null, [Validators.required]],
      business_type: [data ? data?.business_type?.id : null, [Validators.required]],
      // Attribute Nature under business detail
      business_nature: [data ? data?.business_nature?.id : null, [Validators.required]],
      contact_person_name: [data ? data?.contact_person_name : null, [Validators.required, Validators.pattern('^[a-zA-Z \-\']+')]],
      contact_person_phone: [data ? data?.contact_person_phone : null,  [Validators.required, Validators.pattern('^[6-9][0-9]{9}$')]],
      contact_person_email: [data ? data?.contact_person_email : null, [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      employee: [data ? data?.employee : null, [Validators.required]],
      payout: [data ? data?.payout : null, [Validators.required]],
      document_data:  this.fb.array([]),
      // documents: [null, [Validators.required]],
      // if m creating master always share the value 1  
      master: [1, [Validators.required]],
    });
    if(data){
      this.setFormData(data);
    }
  }
  
  deleteDocumentByDocumentId(i) {
    let fileName = this.addEditProductForm.get("document_data") as FormArray;
    const selectedFile = fileName.controls?.[i].value;
    if (!fileName.controls?.[i].value?.id) {
      const document = {
        name: selectedFile?.label_name,
        pk: selectedFile?.document_master,
      };
      this.documentArray.push(document);
      this.message.success(fileName.controls?.[i].value?.label_name + " Document Deleted");
      fileName.removeAt(i);
      this.selectedDocument = null;
    } else {
      this.http
        .deleteMasterDocumentByDocumentId(selectedFile?.id)
        .subscribe((res) => {
          const document = {
            name: selectedFile?.label_name,
            pk: selectedFile?.document_master,
          };
          this.documentArray.push(document);
          this.message.success(fileName.controls?.[i].value?.label_name + " Document Deleted");
          fileName.removeAt(i);
          this.selectedDocument = null;
        });
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
      this.addSkills(this.selectedDocument);
      this.isVisible = false
  }

  get skills() : FormArray {
    return this.addEditProductForm.get("document_data") as FormArray
  }
 
  newSkill(data?): FormGroup {
    this.selectedDocument = null;
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
 
  onUpload(e,i, action){
    if(action == 'upload'){
    console.log(e?.file?.originFileObj)
    // this.index = i;
    let fileName = this.addEditProductForm.get('document_data') as FormArray;
    fileName.controls?.[i].patchValue({document_name: e?.file?.name});
    let value = this.addEditProductForm.get('document_data') as FormArray;
    value.controls?.[i].patchValue({documents: e?.file?.originFileObj});
  }
  //  else {
  //   let checked; 
  //   if(!e){
  //     checked = 0;
  //   } else {
  //     checked = 1;
  //   }

  //   let value = this.addEditProductForm.get('document_data') as FormArray;
  //   value.controls?.[i].patchValue({is_verified: checked});
  // }
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

    console.log(this.addEditProductForm.controls, 'Validate ')
    for (const i in this.addEditProductForm.controls) {
      this.addEditProductForm.controls[ i ].markAsDirty();
      this.addEditProductForm.controls[ i ].updateValueAndValidity();
    }

    console.log('Working',this.addEditProductForm.value);
      
    if(this.addEditProductForm.valid) {
      this.apiLoader['formSave'] = true
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
        if(sendDate?.document_data[i]?.documents){
          data.append('documents', sendDate?.document_data[i]?.documents)
          delete sendDate?.document_data[i]?.documents
        }

        // data.append('documents', sendDate?.document_data[i]?.documents)
        
      }
  
      for (var i in sendDate) {
        if(i == 'document_data'){
          data.append(i, JSON.stringify(sendDate[i]))
        } else {
          data.append(i, sendDate[i])
        }
      }
      const  url = this.http.createMasterPartnerForm(data);
      url.subscribe((res: any)=> {
        console.log(res);
        if(res.success){
          this.message.success(res?.message);
          this.apiLoader['formSave'] = false;
          this.router.navigate(['masters-partners']);
        } else {
          this.message.error(res?.message);
          this.apiLoader['formSave'] = false;
        }
      }, err => {
        this.apiLoader['formSave'] = false
      })
    }
     else  {
      let data = new FormData();
    
      var sendDate = this.addEditProductForm.value
      for (var i in sendDate.document_data) {
        // console.log(sendDate.document_data[i]?.documents);
        console.log(sendDate.document_data[i].documents?.['uid']);
        // console.log('working' + sendDate.document_data +  ' ' +  i);
        if(!sendDate.document_data[i].id){
          delete sendDate?.document_data[i]?.id;
        }
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
      const  url =  this.http.updateMasterPartnerForm(this.masterPartnerId, data) 
      url.subscribe((res: any)=> {
        if(res.success){
          this.message.success(res?.message);
          this.apiLoader['formSave'] = false
          this.router.navigate(['masters-partners']);
        } else {
          this.message.error(res?.message);
          this.apiLoader['formSave'] = false
        }
      }, err => {
        this.apiLoader['formSave'] = false
      })
    }
  }

  }

  onClickSaveExistingForm(){
    for (const i in this.addEditProductForm.controls) {
      this.addEditProductForm.controls[ i ].markAsDirty();
      this.addEditProductForm.controls[ i ].updateValueAndValidity();
    }
    if(this.addEditProductForm.valid) {
      this.apiLoader['saveAddNew'] = true
      let data = new FormData();
    
      var sendDate = this.addEditProductForm.value
      
      for (var i in sendDate.document_data) {
        if(!sendDate.document_data[i].id){
          delete sendDate?.document_data[i]?.id;
        }
        if(!sendDate.unique_code){
          delete sendDate?.unique_code;
        }
        if(sendDate?.document_data[i]?.documents){
          data.append('documents', sendDate?.document_data[i]?.documents)
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
      const  url = this.http.createPartnerForm(data);
      url.subscribe((res: any)=> {
        console.log(res);
        if(res.success){
          this.message.success(res?.message);
          this.apiLoader['saveAddNew'] = false;
          let newRouterLink = '/masters-partners/add';
        this.router.navigate(['/']).then(() => { this.router.navigate([newRouterLink ]); })
        } else {
          this.message.error(res?.message);
          this.apiLoader['saveAddNew'] = false;
        }
      }, err =>{
        this.apiLoader['saveAddNew'] = false
      })
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
