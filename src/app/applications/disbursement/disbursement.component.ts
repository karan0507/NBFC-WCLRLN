import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Data } from '@angular/router';
import { differenceInCalendarDays } from 'date-fns';
import * as FileSaver from 'file-saver';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { iif } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { GlobalservicesService } from 'src/app/shared/globalservices.service';

@Component({
      selector: 'app-disbursement',
      templateUrl: './disbursement.component.html',
      styleUrls: ['./disbursement.component.css']
})
export class DisbursementComponent implements OnInit {
      _exportDocument: any;
      checked: boolean = false;
      filters: any;
      remarks: any = '';
      _currentDocumentReq: any;
      productFilters: any;
      indeterminate: boolean = false;
      isRejectModal: boolean = false;
      listOfCurrentPageData: readonly Data[] = [];
      setOfCheckedId = new Set<number>();
      loanApplicationData: any = [];
      total_count: any;
      _currentDate: any;
      _currentId: any;
      console = console;
      _checkedLoanList: any[];
      _activeLoans: any = [];
      today = new Date();
      api_calling_loader = {
            'listLoader': false,
            'accordian': false,
            'butotn' : false
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
      verifyRemarks: any;
      _isCibil: boolean = false
      _isViewDocument : boolean = false
      documentStatus = 1
      // Page Filters and Pagination Data
      searchValue: any
      page = 1
      globalPageSize: any;
      productList: any = []
      stageStatusList: any = []
      constructor(public https: HttpService, public message: NzMessageService, public fb: FormBuilder, public sanitize: DomSanitizer, public global: GlobalservicesService) { }


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
                  let params = { 'source': 'Onboarding', endpoint: '7', 'datapoint': 'get-stage-statuses' }
                  this.https.getStatusStageWise(params).subscribe((res: any) => {
                        this.stageStatusList = res?.data
                        console.log(this.stageStatusList);
                  })
            }
      }

      getFormLoanData(tableFilter?) {
            this.api_calling_loader['listLoader'] = true
            this.loanApplicationData = [];
            var data = { 'datapoint': 'loan_application', 'endpoint': 'LoanApplication?stage_id=7', 'source': 'Onboarding' }

            if (this.filters) {
                  data['status'] = this.filters
            }
            if (this.productFilters) {
                  data['product_master'] = this.productFilters
            }
            if (this.searchValue) {
                  data['name'] = this.searchValue
            }
            if (tableFilter) {
                  console.log(tableFilter?.page, tableFilter?.globalPageSize, tableFilter);
                  this.page = tableFilter?.pageIndex
                  this.globalPageSize = tableFilter?.pageSize
                  data['page'] = tableFilter?.pageIndex
                  data['limit'] = tableFilter?.pageSize
            } else {
                  console.log(this.globalPageSize);

                  data['page'] = this.page
                  data['limit'] = this.globalPageSize
            }
            console.log(data);

            this.https.fetchLoanApplicationList(data).subscribe(res => {
                  if (res?.data) {
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
                  this.getIdWiseData(this._currentId = id, index);
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
            switch (type) {
                  case 'status':
                        this._isStatus = true;
                        this.https.getStageMaster(7).subscribe(res => {
                              if (res?.success) {
                                    this.stageMasterList = res?.data
                              }
                        })
                        console.log(this._checkedLoanList);
                        break;
                  case 'download': this._isDocument = true; break;
                  case 'editOffer': this._isEditOffer = true; break;
                  case 'rejectOffer': this.isRejectModal = true; break;
                  case 'viewDocument': this._isViewDocument = true; break;

            }
      }

      handleCancel() {
            this._isUpdateStatus = false;
            this._isStatus = false;
            this._isDocument = false;
            this._isEditOffer = false;
            this.isRejectModal = false;
            this._isOpenModal = false;
            this._isViewDocument = false;
            this._isUpload = false;
            this._isVerify = false;
            this._isPullData = false;
            this._isCibil = false;
      }

      handleOk(type?) {
            switch (type) {
                  case 'status':
                        this.api_calling_loader['button'] = true
                        let data = { source: 'Onboarding', datapoint: 'update_multi_application_status', stage_id: this._currentStageStatus, applications: JSON.stringify(this._checkedLoanList), remarks: this.remarks };
                        this.https.updateMultipleLoanApp(data).subscribe(res => {
                              if (res.success) {
                                    console.log('res');
                                    this.global.setApplicationCount();
                                    this.message.success(res?.message)
                                    this.api_calling_loader['button'] = false
                                    this.handleCancel();
                                    this.getFormLoanData();
                              } else {
                                    this.api_calling_loader['button'] = false
                                    this.message.error(res?.message)
                              }
                        }, error => {
                              console.log(error);

                        })
                        break;
                  case 'offer':
                        console.log('you are in offer');

                        break;
                  case 'reject': console.log('Code for Reject API'); break;
                  case 'verify':
                        this.api_calling_loader['button'] = true
                        let params = { source: 'Onboarding', datapoint: 'verify_kyc_doc', 'application_id': this._currentModalData['application'], 'kyc_document_id': this._currentModalData?.id, 'status': (this.documentStatus == 1 ? 'Accepted' : 'Rejected'), 'reason': this.verifyRemarks }
                        console.log('export this file', this._currentModalData, params);
                        this.https.verifyLoanDocument(params).subscribe((res: any) => {
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

      // Get Cibil Data API
      getCibilScoreData(type?,id?) {
            let data = { source: 'Onboarding', endpoint: id }
            if(type == 'cibil' && id){
              data['datapoint'] = 'fetch-cibil-from-db'
                   this.https.getCibilSMSData(data).subscribe(res => {
                         if (res?.data) {
                               console.log(res?.data);
                               this._currentCibilData = res?.data
                         }
                   })
            }else if(type == 'sms' && id){
             data['datapoint'] = 'fetch-sms-from-db'
             this.https.getCibilSMSData(data).subscribe(res => {
                   if (res?.data) {
                         console.log(res?.data);
                         this._currentCibilData = res?.data
                   }
             })  
            }
      }

      // Pull Cibil Methods
      pullDataSMSCibil(type?, data?) {
            console.log(data);

            this._isUpdateStatus = true
            switch (type) {
                  case 'thirdPartyCibil':
                        this._isPullData = true
                        this._currentLoanDetails = data?.id
                        this._isCibil = true
                        break;
                  case 'downloadCibil': break
                  case 'thirdPartySMS':
                        this._isPullData = true;
                        this._currentLoanDetails = data?.user?.id
                        this._isCibil = false
                        break

            }
      }

      resetFilters() {
            this.productFilters = null;
            this.filters = null;
            this.searchValue = null;
            this.getFormLoanData()
      }
}
