import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { differenceInCalendarDays } from 'date-fns';
import * as moment from 'moment';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/services/http.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-borrowers-details',
  templateUrl: './borrowers-details.component.html',
  styleUrls: ['./borrowers-details.component.css']
})
export class BorrowersDetailsComponent implements OnInit {

  selectedTab = '1'
  dataSet = [{}, {}]
  isAddPayment = false
  formLoading = false
  paymentTitle = ''
  typeLabel = ''
  isAcClosure = false
  isAcClosureError = false
  isReverseCharges = false
  reverse_type;
  send_payment_amount
  send_payment_amount_popup = false
  reverse_amount;
  isRefundTransaction = false
  isWaiveOff = false
  isChangeBillDate = false
  createAddPaymentOrChargeForm: FormGroup;
  pdf_viewer_object_values = {
    'boolean': false,
    'url': null,
    'title': ''
  }
  isSelectDate;
  borrower_id: any;
  page: any;
  globalPageSize: any;
  page1: any;
  globalPageSize1: any;
  page2: any;
  globalPageSize2: any;
  is_blocked = '';
  master_product_id = '';
  search_params = '';
  api_calling_loader: boolean;
  borrowertList: any;
  total_count: any;
  total_count8: any;
  selectedDateforStatement;
  // selectedType = ''
  // selectedStatus = ''
  // date = ''
  // searchValue = '';
  disabledDate = (current: Date): boolean =>
    // Can not select days before today and today
    differenceInCalendarDays(current, new Date()) > 0;
  selectedType1 = ''
  selectedStatus1 = ''
  date1 = ''
  searchValue1 = '';
  selectedType2 = ''
  selectedStatus2 = ''
  date2 = ''
  searchValue2 = '';
  transaction_repayment_list: any;
  fees_charges_list: any;
  total_count1: any;
  total_count2: any;
  waive_off_type: any;
  waive_off_amount: any;
  waive_off_sub_title: string;

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
  api_calling_loader2: boolean;
  api_calling_loader1: boolean;
  billStatementList: any;
  api_calling_loader3: boolean;
  reverseId: any;
  refundId: any;
  waiveOffId: any;
  isdeleteloader: boolean;
  is_revese_loading: boolean;
  //   Pull SMS Cibil Modals
  isPullSMSCibilPopup: boolean;
  isPullSMSCibilModal: boolean;
  isPullCibil: boolean;
  isFetchCibilSms: boolean = false;
  _isPullData: boolean;
  _isCibil: boolean;
  _currentLoanDetails: any
  page4: any;
  globalPageSize4: any;
  total_count4: any;
  page5: any;
  globalPageSize5: any;
  api_calling_loader5: boolean;
  total_count5: any;
  invoiceList: any;
  final_reverse_amount: any;
  is_set_amt: boolean;
  reverse_sub_title: string;
  refund_type: any;
  refund_amount: any;
  refund_sub_title: string;
  is_refund_loading: boolean;
  api_calling_loader8: boolean;
  page8: any;
  globalPageSize8: any;
  emandate_link_list: any;

  api_calling_loader9: boolean = false;
  payment_page: any
  payment_globalPageSize: any
  total_count_payment: any;
  paymentList : any;
  constructor(private fb: FormBuilder, public http: HttpService, private message: NzMessageService,
    private router: Router,
    private route: ActivatedRoute,
    private sanitized: DomSanitizer, public location: Location) {
    this.route.queryParams.subscribe(params => {
      if (params['id']) {
        this.borrower_id = params['id']
      }
    });
  }

  ngOnInit(): void {
    this.page = 1;
    this.globalPageSize = 100
    this.page1 = 1;
    this.globalPageSize1 = 10
    this.page8 = 1;
    this.globalPageSize8 = 10
    this.page2 = 1;
    this.globalPageSize2 = 10
    this.payment_page = 1;
    this.payment_globalPageSize = 10
  

    this.fetchBorrowerList();
    this.fetchTransactionTxnList();
    this.fetchTransactionFessList();
    this.createAddPaymentOrChargeFormFunction()
    this.fetchBillStatementList();
    this.fetchInvoiceList();
    this.fetchPaymentLinks();
  }

