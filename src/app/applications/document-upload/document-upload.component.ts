import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { differenceInCalendarDays } from 'date-fns';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { HttpService } from 'src/app/services/http.service';
import { GlobalservicesService } from 'src/app/shared/globalservices.service';
import { DomSanitizer } from '@angular/platform-browser';
import * as FileSaver from 'file-saver';

@Component({
      selector: 'app-document-upload',
      templateUrl: './document-upload.component.html',
      styleUrls: ['./document-upload.component.css']
})
export class DocumentUploadComponent implements OnInit {
      _exportDocument: any;
      checked: boolean = false;
      filters: any;
      _currentDocumentReq: any;
      productFilters: any;
      indeterminate: boolean = false;
      listOfCurrentPageData: readonly Data[] = [];
      setOfCheckedId = new Set<number>();
      loanApplicationData: any = [];
      total_count: any;
      _currentDate: any;
      _currentId: any;
      _currentDocType: any;
      _checkedLoanList: any[];
      _activeLoans: any = [];
      today = new Date();
      api_calling_loader = {
            'listLoader': false,
            'accordian': false,
            'button': false
      };
      stageMasterList: any;
      documentStatus = 1
      _currentStageStatus: any = null;
      disabledDate = (current: Date): boolean => {
            // Can not select days before today and today
            return differenceInCalendarDays(current, this.today) > 0;
      };

      // Modal Boolean Values
      _isOpenModal: boolean = false;
      statusList: any;
      _currentDocument: any = '1'
      _currentFileName: any;
      fileList: any = [];
      _isStatus: boolean = false;
      _isDownload: boolean = false;
      _isViewDocument: boolean = false;
      _isVerify: boolean = false;
      _isUpload: boolean = false;
      _currentModalData: any;
      _currentLoanDetails: any;
      isRequestDoc: boolean = false;
      verifyRemarks: any;

      // Page Filters and Pagination Data
      searchValue: any
      page = 1
      globalPageSize: any;
      productList: any = []
      stageStatusList: any = []
      kycDetailsList: any = []
      constructor(public https: HttpService, public message: NzMessageService, public global: GlobalservicesService, public sanitize: DomSanitizer) { }

      ngOnInit(): void {
            this.page = 1
            this.globalPageSize = this.global.globalPageSize;
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
                  let params = { 'source': 'Onboarding', endpoint: '2', 'datapoint': 'get-stage-statuses' }
                  this.https.getStatusStageWise(params).subscribe((res: any) => {
                        this.stageStatusList = res?.data
                  })
            }
      }

      getFormLoanData(tableFilter?) {
            this.api_calling_loader['listLoader'] = true
            this.loanApplicationData = [];
            var data = { 'datapoint': 'loan_application', 'endpoint': 'LoanApplication?stage_id=2', 'source': 'Onboarding' }

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
                  this.page = tableFilter?.pageIndex
                  this.globalPageSize = tableFilter?.pageSize
                  data['page'] = tableFilter?.pageIndex
                  data['limit'] = tableFilter?.pageSize
            } else {
                  data['page'] = this.page
                  data['limit'] = this.globalPageSize
            }
            this.https.fetchLoanApplicationList(data).subscribe(res => {
                  if (res?.data) {
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
                  this.getIdWiseData(this._currentId = id, index);

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

      updateStatus(type?, data?, docType?) {
            if (data) {
                  this._currentDocumentReq = data
            }
            this._isOpenModal = true;
            switch (type) {
                  case 'status':
                        this._isStatus = true;
                        this.https.getStageMaster(2).subscribe(res => {
                              if (res?.success) {
                                    this.stageMasterList = res?.data
                              }
                        })
                        break;
                  case 'requestDoc':
                        this.isRequestDoc = true;
                        break;
            }
      }

      handleCancel() {
            this._isOpenModal = false;
            this._isStatus = false;
            this._isDownload = false;
            this._isViewDocument = false;
            this._isUpload = false;
            this._isVerify = false;
            this.isRequestDoc = false;
      }

      handleOk(type?) {
            switch (type) {
                  case 'DocumentModal':
                        break;
                  case 'StatusModal':
                        this.api_calling_loader['button'] = true
                        let data = { source: 'Onboarding', datapoint: 'update_multi_application_status', stage_id: this._currentStageStatus, applications: JSON.stringify(this._checkedLoanList) };
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
                                    this.handleCancel()
                              }
                        }, error => {
                              this.message.error(error);
                              this.api_calling_loader['button'] = false;
                        })
                        break;
                  case 'verify':
                        this.api_calling_loader['button'] = true
                        let params = { source: 'Onboarding', datapoint: 'verify_kyc_doc', 'application_id': this._currentModalData['application'], 'kyc_document_id': this._currentModalData?.id, 'status': (this.documentStatus == 1 ? 'Accepted' : 'Rejected'), 'reason': this.verifyRemarks }
                        console.log(this.documentStatus);

                        // this.https.verifyLoanDocument(params).subscribe((res: any) => {
                        //       if (res?.success) {
                        //             this.api_calling_loader['button'] = false
                        //             this.message.success(res?.message);
                        //             this.handleCancel();
                        //             this.getFormLoanData()
                        //       } else {
                        //             this.api_calling_loader['button'] = false
                        //             this.message.error(res?.message);
                        //       }
                        // }, err => {
                        //       this.api_calling_loader['button'] = false
                        //       this.message.error(err);
                        // })

                        break;
                  case 'uploadDocument':
                        // For Selfie file: application_id datapoint:upload_selfie
                        this._currentModalData
                        this.api_calling_loader['button'] = true
                        let uploadDoc = new FormData()
                        uploadDoc.append('source', 'Onboarding')
                        if (this._currentModalData?.document_master?.id) {
                              uploadDoc.append('datapoint', 'upload_kyc_doc')
                        } else if (this._currentModalData?.document_master?.name == "Selfie") {
                              uploadDoc.append('datapoint', 'upload_selfie')
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
            })
      }

      generateBase64View(file: Blob) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (e) => {
                  this._currentFileName = reader.result
            }
      }

      openDocumentModal(type?, data?, loanData?) {
            this._currentModalData = data;
            console.log(data);

            this._currentLoanDetails = loanData;
            if (type == 'download') {
                  let data = { source: 'Onboarding', datapoint: 'download_document', 'endpoint': 'kyc', 'id': this._currentModalData?.id }
                  this.https.downloadDocuments(data).subscribe((res: any) => {
                        if (res?.success) {
                              var data = new Blob([res?.data?.file], { type: 'text/plain;charset=utf-8' });
                              FileSaver.saveAs(data, 'text.txt');
                        }
                  });
            } else {
                  // this._isOpenModal = true;
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

      resetFilters() {
            this.productFilters = null;
            this.filters = null;
            this.searchValue = null;
            this.getFormLoanData()
      }


      // testing
      test(){
            this._isViewDocument = true
            // alert('Testing working')
      }
}
