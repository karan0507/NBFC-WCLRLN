import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { differenceInCalendarDays } from 'date-fns';
import * as FileSaver from 'file-saver';
import * as moment from 'moment';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { HttpService } from 'src/app/services/http.service';
import { GlobalservicesService } from 'src/app/shared/globalservices.service';

@Component({
      selector: 'app-offer-acceptance',
      templateUrl: './offer-acceptance.component.html',
      styleUrls: ['./offer-acceptance.component.css']
})
export class OfferAcceptanceComponent implements OnInit {
      _exportDocument: any;
      emandateValue;
      date = ''
      checked: boolean = false;
      filters: any;
      remarks: any = '';
      productFilters: any;
      indeterminate: boolean = false;
      isRejectModal: boolean = false;
      listOfCurrentPageData: readonly Data[] = [];
      setOfCheckedId = new Set<number>();
      loanApplicationData: any = [];
      total_count: any;
      _currentDate: any;
      _currentId: any;
      currentOfferId: any
      _checkedLoanList: any[];
      _activeLoans: any = [];
      today = new Date();
      api_calling_loader = {
            'listLoader': false,
            'accordian': false,
            'button': false,
            'sendLink': false,
            'xmlLoader': false,
      };
      _isAgreementOpen: boolean = false
      stageMasterList: any;
      _currentStageStatus: any;
      _currentCibilData: any;
      searchValue: any
      _currentDocument: any = '1'
      offerForm: FormGroup
      disabledDate = (current: Date): boolean => {
            // Can not select days before today and today
            return differenceInCalendarDays(current, this.today) > 0;
      };

      // Modal Boolean Values
      _isUpdateStatus: boolean = false;
      statusList: any;
      _isEditOffer: boolean = false;
      _isDocument: boolean = false;
      _isStatus: boolean = false;

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
      isFetchCibilSms: boolean = false;
      documentStatus = 1
      // Page Filters and Pagination Data
      page = 1
      globalPageSize = this.global.globalPageSize;
      productList: any = []
      stageStatusList: any = []
      currentDropDownId: any
      partner: any
      partnerList: any = []
      blackBoxData: any;
      remarksDescription: any;
      agreementDoc: any
      storedParams: any;
      
  customRanges = {
      Today: [new Date(), new Date()],
      'Last 7 days': [new Date().setDate(new Date().getDate() - 7), new Date()],
      'This Month': [new Date(new Date().getFullYear(), new Date().getMonth(), 1), new Date()],
      'Last Month': [new Date(new Date().getFullYear(), new Date().getMonth(), 1).setMonth(new Date().getMonth() - 1), new Date(new Date().getFullYear(), new Date().getMonth(), -1,30,31)],
      'Last 3 Months': [new Date(new Date().getFullYear(), new Date().getMonth(), 1).setMonth(new Date().getMonth() - 3), new Date(new Date().getFullYear(), new Date().getMonth(), -1,30,31)],
      'Last 6 Months': [new Date(new Date().getFullYear(), new Date().getMonth(), 1).setMonth(new Date().getMonth() - 6), new Date(new Date().getFullYear(), new Date().getMonth(), -1,30,31)],
      'This Year': [new Date(new Date().getFullYear(), 0, 1), new Date()],
      // 'Last Year': [new Date(new Date().getFullYear(), new Date().getMonth(), 1).setMonth(new Date().getMonth() - 12), new Date(new Date().getFullYear(), new Date().getMonth(), 1)],
      'Last Year': [new Date(new Date().getFullYear() - 1, 0, 1), new Date(new Date().getFullYear() - 1, 11, 31)],
      // d.setMonth(d.getMonth() - 3);
  };
      moved_by = 'all';
      date_sorter = ''
  

      constructor(public https: HttpService, public message: NzMessageService, public fb: FormBuilder, public global: GlobalservicesService, public sanitize: DomSanitizer, private route: ActivatedRoute, private router: Router) {
            this.route.queryParams.subscribe((params: any) => {
                  if(params?.loan_id){
                        // alert(params?.loan_id);
                        this.storedParams = params?.loan_id 
                        this.searchValue = params?.loan_id;
                        this.getFormLoanData();
                  }
            });
       }


