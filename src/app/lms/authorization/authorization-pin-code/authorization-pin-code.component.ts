import { HttpService } from 'src/app/services/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authorization-pin-code',
  templateUrl: './authorization-pin-code.component.html',
  styleUrls: ['./authorization-pin-code.component.css']
})
export class AuthorizationPinCodeComponent implements OnInit {

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

  apiLoader ={
    'list': false
  } 

  page = 1;

  total_count = 10;
  pinCodeList: any;

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.getAuthorizationList();
  }

  getResultBasedOnSearch(){

  }

  resetFilter(){

  }

  toggleStatusBasedOnAction(id,action){
    let data;
    if(action == 'inactive'){
      data = {
        "source" : "LMS",
        "datapoint" : "authorization_edit",
        "endpoint" : `Upi/${id}` ,
        "status" : false
      } 

    } else if (action == 'active'){
      data = {
        "source" : "LMS",
        "datapoint" : "authorization_edit",
        "endpoint" : `Upi/${id}` ,
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
    this.apiLoader['list'] = true;
    let data = {
      'source': 'LMS',
      'datapoint':'authorization_get',
      'endpoint':'Pincodes',
      'keyword': this.searchValue,
      'page': 1,
      'size': 30
    }
    // this.listOfData;
    this.http.getLMSAuthorizationList(data).subscribe((res)=> {
      this.pinCodeList = res?.data?.results;
      this.total_count = res?.data?.total_count;
      this.apiLoader['list'] = true;
      console.log(this.pinCodeList, 'this.pinCodeList');
    }, err => {
      console.log(err);
      this.apiLoader['list'] = false;
    })
  }

}