  fetchPaymentLinks(tabelFilter?){
    if (tabelFilter) {
      this.payment_page = tabelFilter?.pageIndex ? tabelFilter?.pageIndex : this.payment_page;
      this.payment_globalPageSize = tabelFilter?.pageSize ? tabelFilter?.pageSize : this.payment_globalPageSize;
    }
    let data = {
      // datapoint: 'loan_service',
      // endpoint: 'LoanApplicationAcceptedProduct',
      // source: 'LMS',
      page: this.payment_page,
      limit: this.payment_globalPageSize,
      // product_id: this.master_product_id,
      // is_blocked: this.is_blocked,
      // search_param: this.search_params,
      // id: this.borrower_id
    }
    this.api_calling_loader9 = true
    this.http.fetchBorrowersPaymentLinks(data,this.borrower_id).subscribe((res :any) => {
      this.api_calling_loader9 = false
      this.paymentList = res.data.results
      this.total_count_payment = res.data.total_count
      // this.message.success(res['message'])
    }, (err) => {
      this.api_calling_loader9 = false
    })
  }

  createAddPaymentOrChargeFormFunction() {
    this.createAddPaymentOrChargeForm = this.fb.group({
      amount: ['', [Validators.required]],
      mode_of_payment: ['', [Validators.required]],
      paid_on: ['', [Validators.required]],
      payment_type: ['', [Validators.required]],
      received_by: ['', [Validators.required]],
    })
  }
  onClickChangeTab(e) {

  }

  addPayment(form) {

  }
  closeAccount() { }

  handleCancel() {
    this.isPullSMSCibilModal = false;
    this.isFetchCibilSms = false;
    this.isPullSMSCibilPopup = false;
    this.pdf_viewer_object_values['boolean'] = false
    this.pdf_viewer_object_values['url'] = null
  }
  sanatizeUrlToSafe(value) {
    this.pdf_viewer_object_values['url'] = this.sanitized.bypassSecurityTrustResourceUrl(value);
  }

  pdfViewerAndDownload(title, index) {
    const generateloader = this.message.loading('Generating Report..', { nzDuration: 0 }).messageId;
    var data;
    if (index == 1) {
      data = {
        datapoint: 'download_transaction_letter',
        offer: this.borrower_id,
        source: 'LMS',
        start_date: this.selectedDateforStatement[0] ? moment(this.selectedDateforStatement[0]).format("YYYY-MM-DD") : '',
        end_date: this.selectedDateforStatement[1] ? moment(this.selectedDateforStatement[1]).format("YYYY-MM-DD") : '',
      }
      console.log(this.selectedDateforStatement)
    } else if (index == 2) {
      data = {
        datapoint: 'download_outstanding_letter',
        endpoint: this.borrower_id,
        source: 'LMS',
      }
    } else if (index == 3) {
      // data = {
      //   datapoint: 'loan_service',
      //   endpoint: this.borrower_id,
      //   source: 'LMS',
      // }
    } else if (index == 4) {
      data = {
        datapoint: 'download_closure_letter',
        endpoint: this.borrower_id,
        source: 'LMS',
      }
    } else if (index == 5) {
      // data = {
      //   datapoint: 'loan_service',
      //   endpoint: this.borrower_id,
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
      id: this.borrower_id
    }
    this.api_calling_loader = true
    this.http.fetchLoanApplicationList(data).subscribe(res => {
      this.api_calling_loader = false
      this.borrowertList = res['data'][0]
      this.EMandateRegistrationLink();
      this.total_count = res.total_count
      // this.message.success(res['message'])
    }, (err) => {
      this.api_calling_loader = false
    })
  }


  

