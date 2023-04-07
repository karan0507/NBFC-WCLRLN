import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { differenceInCalendarDays } from 'date-fns';
import * as moment from 'moment';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-cashback',
  templateUrl: './cashback.component.html',
  styleUrls: ['./cashback.component.css']
})
export class CashbackComponent implements OnInit {
  selectedTab = ''
  page = 1;
  globalPageSize = 100
  api_calling_loader: boolean;
  total_count: any;
  list_data: any;
  date = ''
  search_params = ''
  disabledDatePre = (current: Date): boolean =>
  // Can not select days before today and today
  differenceInCalendarDays(new Date(), current) > 0;

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
  modalTitle = 'Add Cashback'
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
            this.fetchCashbackList();
          }
        }
      });
     }

  ngOnInit(): void {
    this.createEditFormFunction()
  }

  fetchCashbackList(tableFilter?) {
    this.page = tableFilter?.pageIndex ? tableFilter?.pageIndex : 1;
    this.globalPageSize = tableFilter?.pageSize ? tableFilter?.pageSize : 100;
    let data = {
      page: this.page,
      search_param: this.search_params ? this.search_params : '',
      limit: this.globalPageSize,
      // start_date: this.date[0] ? moment(this.date[0]).format("YYYY-MM-DD") : '',
      // end_date: this.date[1] ? moment(this.date[1]).format("YYYY-MM-DD") : '',
      status: this.selectedTab ? this.selectedTab : '',
      corporate_id: this.partnerId ? this.partnerId : ''
    }
    this.api_calling_loader = true
    this.http.fetchCashbackList(data).subscribe(res => {
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
    this.fetchCashbackList();
  }

  toggleCashbackStatus(id) {
    this.http.toggleCashbackStatus(id).subscribe(res => {
      if (res['success']) {
        this.message.success(res['message'])
        this.fetchCashbackList();
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
        cashback_amount: [data ? data.cashback_amount : '', [Validators.required]],
        convenience_fee_waived: [data ? data.convenience_fee_waived : false],
        max_users: [data ? data.max_users : '', [Validators.required]],
        end_date: [data ? data.end_date : '', [Validators.required]],
        start_date: [data ? data.start_date : '', [Validators.required]],
        corporate: [ this.partnerId]
      })
    } else {
      this.createEditForm = this.fb.group({
        name: ['', [Validators.required]],
        cashback_amount: ['', [Validators.required]],
        convenience_fee_waived: [false],
        max_users: ['', [Validators.required]],
        end_date: ['', [Validators.required]],
        start_date: ['', [Validators.required]],
        corporate: [ this.partnerId]
      })
    }
  }
  addReferral() {
    var data = new FormData()
    this.createEditForm.get('end_date').setValue(moment(this.createEditForm.get('end_date').value).format("YYYY-MM-DD"))
    this.createEditForm.get('start_date').setValue(moment(this.createEditForm.get('start_date').value).format("YYYY-MM-DD"))
    this.createEditForm.get('corporate').setValue(this.partnerId)
    data = this.createEditForm.value

    this.formLoading = true

    this.http.createCashback(data).subscribe(res => {
      if (res['success']) {
        this.isAddEdit = false
        this.fetchCashbackList()
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
    this.createEditForm.get('end_date').setValue(moment(this.createEditForm.get('end_date').value).format("YYYY-MM-DD"))
    this.createEditForm.get('start_date').setValue(moment(this.createEditForm.get('start_date').value).format("YYYY-MM-DD"))
    this.createEditForm.get('corporate').setValue(this.partnerId)
    data = this.createEditForm.value

    this.formLoading = true

    this.http.editCashback(data).subscribe(res => {
      if (res['success']) {
        this.isAddEdit = false
        this.fetchCashbackList()
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
