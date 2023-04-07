import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/services/http.service';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { differenceInCalendarDays } from 'date-fns';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-emi-borrower-details',
  templateUrl: './emi-borrower-details.component.html',
  styleUrls: ['./emi-borrower-details.component.css']
})
export class EmiBorrowerDetailsComponent implements OnInit {
  gridStyle = {
    width: '100%',
  };
  _currBorrowerId: any;
  refundId: any;
  waiveOffId: any;
  final_reverse_amount: any;
  isRefundTransaction = false
  isWaiveOff = false
  is_set_amt: any
  isSelectDate;
  send_payment_amount
  send_payment_amount_popup = false
  selectedDateforStatement;
  borrowertList: any;

  page: any = 1
  globalPageSize: any = '30'
  _currEMIBorrowerDetail: any
  total_count: any;
  schedulerDetails: any = [];
  api_call_loading = { 'btnLoader': false, 'card': false }
  cardLoading: boolean = false;
  disabledDate = (current: Date): boolean =>
    // Can not select days before today and today
    differenceInCalendarDays(current, new Date()) > 0;

  customRanges = {
    Today: [new Date(), new Date()],
    'Last 7 days': [new Date().setDate(new Date().getDate() - 7), new Date()],
    'This Month': [new Date(new Date().getFullYear(), new Date().getMonth(), 1), new Date()],
    'Last Month': [new Date(new Date().getFullYear(), new Date().getMonth(), 1).setMonth(new Date().getMonth() - 1), new Date(new Date().getFullYear(), new Date().getMonth(), -1, 30, 31)],
    'Last 3 Months': [new Date(new Date().getFullYear(), new Date().getMonth(), 1).setMonth(new Date().getMonth() - 3), new Date(new Date().getFullYear(), new Date().getMonth(), -1, 30, 31)],
    'Last 6 Months': [new Date(new Date().getFullYear(), new Date().getMonth(), 1).setMonth(new Date().getMonth() - 6), new Date(new Date().getFullYear(), new Date().getMonth(), -1, 30, 31)],
    'This Year': [new Date(new Date().getFullYear(), 0, 1), new Date()],
    // 'Last Year': [new Date(new Date().getFullYear(), new Date().getMonth(), 1).setMonth(new Date().getMonth() - 12), new Date(new Date().getFullYear(), new Date().getMonth(), 1)],
    'Last Year': [new Date(new Date().getFullYear() - 1, 0, 1), new Date(new Date().getFullYear() - 1, 11, 31)],
    // d.setMonth(d.getMonth() - 3);
  };

  pdf_viewer_object_values = {
    'boolean': false,
    'url': null,
    'title': ''
  }


  page1: any
  globalPageSize1: any;
  page5: any;
  globalPageSize5: any;
  total_count5: any
  // Transaction 
  page2: any;
  globalPageSize2: any;
  searchValue2: any;
  selectedStatus2: any;
  selectedType1 = ''
  selectedStatus1 = ''
  date1 = ''
  searchValue1 = '';
  selectedType2 = ''
  date2 = ''
  transaction_repayment_list: any;
  fees_charges_list: any;
  total_count1: any;
  total_count2: any;
  waive_off_type: any;
  waive_off_amount: any;
  waive_off_sub_title: string;
  invoiceList: any;
  api_calling_loader = { 'transactionLoad': false, 'invoice': false, 'fees': false }
  constructor(private http: HttpService, private message: NzMessageService, private acRoute: ActivatedRoute, private router: Router,
    private sanitized: DomSanitizer) { }

  ngOnInit(): void {
    this.page = 1;
    this.globalPageSize = 100
    this.page1 = 1;
    this.globalPageSize1 = 10;
    this.page2 = 1;
    this.globalPageSize2 = 10
    this.acRoute.queryParams.subscribe((param) => {
      if (param['id']) {
        this._currBorrowerId = param['id'];
        this.getDetailsEmiBorrowers()
      }
    })

    this.fetchTransactionTxnList();
    this.fetchTransactionFessList();
    this.fetchInvoiceList();
  }

