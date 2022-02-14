import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';
import { Component, OnInit } from '@angular/core';
import { NzUploadFile } from 'ng-zorro-antd/upload';

@Component({
  selector: 'app-authorization-upi-id',
  templateUrl: './authorization-upi-id.component.html',
  styleUrls: ['./authorization-upi-id.component.css']
})
export class AuthorizationUpiIdComponent implements OnInit {

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

  total_count = 10;
  UPIList: any;
  isVisible: boolean;
  updateUPIDetails: FormGroup
  oldDetail: any;
  file: string;
  uploaded_file: any;

  constructor(private fb: FormBuilder,public http: HttpService) { }

  ngOnInit(): void {
    this.createUpdateDetailForm();
    this.getAuthorizationList();
  }

  getResultBasedOnSearch(){
    this.page = 1;
    this.getAuthorizationList();
  }

  resetFilter(){
    this.page =1;
    this.searchValue =''
    this.getAuthorizationList();
  }

  createUpdateDetailForm(){
    this.updateUPIDetails = this.fb.group({
      source : "LMS",
      datapoint : "authorization_edit",
      endpoint : [null, [Validators.required]], 
      remarks : ["", [Validators.required]],
      upi_id :  ["", [Validators.required]]
    })
}

  changeDetail(data){
    this.isVisible= true
    this.oldDetail= data;
    this.updateUPIDetails.patchValue({
      endpoint: `Upi/${this.oldDetail?.id}`
    })
  }

  onClickUpdateDetails(){
    this.apiLoader['onOk'] = true;
    for (const i in this.updateUPIDetails.controls) {
      this.updateUPIDetails.controls[ i ].markAsDirty();
      this.updateUPIDetails.controls[ i ].updateValueAndValidity();
      this.apiLoader['onOk'] = false;
    }
    if(this.updateUPIDetails.valid){
      this.apiLoader['onOk'] = true;
      const data = this.updateUPIDetails.value;
      this.http.updateStatusForAuthorization(data).subscribe((res)=> {
        console.log(res);
        this.apiLoader['onOk'] = false;
        this.isVisible = false;
        this.getAuthorizationList();
      }, err => {
        this.apiLoader['onOk'] = false;
        console.log(err);
      })
    }
  }

  beforeUpload = (file: NzUploadFile): boolean => {
    console.log(file.name);
    this.file = file.name
    this.uploaded_file = file
    this.updateUPIWithUploadingFile();
    return false;
  };

  updateUPIWithUploadingFile() {
    let data = new FormData();
    data.append('source', 'LMS'),
    data.append('datapoint', 'authorization_upload'),
    data.append('endpoint', 'Upi'),
    data.append('file', this.uploaded_file)
    this.http.uploadMCCFile(data).subscribe((res)=>{
      console.log(res);
      this.getAuthorizationList()
    })
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
    // this.listOfData;
    if(this.apiLoader['list']){return}
    this.apiLoader['list'] = true;
    let data = {
      'source': 'LMS',
      'datapoint':'authorization_get',
      'endpoint':'Upi',
      'keyword': this.searchValue,
      'page': 1,
      'size': 30
    }
    // this.listOfData;
    this.http.getLMSAuthorizationList(data).subscribe((res)=> {
      this.UPIList = res?.data?.results;
      this.total_count = res?.data?.total_count;
      this.apiLoader['list'] = false;
      console.log(this.UPIList, 'this.UPIList');
    }, err => {
      console.log(err);
      this.apiLoader['list'] = false;
    })
  }

}
