import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { differenceInCalendarDays } from 'date-fns';
import * as moment from 'moment';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/services/http.service';
import { GlobalservicesService } from 'src/app/shared/globalservices.service';

@Component({
  selector: 'app-borrowers-list',
  templateUrl: './borrowers-list.component.html',
  styleUrls: ['./borrowers-list.component.css']
})
export class BorrowersListComponent implements OnInit {
  borrowertList;
  isVisible = false
  page: any
  start_month
  time_period_arr = [
    { name: 'January', value: 1 },
    { name: 'February', value: 2 },
    { name: 'March', value: 3 },
    { name: 'April', value: 4 },
    { name: 'May', value: 5 },
    { name: 'June', value: 6 },
    { name: 'July', value: 7 },
    { name: 'August', value: 8 },
    { name: 'September', value: 9 },
    { name: 'October', value: 10 },
    { name: 'November', value: 11 },
    { name: 'December', value: 12 }
  ]
  api_calling_loader: boolean;
  total_count = 0;
  search_params = '';
  globalPageSize: number;
  is_spend = ''
  expandSet = new Set<number>();
  _currentId: any;
  _activeLoans: any = [];
  loanApplicationData: any = [];

  selectedCorporate: any;
  master_product_id = '';
  is_blocked;
  is_active: any;
  corporateList: any[];
  debounce: any;
  api_calling_loader_accordian: boolean;
  corporate_Id: any;
  month: any;
  storedParams: any;
  date = ''
  disbursement_date = ''
  selectedTab;
  reason = ''
  error_description = ''
  isRefundActive: boolean = false;
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
  main_stage: any;
  borrowersSubStageCount: any;
  sub_stage = ''
  product_type = ''
  all_count = 0
  isVisibleThirdPartyResp: boolean;
  thirdPartyDataResponse: any;
  _isUpdateStatus: boolean;
  isFetchCibilSms: boolean;
  _currentLoanDetails: any;
  private _isCibil: boolean;
  showReason: boolean;
  app_prod_type = '';
  xmlLoader: boolean;
  isSettlementVisible = false
  selectedSettleID;
  settleRemarks = ''
  settleloading: boolean;
  constructor(public http: HttpService, private message: NzMessageService,
    private router: Router, private fb: FormBuilder,
    public sanitize: DomSanitizer,
    private route: ActivatedRoute, public global: GlobalservicesService) {
    this.route.queryParams.subscribe((params: any) => {
      if (params?.main_stage == undefined) {
        router.navigate([], {
          queryParams: {
            'main_stage': ''
          }
        })
      } else {
        this.main_stage = params?.main_stage ? params?.main_stage : ''
        this.setBorrowersSubCount()
      }
      if (params?.loan_id) {
        // alert(params?.loan_id);
        this.storedParams = params?.loan_id
        this.search_params = params?.loan_id;
        this.setBorrowersSubCount();
      }
    });

    this.global.setBorrowersStageCount();
  }

  ngOnInit(): void {
    this.page = 1;
    this.globalPageSize = 100
  }

  setBorrowersSubCount() {
    this.api_calling_loader = true
    let param = { 'stage_type': 'SUB', 'stage_master': this.main_stage ? this.main_stage : 0 }
    this.http.getBorrowersStageCount(param).subscribe((res: any) => {
      this.borrowersSubStageCount = res?.data
      // this.sub_stage = this.borrowersSubStageCount[0] ? this.borrowersSubStageCount[0].pk : ''
      this.fetchBorrowerList()
    });
  }

