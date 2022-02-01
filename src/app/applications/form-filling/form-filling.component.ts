import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { differenceInCalendarDays } from 'date-fns';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-form-filling',
  templateUrl: './form-filling.component.html',
  styleUrls: ['./form-filling.component.css']
})
export class FormFillingComponent implements OnInit {
  checked :boolean = false;
  indeterminate : boolean = false;
  listOfCurrentPageData: readonly Data[] = [];
  setOfCheckedId = new Set<number>();
  loanApplicationData : any = [];
  total_count:any;
  _currentDate:any;
  _currentId :any;
  console = console;
  _activeLoans: any = [];
  today = new Date();
  api_calling_loader: boolean;
  disabledDate = (current: Date): boolean => {
        // Can not select days before today and today
        return differenceInCalendarDays(current, this.today) > 0;
      };

  constructor(public https: HttpService) { }

  ngOnInit(): void {
    this.getFormLoanData();
  }


  getFormLoanData(id?) {
    this.api_calling_loader = true
    var data = {'datapoint':'loan_application', 'endpoint':'LoanApplication?stage_id=1', 'source':'Onboarding'}
    this.https.fetchLoanApplicationList(data).subscribe(res => {
      this.loanApplicationData = res?.data?.results;
      this.total_count = res?.data?.total_count;
      this.api_calling_loader = false
    },(err)=>{
      this.api_calling_loader = false
    })
  }


  getIdWiseData(id?, index?){
   let data = {'datapoint':'loan_application', 'endpoint':'LoanApplication?id='+ id, 'source':'Onboarding'};
   this.https.fetchLoanApplicationList(data).subscribe(res=> {
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

  onMonthChange(event){

  }
}
