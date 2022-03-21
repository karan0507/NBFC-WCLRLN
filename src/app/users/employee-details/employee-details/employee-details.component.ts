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
  };
  page = 1;
  size = 30;
  uploadSelectedCorporateFile!: FormGroup;
  retrievedFileResponse: any[] = [];

  total_count = 10;
  UPIList: any;
  corporateList: any;
  selectedCorporate: any;
  isVisibleModal = {
    modalIsVisible: false,
    previewIsVisible: false,
    previewButtonLoading: false,
    uploadButtonLoading: false,
    toggleHeaderText: false,
  };
  isViewUploadedData = false
  fileName: any;
  hasValidationError: boolean;
  branchName: any;
  today = new Date();
  disabledDate = (current: Date): boolean => {
    return differenceInCalendarDays(current, this.today) > 0;
  };
  date: any = [new Date(new Date().getFullYear(), new Date().getMonth(), 1), new Date()];

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
        this.selectedTab = "Employee Database";
      }
    });
    this.createUploadFileForm();
    // this.getNewJoineeList();

    this.getEmployeeDetailWithEmployeeTypeAndCorporateId();
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
    this.selectedTab = e;
    this.getEmployeeDetailWithEmployeeTypeAndCorporateId();
    this.router.navigate(["/employeeDetail"], {
      queryParams: { id: this.selectedId, targetCategory: this.selectedTab },
    });
  }

  getResultBasedOnSearch() {
    this.page = 1;
    this.getEmployeeDetailWithEmployeeTypeAndCorporateId();
  }

  resetFilter() {
    if (this.searchValue || this.selectedCorporate) {
      this.page = 1;
      this.searchValue = "";
      this.selectedCorporate = null;
      this.getEmployeeDetailWithEmployeeTypeAndCorporateId();
    }
    // this.getAuthorizationList();
  }

  fetchPartnerList() {
    let data = {
      page: this.page,
      partner_nature: "Partner",
      status: "all",
    };
    this.http.fetchPartner().subscribe((res: any) => {
      if (res?.success) {
        this.corporateList = res?.data?.results;
      }
    });
    // }
  }

  getResultWithSelectedFilter(e) {
    if (e && e != "All") {
      this.getEmployeeDetailWithEmployeeTypeAndCorporateId();
    } else {
      this.selectedCorporate = null;
      this.getEmployeeDetailWithEmployeeTypeAndCorporateId();
    }
  }

  isViewLoader={
    'isVisible': false,
    'viewContent': null
  }
  onClickGetUploadedDocDetail(id, action) {
    if (action === "view") {
      this.isViewLoader['isVisible'] = true;
      this.isViewUploadedData = true;
      this.http.viewSavedFileContent(id).subscribe(
        (res: any) => {
          this.isViewLoader['isVisible'] = false;
          this.isViewLoader['viewContent'] = res?.data;
        },
        (err) => {
          this.isViewLoader['isVisible'] = false;
        }
      );
    } else {
      const generateloader = this.message.loading('Generating Report..', { nzDuration: 0 }).messageId; 
      this.http.downloadEmployeeUserDetail(id).subscribe(
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


  onChange(e){
    this.getEmployeeDetailWithEmployeeTypeAndCorporateId();
    console.log(e);
  }

  downloadFile(data){
    saveAs(data, "USEr_EMPLOYEE_DETAIL.xlsx");
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
      from_date: moment(this.date[0]).format("YYYY-MM-DD"),
      to_date: moment(this.date[1]).format("YYYY-MM-DD"),
    };
    // data.append(
      //   "start_date",moment(this.dateRange[0]).format("YYYY-MM-DD"));
      // data.append("end_date",moment(this.dateRange[1]).format("YYYY-MM-DD"));
    if (this.selectedCorporate) {
      data["partner"] = this.selectedCorporate;
    }
    if (event) {
      this.page = event?.pageIndex;
      this.size = event?.pageSize;
    }

    if (this.selectedTab === "Employee Database") {
      delete data["section"];
    }
    this.apiLoader["list"] = true;
    this.http.getEmployeeDetailWithEmployeeTypeAndCorporateId(data).subscribe(
      (res?: any) => {
        this.total_count = res?.total_count;
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
    this.isVisibleModal["modalIsVisible"] = true;
  }

  handleCancel() {
    // this.uploadSelectedCorporateFile.reset();
    this.uploadSelectedCorporateFile.controls["partner"].reset();
    this.uploadSelectedCorporateFile.controls["file"].reset();
    this.fileName = null;
    this.isVisibleModal["toggleHeaderText"] = false;
    this.isVisibleModal["previewIsVisible"] = false;
    this.isVisibleModal["modalIsVisible"] = false;
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

  handleOk() {
    console.log(this.uploadSelectedCorporateFile.value);
    this.uploadSelectedCorporateFile.patchValue({
      section: this.selectedTab,
    });
    const file = this.uploadSelectedCorporateFile.get("file");
    // console.log(file?.value.name)
    this.fileName = file?.value?.name;
    console.log();
    if (this.uploadSelectedCorporateFile.valid) {
      this.isVisibleModal["previewButtonLoading"] = true;
      console.log(this.uploadSelectedCorporateFile.value);
      let data = new FormData();
      let sendDate = this.uploadSelectedCorporateFile.value;
      for (var i in sendDate) {
        data.append(i, sendDate[i]);
      }
      this.http.viewFileBeforeSaving(data).subscribe((res: any) => {
        if (res?.success) {
          this.retrievedFileResponse = res?.data;
          this.retrievedFileResponseKey = res?.data?.keys;
          this.isVisibleModal["toggleHeaderText"] = true;
          this.isVisibleModal["previewButtonLoading"] = false;
          this.isVisibleModal["previewIsVisible"] = true;
        } else {
          this.isVisibleModal["previewButtonLoading"] = false;
          this.isVisibleModal["previewIsVisible"] = false;
          this.isVisibleModal["toggleHeaderText"] = false;
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

  onClickUploadFile() {
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
          this.message.success("File Uploaded");
          this.getEmployeeDetailWithEmployeeTypeAndCorporateId();
        } else {
          this.isVisibleModal["toggleHeaderText"] = false;
          this.isVisibleModal["previewIsVisible"] = false;
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
