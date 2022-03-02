import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { stringify } from 'querystring';
import { HttpService } from 'src/app/services/http.service';

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
      api_calling_loader = {
            'listLoader': false,
            'cardList': false
      };

      // Edit
      editCommitmentList: any = [];
      newCommitmentValue : number;

      // Booleans For Modals
      isOpenModal: boolean = false;
      isEdit: Boolean = false;
      isRequest: boolean = false;
      isDownload: boolean = false;

      constructor(private https: HttpService, public message : NzMessageService) { }

      ngOnInit(): void {
            this.page = 1;
            this.getLenderManagementList();
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
            let params = { 'datapoint': 'lender_master_get', 'endpoint': 'LenderFundCommitments', 'source': 'LMS', 'lender_id': data?.id }
            switch (type) {
                  case 'commitment':
                        console.log(data);
                        let body = new FormData();
                        this.newCommitmentValue = 80000
                        body.append('commitment', String(this.newCommitmentValue))
                        this.https.editLenderCommitment(data?.id, body).subscribe((res: any) => {
                              console.log(res);
                        })
                        break;
                  case 'request_fund':
                        params = { 'datapoint': 'lender_master_get', 'endpoint': 'LenderFundRequest', 'source': 'LMS', 'lender_id': data?.id }
                        break;
                  case 'repay_NBFC':
                        params = { 'datapoint': 'lender_master_get', 'endpoint': 'LenderManagementRepayment', 'source': 'LMS', 'lender_id': data?.id }
                        break;
            }
      }

      modalOpen(type?, data?) {
            this.isOpenModal = true;
            if (type == 'edit') {
                  this.isEdit = true;
                  this.getLenderCommitmentList(data);
            } else if (type == 'request') {

            } else if (type == 'generate') {

            }
      }

      // Get Lender Commitment List
      getLenderCommitmentList(value?) {
            this.api_calling_loader['listLoader'] = true;
            let data = { 'datapoint': 'lender_master_get', 'endpoint': 'LenderFundCommitments', 'source': 'LMS', 'lender_id': value?.id }
            this.https.getLendersCommitmentList(data).subscribe((res: any) => {
                  if (res?.success) {
                        this.editCommitmentList = res?.data
                        this.api_calling_loader['listLoader'] = false;
                  }else{
                        this.message.error(res?.error);
                        this.api_calling_loader['listLoader'] = false;
                  }
            })
      }

      handleCancel() {
            this.isOpenModal = false;
            this.isEdit = false;
      }

}
