import { HttpService } from "src/app/services/http.service";
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NzUploadFile } from "ng-zorro-antd/upload";
import { NzMessageService } from "ng-zorro-antd/message";
import { saveAs } from "file-saver";
import { error } from "@angular/compiler/src/util";
import { differenceInCalendarDays, setHours } from "date-fns";
import * as moment from "moment";

@Component({
  selector: "app-employee-details",
  templateUrl: "./employee-details.component.html",
  styleUrls: ["./employee-details.component.css"],
})
export class EmployeeDetailsComponent implements OnInit {
  selectedTab: any;
  selectedId: any;
  customRanges = {
    Today: [new Date(), new Date()],
    'Last 7 days': [new Date().setDate(new Date().getDate() - 7), new Date()],
    'This Month': [new Date(new Date().getFullYear(), new Date().getMonth(), 1), new Date()],
    'Last Month': [new Date(new Date().getFullYear(), new Date().getMonth(), 1).setMonth(new Date().getMonth() - 1), new Date(new Date().getFullYear(), new Date().getMonth(), -1,30,31)],
    'Last 3 Months': [new Date(new Date().getFullYear(), new Date().getMonth(), 1).setMonth(new Date().getMonth() - 3), new Date(new Date().getFullYear(), new Date().getMonth(), -1,30,31)],
    'Last 6 Months': [new Date(new Date().getFullYear(), new Date().getMonth(), 1).setMonth(new Date().getMonth() - 6), new Date(new Date().getFullYear(), new Date().getMonth(), -1,30,31)],
    'This Year': [new Date(new Date().getFullYear(), 0, 1), new Date()],
    // 'Last Year': [new Date(new Date().getFullYear(), new Date().getMonth(), 1).setMonth(new Date().getMonth() - 12), new Date(new Date().getFullYear(), new Date().getMonth(), 1)],
    'Last Year': [new Date(new Date().getFullYear() - 1, 0, 1), new Date(new Date().getFullYear() - 1, 11, 31)],
    // d.setMonth(d.getMonth() - 3);
};
  searchValue = "";
  listOfNewJoinees = [
    {
      file_name: "Bajaj Finance Ltd.",
      regDate: "12/4/21",
      time: "12:02 PM",
      pan: "ABCDE1234P",
      added_by: "Rohit",
      contact_no: 9898989898,
    },
    {
      file_name: "Bajaj Finance Ltd.",
      regDate: "12/4/21",
      time: "12:02 PM",
      pan: "ABCDE1234P",
      added_by: "Rohit",
      contact_no: 9898989898,
    },
    {
      file_name: "Bajaj Finance Ltd.",
      regDate: "12/4/21",
      time: "12:02 PM",
      pan: "ABCDE1234P",
      added_by: "Rohit",
      contact_no: 9898989898,
    },
    {
      file_name: "Bajaj Finance Ltd.",
      regDate: "12/4/21",
      time: "12:02 PM",
      pan: "ABCDE1234P",
      added_by: "Rohit",
      contact_no: 9898989898,
    },
    {
      file_name: "Bajaj Finance Ltd.",
      regDate: "12/4/21",
      time: "12:02 PM",
      pan: "ABCDE1234P",
      added_by: "Rohit",
      contact_no: 9898989898,
    },
    {
      file_name: "Bajaj Finance Ltd.",
      regDate: "12/4/21",
      time: "12:02 PM",
      pan: "ABCDE1234P",
      added_by: "Rohit",
      contact_no: 9898989898,
    },
    {
      file_name: "Bajaj Finance Ltd.",
      regDate: "12/4/21",
      time: "12:02 PM",
      pan: "ABCDE1234P",
      added_by: "Rohit",
      contact_no: 9898989898,
    },
    {
      file_name: "Bajaj Finance Ltd.",
      regDate: "12/4/21",
      time: "12:02 PM",
      pan: "ABCDE1234P",
      added_by: "Rohit",
      contact_no: 9898989898,
    },
  ];

  retrievedFileResponseKey: any;

