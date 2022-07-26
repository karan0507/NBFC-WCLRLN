import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-expence-management',
  templateUrl: './expence-management.component.html',
  styleUrls: ['./expence-management.component.css']
})
export class ExpenceManagementComponent implements OnInit {

  expenseDataList: any = [];
      employeeList: any = []
      currentEmployee: any;
      branches: any = []
      currentBranch: any
      currentStatus: any
      matrixDataList: any = [{
            name: ' Total Corporate Expenses',
            value: '',
            src: '../../../assets/images/Icons/LMS_Money_Bag.svg'
      },
      {
            name: '  Total Amount Approved',
            value: '',
            src: '../../../assets/images/Icons/tick.svg'
      },
      {
            name: '  Total Amount Rejected',
            value: '',
            src: '../../../assets/images/Icons/cross.svg'
      },]
      currentExpenseData: any;
      rejectReason: any;
      date: any;
      api_calling_loader = {
            'listLoader': false,
            'accordian': false,
            'matrixData': false,
            'button': false
      }
      globalPageSize: any;
      page: any
      total_count: any
      searchValue: any;
      globalFilter = {
            'branch': null,
            'date': null,
      }
      // Loader

      // Modal Actions
      isModalOpen: boolean = false;
      isRejectModal: boolean = false;
      constructor(public http: HttpService, public message: NzMessageService) {
            this.page = 1;
            this.globalPageSize = 30;

            
       }
      ngOnDestroy(): void {
            this.globalFilter['branch']?.unsubscribe()
            this.globalFilter['date']?.unsubscribe()
      }

      ngOnInit(): void {
            this.getExpenseManagementList();
      }

      getExpenseManagementList(tableFilter?) {
            this.expenseDataList = []
            this.api_calling_loader['listLoader'] = true;
            let data = {
              datapoint: 'corporate_expense_management',
              // endpoint: '',
              source: 'LMS',
            };
            if (this.searchValue) {
                  data['keyword'] = this.searchValue
            }
            if (this.currentBranch) {
                  data['branch'] = this.currentBranch
            }

            data['expense_status'] = (this.currentStatus == 1 ? 'Approved' : (this.currentStatus == 2 ? 'Rejected' : (this.currentStatus == 3 ? 'Pending' : 'All')))

            if (tableFilter) {
                  this.page = tableFilter?.pageIndex
                  this.globalPageSize = tableFilter?.pageSize
                  data['page'] = tableFilter?.pageIndex
                  data['limit'] = tableFilter?.pageSize
            } else {
                  data['page'] = this.page
                  data['limit'] = this.globalPageSize
            }
            if (this.date) {

                  data['from_date'] = moment(this.date[0]).format("DD-MM-YYYY")
                  data['to_date'] = moment(this.date[1]).format("DD-MM-YYYY")

            }
            if (this.currentEmployee) {
                  data['employee'] = this.currentEmployee
            }
            this.http.fetchLoanApplicationList(data).subscribe((res: any) => {
                  if (res?.success) {
                        this.api_calling_loader['listLoader'] = false;
                        this.expenseDataList = res?.data
                        this.total_count = res?.total
                        this.matrixDataList[0]['value'] = res?.total_corporate_expense
                        this.matrixDataList[1]['value'] = res?.approved_corporate_expense
                        this.matrixDataList[2]['value'] = res?.rejected_corporate_expense
                  } else {
                        this.api_calling_loader['listLoader'] = false;
                        this.message.error(res?.message)
                  }
            });
      }

      getAllEmployees() {
            this.http.getAllExployees().subscribe((res: any) => {
                  if (res?.success) {
                        this.employeeList = res?.data
                  }
            })
      }

      handleCancel() {
            this.isRejectModal = false;
            this.isModalOpen = false;
      }

      handleOk(type?, id?) {
            let data = new FormData()
            data.append('transaction_id', id ? id : this.currentExpenseData?.id)
            if (type == 'reject') {
                  this.api_calling_loader['button'] = true
                  data.append('status', 'Rejected')
                  data.append('remarks', this.rejectReason)
            } else if (type == 'approve') {
                  data.append('status', 'Approved')
            }
      }
      modalAction(data) {
            console.log(data);
            this.isModalOpen = true; this.isRejectModal = true; this.currentExpenseData = data
      }

      exportFuntion() {
            // this.http.exportExpenseManagement().subscribe((res: any) => {
            //       this.http.downloadExportedDocument(res)

            // })
      }

      resetFilters() {
            this.searchValue = '';
            this.currentBranch = null;
            this.date = null;
            this.currentEmployee = null;
            this.currentStatus = null;
            this.page = 1;
            this.getExpenseManagementList();
      }

}