  getDetailsEmiBorrowers() {
    this.cardLoading = true
    let data = { offer_id: this._currBorrowerId }
    this.http.fetchEmiBorrowersDetails(data).subscribe((res: any) => {
      if (res.success) {
        this._currEMIBorrowerDetail = res.data;
        this.schedulerDetails = res?.data?.shcedular_details
        this.cardLoading = false
      } else {
        this.cardLoading = false
      }
    }, error => {

    })
  }

  expandSet = new Set<number>();
  onExpandChange(id: number, checked: boolean, index?, data?): void {
    if (checked) {
      this.expandSet.clear()
      this.expandSet.add(id);
      this.schedulerDetails[index]['allocation_data'] = data?.allocation_data
    } else {
      this.expandSet.delete(id);
    }
  }

  // Transaction List
  fetchTransactionTxnList(tabelFilter?) {
    if (tabelFilter) {
      this.page2 = tabelFilter?.pageIndex ? tabelFilter?.pageIndex : this.page2;
      this.globalPageSize2 = tabelFilter?.pageSize ? tabelFilter?.pageSize : this.globalPageSize2;
    }
    let data = {
      datapoint: 'loan_service',
      endpoint: 'LoanApplicationTransactions',
      source: 'LMS',
      offer_id: this._currBorrowerId,
      page: this.page2,
      limit: this.globalPageSize2,
      txn_status: this.selectedStatus2 ? this.selectedStatus2 : '',
      start_date: this.date1[0] ? moment(this.date1[0]).format("YYYY-MM-DD") : '',
      end_date: this.date1[1] ? moment(this.date1[1]).format("YYYY-MM-DD") : '',
      search_param: this.searchValue2,
      transaction_type: 'transactions_and_repayments',
      txn_type: this.selectedType2 ? this.selectedType2 : '',
    }
    this.api_calling_loader['transactionLoad'] = true
    this.http.fetchLoanApplicationList(data).subscribe(res => {
      this.api_calling_loader['transactionLoad'] = false
      this.transaction_repayment_list = res['data']
      this.total_count2 = res.total_count
      // this.message.success(res['message'])
    }, (err) => {
      this.api_calling_loader['transactionLoad'] = false
    })
  }


  resetFilter1() {
    this.searchValue1 = ''
    this.selectedType1 = ''
    this.selectedStatus1 = ''
    this.date2 = ''
    this.fetchTransactionFessList();
  }

  resetFilter2() {
    this.searchValue2 = ''
    this.selectedType2 = ''
    this.selectedStatus2 = ''
    this.date1 = ''
    this.fetchTransactionTxnList();
  }

  handleCancel() {
    // this.isPullSMSCibilModal = false;
    // this.isFetchCibilSms = false;
    // this.isPullSMSCibilPopup = false;
    this.pdf_viewer_object_values['boolean'] = false
    this.pdf_viewer_object_values['url'] = null
  }

  viewInvoice(file, name) {
    this.pdf_viewer_object_values['title'] = name
    this.sanatizeUrlToSafe(file)
    this.pdf_viewer_object_values['boolean'] = true
  }

  waiveOffToggle(id) {
    this.waiveOffId = id
    this.getTnxAmount(id)
  }
  reverseId: any
  reverseChargesToggle(id) {
    // this.isReverseCharges = true
    this.reverseId = id
    this.getTnxAmount(id)
  }

  refundChargesToggle(id) {
    this.refundId = id
    this.getTnxAmount(id)
  }


  isReverseCharges: any;
  getTnxAmount(id) {
    let data = {
      datapoint: 'get_transaction_amount',
      endpoint: id,
      source: 'LMS',
    }
    this.http.fetchLoanApplicationList(data).subscribe(res => {
      if (res.data.amount > 0) {
        if (this.reverseId) {
          this.isReverseCharges = true
        } else if (this.refundId) {
          this.isRefundTransaction = true
        } else if (this.waiveOffId) {
          this.isWaiveOff = true
        }
        this.final_reverse_amount = res.data.amount
      } else {
        this.message.warning("You don't have amount for reverse transaction.")
      }
    }, (err) => {
    })
  }

