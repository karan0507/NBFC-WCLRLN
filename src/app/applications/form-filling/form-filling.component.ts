import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { differenceInCalendarDays } from 'date-fns';
import * as moment from 'moment';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/services/http.service';
import { GlobalservicesService } from 'src/app/shared/globalservices.service'
@Component({
      selector: 'app-form-filling',
      templateUrl: './form-filling.component.html',
      styleUrls: ['./form-filling.component.css']
})
export class FormFillingComponent implements OnInit {
      checked: boolean = false;
      searchValue: any = '';
      filters: any;
      page = 1;
      date_sorter = ''
      globalPageSize = this.global.globalPageSize;
      _exportDocument: any;
      productFilters: any;
      indeterminate: boolean = false;
      listOfCurrentPageData: readonly Data[] = [];
      setOfCheckedId = new Set<number>();
      loanApplicationData: any = [];
      total_count: any;
      _currentDate: any;
      _currentId: any;
      partner : any
      partnerList : any = []
      _checkedLoanList: any[];
      _activeLoans: any = [];
      today = new Date();
      api_calling_loader = {
            'listLoader': false,
            'accordian': false,
            'button': false,
            'remarks': false,
      };
      storedParams: any
      productList: any = []
      stageStatusList: any = []
      stageMasterList: any;
      moved_by = 'all';
      _currentStageStatus: any;
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
      remarksDescription: any
      remarkVisible: boolean;
      selectedId: any;
      isVisibleRemarks: boolean;
      remarksData: any;
      constructor(public https: HttpService, public message: NzMessageService, public global: GlobalservicesService, private route: ActivatedRoute, private router: Router) { 
            this.route.queryParams.subscribe((params: any) => {
                  if(params?.loan_id){
                        // alert(params?.loan_id);
                        this.storedParams = params?.loan_id 
                        this.searchValue = params?.loan_id;
                        this.getFormLoanData();
                  }
            });
      }

      stageFilters: any
      stageList = [
      {name: 'pan'},
      {name: 'aadhar'},
      {name: 'company'},
      {name: 'name'},
      {name: 'income'}]

      ngOnInit(): void {
            this.global.setApplicationCount();
            this.page = 1
            this.globalPageSize = this.global.globalPageSize;
            this.getFormLoanData();
      }

      addRemarks: string;
      onClickAddRemarks(action){
            if(action =='view'){
                  this.api_calling_loader['remarks'] = true;
                  // this.isVisibleRemarks = true
                  // source=Onboarding&datapoint=get-application-remarks&endpoint=18565
                  let data = {
                        source : "Onboarding",
                        datapoint : "get-application-remarks",
                        endpoint : this.selectedId,
            }      
            this.https.fetchXMLData(data).subscribe((res: any)=>{
                  console.log(res);
                  if(res?.success){
                        this.api_calling_loader['remarks'] = false;
                        this.remarksData = res?.data?.results
                  }
            }, error=>{
                  this.api_calling_loader['remarks'] = false;
            })
            } else {
            this.api_calling_loader['remarks'] = true;
            let data = {
                        source : "Onboarding",
                        datapoint : "add-application-remarks",
                        application_id : this.selectedId,
                        remarks : this.addRemarks
            }
            this.https.generateOfferForCorrespondingApplication(data).subscribe((res: any)=>{
                  if(res?.success){
                        this.addRemarks = null;
                        this.message.success(res?.message);
                        this.api_calling_loader['remarks'] = false;
                        this.remarkVisible = false;
                  } else {
                        this.api_calling_loader['remarks'] = false;
                        this.message.success(res?.message);
                        this.remarkVisible = false;
                  }
            })
      }
      }


      onFocusMethod(type) {
            if (type == 'product') {
                  this.https.getAllProducts().subscribe((res: any) => {
                        this.productList = res?.data
                  })
            } else if (type == 'status') {
                  let params = { 'source': 'Onboarding', endpoint: '1', 'datapoint': 'get-stage-statuses' }
                  this.https.getStatusStageWise(params).subscribe((res: any) => {
                        this.stageStatusList = res?.data
                  })
            }else if(type == 'partner'){
                  this.https.fetchPartner().subscribe((res:any)=>{
                        this.partnerList = res?.data?.results?.filter(res => { if (res?.name) { return res } });
                  })
            }
      }

      date = '';

