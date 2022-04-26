import { HttpService } from 'src/app/services/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-failed-transactions',
  templateUrl: './failed-transactions.component.html',
  styleUrls: ['./failed-transactions.component.css']
})
export class FailedTransactionsComponent implements OnInit {
  searchValue = '';
  listOfData = [
    {
      name: 'Bajaj Finance Ltd.',
      regDate: '12/4/21 12:02 PM',
      pan: 'ABCDE1234P',
      invest: 5000000,
      type: 'FatakPay FatakPayEMI',
      status: 'Active'
    },
    {
      name: 'Bajaj Finance Ltd.',
      regDate: '12/4/21 12:02 PM',
      pan: 'ABCDE1234P',
      invest: 5000000,
      type: 'FatakPay FatakPayEMI',
      status: 'Active'
    },
    {
      name: 'Bajaj Finance Ltd.',
      regDate: '12/4/21 12:02 PM',
      pan: 'ABCDE1234P',
      invest: 5000000,
      type: 'FatakPay FatakPayEMI',
      status: 'Active'
    },
    {
      name: 'Bajaj Finance Ltd.',
      regDate: '12/4/21 12:02 PM',
      pan: 'ABCDE1234P',
      invest: 5000000,
      type: 'FatakPay FatakPayEMI',
      status: 'Active'
    },
    {
      name: 'Bajaj Finance Ltd.',
      regDate: '12/4/21 12:02 PM',
      pan: 'ABCDE1234P',
      invest: 5000000,
      type: 'FatakPay FatakPayEMI',
      status: 'Active'
    },
    {
      name: 'Bajaj Finance Ltd.',
      regDate: '12/4/21 12:02 PM',
      pan: 'ABCDE1234P',
      invest: 5000000,
      type: 'FatakPay FatakPayEMI',
      status: 'Active'
    },
    {
      name: 'Bajaj Finance Ltd.',
      regDate: '12/4/21 12:02 PM',
      pan: 'ABCDE1234P',
      invest: 5000000,
      type: 'FatakPay FatakPayEMI',
      status: 'Active'
    }
  ];

  apiLoader = {
    'list': false,
  }
  page = 1;

  total_count;
  failedTransactionList: any;
  globalPageSize: any = 30;

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.getAuthorizationList();
  }

  getResultBasedOnSearch(){
    this.page = 1;
    this.getAuthorizationList();
  }

  resetFilter(){
    this.page =1;
    this.searchValue = '';
    this.getAuthorizationList();
  }

  toggleStatusBasedOnAction(id,action){
    let data;
    if(action == 'inactive'){
      data = {
        "source" : "LMS",
        "datapoint" : "authorization_edit",
        "endpoint" : `Pincodes/${id}` ,
        "status" : false
      } 

    } else if (action == 'active'){
      data = {
        "source" : "LMS",
        "datapoint" : "authorization_edit",
        "endpoint" : `Pincodes/${id}` ,
        "status" : true
      } 
    }
    this.http.getLMSAuthorizationList(data).subscribe((res)=> {
      console.log(res);
    }, err => {
      console.log(err);
    })

  }

  getAuthorizationList(e?){
    if(this.apiLoader['list']){return}
    if(e){
      this.page = e?.pageIndex;
      this.globalPageSize = e?.pageSize
    } 
    let data = {
      'source': 'LMS',
      'datapoint':'loan_service',
      'endpoint':'LoanApplicationTransactions',
      'txn_status':'Fail',
      'search_param': this.searchValue,
      'page': this.page,
      'limit': this.globalPageSize
    }
    // this.listOfData;
    this.apiLoader['list'] = true;
    this.http.getLMSAuthorizationList(data).subscribe((res)=> {
      this.failedTransactionList = res?.data;
      this.total_count = res?.total_count;
      this.apiLoader['list'] = false;
      console.log(this.failedTransactionList, 'this.pinCodeList');
    }, err => {
      console.log(err);
      this.apiLoader['list'] = false;
    })
  }


}