  listOfEmployee = [
    {
      employee_name: "Akhay Tomar",
      emp_id: "EMP-3465",
      email_id: "akshaytomar26@gmail.com",
      mobile_no: 9898989898,
      alternate_mobile_no: 8876887688,
    },
    {
      employee_name: "Akhay Tomar",
      emp_id: "EMP-3465",
      email_id: "akshaytomar26@gmail.com",
      mobile_no: 9898989898,
      alternate_mobile_no: 8876887688,
    },
    {
      employee_name: "Akhay Tomar",
      emp_id: "EMP-3465",
      email_id: "akshaytomar26@gmail.com",
      mobile_no: 9898989898,
      alternate_mobile_no: 8876887688,
    },
    {
      employee_name: "Akhay Tomar",
      emp_id: "EMP-3465",
      email_id: "akshaytomar26@gmail.com",
      mobile_no: 9898989898,
      alternate_mobile_no: 8876887688,
    },
    {
      employee_name: "Akhay Tomar",
      emp_id: "EMP-3465",
      email_id: "akshaytomar26@gmail.com",
      mobile_no: 9898989898,
      alternate_mobile_no: 8876887688,
    },
    {
      employee_name: "Akhay Tomar",
      emp_id: "EMP-3465",
      email_id: "akshaytomar26@gmail.com",
      mobile_no: 9898989898,
      alternate_mobile_no: 8876887688,
    },
    {
      employee_name: "Akhay Tomar",
      emp_id: "EMP-3465",
      email_id: "akshaytomar26@gmail.com",
      mobile_no: 9898989898,
      alternate_mobile_no: 8876887688,
    },
  ];

  apiLoader = {
    list: false,
    previewList: false
  };
  // this.apiLoader['previewList'] = true;
  page = 1;
  size = 30;
  uploadSelectedCorporateFile!: FormGroup;
  retrievedFileResponse: any[] = [];