  fetchBillStatementList(tabelFilter?) {
    // if (tabelFilter) {
    this.page4 = tabelFilter?.pageIndex ? tabelFilter?.pageIndex : 1;
    this.globalPageSize4 = tabelFilter?.pageSize ? tabelFilter?.pageSize : 100;
    // }
    let data = {
      datapoint: 'loan_service',
      endpoint: 'LoanApplicationReportDownload',
      source: 'LMS',
      page: this.page4,
      limit: this.globalPageSize4,
      offer_id: this.borrower_id,
      report_type: 'Bill Statement',
      // search_param: this.search_params,
      // id: this.borrower_id
    }
    this.api_calling_loader3 = true
    // fetchLoanApplicationELKList
    this.http.fetchLoanApplicationList(data).subscribe(res => {
      this.api_calling_loader3 = false
      this.billStatementList = res['data']
      this.total_count4 = res.total_count
      // this.message.success(res['message'])
    }, (err) => {
      this.api_calling_loader3 = false
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
      offer_id: this.borrower_id,
      // search_param: this.search_params,
      // id: this.borrower_id
    }
    this.api_calling_loader5 = true
    this.http.fetchLoanApplicationList(data).subscribe(res => {
      this.api_calling_loader5 = false
      this.invoiceList = res['data']
      this.total_count5 = res.total_count
      // this.message.success(res['message'])
    }, (err) => {
      this.api_calling_loader5 = false
    })
  }

  fetchTransactionTxnList(tabelFilter?) {
    if (tabelFilter) {
      this.page2 = tabelFilter?.pageIndex ? tabelFilter?.pageIndex : this.page2;
      this.globalPageSize2 = tabelFilter?.pageSize ? tabelFilter?.pageSize : this.globalPageSize2;
    }
    let data = {
      datapoint: 'loan_service',
      endpoint: 'LoanApplicationTransactions',
      source: 'LMS',
      offer_id: this.borrower_id,
      page: this.page2,
      limit: this.globalPageSize2,
      txn_status: this.selectedStatus2 ? this.selectedStatus2 : '',
      start_date: this.date1[0] ? moment(this.date1[0]).format("YYYY-MM-DD") : '',
      end_date: this.date1[1] ? moment(this.date1[1]).format("YYYY-MM-DD") : '',
      search_param: this.searchValue2,
      transaction_type: 'transactions_and_repayments',
      txn_type: this.selectedType2 ? this.selectedType2 : '',
    }
    this.api_calling_loader2 = true
    this.http.fetchLoanApplicationList(data).subscribe(res => {
      this.api_calling_loader2 = false
      this.transaction_repayment_list = res['data']
      this.total_count2 = res.total_count
      // this.message.success(res['message'])
    }, (err) => {
      this.api_calling_loader2 = false
    })
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
      offer_id: this.borrower_id,
      page: this.page1,
      limit: this.globalPageSize1,
      txn_status: this.selectedStatus1 ? this.selectedStatus1 : '',
      start_date: this.date2[0] ? moment(this.date2[0]).format("YYYY-MM-DD") : '',
      end_date: this.date2[1] ? moment(this.date2[1]).format("YYYY-MM-DD") : '',
      search_param: this.searchValue1,
      transaction_type: 'Fees Charge',
    }
    this.api_calling_loader1 = true
    this.http.fetchLoanApplicationList(data).subscribe(res => {
      this.api_calling_loader1 = false
      this.fees_charges_list = res['data']
      this.total_count1 = res.total_count
      // this.message.success(res['message'])
    }, (err) => {
      this.api_calling_loader1 = false
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
  fetchBorrowerDelete() {
    let data = {
      datapoint: 'wave_off_transaction',
      endpoint: this.waiveOffId,
      source: 'LMS',
      amount: this.waive_off_amount
    }
    this.isdeleteloader = true
    this.http.fetchLoanApplicationDelete(data).subscribe(res => {
      this.isdeleteloader = false
      this.message.success(res['message'])
      this.isWaiveOff = false
      this.is_set_amt = false
      this.waiveOffId = ''
      this.waive_off_type = ''
      this.waive_off_amount = ''
      this.fetchTransactionTxnList()
      this.fetchTransactionFessList();
    }, (err) => {
      this.isdeleteloader = false
      this.isWaiveOff = false
    })
  }
  reverseChargesToggle(id) {
    // this.isReverseCharges = true
    this.reverseId = id
    this.getTnxAmount(id)
  }

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

  setTypeandAmt() {
    if (!this.reverse_type) {
      this.message.error('Please select reverse type')
      return false
    }
    if (!this.reverse_amount) {
      this.message.error('Please enter amount')
      return false
    }
    if (this.reverse_amount > this.final_reverse_amount) {
      this.message.error('Amount should be less than or equal to ' + this.final_reverse_amount)
      return false
    }
    this.is_set_amt = true
    this.reverse_sub_title = 'Amount to be reversed - ₹' + this.reverse_amount + '<br/> Are you sure about performing this action?'
  }

  waiveOffToggle(id) {
    this.waiveOffId = id
    this.getTnxAmount(id)
  }

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

  viewInvoice(file, name) {
    this.pdf_viewer_object_values['title'] = name
    this.sanatizeUrlToSafe(file)
    this.pdf_viewer_object_values['boolean'] = true
  }

  pullDataSMSCibil(type?) {
    this.isPullSMSCibilModal = true
    switch (type) {
      case 'thirdPartyCibil':
        this.isPullSMSCibilModal = true
        this._currentLoanDetails = this.borrowertList?.loan_application_id;
        this._isCibil = true
        break;
      case 'downloadCibil': break
      case 'thirdPartySMS':
        this.isPullSMSCibilModal = true;
        this._currentLoanDetails = this.borrowertList?.user?.user_id
        this._isCibil = false
        break

    }
  }

  refundChargesToggle(id) {
    this.refundId = id
    this.getTnxAmount(id)
  }

  setTypeandAmtrefund() {
    if (!this.refund_type) {
      this.message.error('Please select refund type')
      return false
    }
    if (!this.refund_amount) {
      this.message.error('Please enter amount')
      return false
    }
    if (this.refund_amount > this.final_reverse_amount) {
      this.message.error('Amount should be less than or equal to ' + this.final_reverse_amount)
      return false
    }
    this.is_set_amt = true
    this.refund_sub_title = 'Amount to be refund - ₹' + this.refund_amount + '<br/> Are you sure about performing this action?'
  }
  setTypeandAmtWaiveoff() {
    if (!this.waive_off_type) {
      this.message.error('Please select waive off type')
      return false
    }
    if (!this.waive_off_amount) {
      this.message.error('Please enter amount')
      return false
    }
    if (this.waive_off_amount > this.final_reverse_amount) {
      this.message.error('Amount should be less than or equal to ' + this.final_reverse_amount)
      return false
    }
    this.is_set_amt = true
    this.waive_off_sub_title = 'Amount to be waive off - ₹ ' + this.waive_off_amount + '<br/> Are you sure about performing this action?'
  }

  refundChargesFunction() {
    let data = new FormData()
    data.append('source', 'LMS'),
      data.append('datapoint', 'refund_transaction'),
      data.append('endpoint', this.refundId)
    data.append('amount', this.refund_amount)
    this.is_refund_loading = true
    this.http.fetchLoanApplicationUpload(data).subscribe(res => {
      this.is_refund_loading = false
      this.isRefundTransaction = false
      this.is_set_amt = false
      this.refundId = ''
      this.message.success(res['message'])
    }, (err) => {
      this.is_refund_loading = false
    })
  }

  viewAgreement() {

  }
  captureCollection(bill_id) {
    let data = {
      'source': 'LMS',
      'datapoint': 'mandate_trigger_admin',
      'bill_id': bill_id
    }
    // data.append('source', 'LMS'),
    // data.append('datapoint', 'mandate_trigger_admin'),
    // data.append('bill_id', bill_id)
    const generateloader = this.message.loading('Capturing collection..', { nzDuration: 0 }).messageId;
    this.http.fetchLoanApplicationUpload(data).subscribe(res => {
      this.message.remove(generateloader);
      this.message.success(res['message'])
    }, (err) => {
      this.message.remove(generateloader);
    })
  }

  sendEnachLink(id, type) {
    let data = new FormData()
    // data.append('source', 'LMS'),
    // data.append('datapoint', 'create_mandate_registration_link'),
    data.append('auth_type', type),
      data.append('accepted_offer_id', id)
    const generateloader = this.message.loading('Sending link..', { nzDuration: 0 }).messageId;
    this.http.sendEmandateLink(data).subscribe(res => {
      this.message.remove(generateloader);
      this.message.success(res['message'])
      this.EMandateRegistrationLink()
    }, (err) => {
      this.message.remove(generateloader);
    })
  }

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
  sendPaymentLink() {
    let data = {
      'source': 'LMS',
      'datapoint': 'send-single-payment-link-url',
      'offer': this.borrower_id,
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

  isbifurcationModal: boolean = false;
  _currbifurcaton:any;
  viewbifurcation(){
    let data = { 'offer_id': this.borrower_id, }
    this.http.getOutstandingBifurcation(data).subscribe((res:any)=>{
      if(res.success){
        this._currbifurcaton = res.data
      }
    })
  }
}
