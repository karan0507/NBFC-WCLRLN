import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { HttpService } from 'src/app/services/http.service';
import * as FileSaver from 'file-saver'
import { saveAs } from 'file-saver';
import { NzImageService } from "ng-zorro-antd/image";

const getBase64 = (file: File): Promise<string | ArrayBuffer | null> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

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
  documentArray: any = [];
  index: any;
  isVisible;
  selectedDocument;
  masterPartnerId: any;
  stateArr: any;
  createUPI: FormGroup
  apiLoader = {
    'formSave': false,
    'saveAddNew': false
  }
  debounce: any;
  listOfMasterPartner: any;
  upiData: any = [];

  constructor(private fb: FormBuilder, private router: Router, private http: HttpService, private route: ActivatedRoute,
    private message: NzMessageService, private nzImageService: NzImageService) {
    this.getListOfDocumentRequired();
  }

  ngOnInit(): void {
    this.getListOfMasterPartner();
    this.createMasterProductForm();
    // this.addAdditionalUPI();

    this.route.queryParams.subscribe(params => {
      if (params['id']) {
        this.isEdit = true
        this.masterPartnerId = params['id']
        if (this.masterPartnerId) {
          this.getMerchantDetailById()
          this.getListOfStates();
        }
      } else {
        // this.masterParnerPayout = null
        this.isEdit = false
        // this.createMasterProductForm();
        // this.getListOfDocumentRequired();
      }
    });
  }

  getListOfMasterPartner(action?) {
    let data = {
      'page': 1,
      'limit': 30
    }
    this.http.fetchMasterPartner(data).subscribe((res: any) => {
      this.listOfMasterPartner = res?.data?.results
    }, err => {
    })
  }


  getMerchantDetailById() {

    this.http.getPartnerListDetail(this.masterPartnerId).subscribe((res: any) => {
      console.log(res);
      this.setRetrievedDataInForm(res?.data)
      // this.createMasterProductForm(res?.data);
    })
  }

  setRetrievedDataInForm(data) {
    for (var i in this.addEditProductForm.value) {
      if (i == 'partner_master' || i == 'state') {
        data[i] = data[i]?.id;
      }
      if (i != 'document_data' && i != 'upis') {
        if (data[i]) {
          this.addEditProductForm.controls[i].setValue(data[i], { emitEvent: false });
        }
      }
    }
    this.setFormData(data);
    this.setUpiFormData(data)
  }

  setFormData(data) {
    // if (data) {
    //   const documentArray = [];
    //   data.documents?.forEach(element => {
    //     const documents = {
    //       pk: element?.document_master['id'],
    //       documents: element?.document_file,
    //       name: element?.document_master['name'],
    //       document_name: element?.file_name,
    //       id: element?.id,
    //       is_verified: element?.is_verified,

    //     }
    //     documentArray.push(documents);
    //     this.documentArray?.forEach(( entity, index) => {
    //       if (entity.pk == element?.document_master['id']) {
    //         this.documentArray.splice(index,1)
    //       }
    //     });
    //     this.addSkills(documents)
    //   });
    // }
    if (data) {
      const documentArray = [];
      data.documents?.forEach((element) => {
        let documents;
        if (element?.document_master?.require_front_back) {
          documents = {
            pk: element?.document_master["id"],
            name: element?.document_master["name"],
            document_name: null,
            document_name_front: element?.front_file_name,
            document_name_back: element?.back_file_name,
            documents: null,
            documents_front: element?.document_file_front ? element?.document_file_front : null,
            documents_back: element?.document_file_back ? element?.document_file_back : null,
            id: element?.id,
            is_verified: element?.is_verified,
            front_back_flag: element?.document_master?.require_front_back,
            display_name: null,
            display_name_front: element?.document_master?.name + " Front",
            display_name_back: element?.document_master?.name + " Back",
            isdelete: false,
          };
          documentArray.push(documents);
          this.addSkills(documents);
        } else if (!element?.document_master?.require_front_back) {
          documents = {
            pk: element?.document_master["id"],
            name: element?.document_master["name"],
            document_name: element?.file_name ? element?.file_name : null,
            document_name_front: null,
            document_name_back: null,
            documents: element?.document_file ? element?.document_file : null,
            documents_front: null,
            documents_back: null,
            id: element?.id,
            is_verified: element?.is_verified,
            front_back_flag: element?.document_master?.require_front_back,
            display_name: element?.document_master?.name,
            display_name_front: null,
            display_name_back: null,
            isdelete: false,
          };
          // documentArray.push(documents);
          if (documents?.pk == 3) {
            this.documentArray?.forEach((entity, index) => {
              if (entity.pk == element?.document_master["id"]) {
                this.documentArray.splice(index, 1);
              }
            });
          }
          this.addSkills(documents);
        }
        // this.documentArray?.forEach((entity, index) => {
        //   if (entity.pk == element?.document_master["id"]) {
        //     this.documentArray.splice(index, 1);
        //   }
        // });
        // this.addSkills(documents);
      });
    }
  }

  getListOfStates() {
    let action = 'get-states'
    this.http.fetchDetailForUserModuleDropDown(action).subscribe((res: any) => {
      console.log(res);
      this.stateArr = res?.data;
    })
  }

  onSearchGetList(e, action) {
    // if(action === 'sta'){
    clearTimeout(this.debounce);
    this.debounce = setTimeout(() => {
      // this.getListOfCorp(search_param);
    }, 500);
    // }

  }


  createMasterProductForm(data?) {
    this.addEditProductForm = this.fb.group({
      name: [data ? data?.name : null, [Validators.required]],
      address_line_1: [data ? data?.address_line_1 : null, [Validators.required]],
      address_line_2: [data ? data?.address_line_2 : null, [Validators.required]],
      city: [data ? data?.city : null, [Validators.required]],
      display_name: [data ? data?.display_name : null, [Validators.required]],
      state: [data ? data?.state?.id : null, [Validators.required]],
      pincode: [data ? data?.pincode : null, [Validators.required, Validators.pattern('^[1-9][0-9]{5}$')]],
      phone: [data ? data?.phone : null, [Validators.required, Validators.pattern('([0-9]{8}|[0-9]{10})')]],


      bank_name: [data ? data?.bank_name : null],
      account_no: [data ? data?.account_no : null],
      ifsc: [data ? data?.ifsc : null, [Validators.pattern("^[A-Z]{4}0[A-Z0-9]{6}$")]],
      branch: [data ? data?.branch : null],
      // primary_upi: [data ? data?.primary_upi : null, [Validators.required, Validators.pattern('^(.+)@(.+)$')]],
      // ^(.+)@(.+)$
      // secondary_upi: [data ? data?.secondary_upi : null, [ Validators.pattern('^(.+)@(.+)$')]],
      mdr: [data ? data?.mdr : null],
      interest_subvention: [data ? data?.interest_subvention : null],
      payout: [data ? data?.payout : null],
      upis: this.fb.array([]),
      // Attribute Type under business detail
      // business_type: [data ? data?.name : null, [Validators.required]],
      // Attribute Nature under business detail
      // business_nature: [data ? data?.name : null, [Validators.required]],



      partner_master: [data ? data?.partner_master?.id : null],
      contact_person_name: [data ? data?.contact_person_name : null, [Validators.required]],
      contact_person_phone: [data ? data?.contact_person_phone : null, [Validators.required, Validators.pattern('([0-9]{8}|[0-9]{10})')]],
      contact_person_email: [data ? data?.contact_person_email : null, [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-z]{2,4}$')]],
      master: ['0', [Validators.required]],
      document_data: this.fb.array([]),
      partner_nature: ['Merchant', [Validators.required]],

    });
    if (data) {
      this.setFormData(data);
    }
  }

  onClickOpenPopUp(e) {
    if (e?.pointerType == 'mouse') {
      this.isVisible = true;
    }
  }

  async onClickShowUploadedDocument(e, action?) {
    // if (e?.value?.documents?.uid) {
    //   let doc = await getBase64(e?.value?.documents);
    //   const images = [];
    //   const img = {
    //     src: doc,
    //     width: "600px",
    //     height: "400px",
    //     alt: "ng-zorro",
    //   };
    //   images.push(img);
    //   this.nzImageService.preview(images, { nzZoom: 1.5, nzRotate: 0 });
    // } else {
    //   const images = [];
    //   const img = {
    //     src: e?.value?.documents,
    //     width: "600px",
    //     height: "400px",
    //     alt: "ng-zorro",
    //   };
    //   images.push(img);
    //   this.nzImageService.preview(images, { nzZoom: 1.5, nzRotate: 0 });
    // }
    const images = [];
    if (action == 'documents') {
      if (e?.value?.documents?.uid) {
        let doc = await getBase64(e?.value?.documents);
        const img = {
          src: doc,
          width: "600px",
          height: "400px",
          alt: "ng-zorro",
        };
        images.push(img);
        this.nzImageService.preview(images, { nzZoom: 1.5, nzRotate: 0 });
      } else {
        const img = {
          src: e?.value?.documents,
          width: "600px",
          height: "400px",
          alt: "ng-zorro",
        };
        images.push(img);
        this.nzImageService.preview(images, { nzZoom: 1.5, nzRotate: 0 });
      }
    } else if (action == 'documents_front') {
      if (e?.value?.documents_front?.uid) {
        let doc = await getBase64(e?.value?.documents_front);
        // const images = [];
        const img = {
          src: doc,
          width: "600px",
          height: "400px",
          alt: "ng-zorro",
        };
        images.push(img);
        this.nzImageService.preview(images, { nzZoom: 1.5, nzRotate: 0 });
      } else {
        // const images = [];
        const img = {
          src: e?.value?.documents_front,
          width: "600px",
          height: "400px",
          alt: "ng-zorro",
        };
        images.push(img);
        this.nzImageService.preview(images, { nzZoom: 1.5, nzRotate: 0 });
      }
    } else if (action == 'documents_back') {
      if (e?.value?.documents_back?.uid) {
        let doc = await getBase64(e?.value?.documents_back);
        // const images = [];
        const img = {
          src: doc,
          width: "600px",
          height: "400px",
          alt: "ng-zorro",
        };
        images.push(img);
        this.nzImageService.preview(images, { nzZoom: 1.5, nzRotate: 0 });
      } else {
        // const images = [];
        const img = {
          src: e?.value?.documents_back,
          width: "600px",
          height: "400px",
          alt: "ng-zorro",
        };
        images.push(img);
        this.nzImageService.preview(images, { nzZoom: 1.5, nzRotate: 0 });
      }
    }
  }

  // onClickShowUploadedDocument(e){
  //   if(e?.value?.documents?.uid){
  //     saveAs(e?.value?.documents);
  //   } else {
  //     var data = new Blob([e?.value?.documents], { type: 'text/plain;charset=utf-8' });
  //     FileSaver.saveAs(data,  `${e?.value?.document_name}`); 
  //   }
  // }

  omit_special_char(event) {
    // to avoid special Character
    // var k;
    // k = event.charCode;  //         k = event.keyCode;  (Both can be used)
    // return ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || (k >= 48 && k <= 57));

    // to avoid special Character && Number
    var charCode = event.keyCode;
    if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || charCode == 32 || charCode == 8)
      return true;
    else
      return false;
  }

  deleteDocumentByDocumentId(i) {
    let fileName = this.addEditProductForm.get("document_data") as FormArray;
    const master = fileName.controls?.[i].value?.document_master;
    const selectedFile = fileName.controls?.[i].value;
    if (!fileName.controls?.[i].value?.id) {
      const document = {
        name: selectedFile?.label_name,
        pk: selectedFile?.document_master,
        front_back_flag: selectedFile?.front_back_flag,
        display_name: null,
        display_name_front: selectedFile?.name + " Front",
        display_name_back: selectedFile?.name + " Back",
        isdelete: false,
      };
      if (document?.pk == 3) {
        this.documentArray.push(document);
      }
      this.message.success(fileName.controls?.[i].value?.label_name + " Document Deleted");
      fileName.removeAt(i);
      this.selectedDocument = null;
    } else {
      this.http
        .deletePartnerDocumentByDocumentId(selectedFile?.id)
        .subscribe((res) => {
          const document = {
            name: selectedFile?.label_name,
            pk: selectedFile?.document_master,
            front_back_flag: selectedFile?.front_back_flag
          };
          if (document?.pk == 3) {
            this.documentArray.push(document);
          }
          this.message.success(fileName.controls?.[i].value?.label_name + " Document Deleted");
          fileName.removeAt(i);
          this.selectedDocument = null;
        });
    }
  }


  listOfDocumentWithFlag: any = [];
  getListOfDocumentRequired() {
    this.http.getListOfDocumentRequired().subscribe((res: any) => {
      const data = res?.data?.results;
      data.map((res) => {
        if (res?.pk == 7 || res?.pk == 3) {
          let otherDoc = {
            pk: res?.pk,
            name: res?.name,
            front_back_flag: res?.front_back_flag,
          };
          this.documentArray.push(otherDoc);
        }
      });
    })
  }

  documentFlagArray = [];
  addRule() {
    if (this.selectedDocument?.pk == 3) {
      this.documentFlagArray.push(this.selectedDocument);
    }
    const storeSelectedData = this.selectedDocument
    if (this.selectedDocument?.front_back_flag) {
      let data
      data = {
        front_back_flag: storeSelectedData?.front_back_flag,
        name: storeSelectedData?.name,
        display_name: null,
        isdelete: false,
        display_name_front: storeSelectedData?.name + " Front",
        display_name_back: storeSelectedData?.name + " Back",
        pk: storeSelectedData?.pk
      }
      this.addSkills(data);
      // data = {
      //   front_back_flag: storeSelectedData?.front_back_flag,
      //   name: storeSelectedData?.name,
      //   display_name: storeSelectedData?.name + " Back",
      //   isdelete: true,
      //   pk: storeSelectedData?.pk
      // }
      // this.addSkills(data);
    } else {
      let data;
      data = {
        front_back_flag: storeSelectedData?.front_back_flag,
        name: storeSelectedData?.name,
        display_name: storeSelectedData?.name,
        display_name_front: null,
        display_name_back: null,
        isdelete: false,
        pk: storeSelectedData?.pk
      }
      this.addSkills(data);
    }
    this.isVisible = false;
  }

  get skills(): FormArray {
    return this.addEditProductForm.get("document_data") as FormArray
  }

  newSkill(data?): FormGroup {
    // this.selectedDocument = null;
    // return this.fb.group({
    //   id: [data ? data?.id : null],
    //   document_master: [data?.pk],
    //   label_name: [data?.name],
    //   documents: [data?.documents],
    //   document_name:[data?.document_name],
    //   is_verified:[ data?.is_verified ? data?.is_verified : false]
    // })
    this.selectedDocument = null;
    return this.fb.group({
      id: [data ? data?.id : null],
      front_back_flag: [data ? data?.front_back_flag : null],
      document_master: [data?.pk],
      display_name_front: [data?.display_name_front],
      display_name_back: [data?.display_name_back],
      display_name: [data?.display_name],
      isdelete: data?.isdelete ? data?.isdelete : false,
      label_name: [data?.name],
      documents: [data?.documents],
      documents_front: [data?.documents_front],
      documents_back: [data?.documents_back],
      document_name: [data?.document_name],
      document_name_front: [data?.document_name_front],
      document_name_back: [data?.document_name_front],
      is_verified: [data?.is_verified ? data?.is_verified : false],
    });
  }

  get_underwritingArr(form) {
    return form.controls.document_data.controls;
  }


  handleCancel(): void {
    this.isVisible = false;
  }
  // this.fb.array([])

  onUpload(e, i, action) {
    // let fileName = this.addEditProductForm.get('document_data') as FormArray;
    // fileName.controls?.[i].patchValue({document_name: e?.file?.name});
    // let value = this.addEditProductForm.get('document_data') as FormArray;
    // value.controls?.[i].patchValue({documents: e?.file?.originFileObj});
    let fileName = this.addEditProductForm.get("document_data") as FormArray;
    let value = this.addEditProductForm.get("document_data") as FormArray;
    if (action == 'name') {
      fileName.controls?.[i].patchValue({ document_name: e?.file?.name });
      value.controls?.[i].patchValue({ documents: e?.file?.originFileObj });
    } else if (action == 'name_front') {
      fileName.controls?.[i].patchValue({ document_name_front: e?.file?.name });
      value.controls?.[i].patchValue({ documents_front: e?.file?.originFileObj });
    } else if (action == 'name_back') {
      fileName.controls?.[i].patchValue({ document_name_back: e?.file?.name });
      value.controls?.[i].patchValue({ documents_back: e?.file?.originFileObj });
    }
  }


  addSkills(data?) {
    this.skills.push(this.newSkill(data));
  }

  removeSkill(i: number) {
    this.skills.removeAt(i);
  }

  onClickSubmitForm() {
    console.log(this.addEditProductForm.value);

    // karan plz refer this code
    const upis = this.addEditProductForm.value.upis;
    const val = []
    upis.forEach((value, key) => {
      val.push(value?.upi_id);
    });
    this.addEditProductForm.patchValue({'upis': upis});
      
    
    console.log('Testings...');
    console.log(val);
    console.log(this.addEditProductForm.value);
    // return;
    const saveDoc = [];
    for (const i in this.addEditProductForm.controls) {
      this.addEditProductForm.controls[i].markAsDirty();
      this.addEditProductForm.controls[i].updateValueAndValidity();
    }
    if (!this.addEditProductForm.valid) {
      this.message.error('Mandatory Fields Are missing ', { nzDuration: 5000 }
      );
    }
    var sendDate = this.addEditProductForm.value
    for (var i in sendDate.document_data) {
      // if(!sendDate.document_data[i].document_name && sendDate.document_data[i].label_name){
      //   this.message.error( ' Plz Upload Selected Document ' + ` ${sendDate.document_data[i].label_name}` + ' at index ' + i, { nzDuration: 5000 })
      //   return;
      //   }
      if (sendDate.document_data[i].front_back_flag && !sendDate.document_data[i].document_name_front) {
        this.message.error(
          " Plz Upload Selected Document " +
          ` ${sendDate.document_data[i].label_name}`, { nzDuration: 5000 }
        );
        return;
      }
      if (!sendDate.document_data[i].front_back_flag &&
        !sendDate.document_data[i].document_name) {
        this.message.error(
          " Plz Upload Selected Document " +
          ` ${sendDate.document_data[i].label_name}`,
          { nzDuration: 5000 }
        );
        return;
      }
    }
    if (this.addEditProductForm.valid) {
      this.apiLoader['formSave'] = true
      if (!this.isEdit) {
        let data = new FormData();

        var sendDate = this.addEditProductForm.value

        for (var i in sendDate.document_data) {
          // if(sendDate?.document_data[i]?.documents?.includes('/')){
          // break;  
          // }
          if (!sendDate.document_data[i].id) {
            delete sendDate?.document_data[i]?.id;
          }
          // if(sendDate?.document_data[i]?.documents){
          //   saveDoc.push(sendDate?.document_data[i]?.documents)
          //   data.append('documents', sendDate?.document_data[i]?.documents)
          //   delete sendDate?.document_data[i]?.documents
          // }
          if (sendDate?.document_data[i]?.front_back_flag) {
            // saveDoc.push(sendDate?.document_data[i]?.documents)
            if (sendDate?.document_data[i]?.document_name_front) {
              data.append("documents", sendDate?.document_data[i]?.documents_front);
              delete sendDate?.document_data[i]?.documents_front;
            }
            if (sendDate?.document_data[i]?.document_name_back) {
              data.append("documents", sendDate?.document_data[i]?.documents_back);
              delete sendDate?.document_data[i]?.documents_back;
            }
            // data.append("documents", sendDate?.document_data[i]?.documents);
            // delete sendDate?.document_data[i]?.documents;
          }
          if (!sendDate?.document_data[i]?.front_back_flag) {
            saveDoc.push(sendDate?.document_data[i]?.documents)
            data.append("documents", sendDate?.document_data[i]?.documents);
            delete sendDate?.document_data[i]?.documents;
          }
          // data.append('documents', sendDate?.document_data[i]?.documents)
          // delete sendDate?.document_data[i]?.documents
        }

        for (var i in sendDate) {
          if (i == 'document_data') {
            data.append(i, JSON.stringify(sendDate[i]))
          } else if (i == 'upis') {
            sendDate[i].forEach(element => {
              this.upiData.push(element?.upi_id)
            });
            data.append(i, this.upiData)
          } else {
            if (sendDate[i]) {
              data.append(i, sendDate[i])
            }
            // data.append(i, sendDate[i])
          }
        }
        const url = this.http.createPartnerForm(data);
        url.subscribe((res: any) => {
          if (res.success) {
            this.router.navigate(['merchants/list']);
          } else {
            for (var i in saveDoc) {
              let value = this.addEditProductForm.get("document_data") as FormArray;
              value.controls?.[i].patchValue({ documents: saveDoc[i] });
            }
            this.message.error(res?.message);
            this.apiLoader['formSave'] = false;
          }
        }, err => {
          for (var i in saveDoc) {
            let value = this.addEditProductForm.get("document_data") as FormArray;
            value.controls?.[i].patchValue({ documents: saveDoc[i] });
          }
          this.apiLoader['formSave'] = false
        })
      }
      else {
        let data = new FormData();

        var sendDate = this.addEditProductForm.value
        for (var i in sendDate.document_data) {
          // console.log(sendDate.document_data[i]?.documents);
          // console.log(sendDate.document_data[i].documents?.['uid']);
          // console.log(sendDate.document_data[i].id);
          if (!sendDate.document_data[i].id) {
            delete sendDate?.document_data[i]?.id;
          }
          // console.log('working' + sendDate.document_data +  ' ' +  i);
          // if(sendDate.document_data[i].documents?.['uid']){
          //   data.append('documents', sendDate?.document_data[i]?.documents)  
          //   delete sendDate?.document_data[i]?.documents
          // } else {
          //   delete sendDate?.document_data[i]?.documents
          // }
          if (sendDate?.document_data[i]?.front_back_flag) {
            // saveDoc.push(sendDate?.document_data[i]?.documents)
            if (sendDate?.document_data[i]?.documents_front?.["uid"]) {
              data.append("documents", sendDate?.document_data[i]?.documents_front);
              delete sendDate?.document_data[i]?.documents_front;
            } else {
              delete sendDate?.document_data[i]?.documents_front;
            }
            if (sendDate?.document_data[i]?.documents_back?.["uid"]) {
              data.append("documents", sendDate?.document_data[i]?.documents_back);
              delete sendDate?.document_data[i]?.documents_back;
            } else {
              delete sendDate?.document_data[i]?.documents_back;
            }
          }
          if (!sendDate?.document_data[i]?.front_back_flag) {
            if (sendDate?.document_data[i]?.documents?.["uid"]) {
              data.append("documents", sendDate?.document_data[i]?.documents);
              delete sendDate?.document_data[i]?.documents;
            } else {
              delete sendDate?.document_data[i]?.documents;
            }
          }
        }

        for (var i in sendDate) {
          if (i == 'document_data') {
            data.append(i, JSON.stringify(sendDate[i]))
          } else if (i == 'upis') {
            sendDate[i].forEach(element => {
              this.upiData.push(element?.upi_id)
            });
            data.append(i, JSON.stringify(this.upiData))
          }else {
            if (sendDate[i]) {
              data.append(i, sendDate[i])
            }
            // data.append(i, sendDate[i])
          }
        }
        const url = this.http.updateMasterPartnerForm(this.masterPartnerId, data)
        url.subscribe((res: any) => {
          if (res.success) {
            this.message.success(res?.message);
            this.apiLoader['formSave'] = false
            this.router.navigate(['merchants/list']);
          } else {
            this.message.error(res?.message);
            this.apiLoader['formSave'] = false;
          }
        }, err => {
          this.apiLoader['formSave'] = false
        })
      }
    }
  }

  onClickSaveExistingForm() {
    const saveDoc = []
    for (const i in this.addEditProductForm.controls) {
      this.addEditProductForm.controls[i].markAsDirty();
      this.addEditProductForm.controls[i].updateValueAndValidity();
    }
    if (!this.addEditProductForm.valid) {
      this.message.error('Mandatory Fields Are missing ', { nzDuration: 5000 }
      );
    }
    var sendDate = this.addEditProductForm.value
    for (var i in sendDate.document_data) {
      // if(!sendDate.document_data[i].document_name && sendDate.document_data[i].label_name){
      //   this.message.error( ' Plz Upload Selected Document ' + ` ${sendDate.document_data[i].label_name}` + ' at index ' + i, { nzDuration: 5000 })
      //   return;
      //   }
      if (sendDate.document_data[i].front_back_flag && !sendDate.document_data[i].document_name_front) {
        this.message.error(
          " Plz Upload Selected Document " +
          ` ${sendDate.document_data[i].label_name}`, { nzDuration: 5000 }
        );
        return;
      }
      if (!sendDate.document_data[i].front_back_flag &&
        !sendDate.document_data[i].document_name) {
        this.message.error(
          " Plz Upload Selected Document " +
          ` ${sendDate.document_data[i].label_name}`,
          { nzDuration: 5000 }
        );
        return;
      }
    }

    if (this.addEditProductForm.valid) {
      this.apiLoader['saveAddNew'] = true
      let data = new FormData();

      var sendDate = this.addEditProductForm.value

      for (var i in sendDate.document_data) {
        if (!sendDate.document_data[i].id) {
          delete sendDate?.document_data[i]?.id;
        }
        if (!sendDate.unique_code) {
          delete sendDate?.unique_code;
        }
        // if(sendDate?.document_data[i]?.documents){
        //   saveDoc.push(sendDate?.document_data[i]?.documents)
        //   data.append('documents', sendDate?.document_data[i]?.documents)
        //   delete sendDate?.document_data[i]?.documents
        // }
        if (sendDate?.document_data[i]?.front_back_flag) {
          // saveDoc.push(sendDate?.document_data[i]?.documents)
          if (sendDate?.document_data[i]?.document_name_front) {
            data.append("documents", sendDate?.document_data[i]?.documents_front);
            delete sendDate?.document_data[i]?.documents_front;
          }
          if (sendDate?.document_data[i]?.document_name_back) {
            data.append("documents", sendDate?.document_data[i]?.documents_back);
            delete sendDate?.document_data[i]?.documents_back;
          }
          // data.append("documents", sendDate?.document_data[i]?.documents);
          // delete sendDate?.document_data[i]?.documents;
        }
        if (!sendDate?.document_data[i]?.front_back_flag) {
          saveDoc.push(sendDate?.document_data[i]?.documents)
          data.append("documents", sendDate?.document_data[i]?.documents);
          delete sendDate?.document_data[i]?.documents;
        }
      }

      for (var i in sendDate) {
        console.log(i);
        console.log(sendDate);
        console.log(sendDate[i]);
        if (i == 'document_data') {
          data.append(i, JSON.stringify(sendDate[i]))
        } else {
          if (sendDate[i]) {
            data.append(i, sendDate[i])
          }
        }
      }
      const url = this.http.createPartnerForm(data);
      url.subscribe((res: any) => {
        if (res.success) {
          this.message.success(res?.message);
          this.apiLoader['saveAddNew'] = false
          let newRouterLink = '/merchants/list/add-merchant';
          this.router.navigate(['/']).then(() => { this.router.navigate([newRouterLink]); })
        } else {
          for (var i in saveDoc) {
            let value = this.addEditProductForm.get("document_data") as FormArray;
            value.controls?.[i].patchValue({ documents: saveDoc[i] });
          }
          this.message.error(res?.message);
          this.apiLoader['saveAddNew'] = false
        }
      }, error => {
        for (var i in saveDoc) {
          let value = this.addEditProductForm.get("document_data") as FormArray;
          value.controls?.[i].patchValue({ documents: saveDoc[i] });
        }
        this.apiLoader['saveAddNew'] = false
      })
    }

  }

  handleChange(e, index) {
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

  setUpiFormData(data) {

    console.log(data['upis']);
    if (data) {
      
      data['upis']?.forEach(element => {
        this.addAdditionalUPI(element)
      });
    } else {
      this.addAdditionalUPI()
    }
  }

  addAdditionalUPI(data?) {
    this.upis.push(this.addSlabControlsUPI(data))
  }

  get upis(): FormArray {
    return this.addEditProductForm.get('upis')  as FormArray;
  }

  public addSlabControlsUPI(data?): FormGroup {
    return this.fb.group({
      upi_id: [data ? data : ''],
    });
  }

  getUPIForm_arr(form) {
    return form.controls.upis.controls;
  }

  removeMaster(control, slab_index) {
    control = <FormArray>this.addEditProductForm.get('upis')
    control.value[slab_index].is_deleted = true;
    control.controls.splice(slab_index, 1)
  }
}
