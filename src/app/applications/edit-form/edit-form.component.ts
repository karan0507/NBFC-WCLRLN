import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
      employementDetails: FormGroup;
      preApprovedForm: FormGroup;
      documentForm: FormGroup;
      userId: any;
      documentsList: any = []
      filesArray : any = []
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
      constructor(private fb: FormBuilder, public https: HttpService, public route: ActivatedRoute, public router: Router, public datePipe: DatePipe, public message: NzMessageService, public global : GlobalservicesService) { }

      ngOnInit(): void {
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
                        email: [null, [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
                        date_of_birth: [null, [Validators.required]],
                        income: [null, [Validators.required]]
                  })

            this.employementDetails = this.fb.group({
                  company_name: [null, [Validators.required]],
                  address: [null, [Validators.required]]
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
                        this.api_calling_loader['accordian'] = false;
                        this.personalDetails.patchValue({ date_of_birth: res?.data?.dob ? res?.data?.dob : null });
                        this.personalDetails.patchValue({ email: res?.data?.email ? res?.data?.email : null });
                        this.personalDetails.patchValue({ income: res?.data?.income_range ? res?.data?.income_range?.id : null });
                        this.employementDetails.patchValue({ address: res?.data?.company_details ? res?.data?.company_details?.address : null })
                        this.employementDetails.patchValue({ company_name: res?.data?.company_details ? res?.data?.company_details?.id : null });
                        if (res?.data?.offer) {
                              this.preApprovedForm.patchValue({ product_name: res?.data?.offer[0]?.id ? res?.data?.offer[0]?.id : null })
                              this.preApprovedForm.patchValue({ limitProcessed: res?.data?.offer[0]?.amount_offered ? res?.data?.offer[0]?.amount_offered : null })
                              // this.preApprovedForm.get('product_name').setValue(res?.data?.offer[0]?.id);
                        }
                        this.documentList = res?.data?.kyc_documents;

                  } else {
                        this.api_calling_loader['accordian'] = false;
                  }

            }, err => {
                  this.api_calling_loader['accordian'] = false;
            })
      }

      submitForm() {
            let data = new FormData();
            this.api_calling_loader['button'] = true
            console.log(this.employementDetails.value.company_name);
            data.append('application', this.userId);
            data.append('email', this.personalDetails.value.email);
            data.append('dob', this.datePipe.transform(this.personalDetails.value.date_of_birth, 'yyyy-MM-dd'));
            data.append('income_range', this.personalDetails.value.income);
            data.append('company_id', this.employementDetails.value.company_name);
            if ((this.documentsList) && (this.filesArray[0])) {
                  console.log(this.documentsList);
                  // data.append('documents_list', JSON.stringify(this.documentsList))
                  // data.append('documents', this.filesArray)
            }
            data.append('source', 'Onboarding');
            data.append('datapoint', 'edit_application');
            this.https.editLoanData(data).subscribe((res: any) => {
                  if (res?.success) {
                        // this.router.navigateByUrl('/applications/form-filling');
                        this.api_calling_loader['button'] = false
                        this.message.success(res?.message)
                        this.router.navigate(['.'], { relativeTo: this.route.parent });
                  } else {
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
            let data = this.partnerList.filter(res => res.pk == value);
            console.log(data);
            this.employementDetails.get('address').setValue(data[0]?.address);
      }

      fetchProductList() {
            this.https.getAllProducts().subscribe((res: any) => {
                  this.productList = res?.data
            })
      }

      onFocusMethod(event) {
            console.log(event);

      }

      openDocumentModal(type?, data?) {
            this._currentModalData = data;
            console.log(data);
            if (type == 'download') {
                  let data = { source: 'Onboarding', datapoint: 'download_document', 'endpoint': 'kyc', 'id': this._currentModalData?.id }
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
}
