import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Data } from '@angular/router';
import { differenceInCalendarDays } from 'date-fns';
import * as FileSaver from 'file-saver';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { HttpService } from 'src/app/services/http.service';
import { GlobalservicesService } from 'src/app/shared/globalservices.service';

@Component({
      selector: 'app-offer-proposed',
      templateUrl: './offer-proposed.component.html',
      styleUrls: ['./offer-proposed.component.css']
})
export class OfferProposedComponent implements OnInit {
      _exportDocument: any;
      checked: boolean = false;
      filters: any;
      remarks: any = '';
      productFilters: any;
      indeterminate: boolean = false;
      isRejectModal: boolean = false;
      listOfCurrentPageData: readonly Data[] = [];
      _currentLoanIdOffer: any;
      setOfCheckedId = new Set<number>();
      loanApplicationData: any = [];
      total_count: any;
      _currentDate: any;
      _currentId: any;
      currentOfferId : any;
      console = console;
      _checkedLoanList: any[];
      _activeLoans: any = [];
      today = new Date();
      api_calling_loader = {
            'listLoader': false,
            'accordian': false,
            'button': false
      };
      stageMasterList: any;
      _currentStageStatus: any;
      offerForm: FormGroup
      disabledDate = (current: Date): boolean => {
            // Can not select days before today and today
            return differenceInCalendarDays(current, this.today) > 0;
      };

      // Modal Boolean Values
      _isUpdateStatus: boolean = false;
      statusList: any;
      _currentDocument: any = '1'
      _isEditOffer: boolean = false;
      _isDocument: boolean = false;
      _isStatus: boolean = false;
      _currentCibilData: any;
      isFetchCibilSms : boolean = false

      // Modal Boolean Values
      _isPullData: boolean = false;
      _isOpenModal: boolean = false;
      _currentFileName: any;
      fileList: any = [];
      _isDownload: boolean = false;
      _isVerify: boolean = false;
      _isUpload: boolean = false;
      _currentModalData: any;
      _currentLoanDetails: any;
      _isViewDocument: boolean = false
      verifyRemarks: any;
      _isCibil: boolean = false
      documentStatus = 1
      // Page Filters and Pagination Data
      page = 1
      globalPageSize: any;
      productList: any = []
      stageStatusList: any = []
      searchValue: any;
      currentDropDownId : any
      partner : any
      partnerList : any = []
      blackBoxData: any;
      remarksDescription: any;
      constructor(public https: HttpService, public message: NzMessageService, public fb: FormBuilder, public global: GlobalservicesService, public sanitize: DomSanitizer) { }

      ngOnInit(): void {
            this.page = 1
            this.globalPageSize = this.global.globalPageSize;
            this.offerForm = this.fb.group({
                  amountOffered: [null, [Validators.required, Validators.min(1)]],
                  validitiy: [null],
                  interest: [null]
            })
            this.getFormLoanData();
      }

      sanatizeUrlToSafe(value) {
            // let data = 'https://devadminapi.fatakpay.com/media/nbfc_agreements/2022/02/11/djangogirls-tutorial-en_DkLZGLR.pdf'
            return this.sanitize.bypassSecurityTrustResourceUrl(value);
      }
      onFocusMethod(type) {
            if (type == 'product') {
                  this.https.getAllProducts().subscribe((res: any) => {
                        this.productList = res?.data
                        console.log(this.productList);
                  })
            } else if (type == 'status') {
                  let params = { 'source': 'Onboarding', endpoint: '4', 'datapoint': 'get-stage-statuses' }
                  this.https.getStatusStageWise(params).subscribe((res: any) => {
                        this.stageStatusList = res?.data
                        console.log(this.stageStatusList);
                  })
            }else if(type == 'partner'){
                  this.https.fetchPartner().subscribe((res:any)=>{
                        this.partnerList = res?.data?.results?.filter(res => { if (res?.name) { return res } });
                  })
            }
      }

