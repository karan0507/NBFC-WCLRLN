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
      @Input() isFetch: boolean = false;
      api_calling_loader = {
            'cardData': false
      }

      erroMessage: any;
      toggleForceFullyPull: any;
      cibilData: JSON
      constructor(public https: HttpService, public message: NzMessageService) { }

      ngOnInit(): void {
            console.log('In common & Cibil =>', this.isCibil, "_currentLoanDetails",this._currentLoanDetails, "isFetch =>", this.isFetch);
            
            if (this._currentLoanDetails) {
                  this.getDetails();
            }

      }

      getForceFullyData(){
            const retrivedData: any = JSON.parse(localStorage.getItem('fatakpay_user_data'));
            console.log(retrivedData)
            const sortedString =  `${retrivedData?.user?.first_name + ' ' + retrivedData?.user?.last_name} `
            // alert(sortedString)
            // return;
            this.api_calling_loader['cardData'] = true;
                        let param = { 'source': 'Onboarding', 'datapoint': 'fetch-bureau-data', 'application': this._currentLoanDetails, 'force_pull': true,'force_pulled_by':  sortedString}
                        // force_pull == true
// force_pulled_by = Name of the logged in user
                        this.https.pullCibilThirdParty(param).subscribe((res: any) => {
                              if (res?.success) {
                                    this.api_calling_loader['cardData'] = false;
                                    this.message.success(res?.message);
                                    this.cibilData = res?.data?.api_response
                                    this.toggleForceFullyPull = false; 
                              } else {
                                    this.message.error(res?.message);
                                    this.cibilData = res?.data?.api_response
                                    this.api_calling_loader['cardData'] = false;
                                    this.erroMessage = res?.message;
                                    this.toggleForceFullyPull = true; 
                                    // alert('Ajmal 1B' + res?.message)
                              }
                        }, err => {
                              this.message.error(err);
                              this.api_calling_loader['cardData'] = false;
                        })
      }

      getDetails() {
            if (this.isFetch) {
                  let data = { source: 'Onboarding', endpoint: this._currentLoanDetails }
                  if (this.isCibil) {
                        this.api_calling_loader['cardData'] = true;
                        data['datapoint'] = 'fetch-cibil-from-db'
                        this.https.getCibilSMSData(data).subscribe(res => {

                              if (res?.success) {
                                    this.api_calling_loader['cardData'] = false;
                                    this.message.success(res?.message);
                                    console.log(res?.data);
                                    this.cibilData = res?.data
                                    this.toggleForceFullyPull = false; 
                              } else {
                                    this.message.error(res?.message);
                                    this.cibilData = res?.data
                                    this.api_calling_loader['cardData'] = false;
                                    this.toggleForceFullyPull = false; 
                                    // alert('Ajmal ' + res?.message)
                              }
                        })
                  } else {
                        this.api_calling_loader['cardData'] = true;
                        data['datapoint'] = 'fetch-sms-from-db'
                        this.https.getCibilSMSData(data).subscribe(res => {
                              if (res?.success) {
                                    console.log(res?.data);
                                    this.message.success(res?.message);
                                    this.api_calling_loader['cardData'] = false;
                                    this.cibilData = res?.data
                                    this.toggleForceFullyPull = false; 
                              } else {
                                    this.message.error(res?.message);
                                    this.api_calling_loader['cardData'] = false;
                                    // alert('Ajmal 1A' + res?.message)
                              }

                        })
                  }
            } else {
                  if (this.isCibil) {
                        this.api_calling_loader['cardData'] = true;
                        let param = { 'source': 'Onboarding', 'datapoint': 'fetch-bureau-data', 'application': this._currentLoanDetails }
                        this.https.pullCibilThirdParty(param).subscribe((res: any) => {
                              if (res?.success) {
                                    this.api_calling_loader['cardData'] = false;
                                    this.message.success(res?.message);
                                    this.cibilData = res?.data?.api_response
                                    this.toggleForceFullyPull = false; 
                              } else {
                                    this.message.error(res?.message);
                                    this.cibilData = res?.data?.api_response
                                    this.api_calling_loader['cardData'] = false;
                                    this.erroMessage = res?.message;
                                    this.toggleForceFullyPull = true; 
                                    // alert('Ajmal 1B' + res?.message)
                              }
                        }, err => {
                              this.message.error(err);
                              this.api_calling_loader['cardData'] = false;
                        })
                  } else {
                        this.api_calling_loader['cardData'] = true;
                        let param = { 'source': 'Onboarding', 'datapoint': 'fetch-sms-data', 'app_user': this._currentLoanDetails }
                        this.https.pullCibilThirdParty(param).subscribe((res: any) => {
                              if (res?.success) {
                                    this.api_calling_loader['cardData'] = false;
                                    this.message.success(res?.message);
                                    this.cibilData = res?.data
                                    this.toggleForceFullyPull = false; 
                              }
                              else {
                                    // alert('Ajmal 1C' + res?.message)
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
}