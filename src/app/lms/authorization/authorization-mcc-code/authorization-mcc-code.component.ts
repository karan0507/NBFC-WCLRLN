import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { HttpService } from 'src/app/services/http.service';
import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-authorization-mcc-code',
  templateUrl: './authorization-mcc-code.component.html',
  styleUrls: ['./authorization-mcc-code.component.css']
})
export class AuthorizationMccCodeComponent implements OnInit {
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
    'onOk': false
  }
  page = 1;

  total_count: any;
  UPIList: any;
  uploaded_file: any;
  file: string;
  isVisible: boolean;
  oldDetail: any;
  updateMCCDetails: FormGroup;

  constructor(private fb: FormBuilder,public http: HttpService, private message: NzMessageService) { }

  ngOnInit(): void {
    this.createUpdateDetailForm();
    this.getAuthorizationList();
  }

  getResultBasedOnSearch(){
    this.page =1;
    this.getAuthorizationList();
  }

  resetFilter(){
    this.page =1;
    this.searchValue = '';
    this.getAuthorizationList();
  }

  createUpdateDetailForm(){
      this.updateMCCDetails = this.fb.group({
        source : "LMS",
        datapoint : "authorization_edit",
        endpoint : [null, [Validators.required]], 
        // `Mcccodes/${this.oldDetail?.id}` ,
        remarks : ["", [Validators.required]],
        code :  ["", [Validators.required]]
      })
  }

  onClickUpdateDetails(){
    this.apiLoader['onOk'] = true;
    for (const i in this.updateMCCDetails.controls) {
      this.updateMCCDetails.controls[ i ].markAsDirty();
      this.updateMCCDetails.controls[ i ].updateValueAndValidity();
      this.apiLoader['onOk'] = false;
    }
    if(this.updateMCCDetails.valid){
      this.apiLoader['onOk'] = true;
      const data = this.updateMCCDetails.value;
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

  changeDetail(data){
    this.isVisible= true
    this.oldDetail= data;
    this.updateMCCDetails.patchValue({
      endpoint: `Mcccodes/${this.oldDetail?.id}` 
    })
    console.log(data);
  }

  beforeUpload = (file: NzUploadFile): boolean => {
    console.log(file.name);
    this.file = file.name
    this.uploaded_file = file
    this.updateMCCCodeWithUploadingFile();
    return false;
  };

  updateMCCCodeWithUploadingFile(){
    let data = new FormData();
    data.append('source', 'LMS'),
    data.append('datapoint', 'authorization_upload'),
    data.append('endpoint', 'Mcccodes'),
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
        "endpoint" : `Mcccodes/${id}` ,
        "status" : false
      } 

    } else if (action == 'active'){
      data = {
        "source" : "LMS",
        "datapoint" : "authorization_edit",
        "endpoint" : `Mcccodes/${id}` ,
        "status" : true
      } 
    }
    this.http.updateStatusForAuthorization(data).subscribe((res)=> {
      // , private message: NzMessageService
      if(res?.success){
        this.message.success('MCC Code Updated ')
      } else {
        this.message.error('Unable to Updated MCC Code....! ')
      }
      this.getAuthorizationList();
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
      'endpoint':'Mcccodes',
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
