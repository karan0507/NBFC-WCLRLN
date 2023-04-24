import { Component, OnInit } from "@angular/core";
import { differenceInCalendarDays } from "date-fns";
import * as moment from "moment";
import { HttpService } from "src/app/services/http.service";

@Component({
  selector: "app-corporate-stage",
  templateUrl: "./corporate-stage.component.html",
  styleUrls: ["./corporate-stage.component.css"],
})
export class CorporateStageComponent implements OnInit {
  page = 1;
  size = 100;
  listOfEmployee: any;
  apiLoader = {
    list: false,
    previewList: false,
    empStatus: false,
  };
  selectedCorporate: any;
  today = new Date();
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
  disabledDate = (current: Date): boolean => {
    return differenceInCalendarDays(current, this.today) > 0;
  };
  selectedTab = 'allEmployee';
  date = '';
  searchValue: any;
  total_count: any;
  appStatusList: any = [{
    pk : 'not using',
    name : 'not using',
  }, {
    pk : 'using',
    name : 'using',
  }]

  constructor(private http: HttpService) {}

  ngOnInit(): void {
    this.getListOfAllEmployees();
  }

  getResultBasedOnSearch() {
    this.page = 1;
    this.getListOfAllEmployees();
  }

  selectedAppStatus: any;
  selectedAction: any;
  getListOfAllEmployees(event?) {
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
    // if(this.selectedTab == 'recommendation'){
    //   data['action'] =  this.selectedAction;
    // }
    if (this.date) {
      data["from_date"] = moment(this.date[0]).format("YYYY-MM-DD");
      data["to_date"] = moment(this.date[1]).format("YYYY-MM-DD");
    }
    if (this.selectedCorporate) {
      data["corporate"] = this.selectedCorporate;
    }
    if (this.selectedAppStatus) {
      data["app_install_status"] = this.selectedAppStatus;
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

  resetFilter() {
    // if (this.searchValue || this.selectedCorporate) {
    this.date = "";
    this.page = 1;
    this.searchValue = "";
    this.selectedAppStatus = '';
    this.selectedCorporate = null;
    this.getListOfAllEmployees();
    // this.getListOfAllEmployees();
    // }
    // this.getAuthorizationList();
  }

  debounce: any;

  OnTypeSearchList(event) {
    clearTimeout(this.debounce);
    this.debounce = setTimeout(() => {
      this.fetchPartnerList(event);
    }, 500);
  }

  corporateList: any;
  fetchPartnerList(e?) {
    let data = {
      // page: 1,
      // size: 30,
      // partner_nature: "Partner",
      // status: "all",
    };
    if (e) {
      data["name"] = e;
    }
    this.http.fetchPartner(data).subscribe((res: any) => {
      if (res?.success) {
        this.corporateList = [];
        res?.data?.results.map((res: any) => {
          if (res?.name) {
            this.corporateList.push(res);
          }
        });
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
      this.getListOfAllEmployees();
    //   if(e){
    //   if(this.selectedTab == 'allEmployee' || this.selectedTab == 'recommendation'){
    //     this.getListOfAllEmployees();
    //   } else {
    //     this.getEmployeeDetailWithEmployeeTypeAndCorporateId();
    //   }
    // } else {
    //   if(this.selectedTab == 'allEmployee' || this.selectedTab == 'recommendation'){
    //     this.selectedCorporate = null;
    //     this.getListOfAllEmployees();
    //   } else {
    //     this.selectedCorporate = null;
    //     this.getEmployeeDetailWithEmployeeTypeAndCorporateId();
    //   }
    // }
    // }
  }

  onChange(e){
    this.getListOfAllEmployees();
  }

}