  total_count = 10;
  UPIList: any;
  corporateList: any = [];
  selectedCorporate: any;
  isVisibleModal = {
    modalIsVisible: false,
    previewIsVisible: false,
    previewButtonLoading: false,
    uploadButtonLoading: false,
    toggleHeaderText: false,
    previewForExitEmployee: false,
    previewForAttandance: false,
    hideUpload : false
  };
  isViewUploadedData = false
  fileName: any;
  hasValidationError: boolean;
  branchName: any;
  today = new Date();
  disabledDate = (current: Date): boolean => {
    return differenceInCalendarDays(current, this.today) > 0;
  };
  date: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private message: NzMessageService,
    private route: ActivatedRoute,
    public http: HttpService
  ) {}

  ngOnInit(): void {
    this.fetchPartnerList();
    this.route.queryParams.subscribe((params) => {
      // if (params['id'] && params['depo']) {
      if (params["id"]) {
        this.selectedId = params["id"];
      }
      if (params["targetCategory"]) {
        this.selectedTab = params["targetCategory"];
      } else {
        this.selectedTab = "corporate";
      }
    });
    this.createUploadFileForm();
    // this.getNewJoineeList();
    if(this.selectedTab == 'recommendation' || this.selectedTab == 'allEmployee'){
      this.getListOfAllEmployees();
    } else {
      this.getEmployeeDetailWithEmployeeTypeAndCorporateId();
    }
    this.fetchListOfSection();
  }

  sectionList: any;
  selectedSection: any;
  fetchListOfSection(){
    this.http.getListOfSection().subscribe((res: any)=>{
      this.sectionList = res?.data
      console.log(this.sectionList);
    }, error=>{
      console.log(error);
    })
  }

  createUploadFileForm(data?) {
    this.uploadSelectedCorporateFile = this.fb.group({
      file: [null, [Validators.required]],
      partner: [null, [Validators.required]],
      branch: [null, [Validators.required]],
      remarks: [null, [Validators.required]],
      branch_name: [{ value: null, disabled: true }, [Validators.required]],
      section: [
        this.selectedTab ? this.selectedTab : null,
        [Validators.required],
      ],
    });
  }

  onClickChangeTab(e) {
    this.page = 1;
    this.size = 30;
    this.viewPageCount = 1;
    this.viewPageSize = 30;
    this.selectedTab = e;
    this.listOfEmployee = [];
    this.searchValue = ''
    if(this.selectedTab == 'recommendation' || this.selectedTab == 'allEmployee'){
      this.getListOfAllEmployees();
    } else {
      this.getEmployeeDetailWithEmployeeTypeAndCorporateId();
    }
    this.router.navigate(["/employeeDetail"], {
      queryParams: { id: this.selectedId, targetCategory: this.selectedTab },
    });
  }

  getResultBasedOnSearch() {
    if(this.selectedTab === 'recommendation' ||
    this.selectedTab === 'allEmployee'){
      this.page = 1;
      this.getListOfAllEmployees();
    } else {
      this.page = 1;
      this.getEmployeeDetailWithEmployeeTypeAndCorporateId();
    }
  }

  resetFilter() {
    // if (this.searchValue || this.selectedCorporate) {
      this.page = 1;
      this.searchValue = "";
      this.selectedSection = null;
      this.selectedCorporate = null;
      if(this.selectedTab == 'recommendation' || this.selectedTab == 'allEmployee'){
      this.getListOfAllEmployees();  
      } else {
        this.getEmployeeDetailWithEmployeeTypeAndCorporateId();
      }
      // this.getListOfAllEmployees();
    // }
    // this.getAuthorizationList();
  }

  debounce: any;

  
  OnTypeSearchList(event){
    clearTimeout(this.debounce);
    this.debounce = setTimeout(() => {
      this.fetchPartnerList(event);
    }, 500);
  }

  fetchPartnerList(e?) {
    let data = {
      // page: 1,
      // size: 30,
      // partner_nature: "Partner",
      // status: "all",
    };
    if(e){
      data['name'] = e;
    }
    this.http.fetchPartner(data).subscribe((res: any) => {
      if (res?.success) {
        this.corporateList = [];
        res?.data?.results.map((res: any)=>{
          if(res?.name){
            this.corporateList.push(res)    
          }
        })
        // this.corporateList = res?.data?.results;
        console.log(this.corporateList);
      }
    });
    // }
  }

  getResultWithSelectedFilter(e) {
    // if (e && e != "All") {
    //   this.getEmployeeDetailWithEmployeeTypeAndCorporateId();
    // } else {
      if(e){
      if(this.selectedTab == 'allEmployee' || this.selectedTab == 'recommendation'){
        this.getListOfAllEmployees();
      } else {
        this.getEmployeeDetailWithEmployeeTypeAndCorporateId();
      }
    } else {
      if(this.selectedTab == 'allEmployee' || this.selectedTab == 'recommendation'){
        this.selectedCorporate = null;
        this.getListOfAllEmployees();
      } else {
        this.selectedCorporate = null;
        this.getEmployeeDetailWithEmployeeTypeAndCorporateId();
      }
    }
    // }
  }

  isViewLoader={
    'isVisible': false,
    'viewContent': null,
    'keyContent': null,
  }
  viewTotalCount: any;
  viewPageCount = 1;
  viewPageSize = 30
  selectedIdForView: any

  pageIndexChange(e){
    // alert(e);
    this.viewPageCount = e;
    this.onClickGetUploadedDocDetail(this.selectedIdForView, 'view');
  }

  ngModelChange(e, data, action?){
    if(action == 'mark'){
      let body = {
        "section":this.selectedAction,
        "employee":data?.id
      }
      this.http.markEmployeeDetailsAsVerify(body).subscribe((res: any)=>{
        console.log(res);
        if(res?.success){
          this.message.success(res?.message);
          this.getListOfAllEmployees();
        } else {
          this.message.error(res?.message);
        }
      })
    } else {
      let body;
      this.http.verifyUploadedFile(data?.id, body).subscribe((res: any)=>{
        console.log(res);
        if(res?.success){
          this.message.success(res?.message);
        } else {
          this.message.error(res?.message);
        }
      })
    }
    console.log(data);
  }


  onClickGetUploadedDocDetail(id, action, e?) {
    if (action === "view") {
      if(this.isViewLoader['isVisible']){return;}
      this.isViewUploadedData = true;
      if(e){
        this.viewPageCount = e?.pageIndex
        this.viewPageSize = e?.pageSize
      } 
      // else {
      //   this.viewPageCount = 1;
      //   this.viewPageSize = 10  ;
      // }
      let data = {
        'page': this.viewPageCount,
        'limit': this.viewPageSize
      }
          // alert(this.viewTotalCount + ' <= BS Total Count ');
          // alert(this.viewPageSize + ' <= BS Page Size ');
          // alert(this.viewPageCount + ' <= BS Page Page Count ');
      this.isViewLoader['isVisible'] = true;
      const url = this.selectedTab == 'corporate' ? this.http.getDetailsOfUploadedFile(this.selectedIdForView,data) : this.http.viewSavedFileContent(this.selectedIdForView,data);
      url.subscribe(
        (res: any) => {
          this.viewTotalCount = res?.data?.total_count;
          this.isViewLoader['viewContent'] = this.selectedTab == 'corporate' ?  res?.data?.results : res?.data?.data;
          // this.isViewLoader['viewContent'] = res?.data?.results;
          this.isViewLoader['keyContent'] = res?.data;
          this.isViewLoader['isVisible'] = false;
          // alert(this.viewTotalCount + ' <= AS Total Count ');
          // alert(this.viewPageSize + ' <= AS Page Size ');
          // alert(this.viewPageCount + ' <= AS Page Page Count ');
          // viewPageSize
        },
        (err) => {
          this.isViewLoader['isVisible'] = false;
        }
      );
    } else {
      const generateloader = this.message.loading('Generating Report..', { nzDuration: 0 }).messageId; 
      // downloadUploadedUserDetailFile
      // const url = this.selected
      const url = this.selectedTab == 'corporate' ? this.http.downloadUploadedUserDetailFile(id) : this.http.downloadEmployeeUserDetail(id)
      url.subscribe(
        (res: any) => {
        if (res.size > 41) {
          this.downloadFile(res);
          this.message.remove(generateloader);
        } else {
          this.message.remove(generateloader);
          this.message.error("No File to download");
        }
        },
        error => {
          this.message.remove(generateloader);
          console.log(error);
        });
    }
  }

  returnZero(){
    return 0;
  }

  returnPixel(axes, columns){
    if(columns?.length < 4){
      return null;
    } 
    const columns_count =  columns?.length;
    console.log(columns?.length);
    const pixel =  columns_count * 150
    return  pixel.toString() + 'px'
  }


  onChange(e){
    console.log(e);

    if(e){
      if(this.selectedTab == 'recommendation' || this.selectedTab == 'allEmployee'){
        this.getListOfAllEmployees();
      } else {
        this.getEmployeeDetailWithEmployeeTypeAndCorporateId();
      }
    } else {
      this.date = e;
      if(this.selectedTab == 'recommendation' || this.selectedTab == 'allEmployee'){
        this.getListOfAllEmployees();
      } else {
        this.getEmployeeDetailWithEmployeeTypeAndCorporateId();
      }
      // this.getEmployeeDetailWithEmployeeTypeAndCorporateId();
    }
  }

  downloadFile(data){
    saveAs(data, "EMPLOYEE_DETAIL.xlsx");
  }

  selectedAction  = 'recommendation';
  getListOfAllEmployees(event?){
    if (this.apiLoader["list"]) {
      return;
    }
    this.listOfEmployee = [];
    if (event) {
      this.page = event?.pageIndex;
      this.size = event?.pageSize;
    }
    let data = {
      keyword: this.searchValue ? this.searchValue : "",
      page: this.page,
      limit: this.size,
    };
    if(this.selectedTab == 'recommendation'){
      data['action'] =  this.selectedAction;
    }
    if(this.date){
      data["from_date"] = moment(this.date[0]).format("YYYY-MM-DD");
      data["to_date"] = moment(this.date[1]).format("YYYY-MM-DD");
    } 
    if (this.selectedCorporate) {
      data["corporate"] = this.selectedCorporate;
    }
    this.apiLoader["list"] = true;
    const url = this.http.getListOfEmployeeBasedOnParameter(data);
    url.subscribe(
      (res?: any) => {
        this.total_count = res?.data?.total_count;
        this.listOfEmployee = res?.data?.results;
        this.apiLoader["list"] = false;
      },
      (err) => {
        console.log(err);
        this.apiLoader["list"] = false;
      }
    );
    
  }

  getEmployeeDetailWithEmployeeTypeAndCorporateId(event?) {
    if (this.apiLoader["list"]) {
      return;
    }
    this.listOfEmployee = [];
    if (event) {
      this.page = event?.pageIndex;
      this.size = event?.pageSize;
    }
    let data = {
      section: this.selectedTab,
      keyword: this.searchValue ? this.searchValue : "",
      page: this.page,
      limit: this.size,
    };
    if(this.date){
      data["from_date"] = moment(this.date[0]).format("YYYY-MM-DD");
      data["to_date"] = moment(this.date[1]).format("YYYY-MM-DD");
    } 
    if (this.selectedCorporate) {
      data["partner"] = this.selectedCorporate;
    }
    

    if (this.selectedTab === "corporate" ) {
      delete data["section"];
      if(this.selectedSection){
        data["section"] = this.selectedSection;
      }
    }
    this.apiLoader["list"] = true;
    const url = this.selectedTab !== 'corporate' ? this.http.getEmployeeDetailWithEmployeeTypeAndCorporateId(data) : this.http.getUserEmployeeDetails(data)
    url.subscribe(
      (res?: any) => {
        this.total_count = res?.data?.total_count;
        this.listOfEmployee = res?.data?.results;
        this.apiLoader["list"] = false;
      },
      (err) => {
        console.log(err);
        this.apiLoader["list"] = false;
      }
    );
  }

  onClickUploadSelectedFileOfCurrentSection() {
    // if(this.selectedTab == 'Employee Database' || this.selectedTab == 'New Joinees'){
      // this.http.sampleDownloadGlobalFunction('Employee_Details_Sample_File')
      this.isVisibleModal["modalIsVisible"] = true;
      this.isVisibleModal["hideUpload"] = false;
    // } else if (this.selectedTab == 'Exit Employee'){
    //   this.http.sampleDownloadGlobalFunction('Exit_Employee')
    // } else if (this.selectedTab == 'Attendance'){
    //   this.http.sampleDownloadGlobalFunction('Attendance_Data')
    // }
  }

  sampleDownload(){
    if(this.selectedTab == 'Employee Database' || this.selectedTab == 'New Joinees' ||this.selectedTab == 'Notice Period' ){
      this.http.sampleDownloadGlobalFunction('Employee_Details_Sample_File')
    } else if (this.selectedTab == 'Exit Employee'){
      this.http.sampleDownloadGlobalFunction('Exit_Employee')
    } else if (this.selectedTab == 'Attendance'){
      this.http.sampleDownloadGlobalFunction('Attendance_Data')
    }
  }

  handleCancel() {
    //this.uploadSelectedCorporateFile.reset();
    this.uploadSelectedCorporateFile.controls["partner"].reset();
    this.uploadSelectedCorporateFile.controls["file"].reset();
    this.fileName = null;
    this.isVisibleModal["toggleHeaderText"] = false;
    this.isVisibleModal["previewIsVisible"] = false;
    this.isVisibleModal["previewForAttandance"] = false;
    this.isVisibleModal["previewForExitEmployee"] = false;
    this.isVisibleModal["modalIsVisible"] = false;
    this.isVisibleModal['hideUpload'] = false;
  }

  

  onUpload(e) {
    console.log(e?.file?.originFileObj);
    // let file = this.uploadSelectedCorporateFile.get('file');
    this.uploadSelectedCorporateFile.patchValue({
      file: e?.file?.originFileObj,
    });
    // let value = this.addEditProductForm.get('document_data') as FormArray;
    // value.controls?.[i].patchValue({documents: e?.file?.originFileObj});
  }

  customUpload = (file: NzUploadFile): boolean => {
    const data = [];
    return false;
  };

  overallFileStatus = true;
  totalErrorCount: any;
  handleOk() {
    this.uploadSelectedCorporateFile.patchValue({
      section: this.selectedTab,
    });
    const file = this.uploadSelectedCorporateFile.get("file");
    // console.log(file?.value.name)
    this.fileName = file?.value?.name;
    if (this.uploadSelectedCorporateFile.valid) {
      this.apiLoader['previewList'] = true;
      this.retrievedFileResponse = null;
      this.retrievedFileResponseKey = null;
      this.isVisibleModal["hideUpload"] = true;
      this.isVisibleModal["previewButtonLoading"] = true;
      if(this.selectedTab == 'New Joinees' || this.selectedTab == 'Employee Database'  || this.selectedTab == 'Notice Period'){
        this.isVisibleModal["previewIsVisible"] = true;
        this.isVisibleModal['previewForAttandance'] = false;
        this.isVisibleModal['previewForExitEmployee'] = false;
      } else if(this.selectedTab == 'Attendance'){
        this.isVisibleModal['previewForAttandance'] = true;
        this.isVisibleModal["previewIsVisible"] = false;
        this.isVisibleModal['previewForExitEmployee'] = false;
      } else if(this.selectedTab == 'Exit Employee'){
        this.isVisibleModal['previewForExitEmployee'] = true;
        this.isVisibleModal['previewForAttandance'] = false;
        this.isVisibleModal["previewIsVisible"] = false;
      }
        console.log(this.uploadSelectedCorporateFile.value);
        let data = new FormData();
        let sendDate = this.uploadSelectedCorporateFile.value;
        for (var i in sendDate) {
          data.append(i, sendDate[i]);
        }
        this.http.viewFileBeforeSaving(data).subscribe((res: any) => {
          if (res?.success) {
            this.apiLoader['previewList'] = false;
            this.totalErrorCount = res?.data?.data?.total_errors
            this.overallFileStatus = res?.data?.overall_status;
            this.retrievedFileResponse = res?.data?.data?.data;
            this.retrievedFileResponseKey = res?.data?.data?.keys;
            this.isVisibleModal["toggleHeaderText"] = true;
            this.isVisibleModal["previewButtonLoading"] = false;
            // this.isVisibleModal["previewIsVisible"] = true;
          } else {
            this.apiLoader['previewList'] = false;
            this.isVisibleModal["previewButtonLoading"] = false;
            this.isVisibleModal["previewIsVisible"] = false;
            this.isVisibleModal["toggleHeaderText"] = false;
            this.isVisibleModal['previewForAttandance'] = false;
            this.isVisibleModal['previewForExitEmployee'] = false;
          }
          console.log(res?.data);
        });
    } else {
      for (const i in this.uploadSelectedCorporateFile.controls) {
        this.uploadSelectedCorporateFile.controls[i].markAsDirty();
        this.uploadSelectedCorporateFile.controls[i].updateValueAndValidity();
      }
    }
  }

  onClickSelectFireBranchAPI(e) {
    this.uploadSelectedCorporateFile.patchValue({
      section: this.selectedTab,
    });
    if (e) {
      this.http.fetchBranchOfChoosenCorporate(e).subscribe((res: any) => {
        console.log(res?.data);
        if (res?.success) {
          this.message.success(res?.message);
          this.branchName = res?.data?.branch_name;
          this.uploadSelectedCorporateFile.patchValue({
            branch: res?.data[0]?.id,
            branch_name: res?.data[0]?.branch_name,
          });
          console.log(this.uploadSelectedCorporateFile.value);
        } else {
          this.message.error(res?.message);
        }
      });
    }
  }

  isFail = false;
  onClickUploadFile() {
    if(!this.overallFileStatus){
      this.isFail = true;
      this.isVisibleModal["toggleHeaderText"] = false;
      this.isVisibleModal["uploadButtonLoading"] = false;
      this.isVisibleModal["previewIsVisible"] = false;
      this.isVisibleModal["previewForAttandance"] = false;
      this.isVisibleModal["previewForExitEmployee"] = false;
      this.isVisibleModal["hideUpload"] = false;
      this.isVisibleModal["modalIsVisible"] = false;
      this.uploadSelectedCorporateFile.controls["partner"].reset();
      this.uploadSelectedCorporateFile.controls["remarks"].reset();
      this.uploadSelectedCorporateFile.controls["branch"].reset();
      this.uploadSelectedCorporateFile.controls["file"].reset();
      this.fileName = null;
      return;
    }
    if (this.uploadSelectedCorporateFile.valid) {
      this.isVisibleModal["uploadButtonLoading"] = true;
      let data = new FormData();
      let sendDate = this.uploadSelectedCorporateFile.value;
      for (var i in sendDate) {
        data.append(i, sendDate[i]);
      }
      // let data = this.uploadSelectedCorporateFile.value
      this.http.uploadUserEmployeePreviewedFile(data).subscribe((res: any) => {
        if (res.success) {
          this.uploadSelectedCorporateFile.reset();
          this.isVisibleModal["toggleHeaderText"] = false;
          this.isVisibleModal["uploadButtonLoading"] = false;
          this.isVisibleModal["previewIsVisible"] = false;
          this.isVisibleModal["modalIsVisible"] = false;
          this.isVisibleModal["previewForAttandance"] = false;
          this.isVisibleModal["previewForExitEmployee"] = false;
          this.isVisibleModal["hideUpload"] = false;
          this.message.success("File Uploaded");
          this.getEmployeeDetailWithEmployeeTypeAndCorporateId();
        } else {
          this.isVisibleModal["toggleHeaderText"] = false;
          this.isVisibleModal["previewIsVisible"] = false;
          this.isVisibleModal["previewForAttandance"] = false;
          this.isVisibleModal["previewForExitEmployee"] = false;
          this.isVisibleModal["hideUpload"] = false;
          this.isVisibleModal["uploadButtonLoading"] = false;
          this.message.error("Unable to File Uploaded");
        }
      });
    } else {
      for (const i in this.uploadSelectedCorporateFile.controls) {
        this.uploadSelectedCorporateFile.controls[i].markAsDirty();
        this.uploadSelectedCorporateFile.controls[i].updateValueAndValidity();
      }
      this.isVisibleModal["previewIsVisible"] = false;
    }
  }
}
