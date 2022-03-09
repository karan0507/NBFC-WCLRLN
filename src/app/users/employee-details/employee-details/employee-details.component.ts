import { HttpService } from 'src/app/services/http.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  selectedTab: any;
  selectedId: any;
  searchValue = '';
  listOfNewJoinees = [
    {
      file_name: 'Bajaj Finance Ltd.',
      regDate: '12/4/21',
      time:'12:02 PM',
      pan: 'ABCDE1234P',
      added_by: 'Rohit',
      contact_no: 9898989898,
    },
    {
      file_name: 'Bajaj Finance Ltd.',
      regDate: '12/4/21',
      time:'12:02 PM',
      pan: 'ABCDE1234P',
      added_by: 'Rohit',
      contact_no: 9898989898,
    },
    {
      file_name: 'Bajaj Finance Ltd.',
      regDate: '12/4/21',
      time:'12:02 PM',
      pan: 'ABCDE1234P',
      added_by: 'Rohit',
      contact_no: 9898989898,
    },
    {
      file_name: 'Bajaj Finance Ltd.',
      regDate: '12/4/21',
      time:'12:02 PM',
      pan: 'ABCDE1234P',
      added_by: 'Rohit',
      contact_no: 9898989898,
    },
    {
      file_name: 'Bajaj Finance Ltd.',
      regDate: '12/4/21',
      time:'12:02 PM',
      pan: 'ABCDE1234P',
      added_by: 'Rohit',
      contact_no: 9898989898,
    },
    {
      file_name: 'Bajaj Finance Ltd.',
      regDate: '12/4/21',
      time:'12:02 PM',
      pan: 'ABCDE1234P',
      added_by: 'Rohit',
      contact_no: 9898989898,
    },
    {
      file_name: 'Bajaj Finance Ltd.',
      regDate: '12/4/21',
      time:'12:02 PM',
      pan: 'ABCDE1234P',
      added_by: 'Rohit',
      contact_no: 9898989898,
    },
    {
      file_name: 'Bajaj Finance Ltd.',
      regDate: '12/4/21',
      time:'12:02 PM',
      pan: 'ABCDE1234P',
      added_by: 'Rohit',
      contact_no: 9898989898,
    },
  ];

  retrievedFileResponseKey: any;

  

  listOfEmployee = [
    {
      employee_name: 'Akhay Tomar',
      emp_id: 'EMP-3465',
      email_id:'akshaytomar26@gmail.com',
      mobile_no: 9898989898,
      alternate_mobile_no: 8876887688,
    },
    {
      employee_name: 'Akhay Tomar',
      emp_id: 'EMP-3465',
      email_id:'akshaytomar26@gmail.com',
      mobile_no: 9898989898,
      alternate_mobile_no: 8876887688,
    },
    {
      employee_name: 'Akhay Tomar',
      emp_id: 'EMP-3465',
      email_id:'akshaytomar26@gmail.com',
      mobile_no: 9898989898,
      alternate_mobile_no: 8876887688,
    },
    {
      employee_name: 'Akhay Tomar',
      emp_id: 'EMP-3465',
      email_id:'akshaytomar26@gmail.com',
      mobile_no: 9898989898,
      alternate_mobile_no: 8876887688,
    },
    {
      employee_name: 'Akhay Tomar',
      emp_id: 'EMP-3465',
      email_id:'akshaytomar26@gmail.com',
      mobile_no: 9898989898,
      alternate_mobile_no: 8876887688,
    },
    {
      employee_name: 'Akhay Tomar',
      emp_id: 'EMP-3465',
      email_id:'akshaytomar26@gmail.com',
      mobile_no: 9898989898,
      alternate_mobile_no: 8876887688,
    },
    {
      employee_name: 'Akhay Tomar',
      emp_id: 'EMP-3465',
      email_id:'akshaytomar26@gmail.com',
      mobile_no: 9898989898,
      alternate_mobile_no: 8876887688,
    },
  ];

  apiLoader = {
    'list': false,
  }
  page = 1;
  size = 30;
  uploadSelectedCorporateFile!: FormGroup;
  retrievedFileResponse: any[] = []

  total_count = 10;
  UPIList: any;
  corporateList: any;
  selectedCorporate: any;
  isVisibleModal = {
    'modalIsVisible': false,
    'previewIsVisible': false,
    'previewButtonLoading': false,
    'uploadButtonLoading': false,
    'toggleHeaderText': false,
  };
  fileName: any;
  hasValidationError: boolean;
  constructor(private fb: FormBuilder,private router: Router, private message: NzMessageService, 
    private route: ActivatedRoute, private http: HttpService) { }

  ngOnInit(): void {
    this.fetchPartnerList();
    this.route.queryParams.subscribe(params => {
      // if (params['id'] && params['depo']) {
        if(params['id']){
          this.selectedId = params['id'];
        }
        if(params['targetCategory']){
          this.selectedTab = params['targetCategory'];
        }else {
          this.selectedTab = 'Employee Database';
        }
    }) 
    this.createUploadFileForm();
    // this.getNewJoineeList();

    this.getEmployeeDetailWithEmployeeTypeAndCorporateId();
  }

  createUploadFileForm(data?) {
    this.uploadSelectedCorporateFile = this.fb.group({
      file: [null, [Validators.required]], 
      partner:[null, [Validators.required]], 
      section:[this.selectedTab ? this.selectedTab : null, [Validators.required]], 
    })
  }

  onClickChangeTab(e){
    this.selectedTab = e;
    this.getEmployeeDetailWithEmployeeTypeAndCorporateId();
    this.router.navigate(['/employeeDetail'], { queryParams: { id: this.selectedId, targetCategory: this.selectedTab } });
  }

  getResultBasedOnSearch(){
    this.page = 1;
    this.getEmployeeDetailWithEmployeeTypeAndCorporateId();
  }

  resetFilter(){
    if(this.searchValue || this.selectedCorporate){
      this.page =1;
      this.searchValue =''
      this.selectedCorporate = null;
      this.getEmployeeDetailWithEmployeeTypeAndCorporateId();
    }
    // this.getAuthorizationList();
  }

  fetchPartnerList(){
    let data = {
      'page': this.page,
      'partner_nature': 'Partner',
      'status': 'all'
    }
    this.http.getPartnerList(data).subscribe((res: any)=> {
      console.log('res ', res)
      this.corporateList = res?.data?.results;
    })
  }

  getResultWithSelectedFilter(e){
    console.log(e)
    if(e && e != 'All'){
    this.getEmployeeDetailWithEmployeeTypeAndCorporateId();
    }
  }

  getEmployeeDetailWithEmployeeTypeAndCorporateId(event?){
    if(this.apiLoader['list']){return;}
    this.listOfEmployee = [];
    if (event) {
      this.page = event?.pageIndex;
      this.size = event?.pageSize
    } 
    let data = {
      'section': this.selectedTab,
      'keyword':this.searchValue ? this.searchValue : '',
      'page': this.page,
      'limit': this.size,
    };
    if(this.selectedCorporate){
      data['partner'] = this.selectedCorporate
    } 
    if (event) {
      this.page = event?.pageIndex;
      this.size = event?.pageSize
    } 
    
    if(this.selectedTab === 'Employee Database'){
      delete data['section'];
    }
    this.apiLoader['list'] = true;
    this.http.getEmployeeDetailWithEmployeeTypeAndCorporateId(data).subscribe((res?: any)=> {
      this.total_count = res?.total_count;
      this.listOfEmployee = res?.data?.results
      this.apiLoader['list'] = false;
    }, err => {
      console.log(err);
      this.apiLoader['list'] = false;
    })
  }

  onClickUploadSelectedFileOfCurrentSection(){
    this.isVisibleModal['modalIsVisible'] = true;
  }

  handleCancel(){
    // this.uploadSelectedCorporateFile.reset();
    this.uploadSelectedCorporateFile.controls['partner'].reset()
    this.uploadSelectedCorporateFile.controls['file'].reset()
    this.fileName = null
    this.isVisibleModal['toggleHeaderText'] = false;
    this.isVisibleModal['previewIsVisible'] = false
    this.isVisibleModal['modalIsVisible'] = false;
    
    
  }  

  onUpload(e){
    console.log(e?.file?.originFileObj)
    // let file = this.uploadSelectedCorporateFile.get('file');
    this.uploadSelectedCorporateFile.patchValue({file: e?.file?.originFileObj});
    // let value = this.addEditProductForm.get('document_data') as FormArray;
    // value.controls?.[i].patchValue({documents: e?.file?.originFileObj});
  }

  customUpload = (file: NzUploadFile): boolean => {
    const data = []
    return false;
  };

  handleOk(){
    console.log(this.uploadSelectedCorporateFile.value);
    this.uploadSelectedCorporateFile.patchValue({
      'section': this.selectedTab
    })
    const file  =  this.uploadSelectedCorporateFile.get('file')
    // console.log(file?.value.name)
    this.fileName = file?.value?.name 
    console.log()
    if(this.uploadSelectedCorporateFile.valid){
      this.isVisibleModal['previewButtonLoading'] = true;
      console.log(this.uploadSelectedCorporateFile.value);
      let data = new FormData;
      let sendDate = this.uploadSelectedCorporateFile.value
      for (var i in sendDate) {
          data.append(i, sendDate[i])
      }
      this.http.viewFileBeforeSaving(data).subscribe((res: any)=>{
        if(res?.success){
          this.retrievedFileResponse = res?.data
          this.retrievedFileResponseKey = res?.data?.keys
          this.isVisibleModal['toggleHeaderText'] = true;
          this.isVisibleModal['previewButtonLoading'] = false;
          this.isVisibleModal['previewIsVisible'] = true
        } else{
          this.isVisibleModal['previewButtonLoading'] = false;
          this.isVisibleModal['previewIsVisible'] = false;
          this.isVisibleModal['toggleHeaderText'] = false;
        }
        console.log(res?.data)
      })
    } else {
      for (const i in this.uploadSelectedCorporateFile.controls) {
        this.uploadSelectedCorporateFile.controls[ i ].markAsDirty();
        this.uploadSelectedCorporateFile.controls[ i ].updateValueAndValidity();
      }
    }
    
  }

  onClickUploadFile(){
    if(this.uploadSelectedCorporateFile.valid){
      this.isVisibleModal['uploadButtonLoading'] = true;
      let data = new FormData;
      let sendDate = this.uploadSelectedCorporateFile.value
      for (var i in sendDate) {
          data.append(i, sendDate[i])
      }
      // let data = this.uploadSelectedCorporateFile.value
      this.http.uploadUserEmployeePreviewedFile(data).subscribe((res: any)=> {
        if(res.success){
          this.uploadSelectedCorporateFile.reset();
          this.isVisibleModal['toggleHeaderText'] = false;
          this.isVisibleModal['uploadButtonLoading'] = false;
          this.isVisibleModal['previewIsVisible'] = false
          this.isVisibleModal['modalIsVisible'] = false;
          this.message.success('File Uploaded')
      } else {
        this.isVisibleModal['toggleHeaderText'] = false;
        this.isVisibleModal['previewIsVisible'] = false
        this.isVisibleModal['uploadButtonLoading'] = false;
        this.message.error('Unable to File Uploaded');
      }
      })
    } else {
      for (const i in this.uploadSelectedCorporateFile.controls) {
        this.uploadSelectedCorporateFile.controls[ i ].markAsDirty();
        this.uploadSelectedCorporateFile.controls[ i ].updateValueAndValidity();
      }
      this.isVisibleModal['previewIsVisible'] = false
    }
    
  }
}
