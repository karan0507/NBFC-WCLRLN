import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { differenceInCalendarDays } from 'date-fns/esm';
import { HttpService } from 'src/app/services/http.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import * as FileSaver from 'file-saver';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { GlobalservicesService } from 'src/app/shared/globalservices.service';
// import {}

@Component({
      selector: 'app-edit-form',
      templateUrl: './edit-form.component.html',
      styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {
      personalDetails: FormGroup;
      additionalDetails: FormGroup;
      employementDetails: FormGroup;
      preApprovedForm: FormGroup;
      documentForm: FormGroup;
      userId: any;
      personalInfo: any
      documentsList: any = []
      filesArray: any = []
      api_calling_loader = {
            'listLoader': false,
            'accordian': false,
            'button': false,
            'modalButton': false
      };
      masterIncomeRangeList: any = [];
      partnerList: any = [];
      documentList: any = [];
      today = new Date();
      productList: any = [];
      disabledDate = (current: Date): boolean => {
            // Can not select days before today and today
            return differenceInCalendarDays(current, this.today) > 0;
      };

      // Document Values:
      _isViewDocument: boolean = false;
      _isVerify: boolean = false;
      _isUpload: boolean = false;
      _currentModalData: any;
      isRequestDoc: boolean = false;
      verifyRemarks: any;
      _isOpenModal: boolean = false;
      _currentFileName: any
      fileList: any = [];
      documentStatus: any;
      isCorporate: boolean = false;
      isEditName: boolean = false;
      ifCorporateNotMapped: any;
      employmentType: any;
      userIdOfUser: any;
      nomineeDetails: FormGroup;
      constructor(private fb: FormBuilder, public https: HttpService, public route: ActivatedRoute, public router: Router, public datePipe: DatePipe, public message: NzMessageService, public global: GlobalservicesService) { }

      ngOnInit(): void {
            let url = (this.router.url.split("?")[0]).toString()
            if (url == '/applications/form-filling/edit-form') {
                  this.isEditName = false
            } else {
                  this.isEditName = true
            }
            this.addEditForm();
            this.fetchEmploymentType();
            this.fetchProductList();
            this.fetchMasterIncomeRange();
            this.fetchPartnerList();
            this.route.queryParams.subscribe(params => {
                  if (params['id']) {
                        this.userId = params['id'];
                        this.getFormLoanData();
                  }
            })
            this.personalDetails = this.fb.group(
                  {
                        name: [this.isEditName ?  [null] : null],
                        email: [null, [ Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
                        date_of_birth: [null],
                        income: [null],
                  })
                  this.nomineeDetails = this.fb.group({
                        nominee: this.fb.array([]),
                  })
                  
            this.employementDetails = this.fb.group({
                  company_name: [null, [Validators.required]],
                  address: [null, []],
                  emp_code:[null],
                  address_1:[null],
                  address_2:[null],
                  city:[null],
                  landmark:[null],
                  pincode:[null],
                  state:[null],

                  employment_type_id: [null, [Validators.required]]
            })

            this.preApprovedForm = this.fb.group({
                  product_name: [null, [Validators.required]],
                  limitProcessed: [null, [Validators.required, Validators.min(1)]]
            })

            this.documentForm = this.fb.group({
                  document_name: ['1'],
                  document_name_2: ['1']
            })
      }

      addEditForm(data?) {
            this.additionalDetails = this.fb.group({
                  application :     [data ? data?.id : ""],
                  id:               [""],
                  pan_no:           [""],
                  aadhar_no:        [""],
                  address_1:        [data ? data?.address_details?.address_1 : ""],
                  address_2:        [data ? data?.address_details?.address_2 : ""],
                  address_3:        [data ? data?.address_details?.address_3 : ""],
                  landmark:         [data ? data?.address_details?.landmark : ""],
                  city:             [data ? data?.address_details?.city : ""],
                  state:            [data ? data?.address_details?.state : ""],
                  pincode:          [data ? data?.address_details?.pincode : ""]
            })
      }

      get nominee(): FormArray {
            return this.nomineeDetails.get('nominee')  as FormArray;
          }

      addAdditionalUPI(data?) {
      this.nominee.push(this.addSlabControlsUPI(data))
      console.log(data);
      }

      patchNomineeDetails(data){
            data?.forEach(element => {
                  this.addAdditionalUPI(element)
            });
      }

      isDisabled = true;

      public addSlabControlsUPI(data?): FormGroup {
            console.log(data);
            return this.fb.group({
                  id: [data?.id ? data?.id : ''],
                  mobile: [data?.mobile ? data?.mobile : ''],
                  name: [data?.name ? data?.name : ''],
                  relationship: [data?.relationship ? data?.relationship : ''],
            });
          }
        
          getUPIForm_arr(form) {
            //     console.log(form)
            // this.nominee.get.('nominee')['controls']['name'].disable();
            // this.nominee.get('document_data')['controls'][index].controls.documents.setValue(e.file.originFileObj)
            // form.controls.nominee.value.relationship.disable();
            return form.controls.nominee.controls;
          }

      fetchEmploymentType(){
            let data;
            this.https.fetchEmploymentType(data).subscribe((res: any)=>{
                  console.log(res);
                  if(res?.success){
                        this.employmentType = res?.data?.results
                  } else {
                        this.message.error(res?.message);
                  }
            }, error=>{

            })
      }



      handleCancel() {
            this._isOpenModal = false;
            this._isViewDocument = false;
            this._isUpload = false;
            this._isVerify = false;
            this.isRequestDoc = false;
      }
      handleOk(type?) {
            switch (type) {
                  case 'verify':
                        console.log(this.documentStatus, this.verifyRemarks);

                        // this.api_calling_loader['modalButton'] = true
                        // let params = { source: 'Onboarding', datapoint: 'verify_kyc_doc', 'application_id': this._currentModalData['application'], 'kyc_document_id': this._currentModalData?.id, 'status': (this.documentStatus == 1 ? 'Accepted' : 'Rejected'), 'reason': this.verifyRemarks }
                        // this.https.verifyLoanDocument(params).subscribe((res: any) => {
                        //       if (res?.success) {
                        //             this.api_calling_loader['modalButton'] = false
                        //             this.message.success(res?.message);
                        //             this.handleCancel();
                        //             this.getFormLoanData()
                        //       } else {
                        //             this.api_calling_loader['modalButton'] = false
                        //             this.message.error(res?.message);
                        //       }
                        // }, err => {
                        //       this.api_calling_loader['modalButton'] = false
                        //       this.message.error(err);
                        // })

                        break;
                  case 'uploadDocument':

                        this.api_calling_loader['modalButton'] = true
                        let uploadDoc = new FormData()
                        uploadDoc.append('source', 'Onboarding')
                        if (this._currentModalData?.document_master?.id) {
                              uploadDoc.append('datapoint', 'upload_kyc_doc')
                              this.documentsList = { 'document_master': this._currentModalData?.document_master?.id, 'document_name': this.fileList[0]['name'], 'doc_type': 'KYC' }
                              this.filesArray = this._currentFileName
                        } else if (this._currentModalData?.document_master?.name == "Selfie") {
                              uploadDoc.append('datapoint', 'upload_selfie')
                              this.documentsList = { 'document_master': 0, 'document_name': this.fileList[0]['name'], 'doc_type': 'SELFIE' }
                              this.filesArray = this._currentFileName
                        }
                        uploadDoc.append('application_id', this._currentModalData['application'])
                        if (this._currentModalData?.id) {
                              uploadDoc.append('kyc_document_id', this._currentModalData?.id)
                        }
                        if (this._currentModalData?.document_master?.id) {
                              uploadDoc.append('document_id', this._currentModalData?.document_master?.id)
                        }
                        uploadDoc.append('file', this._currentFileName)
                        this.https.uploadLoanDocument(uploadDoc).subscribe((res: any) => {
                              if (res?.success) {
                                    this.api_calling_loader['modalButton'] = false;
                                    console.log(this.documentsList, '<==== Document List is here && File List ====>', this.fileList);

                                    this.fileList = [];
                                    this.message.success(res?.message)
                                    this.handleCancel();
                              } else {
                                    this.api_calling_loader['modalButton'] = false;
                                    this.fileList = [];
                                    this.message.error(res?.message)
                                    this.handleCancel();
                              }
                        }, err => {
                              this.api_calling_loader['modalButton'] = false;
                              this.message.error(err)
                        })
                        break;
            }
      }

      onChange(event) {
            // this.personalDetails.get('date_of_birth').setValue(this.datePipe.transform(event, 'yyyy-MM-dd'))
      }

      resetForm() {
            this.personalDetails.reset();
            this.employementDetails.reset();
            this.preApprovedForm.reset();
      }

      getFormLoanData() {
            this.api_calling_loader['accordian'] = true;
            let data = { 'source': 'Onboarding', 'datapoint': 'get_edit_application', 'endpoint': this.userId };
            this.https.fetchLoanApplicationList(data).subscribe(res => {
                  if (res.success) {
                        this.userIdOfUser = res?.data
                        this.patchNomineeDetails(res?.data?.nominee);
                        this.api_calling_loader['accordian'] = false;
                        this.ifCorporateNotMapped = res?.data?.company_details?.name;
                        this.personalDetails.patchValue({ name: res?.data?.user_info ? res?.data?.user_info?.name : null });
                        this.personalDetails.patchValue({ date_of_birth: res?.data?.dob ? res?.data?.dob : null });
                        this.personalDetails.patchValue({ email: res?.data?.email ? res?.data?.email : null });
                        this.personalDetails.patchValue({ income: res?.data?.income_range ? res?.data?.income_range?.id : null });
                        if (res?.data?.company_details) {
                              if (res?.data?.company_details?.id) {
                                    this.isCorporate = true
                                    this.employementDetails.patchValue({ address: res?.data?.company_details ? res?.data?.company_details?.address : null })
                                    this.employementDetails.patchValue({ company_name: res?.data?.company_details ? res?.data?.company_details?.id : null });
                              } else {
                                    this.employementDetails.patchValue({ company_name: res?.data?.company_details ? res?.data?.company_details?.name : null })
                                    this.isCorporate = false
                              }
                        } else {
                              this.isCorporate = false;
                        }
                        if(res?.data?.emp_code){
                              this.employementDetails.patchValue({
                                    emp_code: res?.data?.emp_code
                              })
                        }

                        if(res?.data?.address_details?.address_1){
                              this.employementDetails.patchValue({
                                    address_1: res?.data?.address_details?.address_1
                              })
                        }

                        if(res?.data?.address_details?.address_2){
                              this.employementDetails.patchValue({
                                    address_2: res?.data?.address_details?.address_2
                              })
                        }
                        if(res?.data?.address_details?.city){
                              this.employementDetails.patchValue({
                                    city: res?.data?.address_details?.city
                              })
                        }

                        if(res?.data?.address_details?.landmark){
                              this.employementDetails.patchValue({
                                    landmark: res?.data?.address_details?.landmark
                              })
                        }
                        if(res?.data?.address_details?.pincode){
                              this.employementDetails.patchValue({
                                    pincode: res?.data?.address_details?.pincode
                              })
                        }
                        if(res?.data?.address_details?.state){
                              this.employementDetails.patchValue({
                                    state: res?.data?.address_details?.state
                              })
                        }
                        // emp_code
                        if(res?.data?.employment_type_info){
                              this.employementDetails.patchValue({
                                    employment_type_id: res?.data?.employment_type_info.id
                              })
                        }
                        if (res?.data?.offer) {
                              this.preApprovedForm.patchValue({ product_name: res?.data?.offer[0]?.id ? res?.data?.offer[0]?.id : null })
                              this.preApprovedForm.patchValue({ limitProcessed: res?.data?.offer[0]?.amount_offered ? res?.data?.offer[0]?.amount_offered : null })
                              // this.preApprovedForm.get('product_name').setValue(res?.data?.offer[0]?.id);
                        }
                        this.personalInfo = res?.data?.user_info
                        this.documentList = res?.data?.kyc_documents;
                        this.addEditForm(this.userIdOfUser)

                        this.userIdOfUser?.kyc_documents.forEach(element => {
                              if (element.document_master?.name == 'Aadhar Card') {
                                    if (element.aadhar_no) {
                                          this.additionalDetails.get('aadhar_no').setValue(element.aadhar_no)
                                          this.additionalDetails.get('id').setValue(element.kyc_obj_id)
                                          this.additionalDetails.removeControl('aadhar_no')  
                                    }
                              }
                              if (element.document_master?.name == 'Pan') {
                                    if (element.pan_no) {
                                          this.additionalDetails.get('pan_no').setValue(element.pan_no)  
                                          this.additionalDetails.removeControl('pan_no')  
                                    }
                              }
                        });
                        if (this.userIdOfUser?.address_details?.address_1) {
                              this.additionalDetails.removeControl('address_1')
                        }
                        if (this.userIdOfUser?.address_details?.address_2) {
                              this.additionalDetails.removeControl('address_2')
                        }
                        if (this.userIdOfUser?.address_details?.address_3) {
                              this.additionalDetails.removeControl('address_3')
                        }
                        if (this.userIdOfUser?.address_details?.city) {
                              this.additionalDetails.removeControl('city')
                        }
                        if (this.userIdOfUser?.address_details?.landmark) {
                              this.additionalDetails.removeControl('landmark')
                        }
                        if (this.userIdOfUser?.address_details?.pincode) {
                              this.additionalDetails.removeControl('pincode')
                        }
                        if (this.userIdOfUser?.address_details?.state) {
                              this.additionalDetails.removeControl('state')
                        }

                  } else {
                        this.api_calling_loader['accordian'] = false;
                  }

            }, err => {
                  this.api_calling_loader['accordian'] = false;
            })
      }

      submitForm() {
            let data = new FormData();
            var sendData = this.nominee.value;
            this.api_calling_loader['button'] = true
            console.log(this.employementDetails.value.company_name);
            data.append('application', this.userId);
            if(sendData){
                  data.append('nominee', JSON.stringify(sendData))
            }
            // data.append('nominee', sendData)
            if(this.personalDetails.value.name){
                  data.append('name', this.personalDetails.value.name)
            }
            if(this.personalDetails.value.email){
                  data.append('email', this.personalDetails.value.email);
            }
            if(this.personalDetails.value.date_of_birth){
                  data.append('dob', this.datePipe.transform(this.personalDetails.value.date_of_birth, 'yyyy-MM-dd'));
            }
            if(this.personalDetails.value.income){
                  data.append('income_range', this.personalDetails.value.income);      
            }
            if (this.isCorporate) {
                  data.append('company_id', this.employementDetails.value.company_name);
            } else {
                  if(this.employementDetails.value.company_name){
                        data.append('company_id', this.employementDetails.value.company_name);
                  }
                  // data.append('company_name', this.employementDetails.value.company_name);
            }
            if ((this.documentsList) && (this.filesArray[0])) {
                  console.log(this.documentsList);
                  // data.append('documents_list', JSON.stringify(this.documentsList))
                  // data.append('documents', this.filesArray)
            }
            if(this.employementDetails.value.emp_code){
                  data.append('emp_code', this.employementDetails.value.emp_code);
            }

            if(this.employementDetails.value.address_1){
                  data.append('address_1', this.employementDetails.value.address_1);
            }

            if(this.employementDetails.value.address_2){
                  data.append('address_2', this.employementDetails.value.address_2);
            }
            if(this.employementDetails.value.city){
                  data.append('city', this.employementDetails.value.city);
            }
            if(this.employementDetails.value.landmark){
                  data.append('landmark', this.employementDetails.value.landmark);
            }
            if(this.employementDetails.value.pincode){
                  data.append('pincode', this.employementDetails.value.pincode);
            }
            if(this.employementDetails.value.state){
                  data.append('state', this.employementDetails.value.state);
            }
            // emp_code
            data.append('employment_type_id',this.employementDetails.value.employment_type_id)
            // registered_corporate
            data.append('registered_corporate', 'true');
            data.append('source', 'Onboarding');
            data.append('datapoint', 'edit_application');
            this.https.editLoanData(data).subscribe((res: any) => {
                  if (res?.success) {
                        // this.router.navigateByUrl('/applications/form-filling');
                        this.api_calling_loader['button'] = false
                        this.message.success(res?.message)
                        this.router.navigate(['.'], { relativeTo: this.route.parent });
                  } else {
                        this.message.error(res?.message)
                        // this.router.navigateByUrl('/applications/form-filling')
                        this.api_calling_loader['button'] = false
                  }
            })

      }

      fetchMasterIncomeRange() {
            this.https.getMasterIncomeSource().subscribe((res: any) => {
                  if (res?.success) {
                        this.masterIncomeRangeList = res?.data?.results;
                  }
            })
      }

      fetchPartnerList() {
            this.https.fetchPartner().subscribe((res: any) => {
                  if (res?.success) {
                        this.partnerList = res?.data?.results;
                  }
            })
      }

      editCompanyName(value?) {
            if(this.isCorporate){
                  console.log(value);
                  let data = this.partnerList.filter(res => res.pk == value);
                  this.employementDetails.get('address').setValue(data[0]?.address);
            } else {
                  this.employementDetails.patchValue({
                        company_id: value
                  })
                  // this.employementDetails('company_id', this.employementDetails.value.company_name);
            }
      }

      fetchProductList() {
            this.https.getAllProducts().subscribe((res: any) => {
                  this.productList = res?.data
            })
      }

      onFocusMethod(event) {

      }

      omit_special_char(event) {
            // to avoid special Character
            // var k;
            // k = event.charCode;  //         k = event.keyCode;  (Both can be used)
            // return ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || (k >= 48 && k <= 57));
        
            // to avoid special Character && Number
            var charCode = event.keyCode;
            if (
              (charCode > 64 && charCode < 91) ||
              (charCode > 96 && charCode < 123) ||
              charCode == 32 ||
              charCode == 8
            )
              return true;
            else return false;
          }

      openDocumentModal(type?, data?) {
            this._currentModalData = data;
            console.log(data);
            if (type == 'download') {
                  if (this._currentModalData?.document_master?.id) {
                        let data = { source: 'Onboarding', datapoint: 'download_document', 'endpoint': 'kyc', 'id': this._currentModalData?.id }
                  } else if (this._currentModalData?.document_master?.name == "Selfie") {
                        let data = { source: 'Onboarding', datapoint: 'download_document', 'endpoint': 'selfie', 'id': this._currentModalData?.application }
                  }

                  this.https.downloadDocuments(data).subscribe((res: any) => {
                        if (res?.success) {
                              var data = new Blob([res?.data?.file], { type: 'text/plain;charset=utf-8' });
                              FileSaver.saveAs(data, 'text.txt');
                        }
                  });
            } else {
                  this._isOpenModal = true;
                  switch (type) {
                        case 'viewDocument': this._isViewDocument = true;
                              // this.generateBase64View(this._currentModalData?.file);
                              break;
                        case 'verify': this._isVerify = true; break;
                        case 'upload': this._isUpload = true; break;
                  }
            }
      }

      beforeUploadName = (file: NzUploadFile): boolean => {
            this.fileList = [];
            this.fileList = this.fileList.concat(file);
            this._currentFileName = file;
            // this.generateBase64View(file)
            return false;
      };
      saveAdditionalDetails() {
            console.log(this.additionalDetails.value)
            var data = new FormData();
            data.append('source', 'Onboarding');
            data.append('model', 'UserKycDetail');
            data.append('datapoint', 'edit_application_new');
            data.append('edit', '1');
            if (this.additionalDetails.value.pan_no) {
                  data.append('pan_no', this.additionalDetails.value.pan_no)
            }
            if (this.additionalDetails.value.aadhar_no) {
                  data.append('aadhar_no', this.additionalDetails.value.aadhar_no)
            }
            if (this.additionalDetails.value.address_1) {
                  data.append('address_1', this.additionalDetails.value.address_1)
            }
            if (this.additionalDetails.value.address_2) {
                  data.append('address_2', this.additionalDetails.value.address_2)
            }
            if (this.additionalDetails.value.address_3) {
                  data.append('address_3', this.additionalDetails.value.address_3)
            }
            if (this.additionalDetails.value.landmark) {
                  data.append('landmark', this.additionalDetails.value.landmark)
            }
            if (this.additionalDetails.value.city) {
                  data.append('city', this.additionalDetails.value.city)
            }
            if (this.additionalDetails.value.state) {
                  data.append('state', this.additionalDetails.value.state)
            }
            if (this.additionalDetails.value.pincode) {
                  data.append('pincode', this.additionalDetails.value.pincode)
            }
            if (this.additionalDetails.value.application) {
                  data.append('application', this.additionalDetails.value.application)
            }
            if (this.additionalDetails.value.id) {
                  data.append('id', this.additionalDetails.value.id)
            }
            this.api_calling_loader['accordian'] = false
            this.https.editLoanData(data).subscribe((res: any) => {
                  if (res?.success) {
                        // this.router.navigateByUrl('/applications/form-filling');
                        this.api_calling_loader['accordian'] = false
                        this.message.success(res?.message)
                        this.getFormLoanData()
                        // this.router.navigate(['.'], { relativeTo: this.route.parent });
                  } else {
                        this.message.error(res?.message)
                        // this.router.navigateByUrl('/applications/form-filling')
                        this.api_calling_loader['accordian'] = false
                  }
            })
      }
}
