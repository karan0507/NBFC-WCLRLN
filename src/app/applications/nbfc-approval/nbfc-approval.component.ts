import { Component, OnInit } from '@angular/core';
import { differenceInCalendarDays } from 'date-fns';
import { Data } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { GlobalservicesService } from 'src/app/shared/globalservices.service'
import { NzUploadFile } from 'ng-zorro-antd/upload';
import * as FileSaver from 'file-saver';
import * as moment from 'moment';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
      selector: 'app-nbfc-approval',
      templateUrl: './nbfc-approval.component.html',
      styleUrls: ['./nbfc-approval.component.css']
})
export class NbfcApprovalComponent implements OnInit {
      pdfData: any;
      pdf_viewer_object_values = {
        'boolean': false,
        'url': '',
        'title': ''
      }
      _exportDocument: any;
      filters: any;
      _currentDocumentReq: any;
      productFilters: any;
      listOfCurrentPageData: readonly Data[] = [];
      setOfCheckedId = new Set<number>();
      loanApplicationData: any = [];
      total_count: any;
      _currentLoanData: any;
      _currentDate: any;
      _currentId: any;
      _checkedLoanList: any[];
      _activeLoans: any = [];
      today = new Date();
      api_calling_loader = {
            'listLoader': false,
            'accordian': false,
            'button': false
      };
      remarks: any = '';
      stageMasterList: any;
      _currentStageStatus: any;
      disabledDate = (current: Date): boolean => {
            // Can not select days before today and today
            return differenceInCalendarDays(current, this.today) > 0;
      };

      // Modal Boolean Values
      checked: boolean = false;
      indeterminate: boolean = false;
      _isUpdateStatus: boolean = false;
      statusList: any;
      _currentDocument: any = '1'
      _isDocument: boolean = false;
      _isStatus: boolean = false;
      _isAcceptOffer: boolean = false;
      isRejectOffer: boolean = false;
      _currentCibilData: any;

      // Page Filters and Pagination Data
      searchValue: any
      page = 1
      globalPageSize: any;
      productList: any = []
      stageStatusList: any = []

      // Modal Boolean Values
      _isPullData: boolean = false;
      _isOpenModal: boolean = false;
      _currentFileName: any;
      fileList: any = [];
      _isViewDocument: any;
      _isDownload: boolean = false;
      _isVerify: boolean = false;
      _isUpload: boolean = false;
      _currentModalData: any;
      _currentLoanDetails: any;
      verifyRemarks: any;
      _isCibil: boolean = false
      documentStatus = 1
      currentDropDownId : any;
      partner : any
      partnerList : any = []
      blackBoxData: any;
      remarksDescription: any;
      date_sorter = ''
      moved_by='all';
      stageFilters: any;
      stageList = [
            {name: 'pan'},
            {name: 'aadhar'},
            {name: 'company'},
            {name: 'name'},
            {name: 'income'}
      ];
      date = '';
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
      constructor(public https: HttpService, public message: NzMessageService, public global: GlobalservicesService, public sanitize: DomSanitizer) { }

      ngOnInit(): void {
            this.global.setApplicationCount();
            this.page = 1
            this.globalPageSize = this.global.globalPageSize;
            this.getFormLoanData();
      }

