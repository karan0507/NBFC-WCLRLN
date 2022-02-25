import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Data } from '@angular/router';
import { differenceInCalendarDays } from 'date-fns';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/services/http.service';

@Component({
      selector: 'app-offer-proposed',
      templateUrl: './offer-proposed.component.html',
      styleUrls: ['./offer-proposed.component.css']
})
export class OfferProposedComponent implements OnInit {
      _exportDocument: any;
      checked: boolean = false;
      filters: any;
      remarks: any = '';
      _currentDocumentReq: any;
      productFilters: any;
      indeterminate: boolean = false;
      isRejectModal: boolean = false;
      listOfCurrentPageData: readonly Data[] = [];
      _currentLoanIdOffer: any;
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
            'accordian': false
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
      constructor(public https: HttpService, public message: NzMessageService, public fb: FormBuilder) { }

      ngOnInit(): void {
            this.getFormLoanData();
            this.offerForm = this.fb.group({
                  amountOffered: [null, [Validators.required, Validators.min(1)]],
                  validitiy: [null],
                  interest: [null]
            })
      }


      getFormLoanData(id?) {
            this.api_calling_loader['listLoader'] = true
            var data = { 'datapoint': 'loan_application', 'endpoint': 'LoanApplication?stage_id=4', 'source': 'Onboarding' }
            // if(this.searchValue){
            //      data = { 'datapoint': 'loan_application', 'endpoint': 'LoanApplication?stage_id=2', 'source': 'Onboarding', 'search' : this.searchValue }
            // }
            // if(){
            //       data = { 'datapoint': 'loan_application', 'endpoint': 'LoanApplication?stage_id=2', 'source': 'Onboarding', 'search' : this.searchValue }
            // }    

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
                  case 'editOffer': this._isEditOffer = true;
                        this.api_calling_loader['accordian'] = true;
                        let params = { 'source': 'LMS', 'datapoint': 'fetch_proposed_offer_for_admin', 'endpoint': data?.id }
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
                  case 'rejectOffer': this.isRejectModal = true; break;

            }
      }

      handleCancel() {
            this._isUpdateStatus = false;
            this._isStatus = false;
            this._isDocument = false;
            this._isEditOffer = false;
            this.isRejectModal = false;
      }

      handleOk(type?) {
            switch (type) {
                  case 'status':
                        let data = { source: 'Onboarding', datapoint: 'update_multi_application_status', stage_id: '4', applications: JSON.stringify(this._checkedLoanList), remarks: this.remarks };
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
                        break;
                  case 'offer':
                        let value = { source: 'LMS', datapoint: 'edit_accepted_offers', endpoint: this._currentDocumentReq?.id, amount: this.offerForm.get('amountOffered').value };
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
                        break;
                  case 'reject': let params = { source: 'LMS', datapoint: 'reject_offer', endpoint: this._currentDocumentReq?.id, remarks: this.remarks };
                        this.https.acceptLoanOffer(params).subscribe((res: any) => {
                              if (res?.success) {
                                    this.message.success(res?.message);
                                    this.handleCancel();
                                    this.getFormLoanData();
                              } else {
                                    this.message.error(res?.message)
                              }
                        });
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
}
