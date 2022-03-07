import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { differenceInCalendarDays } from 'date-fns';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadFile, NzUploadTransformFileType } from 'ng-zorro-antd/upload';
import { HttpService } from 'src/app/services/http.service';
import { GlobalservicesService } from 'src/app/shared/globalservices.service';
import { DomSanitizer } from '@angular/platform-browser';

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
      _currentFileName: any = { 'beforeUpload': null, 'previewImage': null };
      fileList: any = [];
      _isStatus: boolean = false;
      _isDownload: boolean = false;
      _isViewDocument: boolean = false;
      _isVerify: boolean = false;
      _isUpload: boolean = false;
      _currentModalData: any;
      _currentLoanDetails: any;
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
            console.log(this.globalPageSize);
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
            var data = { 'datapoint': 'loan_application', 'endpoint': 'LoanApplication?stage_id=2', 'source': 'Onboarding' }

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

      updateStatus(type?, data?, docType?) {
            console.log(type, typeof (type), docType);
            if (data) {
                  this._currentDocumentReq = data
            }
            this._isOpenModal = true;
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
            }
      }

      handleCancel() {
            this._isOpenModal = false;
            this._isStatus = false;
            this._isDownload = false;
            this._isViewDocument = false;
            this._isUpload = false;
            this._isVerify = false;
      }

      handleOk(type?) {
            switch (type) {
                  case 'DocumentModal':
                        console.log('Add Document API Logic');
                        break;
                  case 'StatusModal':
                        let data = { source: 'Onboarding', datapoint: 'update_multi_application_status', stage_id: '2', applications: JSON.stringify(this._checkedLoanList) };
                        this.https.updateMultipleLoanApp(data).subscribe(res => {
                              if (res.success) {
                                    console.log('res');
                                    this._isOpenModal = false;
                              } else {
                                    console.log('error=>', res?.error);
                              }
                        }, error => {
                              console.log(error);

                        })
                        break;
                  case 'verify':
                        let params = { source: 'Onboarding', datapoint: 'verify_kyc_doc', 'application_id': this._currentModalData['application'], 'kyc_document_id': this._currentModalData?.document_id?.pk, 'status': (this.documentStatus == 1 ? 'accepted' : 'rejected'), 'reason': this.verifyRemarks }
                        console.log('export this file', this._currentModalData, params);
                        break;
                  case 'uploadDocument':
                        this.api_calling_loader['button'] = true
                        let param = { source: 'Onboarding', datapoint: 'upload_kyc_doc', 'application_id': this._currentModalData['application'], 'kyc_document_id': this._currentModalData?.document_id?.pk, 'file': this._currentFileName['previewImage'] }
                        console.log(param, 'For Upload Document', typeof (this._currentFileName['previewImage']), this._currentFileName['previewImage']?.['File']);

                        // this.https.uploadLoanDocument(param).subscribe((res : any)=>{
                        //       if(res?.success){
                        //             this.api_calling_loader['button'] = false;
                        //             this.fileList = [];
                        //             this.handleCancel();
                        //       }else{
                        //             this.api_calling_loader['button'] = false;
                        //             this.fileList = [];
                        //             this.handleCancel();
                        //       }
                        // },,err=>{this.api_calling_loader['button'] = false;})
                        break;
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

      generateBase64View(file: Blob) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (e) => {
                  this._currentFileName['previewImage'] = reader.result
            }
            console.log(this._currentFileName['previewImage']);

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
}