      getFormLoanData(tableFilter?) {
            this.api_calling_loader['listLoader'] = true
            this.loanApplicationData = [];
            var data = { 'datapoint': 'loan_application', 'endpoint': 'LoanApplication?stage_id=4', 'source': 'Onboarding' }

            if (tableFilter) {
                  this.page = tableFilter?.pageIndex
                  this.globalPageSize = tableFilter?.pageSize
                  data['page'] = tableFilter?.pageIndex
                  data['limit'] = tableFilter?.pageSize
            } else {
                  data['page'] = this.page
                  data['limit'] = this.globalPageSize
            }

            if (this.filters) {
                  data['page'] = 1
                  data['status'] = this.filters
            }
            if (this.productFilters) {
                  data['page'] = 1
                  data['product_master'] = this.productFilters
            }
            if (this.searchValue) {
                  data['page'] = 1
                  data['name'] = this.searchValue
            }
            if(this.partner){
                  data['page'] = 1
                  data['company'] = this.partner
            }
            this.https.fetchLoanApplicationList(data).subscribe(res => {
                  if (res?.success) {
                        if(this._activeLoans){
                              this._activeLoans.forEach(element => {
                                    this.expandSet.delete(element?.id)    
                               });  
                        }
                        this.global.setApplicationCount();
                        this.loanApplicationData = res?.data?.results;
                        this.total_count = res?.data?.total_count;
                        this.api_calling_loader['listLoader'] = false
                  } else {
                        this.api_calling_loader['listLoader'] = false
                  }
            }, (err) => {
                  this.api_calling_loader['listLoader'] = false
            })
      }


      getIdWiseData(id?, index?) {
            this.api_calling_loader['accordian'] = true;
            let data = { 'datapoint': 'loan_application', 'endpoint': 'LoanApplication?id=' + id, 'source': 'Onboarding' };
            this.https.fetchLoanApplicationList(data).subscribe(res => {
                  if (res) {
                        this.api_calling_loader['accordian'] = false;
                        this._activeLoans.push(res?.data?.results[0]);
                        this.loanApplicationData[index].expanddata = res?.data?.results[0];
                  } else {
                        this.api_calling_loader['accordian'] = false;
                  }
            }, error => {
                  this.api_calling_loader['accordian'] = false;
            })
      }

      expandSet = new Set<number>();
      onExpandChange(id: number, checked: boolean, index?): void {
            if (checked) {
                  this.expandSet.add(id);
                  this.getIdWiseData(this._currentId = id, this.currentDropDownId = index);
                  // console.log();

            } else {
                  this.expandSet.delete(id);
                  console.log('Deleted array of active ids', this._activeLoans);
            }
      }

      updateCheckedSet(id: number, checked: boolean): void {
            if (checked) {
                  this.setOfCheckedId.add(id);
            } else {
                  this.setOfCheckedId.delete(id);
            }
      }

      onCurrentPageDataChange(listOfCurrentPageData: readonly Data[]): void {
            this.listOfCurrentPageData = listOfCurrentPageData;
            this.refreshCheckedStatus();
      }

      onItemChecked(id: number, checked: boolean): void {
            this.updateCheckedSet(id, checked);
            this.refreshCheckedStatus();
      }

      onAllChecked(checked: boolean): void {
            this.listOfCurrentPageData
                  .filter(({ disabled }) => !disabled)
                  .forEach(({ id }) => this.updateCheckedSet(id, checked));
            this.refreshCheckedStatus();
      }

      refreshCheckedStatus(): void {
            const listOfEnabledData = this.listOfCurrentPageData.filter(({ disabled }) => !disabled);
            this.checked = listOfEnabledData.every(({ id }) => this.setOfCheckedId.has(id));
            this.indeterminate = listOfEnabledData.some(({ id }) => this.setOfCheckedId.has(id)) && !this.checked;
      }

