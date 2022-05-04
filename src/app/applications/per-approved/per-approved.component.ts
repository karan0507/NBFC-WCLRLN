import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { differenceInCalendarDays } from 'date-fns';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/services/http.service';
import { GlobalservicesService } from 'src/app/shared/globalservices.service';

@Component({
      selector: 'app-per-approved',
      templateUrl: './per-approved.component.html',
      styleUrls: ['./per-approved.component.css']
})
export class PerApprovedComponent implements OnInit {
      checked: boolean = false;
      _exportDocument: any;
      filters: any;
      productFilters: any;
      indeterminate: boolean = false;
      listOfCurrentPageData: readonly Data[] = [];
      setOfCheckedId = new Set<number>();
      loanApplicationData: any = [];
      total_count: any;
      _currentDate: any;
      _currentId: any;
      _checkedLoanList: any[];
      _activeLoans: any = [];
      today = new Date();
      api_calling_loader = {
            'listLoader': false,
            'accordian': false,
            'button':false
      };
      stageMasterList: any;
      _currentStageStatus: any;
      disabledDate = (current: Date): boolean => {
            // Can not select days before today and today
            return differenceInCalendarDays(current, this.today) > 0;
      };

      // Modal Boolean Values
      _isUpdateStatus: boolean = false;
      statusList: any;

      // Page Filters and Pagination Data
      searchValue : any
      page = 1
      globalPageSize : any;
      productList : any = []
      stageStatusList : any = []
      partner : any
      partnerList : any = []
      remarksDescription: any;
      constructor(public https: HttpService, public message: NzMessageService, public global : GlobalservicesService) { }

      ngOnInit(): void {
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
                  let params = { 'source': 'Onboarding', endpoint: '9', 'datapoint': 'get-stage-statuses' }
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
            var data = { 'datapoint': 'loan_application', 'endpoint': 'LoanApplication?stage_id=9', 'source': 'Onboarding' }

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

      updateStatus() {
            this._isUpdateStatus = true;
            this.https.getStageMaster(9).subscribe(res => {
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
            let data = { source: 'Onboarding', datapoint: 'update_multi_application_status','remarks':this.remarksDescription, stage_id: this._currentStageStatus, applications: JSON.stringify(this._checkedLoanList) };
            this.https.updateMultipleLoanApp(data).subscribe(res => {
                  if (res.success) {
                        this.api_calling_loader['button'] = false
                        this._isUpdateStatus = false;
                        this.global.setApplicationCount();
                        this.message.success(res?.message);
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
            let data = { source: 'Onboarding', datapoint: 'export_data', records: JSON.stringify(this._checkedLoanList), file_type: file_formate }
            const generateloader = this.message.loading('Generating File..', { nzDuration: 0 }).messageId;
            this.https.fetchLoanApplicationListExport(data).subscribe(res => {
                  this._exportDocument = res;
                  this.https.exportMasterSectionModule(res, 'export', file_formate, generateloader)
            }, error => {
                  this.message.remove(generateloader);
            })
      }

      resetFilters(){
            this.productFilters = null;
            this.filters = null;
            this.searchValue = null;
            this.partner = null
            this.getFormLoanData()
      }
}
