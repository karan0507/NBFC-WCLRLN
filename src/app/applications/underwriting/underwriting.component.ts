import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Data } from '@angular/router';
import { differenceInCalendarDays } from 'date-fns';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { HttpService } from 'src/app/services/http.service';
import { GlobalservicesService } from 'src/app/shared/globalservices.service';

@Component({
      selector: 'app-underwriting',
      templateUrl: './underwriting.component.html',
      styleUrls: ['./underwriting.component.css']
})
export class UnderwritingComponent implements OnInit {
      _exportDocument: any;
      checked: boolean = false;
      _isEditOffer: boolean = false;
      filters: any;
      offerForm: FormGroup;
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
      _isViewDocument: any;
      console = console;
      _checkedLoanList: any[];
      _activeLoans: any = [];
      today = new Date();
      api_calling_loader = {
            'listLoader': false,
            'accordian': false
      };
      stageMasterList: any;
      _currentStageStatus: any;
      _currentCibilData: any;
      disabledDate = (current: Date): boolean => {
            // Can not select days before today and today
            return differenceInCalendarDays(current, this.today) > 0;
      };

      // Modal Boolean Values
      _isUpdateStatus: boolean = false;
      statusList: any;
      _currentDocument: any = '1'
      _isDocument: boolean = false;
      _isStatus: boolean = false;