  sanatizeUrlToSafe(value) {
    this.pdf_viewer_object_values['url'] = this.sanitized.bypassSecurityTrustResourceUrl(value);
  }

  fetchTransactionFessList(tabelFilter?) {
    if (tabelFilter) {
      this.page1 = tabelFilter?.pageIndex ? tabelFilter?.pageIndex : this.page1;
      this.globalPageSize1 = tabelFilter?.pageSize ? tabelFilter?.pageSize : this.globalPageSize1;
    }
    let data = {
      datapoint: 'loan_service',
      endpoint: 'LoanApplicationTransactions',
      source: 'LMS',
      offer_id: this._currBorrowerId,
      page: this.page1,
      limit: this.globalPageSize1,
      txn_status: this.selectedStatus1 ? this.selectedStatus1 : '',
      start_date: this.date2[0] ? moment(this.date2[0]).format("YYYY-MM-DD") : '',
      end_date: this.date2[1] ? moment(this.date2[1]).format("YYYY-MM-DD") : '',
      search_param: this.searchValue1,
      transaction_type: 'Fees Charge',
    }
    this.api_call_loading['fees'] = true
    this.http.fetchLoanApplicationList(data).subscribe(res => {
      this.api_call_loading['fees'] = false
      this.fees_charges_list = res['data']
      this.total_count1 = res.total_count
      // this.message.success(res['message'])
    }, (err) => {
      this.api_call_loading['fees'] = false
    })
  }


  fetchInvoiceList(tabelFilter?) {
    // if (tabelFilter) {
    this.page5 = tabelFilter?.pageIndex ? tabelFilter?.pageIndex : 1;
    this.globalPageSize5 = tabelFilter?.pageSize ? tabelFilter?.pageSize : 100;
    // }
    let data = {
      datapoint: 'loan_service',
      endpoint: 'LoanApplicationInvoice',
      source: 'LMS',
      page: this.page5,
      limit: this.globalPageSize5,
      offer_id: this._currBorrowerId
      // search_param: this.search_params,
      // id: this._currBorrowerId
    }
    this.api_call_loading['invoice'] = true
    this.http.fetchLoanApplicationList(data).subscribe(res => {
      this.api_call_loading['invoice'] = false
      this.invoiceList = res['data']
      this.total_count5 = res.total_count
      // this.message.success(res['message'])
    }, (err) => {
      this.api_call_loading['invoice'] = false
    })
  }

  sendPaymentLink() {
    let data = {
      'source': 'LMS',
      'datapoint': 'send-single-payment-link-url',
      'offer': this._currBorrowerId,
      'amount': this.send_payment_amount
    }
    const generateloader = this.message.loading('Sending link..', { nzDuration: 0 }).messageId;
    this.http.fetchLoanApplicationUpload(data).subscribe(res => {
      this.message.remove(generateloader);
      this.send_payment_amount_popup = false
      this.message.success(res['message'])
    }, (err) => {
      this.message.remove(generateloader);
    })
  }

