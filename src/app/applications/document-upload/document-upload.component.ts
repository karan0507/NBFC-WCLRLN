import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { differenceInCalendarDays } from 'date-fns';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/services/http.service';

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
      console = console;
      _checkedLoanList: any[];
      _activeLoans: any = [];
      today = new Date();
      api_calling_loader: boolean;
      stageMasterList: any;
      _currentStageStatus: any;
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
      constructor(public https: HttpService, public message: NzMessageService) { }

      ngOnInit(): void {
            this.getFormLoanData();
      }

      // listOfData = [
      //       {
      //             id: 1,
      //             name: 'John Brown',
      //             age: 32,
      //             expand: false,
      //             address: '9th Jan',
      //             description: '--'
      //       },
      //       {
      //             id: 2,
      //             name: 'Jim Green',
      //             age: 42,
      //             expand: false,
      //             address: '12th Dec',
      //             description: '--'
      //       },
      //       {
      //             id: 3,
      //             name: 'Joe Black',
      //             age: 32,
      //             expand: false,
      //             address: '21th Jan',
      //             description: '--'
      //       }
      // ];

      getFormLoanData(id?) {
            this.api_calling_loader = true
            var data = { 'datapoint': 'loan_application', 'endpoint': 'LoanApplication?stage_id=2', 'source': 'Onboarding' }
            this.https.fetchLoanApplicationList(data).subscribe(res => {
                  if (res?.data) {
                        this.loanApplicationData = res?.data?.results;
                        this.total_count = res?.data?.total_count;
                        this.api_calling_loader = false
                  } else {
                        this.api_calling_loader = false
                  }
            }, (err) => {
                  this.api_calling_loader = false
            })
      }


      getIdWiseData(id?, index?) {
            let data = { 'datapoint': 'loan_application', 'endpoint': 'LoanApplication?id=' + id, 'source': 'Onboarding' };
            this.https.fetchLoanApplicationList(data).subscribe(res => {
                  this._activeLoans.push(res?.data?.results[0]);
                  this.loanApplicationData[index].expanddata = res?.data?.results[0];
                  console.log(this.loanApplicationData[index].expanddata)
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

            }
      }

      handleCancel() {
            this._isUpdateStatus = false;
            this._isStatus = false;
            this._isDocument = false;
      }

      handleOk() {
            let data = { source: 'Onboarding', datapoint: 'update_multi_application_status', stage_id: '2', applications: JSON.stringify(this._checkedLoanList) };
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
}
