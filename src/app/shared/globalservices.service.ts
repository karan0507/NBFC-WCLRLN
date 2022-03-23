import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';
import { HttpService } from '../services/http.service';

@Injectable({
      providedIn: 'root'
})
export class GlobalservicesService {
      public globalPageSize = 30;
      public applicationStageCount = new ReplaySubject<any>();
      constructor(public http: HttpService) { }

     setApplicationCount() {
      let param = { 'source': 'Onboarding', 'datapoint': 'stage-wise-application-count' }
      this.http.getApplicationStageCount(param).subscribe((res: any) => {
            // this.setApplicationCount(res?.data)
            this.applicationStageCount.next(res?.data)
      });
     
      }

      amountFromatterFinction(value) {
            var val: any
            val = Math.abs(value)
            if (val >= 10000000) {
                  val = (val / 10000000).toFixed(2) + ' Cr';
            } else if (val >= 100000) {
                  val = (val / 100000).toFixed(2) + ' Lacs';
            } else if (val >= 1000) {
                  val = (val / 1000).toFixed(2) + ' Thousand';
            }
            if (typeof val == 'string') {
            } else {
                  val = val.toFixed(2)
            }
            return val;
      }

      maskingDigits(str){
            return str.replace(/\d{4}(?= \d{4})/g, "****")
      }
}