      onFocusMethod(type) {
            if (type == 'product') {
                  this.https.getAllProducts().subscribe((res: any) => {
                        this.productList = res?.data
                  })
            } else if (type == 'status') {
                  let params = { 'source': 'Onboarding', endpoint: '10', 'datapoint': 'get-stage-statuses' }
                  this.https.getStatusStageWise(params).subscribe((res: any) => {
                        this.stageStatusList = res?.data
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
            var data;
            // data = { 'datapoint': 'loan_application', 'endpoint': 'LoanApplication?stage_id=10', 'source': 'Onboarding' }
            if(this.selectedTabFilter !== 'B2B' && this.selectedTabFilter !== 'D2C'){
                  data = { 'datapoint': 'loan_application', 'endpoint': 'LoanApplication?stage_id=10', 'source': 'Onboarding' }
            } else if(this.selectedTabFilter == 'B2B'){
                  data = { 'datapoint': 'loan_application', 'endpoint': 'LoanApplication?stage_id=10&app_prod_type=B2B', 'source': 'Onboarding' }
            } else if(this.selectedTabFilter == 'D2C'){
                  data = { 'datapoint': 'loan_application', 'endpoint': 'LoanApplication?stage_id=10&app_prod_type=D2C', 'source': 'Onboarding' }
            }
            // if (tableFilter) {
            //       this.page = tableFilter?.pageIndex
            //       this.globalPageSize = tableFilter?.pageSize
            //       data['page'] = tableFilter?.pageIndex
            //       data['limit'] = tableFilter?.pageSize
            // } else {
            //       data['page'] = this.page
            //       data['limit'] = this.globalPageSize
            // }
            data['page'] = tableFilter?.pageIndex ? tableFilter?.pageIndex : 1
            data['limit'] = tableFilter?.pageSize ? tableFilter?.pageSize : this.globalPageSize
            data['flag'] = this.selectedTabFilter;

            if(this.stageFilters){
                  // data['page'] = 1
                  data['step'] = this.stageFilters
            }

            if (this.filters) {
                  // data['page'] = 1
                  data['status'] = this.filters
            }
            if (this.productFilters) {
                  // data['page'] = 1
                  data['product_master'] = this.productFilters
            }
            if (this.searchValue) {
                  // data['page'] = 1
                  data['name'] = this.searchValue
            }
            if(this.partner){
                  // data['page'] = 1
                  data['company'] = this.partner
            }

            if(this.date_sorter){
            data['date_sorter'] = this.date_sorter
            }
            data['moved_by'] = this.moved_by,
            data['start_date'] = this.date[0] ? moment(this.date[0]).format("YYYY-MM-DD") : '',
            data['end_date'] = this.date[1] ? moment(this.date[1]).format("YYYY-MM-DD") : '',

            this.https.fetchLoanApplicationList(data).subscribe(res => {
                  if (res?.success) {
                        if(this._activeLoans){
                              this._activeLoans.forEach(element => {
                                    this.expandSet.delete(element?.id)    
                               });  
                        }
                        // this.global.setApplicationCount();
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

      selectedTabFilter: any = 'all'
      onClickChangeTabFilter(e){
            console.log(e);
            this.resetFilters();
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

      onMonthChange(event) {

      }

      updateStatus(type?, data?) {
            this._isUpdateStatus = true;
            this._currentLoanDetails = data;
            this.remarks = '';
            switch (type) {
                  case 'status':
                        this._isStatus = true;
                        this.https.getStageMaster(10).subscribe(res => {
                              if (res?.success) {
                                    this.stageMasterList = res?.data
                              }
                        })
                        console.log(this._checkedLoanList);
                        break;
                  case 'download': this._isDocument = true; break;

            }
      }

      handleCancel() {

            this._isOpenModal = false;
            this._isViewDocument = false;
            this._isUpload = false;
            this._isVerify = false;
            this._isPullData = false;
            this._isCibil = false;
            this._isUpdateStatus = false;
            this._isStatus = false;
            this._isDocument = false;
            this._isAcceptOffer = false;
            this.pdf_viewer_object_values['boolean'] = false
            this.pdf_viewer_object_values['url'] = null
            this.isRejectOffer = false;
      }

      handleOk(type?) {
            if (type == 'status') {
                  this.api_calling_loader['button'] = true
                  let data = { source: 'Onboarding', datapoint: 'update_multi_application_status', 'remarks':this.remarksDescription, stage_id: this._currentStageStatus, applications: JSON.stringify(this._checkedLoanList) };
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
            } else if (type == 'accept') {
                  let data = { source: 'LMS', datapoint: 'accept_offer', endpoint: this._currentLoanData?.id, remarks: this.remarks };
                  this.https.acceptLoanOffer(data).subscribe((res: any) => {
                        if (res?.success) {
                              this.message.success(res?.message);
                              this.handleCancel();
                              this.getFormLoanData();
                        } else {
                              this.message.error(res?.message)
                        }
                  })
            } else if (type == 'reject') {
                  let data = { source: 'LMS', datapoint: 'reject_offer', endpoint: this._currentLoanData?.id, remarks: this.remarks };
                  this.https.acceptLoanOffer(data).subscribe((res: any) => {
                        if (res?.success) {
                              this.message.success(res?.message);
                              this.handleCancel();
                              this.getFormLoanData();
                        } else {
                              this.message.error(res?.message)
                        }
                  })
            } else if ('uploadDocument') {
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
            } else if ('verify') {
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
            // const generateloader = this.message.loading('Generating File..', { nzDuration: 0 }).messageId;
            // this.https.fetchLoanApplicationListExport(data).subscribe(res => {
            //       this._exportDocument = res;
            //       this.https.exportMasterSectionModule(res, 'export', file_formate, generateloader)
            // }, error => {
            //       this.message.remove(generateloader);
            //       console.log(error);
            // })
            let data = { source: 'Onboarding', datapoint: 'export_application_by_stage',stage_id:  10}
            if(this.partner){
                  // data['page'] = 1
                  data['company'] = this.partner
                  }
              data['start_date'] = this.date[0] ? moment(this.date[0]).format("YYYY-MM-DD") : '';
              data['end_date'] = this.date[1] ? moment(this.date[1]).format("YYYY-MM-DD") : '';
            // let data = { source: 'Onboarding', datapoint: 'export_data', records: JSON.stringify(this._checkedLoanList), file_type: file_formate }
            const generateloader = this.message.loading('Generating File..', { nzDuration: 0 }).messageId;
            this.https.fetchExportData(data).subscribe(res => {
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
            let data = { source: 'Onboarding', endpoint: id }
            if (type == 'cibil' && id) {
                  data['datapoint'] = 'fetch-cibil-from-db'
                  this.https.getCibilSMSData(data).subscribe(res => {
                        if (res?.data) {
                              console.log(res?.data);
                              this._currentCibilData = res?.data
                        }
                  })
            } else if (type == 'sms' && id) {
                  data['datapoint'] = 'fetch-sms-from-db'
                  this.https.getCibilSMSData(data).subscribe(res => {
                        if (res?.data) {
                              console.log(res?.data);
                              this._currentCibilData = res?.data
                        }
                  })
            }
      }

      offerMethods(value?, type?) {
            this._isUpdateStatus = true;
            this._currentLoanData = value;
            console.log(value);
            this._currentCibilData
            this.remarks = '';
            if (type == 'approve') {
                  console.log(value);
                  this._isAcceptOffer = true;
            } else if (type == 'reject') {
                  this.isRejectOffer = true;
            }
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

      getBlackBoxData(id) {
            let data = { source: 'Onboarding', datapoint: 'pull_black_box', endpoint: id }
            this.https.pullBlackBoxData(data).subscribe((res: any) => {
                  if (res?.success) {
                        this.blackBoxData = res?.data
                  }
            })
      }
      
      resetFilters() {
            // this.date_sorter = ''
            // this.productFilters = null;
            // this.filters = null;
            // this.searchValue = null;
            // this.partner = null
            // this.stageFilters = null
            this.date = '';
            this.date_sorter = ''
            this.productFilters = null;
            this.filters = null;
            this.stageFilters = null;
            this.searchValue = null;
            this.partner = null;
            this.getFormLoanData()
      }

      confirm(id){
            let data;
            this.https.toggleApplicationTODormantBasedOnTimeSpan(id, data).subscribe((res: any)=>{
                  if(res?.success){
                        this.message.success(res.message);
                        this.getFormLoanData();
                  } else {
                        this.message.error(res.message);
                  }
            })
      }
      fetchCibilPDF(id){
            // >>>>>>> 7bec92bfd52a785bb6c4258e3b39f2211a212131
                let data = {
                  datapoint: "loan_application",
                  endpoint: `UserKycCibil?loan_application=`+id,
                  source: "Onboarding",
                };
                const generateloader = this.message.loading('Generating PDF..', { nzDuration: 0 }).messageId;
                this.https.fetchLoanApplicationList(data).subscribe((res: any) =>{
                  if(res?.data?.results[0]?.credit_pdf){
                    this.pdf_viewer_object_values['title'] = 'Show Cibil PDF'
                    this.pdf_viewer_object_values['url'] = res?.data?.results[0]?.credit_pdf
                    this.pdfData =  this.sanitize.bypassSecurityTrustResourceUrl(this.pdf_viewer_object_values['url']);
                    this.pdf_viewer_object_values['boolean'] = true
                    this.message.remove(generateloader);
                  //   console.log(this.router.url)
                  } else {
                    this.message.remove(generateloader);
                    this.message.error('No Cibil PDF Found');
                  }
                  // this.pdfData = res?.data?.results[0];
                }, error => {
                  this.message.remove(generateloader);
                  console.log(error);
                })
              }
}
