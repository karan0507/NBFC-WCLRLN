import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { differenceInCalendarDays } from 'date-fns';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-underwriting',
  templateUrl: './underwriting.component.html',
  styleUrls: ['./underwriting.component.css']
})
export class UnderwritingComponent implements OnInit {
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
  constructor(public https:HttpService) { }

  ngOnInit(): void {
    this.getFormLoanData();
  }
  expandSet = new Set<number>();
  onExpandChange(id: number, checked: boolean): void {
    if (checked) {
      this.expandSet.add(id);
    } else {
      this.expandSet.delete(id);
    }
  }
  listOfData = [
    {
      id: 1,
      name: 'John Brown',
      age: 32,
      expand: false,
      address: '9th Jan',
      description: '--'
    },
    {
      id: 2,
      name: 'Jim Green',
      age: 42,
      expand: false,
      address: '12th Dec',
      description: '--'
    },
    {
      id: 3,
      name: 'Joe Black',
      age: 32,
      expand: false,
      address: '21th Jan',
      description: '--'
    }
  ];

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

  onMonthChange(event){

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

}
