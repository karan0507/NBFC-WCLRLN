import { NzMessageService } from "ng-zorro-antd/message";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators, FormArray } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { NzUploadFile } from "ng-zorro-antd/upload";
import { HttpService } from "src/app/services/http.service";

@Component({
  selector: "app-add-edit-lenders",
  templateUrl: "./add-edit-lenders.component.html",
  styleUrls: ["./add-edit-lenders.component.css"],
})
export class AddEditLendersComponent implements OnInit {
  isVerified: any;
  isEdit: boolean;
  addEditProductForm!: FormGroup;
  documentBasedForm: FormGroup;
  documentArray: any;
  index: any;
  isVisible;
  selectedDocument;
  masterPartnerId: any;
  stateArr: any;
  apiLoader = {
    'formSave': false,
    'saveAddNew': false
  } 
  debounce: any;

  constructor(
    private fb: FormBuilder,
    private http: HttpService,
    private route: ActivatedRoute,
    private message: NzMessageService,
    private router: Router,
  ) {
    this.getListOfDocumentRequired();
  }

  ngOnInit(): void {
    this.createMasterProductForm();

    this.route.queryParams.subscribe((params) => {
      if (params["id"]) {
        this.isEdit = true;
        this.masterPartnerId = params["id"];
        if (this.masterPartnerId) {
          this.getNBFCDetail();
          this.getListOfStates();
        }
      } else {
        this.isEdit = false;
        // this.masterParnerPayout = null
        this.createMasterProductForm();
        // this.getListOfDocumentRequired();
      }
    });
  }

