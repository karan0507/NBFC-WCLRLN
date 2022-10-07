import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { differenceInCalendarDays } from 'date-fns/esm';
import * as moment from 'moment';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { HttpService } from 'src/app/services/http.service';
import { GlobalservicesService } from 'src/app/shared/globalservices.service';

@Component({
      selector: 'app-verification',
      templateUrl: './verification.component.html',
      styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {
      pdfData: any;
      pdf_viewer_object_values = {
        'boolean': false,
        'url': '',
        'title': ''
      }
      _exportDocument: any;
      checked: boolean = false;
      filters: any;
      remarks: any = '';
      date = '';
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
            'button': false
      };
      stageMasterList: any;
      _currentStageStatus: any;
      offerForm: FormGroup
      disabledDate = (current: Date): boolean => {
            // Can not select days before today and today
            return differenceInCalendarDays(current, this.today) > 0;
      };
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

      // Modal Boolean Values
      _isUpdateStatus: boolean = false;
      statusList: any;
      date_sorter = ''
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
      _isViewDocument: boolean = false
      isFetchCibilSms: boolean = false;
      documentStatus = 1
      stageFilters: any
      stageList = [
      {name: 'pan'},
      {name: 'aadhar'},
      {name: 'company'},
      {name: 'name'},
      {name: 'income'}]
      // Page Filters and Pagination Data
      searchValue: any
      page = 1
      globalPageSize: any;
      productList: any = []
      stageStatusList: any = []
      currentDropDownId: any;
      partner: any
      partnerList: any = []
      blackBoxData: any;
      remarksDescription: any;
      moved_by = 'all';
      generateOfferId: any;
      _generate_offer: boolean;
      storedParams: any;
      isVisibleThirdPartyResp: boolean;
      constructor(public https: HttpService, public message: NzMessageService, public fb: FormBuilder, public sanitize: DomSanitizer, public global: GlobalservicesService,
             private route: ActivatedRoute, private router: Router) {
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
            this.global.setApplicationCount();
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
                  let params = { 'source': 'Onboarding', endpoint: '8', 'datapoint': 'get-stage-statuses' }
                  this.https.getStatusStageWise(params).subscribe((res: any) => {
                        this.stageStatusList = res?.data
                        console.log(this.stageStatusList);
                  })
            } else if (type == 'partner') {
                  this.https.fetchPartner().subscribe((res: any) => {
                        this.partnerList = res?.data?.results?.filter(res => { if (res?.name) { return res } });
                  })
            }
      }

      getFormLoanData(tableFilter?) {
            this.api_calling_loader['listLoader'] = true
            this.loanApplicationData = [];
            var data = { 'datapoint': 'loan_application', 'endpoint': 'LoanApplication?stage_id=8', 'source': 'Onboarding' }
            data['page'] = tableFilter?.pageIndex ? tableFilter?.pageIndex : 1
            data['limit'] = tableFilter?.pageSize ? tableFilter?.pageSize : this.globalPageSize
            // if (tableFilter) {
            //       this.page = tableFilter?.pageIndex
            //       this.globalPageSize = tableFilter?.pageSize
            // } else {
            //       data['page'] = this.page
            //       data['limit'] = this.globalPageSize
            // }

            if (this.filters) {
                  // data['page'] = 1
                  data['status'] = this.filters
            }
            if (this.productFilters) {
                  // data['page'] = 1
                  data['product_master'] = this.productFilters
            }
            if(this.stageFilters){
                  // data['page'] = 1
                  data['step'] = this.stageFilters
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
            data['start_date'] = this.date[0] ? moment(this.date[0]).format("YYYY-MM-DD") : '',
            data['end_date'] = this.date[1] ? moment(this.date[1]).format("YYYY-MM-DD") : '',
            data['moved_by'] = this.moved_by,

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
            switch (type) {
                  case 'status':
                        this._isStatus = true;
                        this.https.getStageMaster(8).subscribe(res => {
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
            this.pdf_viewer_object_values['boolean'] = false
            this.pdf_viewer_object_values['url'] = null
            this._isEditOffer = false;
            this.isRejectModal = false;
      }

      handleOk(type?) {
            switch (type) {
                  case 'status':
                        this.api_calling_loader['button'] = true;
                        let data = { source: 'Onboarding', datapoint: 'update_multi_application_status', 'remarks': this.remarksDescription, stage_id: this._currentStageStatus, applications: JSON.stringify(this._checkedLoanList) };
                        this.https.updateMultipleLoanApp(data).subscribe((res: any) => {
                              if (res?.success) {
                                    this.api_calling_loader['button'] = false;
                                    this.message.success(res?.success)
                                    this.handleCancel()
                                    this.global.setApplicationCount();
                                    this.getFormLoanData()
                              } else {
                                    this.api_calling_loader['button'] = false;
                                    this.message.error(res?.message)
                              }
                        }, error => {
                              this.api_calling_loader['button'] = false;
                              this.message.error(error)
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
                  case 'generate_offer':
                        this.api_calling_loader['button'] = true
                        let form_data = { 
                              source: 'Onboarding', 
                              datapoint: 'manual_offer', 
                              application_id: this.generateOfferId,
                              final_amount: Number(this.final_amount),
                              final_max_amount: Number(this.final_amount_max)
                        }
                        this.https.editLoanData(form_data).subscribe((res: any) => {
                              if (res?.success) {
                                    this.api_calling_loader['button'] = false
                                    this.message.success(res?.message);
                                    this.handleCancel();
                                    // this.getIdWiseData(this._currentModalData['application']);
                                    this.getFormLoanData()
                              } else {
                                    this.api_calling_loader['button'] = false
                                    this.message.error(res?.message);
                              }
                        }, err => {
                              this.api_calling_loader['button'] = false
                              // this.message.error(err);
                        })
                        break
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
            let data = { source: 'Onboarding', datapoint: 'export_application_by_stage',stage_id:  8}
            if(this.partner){
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

      openDocumentModal(type?, data?, loanData?) {
            this._currentModalData = data;
            this._currentLoanDetails = loanData;
            if (type == 'download') {
                  let data = { source: 'Onboarding', datapoint: 'download_document', 'endpoint': 'kyc', 'id': this._currentModalData?.id }
                  console.log(data);
                  this.https.downloadDocuments(data).subscribe((res: any) => {
                        if (res?.success) {
                              // let url = window.URL.createObjectURL(blob)
                              let pwa = window.open(res?.file);
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
                  this.router.navigate(["applications/rejected"]);
            }
            this.date_sorter = ''
            this.date = ''
            this.stageFilters = null;
            this.productFilters = null;
            this.filters = null;
            this.searchValue = null;
            this.partner = null
            this.getFormLoanData()
      }

      thirdPartyDataResponse = [];
      onClickShowJSONPreview(res){
            this.isVisibleThirdPartyResp = true
            this.api_calling_loader['xmlLoader'] = true;
            this.thirdPartyDataResponse = res
            this.api_calling_loader['xmlLoader'] = false;
      }

      moveStageTo(type, id) {
            let data = {}
            data['source'] = 'Onboarding',
            data['endpoint'] = id
            if (type == 'original') {
                  data['datapoint'] = 'move_to_original'
            } else if (type == 'underwriting') {
                  data['datapoint'] = 'move_to_underwriting'
            }
            this.https.moveApplication(data).subscribe((res:any)=>{
                  if(res.success){
                        this.message.success(res.message);
                        this.global.setApplicationCount()
                        this.getFormLoanData()
                  }else{
                        this.message.error(res?.message)
                  }
            })

      }
      final_amount_max: any
      final_amount: any
      generateOffer(id) {
            this.generateOfferId = id
            this._generate_offer = true
            this._isUpdateStatus = true
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
                    console.log(this.router.url)
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