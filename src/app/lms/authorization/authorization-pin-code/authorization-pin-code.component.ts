import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { HttpService } from 'src/app/services/http.service';
import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

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
    'list': false,
    'onOk': false,    
  } 

  page = 1;

  total_count: any;
  pinCodeList: any;
  uploaded_file: any;
  file: string;
  isVisible: boolean;
  oldDetail: any;
  updatePINDetails: FormGroup;
  globalPageSize: any = 30;

  constructor(private fb: FormBuilder,public http: HttpService, private message: NzMessageService) { }

  ngOnInit(): void {
    this.createUpdateDetailForm();
    this.getAuthorizationList();
  }

  getResultBasedOnSearch(){
    this.getAuthorizationList();
  }

  resetFilter(){
    this.page = 1;
    this.searchValue = '';
    this.getAuthorizationList();

  }

  createUpdateDetailForm(){
    this.updatePINDetails = this.fb.group({
      source : "LMS",
      datapoint : "authorization_edit",
      endpoint : [null, [Validators.required]], 
      remarks : ["", [Validators.required]],
      pincode :  ["", [Validators.required, Validators.maxLength(6)]]
    })
}

  changeDetail(data){
    this.isVisible= true
    this.oldDetail= data;
    this.updatePINDetails.patchValue({
      endpoint: `Pincodes/${this.oldDetail?.id}` 
    })
  }

  onClickUpdateDetails(){
    this.apiLoader['onOk'] = true;
    for (const i in this.updatePINDetails.controls) {
      this.updatePINDetails.controls[ i ].markAsDirty();
      this.updatePINDetails.controls[ i ].updateValueAndValidity();
      this.apiLoader['onOk'] = false;
    }
    if(this.updatePINDetails.valid){
      this.apiLoader['onOk'] = true;
      const data = this.updatePINDetails.value;
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
    this.updateMCCCodeWithUploadingFile();
    return false;
  };

  updateMCCCodeWithUploadingFile() {
    let data = new FormData();
    data.append('source', 'LMS'),
    data.append('datapoint', 'authorization_upload'),
    data.append('endpoint', 'Pincodes'),
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
    this.http.updateStatusForAuthorization(data).subscribe((res)=> {
      // , private message: NzMessageService
      if(res?.success){
        this.message.success('PIN Code Updated ')
      } else {
        this.message.error('Unable to Updated PIN Code....! ')
      }
      this.getAuthorizationList();
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
    this.apiLoader['list'] = true;
    let data = {
      'source': 'LMS',
      'datapoint':'authorization_get',
      'endpoint':'Pincodes',
      'keyword': this.searchValue,
      'page': this.page,
      'limit': this.globalPageSize
    }
    // this.listOfData;
    this.http.getLMSAuthorizationList(data).subscribe((res)=> {
      this.pinCodeList = res?.data?.results;
      this.total_count = res?.data?.total_count;
      this.apiLoader['list'] = false;
      console.log(this.pinCodeList, 'this.pinCodeList');
    }, err => {
      console.log(err);
      this.apiLoader['list'] = false;
    })
  }

}
