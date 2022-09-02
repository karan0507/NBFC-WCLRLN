import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { differenceInCalendarDays } from 'date-fns';
import * as moment from 'moment';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-referral-code',
  templateUrl: './referral-code.component.html',
  styleUrls: ['./referral-code.component.css']
})
export class ReferralCodeComponent implements OnInit {

  selectedTab = 'PENDING'
  page = 1;
  globalPageSize = 30
  api_calling_loader: boolean;
  total_count: any;
  list_data: any;
  date = ''
  search_params = ''
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
  status = ''
  partnerId: any;
  isAddEdit;
  modalTitle = 'Add Referral'
  createEditForm: FormGroup;
  formLoading: any;
  isEdit: any;
  
  constructor(public http: HttpService, private message: NzMessageService,
    private router: Router,
    private route: ActivatedRoute, private fb: FormBuilder,) {
      this.route.queryParams.subscribe((params) => {
        if (params["id"]) {
          this.partnerId = params["id"];
          if (this.partnerId) {
            this.fetchReferralList();
          }
        }
      });
     }

  ngOnInit(): void {
    this.createEditFormFunction()
  }

  fetchReferralList(tableFilter?) {
    this.page = tableFilter?.pageIndex ? tableFilter?.pageIndex : 1;
    this.globalPageSize = tableFilter?.pageSize ? tableFilter?.pageSize : 30;
    let data = {
      page: this.page,
      search_param: this.search_params ? this.search_params : '',
      limit: this.globalPageSize,
      // start_date: this.date[0] ? moment(this.date[0]).format("YYYY-MM-DD") : '',
      // end_date: this.date[1] ? moment(this.date[1]).format("YYYY-MM-DD") : '',
      status: this.selectedTab ? this.selectedTab : '',
      corporate: this.partnerId ? this.partnerId : ''
    }
    this.api_calling_loader = true
    this.http.fetchReferralList(data).subscribe(res => {
      this.api_calling_loader = false
      this.list_data = res['data'].results
      this.total_count = res['data']['total_count']
      // this.message.success(res['message'])
    }, (err) => {
      this.api_calling_loader = false
    })
  }
  resetFilters() {
    this.selectedTab = ''
    this.search_params = ''
    this.fetchReferralList();
  }

  toggleReferralStatus(id) {
    this.http.toggleReferralStatus(id).subscribe(res => {
      if (res['success']) {
        this.message.success(res['message'])
        this.fetchReferralList();
      } else {
        this.message.error(res['message'])
      }
    }, (err) => {
      this.api_calling_loader = false
    })
  }

  createEditFormFunction(data?) {
    if (data) {
      this.createEditForm = this.fb.group({
        id: [data ? data.id : ''],
        name: [data ? data.name : '', [Validators.required]],
        referrer_amount: [data ? data.referrer_amount : '', [Validators.required]],
        referee_amount: [data ? data.referee_amount : '', [Validators.required]],
        referrer_max_amount_month: [data ? data.referrer_max_amount_month : '', [Validators.required]],
        referrer_max_amount_year: [data ? data.referrer_max_amount_year : ''],
        referrer_max_amount_lifetime: [data ? data.referrer_max_amount_lifetime : '', [Validators.required]],
        activation_date: [data ? data.activation_date : '', [Validators.required]],
        expiry_date: [data ? data.expiry_date : '', [Validators.required]],
        corporate: [ this.partnerId]
      })
    } else {
      this.createEditForm = this.fb.group({
        name: ['', [Validators.required]],
        referrer_amount: ['', [Validators.required]],
        referee_amount: ['', [Validators.required]],
        referrer_max_amount_month: ['', [Validators.required]],
        referrer_max_amount_year: [''],
        referrer_max_amount_lifetime: ['', [Validators.required]],
        activation_date: ['', [Validators.required]],
        expiry_date: ['', [Validators.required]],
        corporate: [ this.partnerId]
      })
    }
  }
  addReferral() {
    var data = new FormData()
    this.createEditForm.get('activation_date').setValue(moment(this.createEditForm.get('activation_date').value).format("YYYY-MM-DD"))
    this.createEditForm.get('expiry_date').setValue(moment(this.createEditForm.get('expiry_date').value).format("YYYY-MM-DD"))
    data = this.createEditForm.value

    this.formLoading = true

    this.http.createReferral(data).subscribe(res => {
      if (res['success']) {
        this.isAddEdit = false
        this.fetchReferralList()
        this.message.success(res['message'])
      } else {
        this.message.error(res['message'])
      }
      this.formLoading = false
    }, (err) => {
      this.formLoading = false
    })

  }

  editReferral() {
    var data = new FormData()
    this.createEditForm.get('activation_date').setValue(moment(this.createEditForm.get('activation_date').value).format("YYYY-MM-DD"))
    this.createEditForm.get('expiry_date').setValue(moment(this.createEditForm.get('expiry_date').value).format("YYYY-MM-DD"))
    data = this.createEditForm.value

    this.formLoading = true

    this.http.editReferral(data).subscribe(res => {
      if (res['success']) {
        this.isAddEdit = false
        this.fetchReferralList()
        this.message.success(res['message'])
      } else {
        this.message.error(res['message'])
      }
      this.formLoading = false
    }, (err) => {
      this.formLoading = false
    })

  }

  submitForm() {
    if (this.isEdit) {
      this.editReferral()
    } else {
      this.addReferral()
    }
  }
}