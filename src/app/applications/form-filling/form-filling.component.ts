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
  checked = false;
  loading = false;
  indeterminate = false;
  listOfCurrentPageData: readonly Data[] = [];
  setOfCheckedId = new Set<number>();
  loanApplicationData : any = [];
  total_count:any;
  _currentDate:any;
  _currentId :any;
  _activeLoans: any = [];
  today = new Date();
  
  disabledDate = (current: Date): boolean => {
        // Can not select days before today and today
        return differenceInCalendarDays(current, this.today) > 0;
      };

  constructor(public https: HttpService) { }

  ngOnInit(): void {
    this.getFormLoanData();
  }


  getFormLoanData(id?) {
    console.log('call api');
    
    var data;
    if(this._currentId){
      data = {'datapoint':'loan_application', 'endpoint':'LoanApplication?stage_master=1', 'id':this._currentId}
    }else{
      data = {'datapoint':'loan_application', 'endpoint':'LoanApplication?stage_master=1'}
    }
    this.https.fetchLoanApplicationList(data).subscribe(res => {
      console.log('api called', res);
      this.loanApplicationData = res?.data?.results
      // this.loanApplicationData = res;
      // this.total_count = res?.total_count;
    })
  }

  expandSet = new Set<number>();
  onExpandChange(id: number, checked: boolean): void {
    if (checked) {
      this.expandSet.add(id);
      this._activeLoans.push({'id':id});
      this.getFormLoanData(this._currentId = id)
      console.log(this._activeLoans);
    } else {
      this.expandSet.delete(id);
      this._activeLoans.filter(res=> res.id == id);
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
