import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { differenceInCalendarDays } from 'date-fns';
import * as moment from 'moment';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/services/http.service';



@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  search_params = ''
  page = 1
  disabledDate = (current: Date): boolean =>
    // Can not select days before today and today
    differenceInCalendarDays(current, new Date()) > 0;
  api_calling_loader: boolean;
  total_count: any;
  employeeList: any = [];
  deactivated: any = '';
  roleData: any;
  roles = ''
  isDelete = false;
  isEdit = false
  isChangePassword = false
  date = ''

  isView: boolean = false;
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
  createEditForm: any;
  teamName = [
    { name: 'Admin' },
    { name: 'Leads' },
    { name: 'Operations' },
    { name: 'Collection' },
    { name: 'Marketing' },
    { name: 'Sales' },
  ]
  formLoading: boolean;
  idForDeleteEmployee: any;
  employeeManagerList: any;
  changePasswordForm: any;
  globalPageSize: number;
  modalTitle: string;

  constructor(public http: HttpService, private message: NzMessageService,
    private router: Router,
    private route: ActivatedRoute, private fb: FormBuilder,) { }

  ngOnInit(): void {
    this.page = 1;
    this.globalPageSize = 30
    this.fetchEmployeeList()
    this.createEditFormFunction()
  }


  createEditFormFunction(data?) {
    if (data) {
      this.createEditForm = this.fb.group({
        id: [data ? data.id : '', [Validators.required]],
        first_name: [data ? data.first_name : '', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
        last_name: [data ? data.last_name : '', [Validators.required, Validators.pattern('[a-zA-Z ]+')]],
        unique_code: [data ? data.unique_code : '', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
        role: [data ? data.role?.id : '', [Validators.required]],
        associated_team: [data ? data.associated_team : ''],
        reporting_manager: [data ? data.reporting_manager?.id : ''],
        mobile: [data ? data.mobile : '', [Validators.required, Validators.pattern('[0-9]{10}')]],
        email: [data ? data.email : '', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
        is_active: [data ? data.is_active : '', [Validators.required]]
      })
    } else {
      this.createEditForm = this.fb.group({
        first_name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]+')]],
        last_name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]+')]],
        unique_code: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
        role: ['', [Validators.required]],
        associated_team: [''],
        reporting_manager: [''],
        mobile: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
        email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
        is_active: ['', [Validators.required]]
      })
    }
  }
  changePasswordFormFunction(data?) {
    this.changePasswordForm = this.fb.group({
      id: [data ? data.id : ''],
      name: [data ? data.first_name : ''],
      code: [data ? data.unique_code : ''],
      mobile: [data ? data.mobile : ''],
      new_password: [''],
      retype_password: [''],
    })
  }

  fetchEmployeeList(tabelFilter?) {
    // if (tabelFilter) {
    this.page = tabelFilter?.pageIndex ? tabelFilter?.pageIndex : 1;
    this.globalPageSize = tabelFilter?.pageSize ? tabelFilter?.pageSize : 30;
    // }
    let data = {
      page: this.page,
      deactivated: this.deactivated ? this.deactivated : '',
      name: this.search_params ? this.search_params : '',
      role: this.roles ? this.roles : '',
      limit: this.globalPageSize,
      from_date: this.date[0] ? moment(this.date[0]).format("YYYY-MM-DD") : '',
      to_date: this.date[1] ? moment(this.date[1]).format("YYYY-MM-DD") : '',
    }
    this.employeeList = null
    this.total_count = null
    this.api_calling_loader = true
    this.http.fetchEmployeeList(data).subscribe(res => {
      this.api_calling_loader = false
      this.employeeList = res['data'].results
      this.total_count = res['data'].total_count
      // this.message.success(res['message'])
    }, (err) => {
      this.api_calling_loader = false
    })
  }


  fetchRoles() {
    let data;
    this.http.fetchRoles(data).subscribe(res => {
      this.roleData = res['data'].results
      // this.message.success(res['message'])
    })
  }

  resetFilters() {
    this.search_params = ''
    this.deactivated = ''
    this.roles = ''
    this.date = ''
    this.fetchEmployeeList();
  }

  editEmployee(data) {
    this.formLoading = true
    if (data?.id) {
      this.http.addEditEmployee(data).subscribe(res => {
        this.formLoading = false
        this.isEdit = false
        this.isDelete = false
        this.message.success(res['message'])
      }, (err) => {
        this.formLoading = false
      })
    } else {
      this.http.addEmployee(data).subscribe(res => {
        this.formLoading = false
        this.isEdit = false
        this.isDelete = false
        this.message.success(res['message'])
        this.createEditForm.reset()
      }, (err) => {
        this.formLoading = false
      })
    }
  }

  editEmployeeFunction(data) {
    this.isEdit = true;
    this.modalTitle = 'Edit Employee'
    this.fetchEmployeeManagerList()
    this.fetchRoles()
    this.createEditFormFunction(data)
  }
  deleteEmployeeFunction(id) {
    this.http.toggleEmployeeStatus(id).subscribe(res => {
      if (res['success']) {
        this.message.success(res['message'])
        this.fetchEmployeeList();
      } else {
        this.message.error(res['message'])
      }
    })
  }
  deleteEmployee() {
    var data = { id: this.idForDeleteEmployee, is_deleted: true }
    this.editEmployee(data)
  }

  fetchEmployeeManagerList() {
    let data;
    this.http.fetchEmployeeManagerList(data).subscribe(res => {
      this.employeeManagerList = res['data']?.results
    })
  }

  changePasswordFunction(data) {
    this.isChangePassword = true;
    this.changePasswordFormFunction(data)
  }

  changePassword() {
    if (!this.changePasswordForm.value.new_password) {
      this.message.error('Please fill new Password')
      return;
    }
    if (!this.changePasswordForm.value.retype_password) {
      this.message.error('Please fill confirm Password')
      return;
    }
    if (this.changePasswordForm.value.new_password !== this.changePasswordForm.value.retype_password) {
      this.message.error('should New password and confirm Password both are same')
      return;
    }
    if (this.changePasswordForm.value.new_password && this.changePasswordForm.value.retype_password) {
      delete this.changePasswordForm.value.code
      delete this.changePasswordForm.value.name
      this.http.changePasswordByAdmin(this.changePasswordForm.value).subscribe(res => {
        this.isChangePassword = false
        this.message.success(res['message'])
        this.fetchEmployeeList()
      })
    }
  }
  hidePassword() {
    if (this.isView) {
      this.isView = false;
    } else {
      this.isView = true
    }

  }
}