      getFormLoanData(tableFilter?) {
            this.api_calling_loader['listLoader'] = true
            this.loanApplicationData = [];
            var data;
            this.page = tableFilter?.pageIndex ? tableFilter?.pageIndex : 1;
            this.globalPageSize = tableFilter?.pageSize ? tableFilter?.pageSize : 30;
            if(this.selectedTabFilter !== 'B2B' && this.selectedTabFilter !== 'D2C'){
                  data = { 'datapoint': 'loan_application', 'endpoint': 'LoanApplication?stage_id=1', 'source': 'Onboarding' }
            } else if(this.selectedTabFilter == 'B2B'){
                  data = { 'datapoint': 'loan_application', 'endpoint': 'LoanApplication?stage_id=1&app_prod_type=B2B', 'source': 'Onboarding' }
            } else if(this.selectedTabFilter == 'D2C'){
                  data = { 'datapoint': 'loan_application', 'endpoint': 'LoanApplication?stage_id=1&app_prod_type=D2C', 'source': 'Onboarding' }
            }
            // data = { 'datapoint': 'loan_application', 'endpoint': 'LoanApplication?stage_id=1', 'source': 'Onboarding' }
            data['page'] = tableFilter?.pageIndex ? tableFilter?.pageIndex : 1
            data['limit'] = tableFilter?.pageSize ? tableFilter?.pageSize : this.globalPageSize
            data['flag'] = this.selectedTabFilter
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

      selectedTabFilter: any ='all';
      onClickChangeTabFilter(e){
            console.log(e);
            if(e == 'otp'){
                  this.fetListOfFailOTP();
            } else {
                  this.resetFilters();
            }
      }

      apiLoader: boolean = false;
      otpFailuerResponse: any;
      fetListOfFailOTP(tableFilter?){
            let data = [];
            data['page'] = tableFilter?.pageIndex ? tableFilter?.pageIndex : 1
            data['limit'] = tableFilter?.pageSize ? tableFilter?.pageSize : this.globalPageSize
            data['start_date'] = this.date[0] ? moment(this.date[0]).format("YYYY-MM-DD") : '';
            data['end_date'] = this.date[1] ? moment(this.date[1]).format("YYYY-MM-DD") : '';
            if (this.searchValue) {
              data["search_param"] = this.searchValue;
            }
            this.apiLoader = true;
            this.https.getListOfOTPSent(data).subscribe((res: any)=>{
              this.otpFailuerResponse = res?.data?.results;
              this.total_count = res?.data?.total_count
              this.apiLoader = false;
            }, error=>{
              this.apiLoader = false;
            });
          }

      expandSet = new Set<number>();
      onExpandChange(id: number, checked: boolean, index?): void {

            if (checked) {
                  this.expandSet.clear()
                  this._currentId = id
                  this.expandSet.add(id);
                  this.https.expnadList.next(this.expandSet)
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

      onCurrentPageDataChange(listOfCurrentPageData: Data[]): void {
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

      updateStatus() {
            this._isUpdateStatus = true;
            this.https.getStageMaster(1).subscribe(res => {
                  if (res?.success) {
                        this.stageMasterList = res?.data
                  }
            })
      }

      handleCancel() {
            this._isUpdateStatus = false;
      }

      handleOk() {
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
                  this.message.error(error);
                  this.api_calling_loader['button'] = false;
            })
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
            // let data = new FormData()
            // data.append('source', 'Onboarding');
            // data.append('datapoint', 'export_application_by_stage')
            // data.append('stage_id', '1');
            let data = { source: 'Onboarding', datapoint: 'export_application_by_stage',stage_id:  1}
            if(this.partner){
                  // data['page'] = 1
                  data['company'] = this.partner
                  }
              data['start_date'] = this.date[0] ? moment(this.date[0]).format("YYYY-MM-DD") : '';
              data['end_date'] = this.date[1] ? moment(this.date[1]).format("YYYY-MM-DD") : '';
            // data.append('records', JSON.stringify(this._checkedLoanList))
            // data.append('file_type', file_formate)
            const generateloader = this.message.loading('Generating File..', { nzDuration: 0 }).messageId;
            this.https.fetchExportData(data).subscribe(res => {
                  this._exportDocument = res;
                  this.https.exportMasterSectionModule(res, 'export', file_formate, generateloader)
            }, error => {
                  this.message.remove(generateloader);
            })
      }

      resetFilters() {
            if(this.storedParams){
                  this.router.navigate(["applications/form-filling"]);
            }
            if(this.selectedTabFilter == 'otp'){
                  this.page =1;
                  this.globalPageSize = 30;
                  this.searchValue = '';
                  this.date = '';
                  this.fetListOfFailOTP();
            } else {
            this.date = '';
            this.date_sorter = ''
            this.stageFilters = null;
            this.productFilters = null;
            this.filters = null;
            this.searchValue = null;
            this.partner = null
            this.getFormLoanData();
            }
            
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

      ngOnDestroy(): void {
            this.https.expnadList.next()
      }
}
