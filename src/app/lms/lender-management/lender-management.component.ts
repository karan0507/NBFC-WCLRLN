import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { differenceInCalendarDays } from 'date-fns/esm';
import { NzMessageService } from 'ng-zorro-antd/message';
import { stringify } from 'querystring';
import { HttpService } from 'src/app/services/http.service';
import { GlobalservicesService } from 'src/app/shared/globalservices.service';

@Component({
      selector: 'app-lender-management',
      templateUrl: './lender-management.component.html',
      styleUrls: ['./lender-management.component.css']
})
export class LenderManagementComponent implements OnInit {
      lenderListData: any = [];
      matricData: any = [];
      page: number;
      limit: any;
      total_count: any;
      _currentLenderId: any;
      totalCommitments: any;
      api_calling_loader = {
            'listLoader': false,
            'cardList': false,
            'button': false
      };

      // Forms
      commitmentForm: FormGroup
      requestFundForm: FormGroup
      nbfcRepayment: FormGroup

      // Edit
      editCommitmentList: any = [];
      editFundsList: any = []
      editNBFCList: any = []

      // Booleans For Modals
      isOpenModal: boolean = false;
      isEdit: Boolean = false;
      isRequest: boolean = false;
      isNBFC: boolean = false;
      isAddRepayment: boolean = false;

      today = new Date();
      disabledDate = (current: Date): boolean => {
            return differenceInCalendarDays(this.today,current) > 0;
      };
      constructor(private https: HttpService, public message: NzMessageService, public globalservice: GlobalservicesService, public fb: FormBuilder) { }

      ngOnInit(): void {
            this.page = 1;
            this.getLenderManagementList();

            this.commitmentForm = this.fb.group({
                  newCommitmentValue: [null, [Validators.required]]
            })
            this.requestFundForm = this.fb.group({
                  amount: [null, [Validators.required]],
                  repaid_on: [null, [Validators.required]]
            })
            this.nbfcRepayment = this.fb.group({
                  amount: [null, [Validators.required]],
                  repaid_on: [null, [Validators.required]]
            })
      }

      getLenderManagementList() {
            this.lenderListData = [];
            this.api_calling_loader['listLoader'] = true;
            this.api_calling_loader['cardList'] = true;
            //     let data = new FormData();
            //     data.append('page', '1');
            //     data.append('limit', '10');
            let params = { 'datapoint': 'lender_master_get', 'endpoint': 'LenderManagement', 'source': 'LMS' }
            this.https.getLenderManagementList(params).subscribe((res: any) => {
                  if (res?.data) {
                        this.lenderListData = res?.data?.list_data
                        this.matricData = res?.data?.matric_data;
                        this.api_calling_loader['listLoader'] = false;
                        this.api_calling_loader['cardList'] = false;
                        this.total_count = res?.data?.list_data.length;
                        // console.log(this.matricData, this.lenderListData,res, this.total_count);
                  } else {
                        this.api_calling_loader['listLoader'] = false;
                        this.api_calling_loader['cardList'] = false;
                  }
            }, error => {
                  this.api_calling_loader['listLoader'] = false;
                  this.api_calling_loader['cardList'] = false;
            })
      }


