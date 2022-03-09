import { Component, OnInit } from '@angular/core';
import { differenceInCalendarDays } from 'date-fns';
import { Data } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { GlobalservicesService } from 'src/app/shared/globalservices.service'
@Component({
      selector: 'app-nbfc-approval',
      templateUrl: './nbfc-approval.component.html',
      styleUrls: ['./nbfc-approval.component.css']
})
export class NbfcApprovalComponent implements OnInit {
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
            'accordian': false
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
      isRejectOffer : boolean = false;
      _currentCibilData: any;
      
         // Page Filters and Pagination Data
         searchValue : any
         page = 1
         globalPageSize : any;
         productList : any = []
         stageStatusList : any = []
   
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
                     let params = { 'source': 'Onboarding', endpoint: '1', 'datapoint': 'get-stage-statuses' }
                     this.https.getStatusStageWise(params).subscribe((res: any) => {
                           this.stageStatusList = res?.data
                     })
               }
         }
   
         getFormLoanData(tableFilter?) {
               this.api_calling_loader['listLoader'] = true
               this.loanApplicationData = [];
               var data = { 'datapoint': 'loan_application', 'endpoint': 'LoanApplication?stage_id=1', 'source': 'Onboarding' }
   
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
            console.log(type, typeof (type));
            if (data) {
                  this._currentDocumentReq = data
                  console.log(this._currentDocumentReq, 'Your current ID');
            }
            this._isUpdateStatus = true;
            this.remarks = '';
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
                  case 'download': this._isDocument = true; break;

            }
      }

      handleCancel() {
            // this.remarks = '';
            this._isUpdateStatus = false;
            this._isStatus = false;
            this._isDocument = false;
            this._isAcceptOffer = false;
            this.isRejectOffer = false;
      }

      handleOk(type?) {
            if (type == 'status') {
                  let data = { source: 'Onboarding', datapoint: 'update_multi_application_status', stage_id: '10', applications: JSON.stringify(this._checkedLoanList) };
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
            }else if(type == 'reject'){
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

      generateBase64View(file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            this._exportDocument = file;
            reader.onload = (e) => {
                  console.log(reader, this._exportDocument);
            }
      }

      getCibilScoreData(id?) {
            console.log('API call');
            if (id) {
                  let data = { source: 'Onboarding', datapoint: 'pull_cibil', endpoint: 2 }
                  this.https.getCibilData(id, data).subscribe(res => {
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
}