  fetchBorrowerList(tabelFilter?) {
    // if (tabelFilter) {
    this.page = tabelFilter?.pageIndex ? tabelFilter?.pageIndex : 1;
    this.globalPageSize = tabelFilter?.pageSize ? tabelFilter?.pageSize : 30;
    // }
    let data = {
      datapoint: 'loan_service',
      endpoint: 'LoanApplicationAcceptedProduct',
      source: 'LMS',
      page: this.page,
      limit: this.globalPageSize,
      product_type: this.master_product_id ? this.master_product_id : '',
      is_blocked: this.is_blocked ? (this.is_blocked == 1 ? false : true) : '',
      search_param: this.search_params ? this.search_params : '',
      account_status: this.is_active ? this.is_active : '',
      corporate_id: this.selectedCorporate ? this.selectedCorporate : '',
      spent: this.is_spend ? this.is_spend : '',
      from_date: this.date[0] ? moment(this.date[0]).format("YYYY-MM-DD") : '',
      to_date: this.date[1] ? moment(this.date[1]).format("YYYY-MM-DD") : '',
      from_disbursement_date: this.disbursement_date[0] ? moment(this.disbursement_date[0]).format("YYYY-MM-DD") : '',
      to_disbursement_date: this.disbursement_date[1] ? moment(this.disbursement_date[1]).format("YYYY-MM-DD") : '',
      sub_stage: this.sub_stage ? this.sub_stage : '',
      main_stage: this.main_stage ? this.main_stage : '',
      app_prod_type: this.app_prod_type ? this.app_prod_type : ''
    }

    if (this.selectedCorporate) {
      // data['page'] = 1
      data['corporate_id'] = this.selectedCorporate
    }

    this.api_calling_loader = true
    this.http.fetchLoanApplicationList(data).subscribe(res => {
      this.api_calling_loader = false
      this.borrowertList = res['data']
      if (!this.sub_stage) {
        this.all_count = res.total_count
      }
      this.total_count = res.total_count
      // this.message.success(res['message'])
    }, (err) => {
      this.api_calling_loader = false
    })
  }
  resetFilters() {
    if (this.storedParams) {
      this.router.navigate(["lms/borrowers/all"], { queryParams: { main_stage: this.main_stage } });
    }
    this.search_params = ''
    this.is_blocked = ''
    this.master_product_id = ''
    this.is_active = ''
    this.selectedCorporate = []
    this.is_spend = ''
    this.date = ''
    this.disbursement_date = ''
    this.app_prod_type = ''
    this.setBorrowersSubCount()
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
  // export function
  exportGlobalFunction(file_formate) {
    let data = {
      datapoint: 'export_borrowers',
      // endpoint: 'LoanApplicationTransactions',
      source: 'LMS',
      page: this.page,
      limit: this.globalPageSize,
      product_type: this.master_product_id ? this.master_product_id : '',
      is_blocked: this.is_blocked ? (this.is_blocked == 1 ? false : true) : '',
      search_param: this.search_params ? this.search_params : '',
      account_status: this.is_active ? this.is_active : '',
      corporate_id: this.selectedCorporate ? this.selectedCorporate : '',
      spent: this.is_spend ? this.is_spend : '',
      file_type: file_formate
    }
    const generateloader = this.message.loading('Generating File..', { nzDuration: 0 }).messageId;
    this.http.fetchLoanApplicationListExportGet(data).subscribe(res => {
      this.http.exportMasterSectionModule(res, 'borrowers_list', file_formate, generateloader)
      this.isVisible = false
    })
  }

  pdfData: any;
  pdf_viewer_object_values = {
    'boolean': false,
    'url': null,
    'title': ''
  }
  fetchCibilPDF(id) {
    let data = {
      datapoint: "loan_application",
      endpoint: `UserKycCibil?loan_application=` + id,
      source: "Onboarding",
    };
    const generateloader = this.message.loading('Generating PDF..', { nzDuration: 0 }).messageId;
    this.http.fetchLoanApplicationList(data).subscribe((res: any) => {
      if (res?.data?.results[0]?.credit_pdf) {
        this.pdf_viewer_object_values['title'] = 'Show Cibil PDF'
        // this.pdf_viewer_object_values['url'] = res?.data?.results[0]?.credit_pdf
        this.pdfData = this.sanitize.bypassSecurityTrustResourceUrl(res?.data?.results[0]?.credit_pdf);
        this.pdf_viewer_object_values['boolean'] = true
        this.message.remove(generateloader);
        console.log(this.router.url)
      } else {
        this.message.remove(generateloader);
        this.message.error('No Cibil PDF Found');
      }
      // this.pdfData = res?.data?.results[0];
    }, error => {
      this.message.remove(generateloader);
      console.log(error);
    })
  }

  handleCancel() {
    this.pdf_viewer_object_values['boolean'] = false
    this.showReason = false
    this.isSettlementVisible = false
    this.settleRemarks = ''
  }

  exportOutstandingGlobalFunction(file_formate) {
    let data = {
      datapoint: 'export_outstanding_data',
      endpoint: this.corporate_Id,
      source: 'LMS',
      month: moment(this.start_month).format("MM"),
      year: moment(this.start_month).format("YYYY"),
    }
    const generateloader = this.message.loading('Generating File..', { nzDuration: 0 }).messageId;
    this.http.fetchLoanApplicationListExportGet(data).subscribe(res => {
      // if (!res?.success) {
      //   this.message.remove(generateloader);
      //   this.message.warning('Data not found')
      // } else {
      this.http.exportMasterSectionModule(res, 'outstanding_list', file_formate, generateloader)
      // }
      this.isVisible = false
    })
  }

  exportGlobalFunctionTnx(file_formate, offer_id) {
    console.log(offer_id);
    const stringName: string = offer_id?.loan_application_id + '_' + offer_id?.user?.full_name
    // console.log(name);
    // return;
    let data = {
      datapoint: 'lender_master_export',
      endpoint: 'LoanApplicationTransactions',
      source: 'LMS',
      offer_id: offer_id?.id,
      file_type: file_formate
    }
    const generateloader = this.message.loading('Generating File..', { nzDuration: 0 }).messageId;
    this.http.fetchLoanApplicationListExportGet(data).subscribe(res => {
      this.http.exportMasterSectionModule(res, stringName, file_formate, generateloader)
    })
  }


  onExpandChange(id: number, checked: boolean, index?): void {

    if (checked) {
      this.expandSet.clear()
      this._currentId = id
      this.expandSet.add(id);
      this.http.expnadList.next(this.expandSet)
    } else {
      this.expandSet.delete(id);
      console.log('Deleted array of active ids', this._activeLoans);
    }
  }
  getIdWiseData(id?, index?) {
    this.api_calling_loader_accordian = true;
    let data = { 'datapoint': 'loan_application', 'endpoint': 'LoanApplication?id=' + id, 'source': 'Onboarding' };
    this.http.fetchLoanApplicationList(data).subscribe(res => {
      if (res) {
        this.api_calling_loader_accordian = false;
        this._activeLoans.push(res?.data?.results[0]);
        this.borrowertList[index].expanddata = res?.data?.results[0];
      } else {
        this.api_calling_loader_accordian = false;
      }
    }, error => {
      this.api_calling_loader_accordian = false;
    })
  }
  getCorporateWithBillDate() {
    let data = {
      id: this.corporate_Id
    };
    this.http.getCorporateWithBillDate(data).subscribe(res => {
      this.month = res['data'][0].bill_date_fetched_from.bill_day
      // this.message.success(res['message'])
    })
  }

  holdIgnoreMandateTrigger(offer_id, ignore_enach_trigger) {
    let data = {
      datapoint: 'enach_trigger_ignore_toggle',
      endpoint: offer_id,
      source: 'LMS',
      ignore_enach_trigger: !ignore_enach_trigger
    }
    const generateloader = this.message.loading('Ignoring Enach trigger..', { nzDuration: 0 }).messageId;
    this.http.moveApplication(data).subscribe(res => {
      this.message.remove(generateloader)
      this.setBorrowersSubCount()
      this.message.success(res['message'])
    }, (err) => {
      this.message.remove(generateloader)
    })
  }

  sendEnachLink(id, type) {
    let data = new FormData()
    // data.append('source', 'LMS'),
    //   data.append('datapoint', 'create_mandate_registration_link'),
    data.append('auth_type', type),
      data.append('accepted_offer_id', id)
    const generateloader = this.message.loading('Sending link..', { nzDuration: 0 }).messageId;
    this.http.sendEmandateLink(data).subscribe(res => {
      this.message.remove(generateloader);
      this.message.success(res['message'])
      // this.EMandateRegistrationLink()
    }, (err) => {
      this.message.remove(generateloader);
    })
  }
  onClickShowJSONPreview(res) {
    this.isVisibleThirdPartyResp = true
    this.xmlLoader = true;
    this.thirdPartyDataResponse = res
    this.xmlLoader = false;
  }
  // Get Cibil Data API
  getCibilScoreData(type?, id?) {
    this._isUpdateStatus = true
    this.isFetchCibilSms = true;
    let data = { source: 'Onboarding', endpoint: id }
    if (type == 'cibil' && id) {
      this._isCibil = true;
      this._currentLoanDetails = id

    } else if (type == 'sms' && id) {
      this._isCibil = false;
      this._currentLoanDetails = id
    }
  }
  getBlockReason(id) {
    const generateloader = this.message.loading('Fetching reasons..', { nzDuration: 0 }).messageId;
    this.http.getBlockReason(id).subscribe(res => {
      if (res['success']) {
        this.reason = res['data']
        this.showReason = true
      }
      this.message.remove(generateloader);
    }, (err) => {
      this.message.remove(generateloader);
    })
  }

  pdfViewerAndDownload(title, index, id) {
    const generateloader = this.message.loading('Generating Report..', { nzDuration: 0 }).messageId;
    var data;
    if (index == 1) {
      data = {
        datapoint: 'fetch-kfs-document',
        endpoint: id,
        source: 'Onboarding',
      }
    } else if (index == 2) {
      data = {
        datapoint: 'fetch-sanction-letter',
        endpoint: id,
        source: 'Onboarding',
      }
    } else if (index == 3) {
      data = {
        datapoint: 'fetch-salary-agreement',
        endpoint: id,
        source: 'Onboarding',
      }
    } else if (index == 4) {
      data = {
        datapoint: 'fetch-application-agreement',
        endpoint: id,
        source: 'Onboarding',
      }
    }
    if (data) {
      this.http.fetchLoanApplicationList(data).subscribe(res => {
        if (res.success) {
          this.pdf_viewer_object_values['title'] = title
          this.sanatizeUrlToSafe(res?.data?.agreement)
          this.pdf_viewer_object_values['boolean'] = true

        } else {
          this.message.error(res['message'])
        }
        this.message.remove(generateloader);
        // this.isSelectDate = false
      }, (err) => {
        this.message.remove(generateloader);
        // this.isSelectDate = false
      });
    }
  }

  sanatizeUrlToSafe(value) {
    this.pdf_viewer_object_values['url'] = this.sanitize.bypassSecurityTrustResourceUrl(value);
  }

  setValuetoSettlement(id) {
    this.isSettlementVisible = true
    this.selectedSettleID = id
  }

  dpdSettlement() {
    var data = {
      offer: this.selectedSettleID,
      change_type: 'SETTLE',
      remarks: this.settleRemarks
    }
    this.settleloading = true
    this.http.dpdSettlement(data).subscribe(res => {
      if (res['success']) {
        this.message.success(res['message'])
      } else {
        this.message.error(res['message'])
      }
      this.settleloading = false
      this.handleCancel()
      this.borrowertList()
      // this.isSelectDate = false
    }, (err) => {
      this.settleloading = false
      // this.isSelectDate = false
    });
  }

  _currOfferId: any
  _currLoanId : any
  openRefundModal(loan_id,id) {
    this._currOfferId = id;
    this.http.getBankDetails(loan_id).subscribe((res: any) => {
      if (res.success) {
        this.createRefundForm(res.data.bank_details, id)
        this.isRefundActive = true
      } else {
        this.message.error(res.message)
      }
    })
  }

  refundForm: FormGroup;
  createRefundForm(data, id) {
    this.refundForm = this.fb.group({

      amount: ['', [Validators.required, Validators.min(1)]],

      ifsc_code: [data ? data?.ifsc_code : '', [Validators.required, Validators.pattern("^[A-Z]{4}0[A-Z0-9]{6}$")]],
      account_number: [data ? data?.account_no : '', [Validators.required]],
      account_holder_name: [data ? data?.account_holder_name : '', [Validators.required]],

    })
  }
  buttonLoader: boolean = false;
  onRefundInititate() {
    this.buttonLoader = true;
    let form = new FormData();
    form.append('offer_id', this._currOfferId)
    form.append('txn_type', 'Refund')
    form.append('source', 'Onboarding')
    form.append('datapoint', 'disburse_or_refund_payments')
    form.append('amount', this.refundForm.value.amount)
    form.append('ifsc_code', this.refundForm.value.ifsc_code)
    form.append('account_number', this.refundForm.value.account_number)
    form.append('account_holder_name', this.refundForm.value.account_holder_name)

    this.http.createRefund(form).subscribe((res: any) => {
      if (res.success) {
        this.buttonLoader = false;
        this.message.success(res.message);
        this.isRefundActive = false;
        this.refundForm.reset();
        this.expandSet.clear()
        this.fetchBorrowerList()
      } else {
        this.buttonLoader = false;
      }
    }, error => {
      this.buttonLoader = false;
      this.isRefundActive = false;
      this.refundForm.reset();
    })
  }
}
