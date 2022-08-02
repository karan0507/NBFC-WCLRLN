import { Component, OnInit } from '@angular/core';
import { differenceInCalendarDays } from 'date-fns';
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
      corporateList: any[];
      debounce: any;
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
    disabledDate = (current: Date): boolean =>
      // Can not select days before today and today
      differenceInCalendarDays(current, new Date()) > 0;
      txn_type: any;
      txn_status: any;
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
            if (this.txn_type) {
                  data['txn_type'] = this.txn_type
            }
            if (this.txn_status) {
                  data['txn_status'] = this.txn_status
            }

            // data['expense_status'] = (this.currentStatus == 1 ? 'Approved' : (this.currentStatus == 2 ? 'Rejected' : (this.currentStatus == 3 ? 'Pending' : 'All')))

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

                  data['start_date'] = moment(this.date[0]).format("YYYY-MM-DD")
                  data['end_date'] = moment(this.date[1]).format("YYYY-MM-DD")

            }
            if (this.currentEmployee) {
                  data['corporate_id'] = this.currentEmployee
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
            this.currentBranch = '';
            this.date = '';
            this.currentEmployee = '';
            this.txn_status = '';
            this.txn_type = '';
            this.currentStatus = '';
            this.page = 1;
            this.getExpenseManagementList();
      }
      OnTypeSearchList(event) {
            clearTimeout(this.debounce);
            this.debounce = setTimeout(() => {
                  this.fetchPartnerList(event);
            }, 500);
      }

      fetchPartnerList(e?) {
            let data = {};
            if (e) {
                  data['name'] = e;
            }
            this.http.fetchPartner(data).subscribe((res: any) => {
                  if (res?.success) {
                        this.corporateList = [];
                        res?.data?.results.map((res: any) => {
                              if (res?.name) {
                                    this.corporateList.push(res)
                              }
                        })
                        // this.corporateList = res?.data?.results;
                        console.log(this.corporateList);
                  }
            });
            // }
      }

}