  pdfViewerAndDownload(title, index) {
    const generateloader = this.message.loading('Generating Report..', { nzDuration: 0 }).messageId;
    var data;
    if (index == 1) {
      data = {
        datapoint: 'download_transaction_letter',
        offer: this._currBorrowerId,
        source: 'LMS',
        start_date: this.selectedDateforStatement[0] ? moment(this.selectedDateforStatement[0]).format("YYYY-MM-DD") : '',
        end_date: this.selectedDateforStatement[1] ? moment(this.selectedDateforStatement[1]).format("YYYY-MM-DD") : '',
      }
      console.log(this.selectedDateforStatement)
    } else if (index == 2) {
      data = {
        datapoint: 'download_outstanding_letter',
        endpoint: this._currBorrowerId,
        source: 'LMS',
      }
    } else if (index == 3) {
      // data = {
      //   datapoint: 'loan_service',
      //   endpoint: this._currBorrowerId,
      //   source: 'LMS',
      // }
    } else if (index == 4) {
      data = {
        datapoint: 'download_closure_letter',
        endpoint: this._currBorrowerId,
        source: 'LMS',
      }
    } else if (index == 5) {
      // data = {
      //   datapoint: 'loan_service',
      //   endpoint: this._currBorrowerId,
      //   source: 'LMS',
      // }
    } else if (index == 6) {
      data = {
        datapoint: 'fetch-application-agreement',
        endpoint: this.borrowertList.loan_application_id,
        source: 'Onboarding',
      }
    }
    if (data) {
      this.http.fetchLoanApplicationList(data).subscribe(res => {
        if (res.success) {
          this.pdf_viewer_object_values['title'] = title
          if (index == 6) {
            this.sanatizeUrlToSafe(res?.data?.agreement)
          } else {
            this.sanatizeUrlToSafe(res?.data?.url)
          }
          this.pdf_viewer_object_values['boolean'] = true

        } else {
          this.message.error(res['message'])
        }
        this.message.remove(generateloader);
        this.isSelectDate = false
      }, (err) => {
        this.message.remove(generateloader);
        this.isSelectDate = false
      });
    }
  }

  is_revese_loading: boolean;
  reverse_amount;
  reverseChargesFunction() {
    let data = new FormData()
    data.append('source', 'LMS'),
      data.append('datapoint', 'reverse_transaction'),
      data.append('endpoint', this.reverseId)
    data.append('amount', this.reverse_amount)
    this.is_revese_loading = true
    this.http.fetchLoanApplicationUpload(data).subscribe(res => {
      this.is_revese_loading = false
      this.isReverseCharges = false
      this.is_set_amt = false
      this.reverseId = ''
      this.message.success(res['message'])
      this.fetchTransactionTxnList()
      this.fetchTransactionFessList();
      this.fetchBorrowerList();
    }, (err) => {
      this.is_revese_loading = false
    })
  }
  is_blocked = '';
  master_product_id = '';
  search_params = '';
  api_calling_loader1: boolean = false;
  fetchBorrowerList(tabelFilter?) {
    if (tabelFilter) {
      this.page = tabelFilter?.pageIndex ? tabelFilter?.pageIndex : this.page;
      this.globalPageSize = tabelFilter?.pageSize ? tabelFilter?.pageSize : this.globalPageSize;
    }
    let data = {
      datapoint: 'loan_service',
      endpoint: 'LoanApplicationAcceptedProduct',
      source: 'LMS',
      page: this.page,
      limit: this.globalPageSize,
      product_id: this.master_product_id,
      is_blocked: this.is_blocked,
      search_param: this.search_params,
      id: this._currBorrowerId
    }
    this.api_calling_loader1 = true
    this.http.fetchLoanApplicationList(data).subscribe(res => {
      this.api_calling_loader1 = false
      this.borrowertList = res['data'][0]
      this.EMandateRegistrationLink();
      this.total_count = res.total_count
      // this.message.success(res['message'])
    }, (err) => {
      this.api_calling_loader1 = false
    })
  }

  api_calling_loader8: boolean = false;
  emandate_link_list: any;
  total_count8: any;
  EMandateRegistrationLink(tabelFilter?) {
    let data = {
      source: 'LMS',
      datapoint: 'loan_service',
      endpoint: 'EMandateRegistrationLink',
      offer_id: this.borrowertList?.id,
      page: tabelFilter?.pageIndex ? tabelFilter?.pageIndex : 1,
      limit: tabelFilter?.pageSize ? tabelFilter?.pageSize : 10,
    }
    this.api_calling_loader8 = true
    this.http.fetchLoanApplicationList(data).subscribe(res => {
      this.api_calling_loader8 = false
      this.emandate_link_list = res.data
      this.total_count8 = res.total_count
      // this.message.success(res['message'])
    }, (err) => {
      this.api_calling_loader8 = false
    })
  }

}