      getMultipleAction(type?, data?) {

            switch (type) {
                  case 'commitment':
                        this.api_calling_loader['button'] = true;
                        // let params = { 'commitment':this.commitmentForm.get('newCommitmentValue').value }
                        let body = new FormData();
                        body.append('source', 'LMS')
                        body.append('lender_management', this._currentLenderId);
                        body.append('datapoint', 'lender_add_commitment')
                        body.append('commitment', this.commitmentForm.get('newCommitmentValue').value)
                        this.https.editLenderCommitment(body).subscribe((res: any) => {
                              if (res?.success) {
                                    this.api_calling_loader['button'] = false;
                                    this.commitmentForm.reset();
                                    this.message.success(res?.message)
                                    this.handleCancel();
                                    this.getLenderManagementList();
                              } else {
                                    this.commitmentForm.reset()
                                    this.message.error(res?.message)
                                    this.api_calling_loader['button'] = false;
                              }
                        }, err => {
                              this.api_calling_loader['button'] = false;
                        })
                        break;
                  case 'funds':
                        this.api_calling_loader['button'] = true;
                        let requestBody = { 'datapoint': 'lender_add_fund_request', 'source': 'LMS', lender_management: this._currentLenderId, 'requested_amount': this.requestFundForm.get('amount').value, 'requested_at': this.requestFundForm.get('repaid_on').value }
                        this.https.addLenderFundRequest(requestBody).subscribe((res: any) => {
                              if (res?.success) {
                                    console.log(res);
                                    this.api_calling_loader['button'] = false;
                                    this.message.success(res?.message)
                                    this.handleCancel()
                                    this.requestFundForm.reset()
                                    this.getLenderManagementList();
                              } else {
                                    this.api_calling_loader['button'] = false;
                              }
                        }, err => {
                              this.api_calling_loader['button'] = false;
                        })
                        break;
                  case 'nbfc':
                        this.api_calling_loader['button'] = true;
                        let param = { 'datapoint': 'lender_add_repayment', 'source': 'LMS', 'lender_management': this._currentLenderId, 'amount': this.nbfcRepayment.get('amount').value, 'repaid_on': this.nbfcRepayment.get('repaid_on').value }
                        this.https.addRepaymentNBFC(param).subscribe((res: any) => {
                              if (res?.success) {
                                    console.log(res);
                                    this.api_calling_loader['button'] = false;
                                    this.message.success(res?.message)
                                    this.handleCancel()
                                    this.nbfcRepayment.reset()
                                    this.getLenderManagementList();
                              } else {
                                    this.api_calling_loader['button'] = false;
                              }
                        }, err => {
                              this.api_calling_loader['button'] = false;
                        })
                        break;
            }
      }

      modalOpen(type?, data?) {
            this._currentLenderId = data?.id
            this.isAddRepayment = false;
            this.isOpenModal = true;
            if (type == 'edit') {
                  this.isEdit = true;
                  this.getLenderCommitmentList(data);
            } else if (type == 'request') {
                  this.isRequest = true;
                  this.getFundsList(data)
            } else if (type == 'nbfc') {
                  this.isNBFC = true;
                  this.getNbfcList(data)
            }
      }

      // Get Lender Commitment List
      getLenderCommitmentList(value?) {
            let data = { 'datapoint': 'lender_master_get', 'endpoint': 'LenderFundCommitments', 'source': 'LMS', 'lender_id': value?.id }
            this.https.getLendersCommitmentList(data).subscribe((res: any) => {
                  if (res?.success) {
                        this.editCommitmentList = res?.data?.list_data;
                        this.totalCommitments = res?.data?.total
                  } else {
                        this.message.error(res?.message);
                  }
            })
      }

      handleCancel() {
            this.isOpenModal = false;
            this.isEdit = false;
            this.isRequest = false;
            this.isNBFC = false;
      }

      getFundsList(value?) {
            let data = { 'datapoint': 'lender_master_get', 'endpoint': 'LenderFundRequest', 'source': 'LMS', 'lender_id': value?.id }
            this.https.getLenderFundRequestList(data).subscribe((res: any) => {
                  if (res?.success) {
                        console.log(res, 'funds');
                        this.editFundsList = res?.data
                  }
            })
      }

      getNbfcList(value?) {
            let data = { 'datapoint': 'lender_master_get', 'endpoint': 'LenderManagementRepayment', 'source': 'LMS', 'lender_id': value?.id }
            this.https.getRepaymentList(data).subscribe((res: any) => {
                  console.log(res, 'funds');
                  if (res?.success) {
                        this.editNBFCList = res?.data
                  }

            })
      }

}