      updateStatus(type?, data?) {
            this._isUpdateStatus = true;
            this._currentLoanDetails = data;
            console.log(this._currentLoanDetails);
            
            switch (type) {
                  case 'status':
                        this._isStatus = true;
                        this.https.getStageMaster(4).subscribe(res => {
                              if (res?.success) {
                                    this.stageMasterList = res?.data
                              }
                        })
                        console.log(this._checkedLoanList);
                        break;
                  case 'download': this._isDocument = true;
                        break;
                  case 'viewDocument': this._isViewDocument = true; break;
                  case 'editOffer': this._isEditOffer = true;
                        this.api_calling_loader['accordian'] = true;
                        let params = { 'source': 'Onboarding', 'datapoint': 'get-section-offer', 'application': data?.id, 'section':'offer proposed' }
                        this.https.fetchEditofferData(params).subscribe((res: any) => {
                              if (res?.success) {
                                    this.currentOfferId = res?.data?.offer_id
                                    this.api_calling_loader['accordian'] = false;
                                    this.offerForm.get('amountOffered').setValue(res?.data?.amount);
                                    this.offerForm.get('validitiy').patchValue(res?.data?.validity);
                                    this.offerForm.get('interest').patchValue(res?.data?.interest);
                              } else {
                                    this.message.error(res?.message)
                                    this.api_calling_loader['accordian'] = false;

                              }
                              this.api_calling_loader['accordian'] = false;
                        }, err => { this.message.error(err) }
                        )

                        break;
                  case 'rejectOffer': this.isRejectModal = true; break;

            }
      }


      handleCancel() {
            this._isOpenModal = false;
            this._isViewDocument = false;
            this._isUpload = false;
            this._isVerify = false;
            this._isPullData = false;
            this._isCibil = false;
            this.isFetchCibilSms = false
            this._isUpdateStatus = false;
            this._isStatus = false;
            this._isDocument = false;
            this._isEditOffer = false;
            this.isRejectModal = false;
      }

      handleOk(type?) {
            switch (type) {
                  case 'status':
                        this.api_calling_loader['button'] = true
                        let data = { source: 'Onboarding', datapoint: 'update_multi_application_status','remarks':this.remarksDescription, stage_id: this._currentStageStatus, applications: JSON.stringify(this._checkedLoanList)};
                        this.https.updateMultipleLoanApp(data).subscribe(res => {
                              if (res.success) {
                                    this.api_calling_loader['button'] = false
                                    this.handleCancel()
                                    this.message.success(res?.message);
                                    this.global.setApplicationCount();
                                    this.getFormLoanData();
                              } else {
                                    this.message.error(res?.message);
                                    this.api_calling_loader['button'] = false;
                                    this._isUpdateStatus = false;
                              }
                        }, error => {
                              console.log(error);

                        })
                        break;
                  case 'offer':
                        this.api_calling_loader['button'] = true
                        let value = { source: 'LMS', datapoint: 'edit_proposed_offers', endpoint: this.currentOfferId, amount: this.offerForm.get('amountOffered').value };
                        this.https.editAdAcceptedOffer(value).subscribe((res: any) => {
                              if (res.success) {
                                    this.message.success(res?.message);
                                    this.api_calling_loader['button'] = false
                                    this.handleCancel();
                                    this.getFormLoanData();
                              } else {
                                    this.message.error(res?.message);
                                    this.api_calling_loader['button'] = false
                              }
                        }, error => {
                              console.log(error);
                        })

                        break;
                  case 'reject':
                        this.api_calling_loader['button'] = true
                        let params = { 'source': 'Onboarding', 'datapoint': 'reject-section-offer', 'application': this._currentLoanDetails?.id, offer_id: this._currentLoanDetails?.offer_id,'section' : 'offer proposed','remarks': this.remarks };
                        this.https.rejectedOffersAd(params).subscribe((res: any) => {
                              if (res?.success) {
                                    this.message.success(res?.message);
                                    this.handleCancel();
                                    this.getFormLoanData();
                              } else {
                                    this.message.error(res?.message)
                                    this.api_calling_loader['button'] = false
                              }
                        });
                        break;
                  case 'verify':
                        this.api_calling_loader['button'] = true
                        let param = { source: 'Onboarding', datapoint: 'verify_kyc_doc', 'application_id': this._currentModalData['application'], 'kyc_document_id': this._currentModalData?.id, 'status': (this.documentStatus == 1 ? 'Accepted' : 'Rejected'), 'reason': this.verifyRemarks }
                        console.log('export this file', this._currentModalData, params);
                        this.https.verifyLoanDocument(param).subscribe((res: any) => {
                              if (res?.success) {
                                    this.api_calling_loader['button'] = false
                                    this.message.success(res?.message);
                                    this.handleCancel();
                                    this.getIdWiseData(this._currentModalData['application'])
                              } else {
                                    this.api_calling_loader['button'] = false
                                    this.message.error(res?.message);
                              }
                        }, err => {
                              this.api_calling_loader['button'] = false
                              this.message.error(err);
                        })

                        break;
                  case 'uploadDocument':
                        this.api_calling_loader['button'] = true
                        let uploadDoc = { source: 'Onboarding', datapoint: 'upload_kyc_doc', 'application_id': this._currentModalData['application'], 'kyc_document_id': this._currentModalData?.id, 'file': this._currentFileName }
                        console.log(uploadDoc, 'For Upload Document');

                        this.https.uploadLoanDocument(uploadDoc).subscribe((res: any) => {
                              if (res?.success) {
                                    this.api_calling_loader['button'] = false;
                                    this.fileList = [];
                                    this.message.success(res?.message)
                                    this.handleCancel();
                              } else {
                                    this.api_calling_loader['button'] = false;
                                    this.fileList = [];
                                    this.message.error(res?.message)
                                    this.handleCancel();
                              }
                        }, err => {
                              this.api_calling_loader['button'] = false;
                              this.message.error(err)
                        })
                        break;
            }
      }

