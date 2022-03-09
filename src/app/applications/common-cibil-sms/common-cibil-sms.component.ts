import { Component, Input, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/services/http.service';

@Component({
      selector: 'app-common-cibil-sms',
      templateUrl: './common-cibil-sms.component.html',
      styleUrls: ['./common-cibil-sms.component.css']
})
export class CommonCibilSmsComponent implements OnInit {
      @Input() _currentLoanDetails: any;
      @Input() isCibil: any;
      api_calling_loader = {
            'cardData': false
      }
      cibilData: JSON
      constructor(public https: HttpService, public message: NzMessageService) { }

      ngOnInit(): void {
            if (this._currentLoanDetails) {
                  this.getDetails();
            }

      }

      getDetails() {
            if (this.isCibil) {
                  this.api_calling_loader['cardData'] = true;
                  let param = { 'source': 'Onboarding', 'datapoint': 'fetch-bureau-data', 'application': this._currentLoanDetails?.id }
                  this.https.pullCibilThirdParty(param).subscribe((res: any) => {
                        if (res?.success) {
                              this.api_calling_loader['cardData'] = false;
                              this.message.success(res?.message);
                              this.cibilData = res?.data
                        } else {
                              this.message.error(res?.message);
                              this.api_calling_loader['cardData'] = false;
                        }
                  }, err => {
                        this.message.error(err);
                        this.api_calling_loader['cardData'] = false;
                  })
            } else {
                  this.api_calling_loader['cardData'] = true;
                  let param = { 'source': 'Onboarding', 'datapoint': 'fetch-sms-data', 'app_user': this._currentLoanDetails?.user?.id }
                  this.https.pullCibilThirdParty(param).subscribe((res: any) => {
                        if (res?.success) {
                              this.api_calling_loader['cardData'] = false;
                              this.message.success(res?.message);
                              this.cibilData = res?.data
                        }
                        else {
                              this.message.error(res?.message);
                              this.api_calling_loader['cardData'] = false;
                        }
                  }, err => {
                        this.message.error(err);
                        this.api_calling_loader['cardData'] = false;
                  })
            }

      }
}