  getNBFCDetail() {
    this.http.getNBFCDetail(this.masterPartnerId).subscribe((res: any) => {
      console.log(res);
      this.createMasterProductForm(res?.data);
    });
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

  setFormData(data) {
    if (data) {
      const documentArray = [];
      data.documents?.forEach((element) => {
        const documents = {
          pk: element?.document_master["id"],
          documents: element?.document_file,
          name: element?.document_master["name"],
          document_name: element?.file_name,
          id: element?.id,
          is_verified: element?.is_verified,
        };
        documentArray.push(documents);
        this.documentArray?.forEach((entity, index) => {
          if (entity.pk == element?.document_master["id"]) {
            this.documentArray.splice(index, 1);
          }
        });
        console.log(element?.document_file, "to check the value");
        this.addSkills(documents);
      });
    }
  }

  createMasterProductForm(data?) {
    this.addEditProductForm = this.fb.group({
      name: [data ? data?.name : null, [Validators.required]],
      address_line_1: [
        data ? data?.address_line_1 : null,
        [Validators.required],
      ],
      address_line_2: [
        data ? data?.address_line_2 : null,
        [Validators.required],
      ],
      city: [data ? data?.city : null, [Validators.required]],
      state: [data ? data?.state?.id : null, [Validators.required]],
      pincode: [data ? data?.pincode : null, [Validators.required, Validators.pattern('^[1-9][0-9]{5}$')]],
      phone: [data ? data?.phone : null, [Validators.required, Validators.pattern('^[6-9][0-9]{9}$')]],

      bank_name: [data ? data?.bank_name : null, [Validators.required]],
      account_no: [data ? data?.account_no : null, [Validators.required]],
      ifsc: [data ? data?.ifsc : null, [Validators.required]],
      branch: [data ? data?.branch : null, [Validators.required]],

      // Attribute Type under business detail
      // business_type: [data ? data?.name : null, [Validators.required]],
      // Attribute Nature under business detail
      // business_nature: [data ? data?.name : null, [Validators.required]],

      total_commitment: [
        data ? data?.total_commitment : null,
        [Validators.required],
      ],
      roi: [data ? data?.roi : null, [Validators.required]],
      fldg: [data ? data?.fldg : null, [Validators.required]],

      nbfc_user_name: [
        data ? data?.nbfc_user_name : null,
        [Validators.required],
      ],
      nbfc_user_mobile: [
        data ? data?.nbfc_user_mobile : null,
        [Validators.required, Validators.pattern('^[7-9][0-9]{9}$')],
      ],
      nbfc_user_email: [
        data ? data?.nbfc_user_email : null,
        [Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')],
      ],
      // employee: [data ? data?.name : null, [Validators.required]],
      // payout: [data ? data?.name : null, [Validators.required]],
      document_data: this.fb.array([]),
      // documents: [null, [Validators.required]],
      // if m creating master always share the value 1
      // master: [data ? data?.name : 1, [Validators.required]],
    });
    if (data) {
      this.setFormData(data);
    }
    // this.getListOfDocumentRequired();
  }

  getListOfDocumentRequired() {
    this.http.getListOfDocumentRequired().subscribe((res: any) => {
      this.documentArray = res?.data?.results;
    });
  }

  // addUnderWriting(data: any, value) {
  //   this.rules.push(this.addSlabControlsUnderWriting(data, value))
  // }

  addRule() {
    if (this.documentArray.includes(this.selectedDocument)) {
      const index = this.documentArray.indexOf(this.selectedDocument);
      this.documentArray.splice(index, 1);
    }
    this.addSkills(this.selectedDocument);
    this.isVisible = false;
  }

  get skills(): FormArray {
    return this.addEditProductForm.get("document_data") as FormArray;
  }

  newSkill(data?): FormGroup {
    return this.fb.group({
      id: [data ? data?.id : null],
      document_master: [data?.pk],
      label_name: [data?.name],
      documents: [data?.documents],
      document_name: [data?.document_name],
      is_verified: [data?.is_verified ? data?.is_verified : false],
    });
    // }
  }

  get_documentArr(form) {
    return form.controls.document_data.controls;
  }

  handleCancel(): void {
    this.isVisible = false;
  }
  // this.fb.array([])

  onUpload(e, i) {
    console.log(e);
    console.log(e?.file?.originFileObj);
    // this.index = i;
    let fileName = this.addEditProductForm.get("document_data") as FormArray;
    fileName.controls?.[i].patchValue({ document_name: e?.file?.name });
    let value = this.addEditProductForm.get("document_data") as FormArray;
    value.controls?.[i].patchValue({ documents: e?.file?.originFileObj });
    // value.setValue(e.target.files[0])
    // if(value){
    //   this.addEditProductForm.addControl('documents',e.target.files[0])
    // }
    // this.addEditProductForm.get('document_data')['controls'][i].controls.documents.setValue(e.target.files[0])
  }

  addSkills(data?) {
    this.skills.push(this.newSkill(data));
  }

  removeSkill(i: number) {
    this.skills.removeAt(i);
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
    } else {
      this.http
        .deleteNBFCDocumentByDocumentId(selectedFile?.id)
        .subscribe((res) => {
          const document = {
            name: selectedFile?.label_name,
            pk: selectedFile?.document_master,
          };
          this.documentArray.push(document);
          this.message.success(fileName.controls?.[i].value?.label_name + " Document Deleted");
          fileName.removeAt(i);
        });
    }
  }

  onClickSubmitForm() {
    for (const i in this.addEditProductForm.controls) {
      this.addEditProductForm.controls[i].markAsDirty();
      this.addEditProductForm.controls[i].updateValueAndValidity();
    }

    if (this.addEditProductForm.valid) {
      this.apiLoader['formSave'] = true
      if (!this.isEdit) {
        let data = new FormData();

        var sendDate = this.addEditProductForm.value;

        for (var i in sendDate.document_data) {
          // if(sendDate?.document_data[i]?.documents?.includes('/')){
          // break;
          // }
          if (!sendDate.document_data[i].id) {
            delete sendDate?.document_data[i]?.id;
          }
          if(sendDate?.document_data[i]?.documents){
            data.append('documents', sendDate?.document_data[i]?.documents)
            delete sendDate?.document_data[i]?.documents
          }
          // data.append("documents", sendDate?.document_data[i]?.documents);
          // delete sendDate?.document_data[i]?.documents;
        }

        for (var i in sendDate) {
          if (i == "document_data") {
            data.append(i, JSON.stringify(sendDate[i]));
          } else {
            data.append(i, sendDate[i]);
          }
        }
        const url = this.http.createNBFCForm(data);
        url.subscribe((res: any)=> {
          if(res.success){
            this.apiLoader['formSave'] = false
            this.message.success(res?.message);
            this.router.navigate(['lenders']);
          } else {
            this.apiLoader['formSave'] = false
            this.message.error(res?.message);
          }
        }, err => {
          this.apiLoader['formSave'] = false
        })
      } else {
        let data = new FormData();

        var sendDate = this.addEditProductForm.value;
        for (var i in sendDate.document_data) {
          // console.log(sendDate.document_data[i]?.documents);
          console.log(sendDate.document_data[i].documents?.["uid"]);
          console.log(sendDate.document_data[i].id);
          if (!sendDate.document_data[i].id) {
            delete sendDate?.document_data[i]?.id;
          }
          // console.log('working' + sendDate.document_data +  ' ' +  i);
          if (sendDate.document_data[i].documents?.["uid"]) {
            data.append("documents", sendDate?.document_data[i]?.documents);
            delete sendDate?.document_data[i]?.documents;
          } else {
            delete sendDate?.document_data[i]?.documents;
          }
        }

        for (var i in sendDate) {
          if (i == "document_data") {
            data.append(i, JSON.stringify(sendDate[i]));
          } else {
            data.append(i, sendDate[i]);
          }
        }
        const url = this.http.updateNBFCForm(this.masterPartnerId, data);
        url.subscribe((res: any)=> {
          if(res.success){
            this.message.success(res?.message);
            this.apiLoader['formSave'] = false
            this.router.navigate(['lenders']);
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
      const url = this.http.createNBFCForm(data);
      url.subscribe((res: any)=> {
        if(res.success){
          this.message.success(res?.message);
          this.apiLoader['saveAddNew'] = false
        let newRouterLink = '/lenders/add';
        this.router.navigate(['/']).then(() => { this.router.navigate([newRouterLink ]); })
        } else {
          this.message.error(res?.message);
          this.apiLoader['saveAddNew'] = false
        }
      }, err =>{
        this.apiLoader['saveAddNew'] = false
      })
    }

  }

  handleChange(e, index) {
    // console.log('in Progress', i);
    console.log(index, "index");
    this.index = index;
    // console.log(this.addEditProductForm.get('document_data')['controls'][index].controls.document_master.value)
    this.addEditProductForm
      .get("document_data")
      ["controls"][index].controls.documents.setValue(e.file.originFileObj);

    // console.log(e + '  ' + this.addEditProductForm.controls.document_data['controls'][index].document_master)
  }

  customUpload = (file: NzUploadFile): boolean => {
    const data = [];
    // data.push({documents: file});
    // let value = this.addEditProductForm.get('document_data') as FormArray;
    // value.controls?.[this.index].patchValue({documents:file});
    // console.log(file)
    // console.log(this.addEditProductForm.get('document_data')['controls'])
    // this.addEditProductForm.get('document_data')['controls'][this.index].controls.documents.setValue(file)

    // this.addEditProductForm.get('document_data')['controls']['documents'].setValue(file)
    console.log(file);
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