      checkDisabledStatus() {
            this._checkedLoanList = Array.from(this.setOfCheckedId);
            if (this._checkedLoanList.length > 0) {
                  return false
            } else {
                  return true
            }


      }

      exportData(file_formate?) {
            let data = { source: 'Onboarding', datapoint: 'export_data', records: JSON.stringify(this._checkedLoanList), file_type: file_formate }
            const generateloader = this.message.loading('Generating File..', { nzDuration: 0 }).messageId;
            this.https.fetchLoanApplicationListExport(data).subscribe(res => {
                  this._exportDocument = res;
                  this.https.exportMasterSectionModule(res, 'export', file_formate, generateloader)
            }, error => {
                  this.message.remove(generateloader);
                  console.log(error);
            })
      }

      generateBase64View(file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            this._exportDocument = file;
            reader.onload = (e) => {
                  console.log(reader, this._exportDocument);
            }
      }


      getCibilScoreData(type?, id?) {
            this._isUpdateStatus = true
            this.isFetchCibilSms = true;
            let data = { source: 'Onboarding', endpoint: id }
            if (type == 'cibil' && id) {
                  this._isCibil = true;
                  this._currentLoanDetails = id

            } else if (type == 'sms' && id) {
                  this._isCibil = false;
                  this._currentLoanDetails = id
            }
      }

      getBlackBoxData(id) {
            let data = { source: 'Onboarding', datapoint: 'pull_black_box', endpoint: id }
            this.https.pullBlackBoxData(data).subscribe((res: any) => {
                  if (res?.success) {
                        this.blackBoxData = res?.data
                  }
            })
      }
      openDocumentModal(type?, data?, loanData?) {
            this._currentModalData = data;
            this._currentLoanDetails = loanData;
            if (type == 'download') {
                  let data = { source: 'Onboarding', datapoint: 'download_document', 'endpoint': 'kyc', 'id': this._currentModalData?.id }
                  console.log(data);
                  this.https.downloadDocuments(data).subscribe((res: any) => {
                        if (res?.success) {
                              // let url = window.URL.createObjectURL(blob)
                              var data = new Blob([res?.data?.file], { type: 'text/plain;charset=utf-8' });
                              FileSaver.saveAs(data, 'text.txt');
                        }
                  });
            } else {
                  this._isOpenModal = true;
                  this._isUpdateStatus = true
                  console.log(this._currentModalData);
                  switch (type) {
                        case 'viewDocument': this._isViewDocument = true;
                              // this.generateBase64View(this._currentModalData?.file);
                              break;
                        case 'verify': this._isVerify = true; break;
                        case 'upload': this._isUpload = true; break;
                  }
            }
      }

      beforeUploadName = (file: NzUploadFile) => {
            this.fileList = [];
            this.fileList = this.fileList.concat(file);
            this._currentFileName = this.fileList[0];
            console.log(this._currentFileName, file);
            // this.generateBase64View(file)
            return false;
      };

      resetFilters() {
            this.productFilters = null;
            this.filters = null;
            this.searchValue = null;
            this.partner = null
            this.getFormLoanData()
      }
}
