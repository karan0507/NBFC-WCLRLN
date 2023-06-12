import { Injectable } from "@angular/core";
import { BehaviorSubject, ReplaySubject, Subject } from "rxjs";
import { HttpService } from "../services/http.service";

@Injectable({
      providedIn: "root",
})
export class GlobalservicesService {
      public globalPageSize = 100;
      public applicationStageCount = new ReplaySubject<any>();
      public globalUserData = new ReplaySubject<any>();
      public globalApplicationLoan = new ReplaySubject<any>();
      public globalToggleValue = new ReplaySubject<any>();

      public borrowersStageCount = new ReplaySubject<any>();
      public borrowersSubStageCount = new ReplaySubject<any>();

      constructor(public http: HttpService) { }

      setApplicationCount() {
            let temp = localStorage.getItem('globalToggleValue') == '1' ? 'card' :'emi';
            let param = {
                  source: "Onboarding",
                  datapoint: "stage-wise-application-count",
                  offer_type: temp
                  
            };
            this.http.getApplicationStageCount(param).subscribe((res: any) => {
                  // this.setApplicationCount(res?.data)
                  this.applicationStageCount.next(res?.data);
            });
      }

      setBorrowersSubCount() {
            let param = { stage_type: "SUB", stage_master: "1" };
            this.http.getBorrowersStageCount(param).subscribe((res: any) => {
                  this.borrowersSubStageCount.next(res?.data);
            });
      }

      setBorrowersStageCount() {
            let param = { stage_type: "", stage_master: "1" };
            this.http.getBorrowersStageCount(param).subscribe((res: any) => {
                  this.borrowersStageCount.next(res?.data);
            });
      }

      selectedGlobalApplicationLoan(data: any) {
            this.globalApplicationLoan.next(data);
      }

      amountFromatterFinction(value) {
            var val: any;
            val = Math.abs(value);
            if (val >= 10000000) {
                  val = val / 10000000 + " Cr";
            } else if (val >= 100000) {
                  val = val / 100000 + " Lacs";
            } else if (val >= 1000) {
                  val = val / 1000 + " Thousand";
            }
            if (typeof val == "string") {
            } else {
                  val = val;
            }
            return val;
      }

      sendUserData(data: any) {
            this.globalUserData.next(data);
      }

      setGlobalToggleValue(data: any) {
            this.globalToggleValue.next(data);
      }

      maskedValue(data, type) {
            if (data && type == "pan") {
                  return data[data.length - 1]["pan_no"];
            } else if (data && type == "aadhar") {
                  return data[data.length - 1]["aadhar_no"];
            }
      }
}