      // Modal Boolean Values
      _isPullData: boolean = false;
      _isOpenModal: boolean = false;
      //      statusList: any;
      //      _currentDocument: any = '1'
      _currentFileName: any = { 'beforeUpload': null, 'previewImage': null };
      fileList: any = [];
      //      _isStatus: boolean = false;
      _isDownload: boolean = false;
      //      _isViewDocument: boolean = false;
      _isVerify: boolean = false;
      _isUpload: boolean = false;
      _currentModalData: any;
      _currentLoanDetails: any;
      verifyRemarks: any;
      _isCibil: boolean = false
      // Page Filters and Pagination Data
      searchValue: any
      page = 1
      globalPageSize: any;
      productList: any = []
      stageStatusList: any = []
      kycDetailsList: any = []
      constructor(public https: HttpService, public message: NzMessageService, public global: GlobalservicesService, public sanitize: DomSanitizer, public fb : FormBuilder) { }

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
                  let params = { 'source': 'Onboarding', endpoint: '1', 'datapoint': 'get-stage-statuses' }
                  this.https.getStatusStageWise(params).subscribe((res: any) => {
                        this.stageStatusList = res?.data
                        console.log(this.stageStatusList);
                  })
            }
      }

      getFormLoanData(tableFilter?) {
            this.api_calling_loader['listLoader'] = true
            this.loanApplicationData = [];
            var data = { 'datapoint': 'loan_application', 'endpoint': 'LoanApplication?stage_id=3', 'source': 'Onboarding' }

            if (this.filters) {
                  data['status'] = this.filters
            }
            if (this.productFilters) {
                  data['product_master'] = this.productFilters
            }
            if (this.searchValue) {
                  data['search_value'] = this.searchValue
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

      onMonthChange(event) {

      }

      updateStatus(type?, data?) {
            this._isUpdateStatus = true;
            this._currentLoanDetails = data;
            console.log(data);
            
            switch (type) {
                  case 'status':
                        this._isStatus = true;
                        this.https.getStageMaster().subscribe(res => {
                              if (res?.success) {
                                    this.stageMasterList = res?.data?.results
                              }
                        })
                        console.log(this._checkedLoanList);
                        break;
                  case 'download': this._isDocument = true;
                        break;
                  case 'viewDocument': this._isViewDocument = true; break;
                  case 'editOffer': this._isEditOffer = true;
                        this.api_calling_loader['accordian'] = true;
                        let params = { 'source': 'LMS', 'datapoint': 'fetch_proposed_offer_for_admin', 'endpoint': this._currentLoanDetails['id'] }
                        console.log('Edit Offer Params', params);
                        
                        this.https.fetchEditofferData(params).subscribe((res: any) => {
                              if (res?.success) {
                                    console.log(res);
                                    this.offerForm.get('amountOffered').setValue(res?.data?.amount);
                                    this.offerForm.get('validitiy').setValue(res?.data?.validity);
                                    this.offerForm.get('interest').setValue(res?.data?.interest);
                                    this.api_calling_loader['accordian'] = false;

                              } else {
                                    this.message.error(res?.error)
                                    this.api_calling_loader['accordian'] = false;

                              }
                              this.api_calling_loader['accordian'] = false;
                        }, err => { this.message.error(err) }
                        )

                        break;
            }
      }

      handleCancel() {
            this._isUpdateStatus = false;
            this._isStatus = false;
            this._isDocument = false;
            this._isEditOffer = false;
            this._isPullData = false;
            this._isCibil = false;
      }

      handleOk(type?) {
            if (type == '') {
                  let data = { source: 'Onboarding', datapoint: 'update_multi_application_status', stage_id: '3', applications: JSON.stringify(this._checkedLoanList) };
                  this.https.updateMultipleLoanApp(data).subscribe(res => {
                        if (res.success) {
                              console.log('res');
                              this._isUpdateStatus = false;
                        } else {
                              console.log('error=>', res?.error);
                        }
                  }, error => {
                        console.log(error);

                  })
            } else if (type == 'offer') {

                  let value = { source: 'LMS', datapoint: 'edit_accepted_offers', endpoint: this._currentLoanDetails?.id, amount: this.offerForm.get('amountOffered').value };
                  
                  this.https.editAdAcceptedOffer(value).subscribe((res: any) => {
                        if (res.success) {
                              console.log('res');
                              this.handleCancel();
                              this.getFormLoanData();
                        } else {
                              console.log('error=>', res?.error);
                        }
                  }, error => {
                        console.log(error);

                  })
            }
      }

      downloadModal() {

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
            this._isOpenModal = true;
            this._currentModalData = data;
            this._currentLoanDetails = loanData;
            console.log(this._currentModalData, this._currentModalData);

            switch (type) {
                  case 'download': this._isDownload = true;
                        break;
                  case 'viewDocument': this._isViewDocument = true;
                        // this.generateBase64View(this._currentModalData?.file);
                        break;
                  case 'verify': this._isVerify = true; break;
                  case 'upload': this._currentFileName['previewImage'] = null; this._isUpload = true; break;
            }
      }

      verifyDocument(item, id?) {

      }

      beforeUploadName = (file: NzUploadFile) => {
            this.fileList = [];
            this.fileList = this.fileList.concat(file);
            this._currentFileName['previewImage'] = this.fileList[0];
            console.log(this._currentFileName, file);
            // this.generateBase64View(file)
            return false;
      };

      handleChangeLogoUpload(event) {
            this.fileList = [];
            this.fileList = this.fileList.concat(event?.fileList[0]);
            // this._currentFileName['previewImage'] = this.fileList[0];
            console.log(this._currentFileName,'event=>', event);
            // this.generateBase64View(event.file.originFileObj) 
      }
      // Get Cibil Data API
      getCibilScoreData(id?) {
            console.log('API call');
            if (id) {
                  let data = { source: 'Onboarding', datapoint: 'pull_cibil', endpoint: id }
                  this.https.getCibilData(id, data).subscribe(res => {
                        if (res?.data) {
                              console.log(res?.data);
                              this._currentCibilData = res?.data
                        }
                  })
            }
      }

      // Pull Cibil Methods
      pullDataSMSCibil(type?, data?) {
            this._isUpdateStatus = true
            switch (type) {
                  case 'thirdPartyCibil':
                        this._isPullData = true
                        this._currentLoanDetails = data
                        this._isCibil = true
                        break;
                  case 'downloadCibil': break
                  case 'thirdPartySMS':
                        this._isPullData = true;
                        this._currentLoanDetails = data
                        break

            }
      }

}