      ngOnInit(): void {
            this.page = 1
            this.globalPageSize = this.global.globalPageSize;
            this.offerForm = this.fb.group({
                  amountOffered: [null, [Validators.required, Validators.min(1)]],
                  validitiy: [null],
                  interest: [null]
            })
            // if(this.route.a)
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
                  })
            } else if (type == 'status') {
                  let params = { 'source': 'Onboarding', endpoint: '5', 'datapoint': 'get-stage-statuses' }
                  this.https.getStatusStageWise(params).subscribe((res: any) => {
                        this.stageStatusList = res?.data
                  })
            } else if (type == 'partner') {
                  this.https.fetchPartner().subscribe((res: any) => {
                        this.partnerList = res?.data?.results?.filter(res => { if (res?.name) { return res } });
                  })
            }
      }

      isVisibleXMLModal = false;
      xmlDataResponse;
      onClickFetchXML(action, id){
            this.isVisibleXMLModal = true
            this.api_calling_loader['xmlLoader'] = true;
            let data = {
                  'source': 'Onboarding',
                  'datapoint': 'get_xml_data',
                  'endpoint':id,
                  'xml_source': action
            };
            this.https.fetchXMLData(data).subscribe((res)=>{
                  console.log(res);
                  this.xmlDataResponse = res?.data
                  this.api_calling_loader['xmlLoader'] = false;
                  // this.isVisibleXMLModal = false;
            }, error=>{
                  console.log(error);
                  this.api_calling_loader['xmlLoader'] = false;
                  // this.isVisibleXMLModal = false;
            })
      }

      stageFilters: any
      stageList = [
            {name: 'pan'},
            {name: 'aadhar'},
            {name: 'company'},
            {name: 'name'},
            {name: 'income'}
      ]
      getFormLoanData(tableFilter?) {
            this.api_calling_loader['listLoader'] = true
            this.loanApplicationData = [];
            var data = { 'datapoint': 'loan_application', 'endpoint': 'LoanApplication?stage_id=5', 'source': 'Onboarding' }
            data['page'] = tableFilter?.pageIndex ? tableFilter?.pageIndex : 1
            data['limit'] = tableFilter?.pageSize ? tableFilter?.pageSize : this.globalPageSize
            // if (tableFilter) {
            //       this.page = tableFilter?.pageIndex
            //       this.globalPageSize = tableFilter?.pageSize
            //       data['page'] = tableFilter?.pageIndex
            //       data['limit'] = tableFilter?.pageSize
            // } else {
            //       data['page'] = this.page
            //       data['limit'] = this.globalPageSize
            // }

            if (this.filters) {
                  // data['page'] = 1
                  data['status'] = this.filters
            }
            if(this.stageFilters){
                  // data['page'] = 1
                  data['step'] = this.stageFilters
            }
            if (this.productFilters) {
                  // data['page'] = 1
                  data['product_master'] = this.productFilters
            }
            if (this.searchValue) {
                  // data['page'] = 1
                  data['name'] = this.searchValue
            }
            if (this.partner) {
                  // data['page'] = 1
                  data['company'] = this.partner
            }
            
            data['start_date'] = this.date[0] ? moment(this.date[0]).format("YYYY-MM-DD") : '',
            data['end_date'] = this.date[1] ? moment(this.date[1]).format("YYYY-MM-DD") : '',
            data['moved_by'] = this.moved_by,
            data['date_sorter'] = this.date_sorter

            this.https.fetchLoanApplicationList(data).subscribe(res => {
                  if (res?.success) {
                        if (this._activeLoans) {
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
                        this.total_count = null
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

            } else {
                  this.expandSet.delete(id);
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
            switch (type) {
                  case 'status':
                        this._isStatus = true;
                        this.https.getStageMaster(5).subscribe(res => {
                              if (res?.success) {
                                    this.stageMasterList = res?.data
                              }
                        })
                        break;
                  case 'download': this._isDocument = true;
                        break;
                  case 'viewDocument': this._isViewDocument = true; break;
                  case 'editOffer': this._isEditOffer = true;
                        this.api_calling_loader['accordian'] = true;
                        let params = { 'source': 'Onboarding', 'datapoint': 'get-section-offer', 'application': data?.id, 'section': 'offer accepted' }
                        this.https.fetchEditofferData(params).subscribe((res: any) => {
                              if (res?.success) {
                                    this.currentOfferId = res?.data?.offer_id
                                    this.api_calling_loader['accordian'] = false;
                                    this.offerForm.get('amountOffered').setValue(res?.data?.amount);
                                    this.offerForm.get('validitiy').setValue(res?.data?.validity);
                                    this.offerForm.get('interest').setValue(res?.data?.interest);

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
            this._isAgreementOpen = false
            this.isRejectModal = false;
      }

      handleOk(type?) {
            switch (type) {
                  case 'status':
                        this.api_calling_loader['button'] = true
                        let data = { source: 'Onboarding', datapoint: 'update_multi_application_status', 'remarks': this.remarksDescription, stage_id: this._currentStageStatus, applications: JSON.stringify(this._checkedLoanList) };
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
                        })
                        break;
                  case 'offer':
                        this.api_calling_loader['button'] = true
                        let value = { source: 'LMS', datapoint: 'edit_accepted_offers', endpoint: this.currentOfferId, amount: this.offerForm.get('amountOffered').value };
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
                        })

                        break;
                  case 'reject':
                        this.api_calling_loader['button'] = true
                        let params = { 'source': 'Onboarding', 'datapoint': 'reject-section-offer', 'application': this._currentLoanDetails?.id, 'offer_id': this._currentLoanDetails?.offer_id, 'section': 'offer accepted', 'remarks': this.remarks };

                        this.https.rejectedOffersAd(params).subscribe((res: any) => {
                              if (res?.success) {
                                    this.api_calling_loader['button'] = false
                                    this.message.success(res?.message);
                                    this.handleCancel();
                                    this.getFormLoanData();
                              } else {
                                    this.api_calling_loader['button'] = false
                                    this.message.error(res?.message)
                              }
                        });
                        break;
                  case 'verify':
                        this.api_calling_loader['button'] = true
                        let param = { source: 'Onboarding', datapoint: 'verify_kyc_doc', 'application_id': this._currentModalData['application'], 'kyc_document_id': this._currentModalData?.id, 'status': (this.documentStatus == 1 ? 'Accepted' : 'Rejected'), 'reason': this.verifyRemarks }
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
            // let data = { source: 'Onboarding', datapoint: 'export_data', records: JSON.stringify(this._checkedLoanList), file_type: file_formate }
            let data = { source: 'Onboarding', datapoint: 'export_application_by_stage',stage_id:  5}
            const generateloader = this.message.loading('Generating File..', { nzDuration: 0 }).messageId;
            this.https.fetchExportData(data).subscribe(res => {
                  this._exportDocument = res;
                  this.https.exportMasterSectionModule(res, 'export', file_formate, generateloader)
            }, error => {
                  this.message.remove(generateloader);
            })
      }


      generateBase64View(file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            this._exportDocument = file;
            reader.onload = (e) => {
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


      openDocumentModal(type?, data?, loanData?) {
            this._currentModalData = data;
            this._currentLoanDetails = loanData;
            if (type == 'download') {
                  let data = { source: 'Onboarding', datapoint: 'download_document', 'endpoint': 'kyc', 'id': this._currentModalData?.id }
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
            return false;
      };

      getBlackBoxData(id) {
            let data = { source: 'Onboarding', datapoint: 'pull_black_box', endpoint: id }
            this.https.pullBlackBoxData(data).subscribe((res: any) => {
                  if (res?.success) {
                        this.blackBoxData = res?.data
                  }
            })
      }

      resetFilters() {
            if(this.storedParams){
                  this.router.navigate(["applications/offer-acceptance"]);
            }
            this.date_sorter = ''
            this.stageFilters = null;
            this.productFilters = null;
            this.filters = null;
            this.searchValue = null;
            this.partner = null
            this.getFormLoanData()
      }
      sendEmandateLink(offer_id) {
            var data = {
                  source: 'LMS',
                  datapoint: 'send-mandate-link',
                  auth_type: this.emandateValue,
                  accepted_offer_id: offer_id
            }
            this.api_calling_loader['sendLink'] = true
            this.https.sendEmandateLink(data).subscribe((res: any) => {
                  if (res.success) {
                        this.message.success(res.message)
                  } else {
                        this.message.error(res.message)
                  }
                  this.api_calling_loader['sendLink'] = false
            }, (err) => {
                  this.api_calling_loader['sendLink'] = false
            })
      }

      viewAgreement(data) {
            this._isUpdateStatus = true;
            this._isAgreementOpen = true;
            this.agreementDoc = data
      }
      
}
