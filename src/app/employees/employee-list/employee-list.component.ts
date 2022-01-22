import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
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
  api_calling_loader: boolean;
  total_count: any;
  employeeList: any;
  deactivated: any = '';
  roleData: any;
  roles = ''
  isDelete = false;
  isEdit = false
  isChangePassword = false
  createEditForm: any;
  teamName = [
    {name: 'Admin'},
    {name: 'Leads'},
    {name: 'Operations'},
    {name: 'Collection'},
    {name: 'Marketing'},
    {name: 'Sales'},
  ]
  formLoading: boolean;
  idForDeleteEmployee: any;
  employeeManagerList: any;
  changePasswordForm: any;

  constructor(public http: HttpService, private message: NzMessageService,
    private router : Router,
    private route: ActivatedRoute,private fb: FormBuilder,) { }

  ngOnInit(): void {
    this.fetchEmployeeList()
  }
  createEditFormFunction(data?) {
    this.createEditForm = this.fb.group({
      id: [data ? data.id : ''],
      first_name: [data ? data.first_name : ''],
      last_name: [data ? data.last_name : ''],
      unique_code: [data ? data.unique_code : ''],
      role: [data ? data.role?.id : ''],
      associated_team: [data ? data.associated_team : ''],
      reporting_manager: [data ? data.reporting_manager?.id : ''],
      mobile: [data ? data.mobile : ''],
      email: [data ? data.email : ''],
      is_active: [data ? data.is_active : '']
    })
  }
  changePasswordFormFunction(data?) {
    this.changePasswordForm = this.fb.group({
      id: [data ? data.id : ''],
      name: [data? data.first_name : ''],
      code: [data ? data.unique_code : ''],
      mobile: [data ? data.mobile : ''],
      new_password: [''],
      retype_password: [''],
    })
  }
  
  fetchEmployeeList() {
    let data = {
      page: this.page,
      deactivated: this.deactivated,
      name: this.search_params,
      role: this.roles,
    }
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
    this.fetchEmployeeList();
  }

  editEmployee(data) {
    this.formLoading = true
    this.http.addEditEmployee(data).subscribe(res => {
      this.formLoading = false
      this.isEdit = false
      this.isDelete = false
      this.message.success(res['message'])
      this.fetchEmployeeList()
    })
  }

  editEmployeeFunction(data) {
    this.isEdit = true;
    this.fetchEmployeeManagerList()
    this.fetchRoles()
    this.createEditFormFunction(data)
  }
  deleteEmployeeFunction(id) {
    this.isDelete = true
    this.idForDeleteEmployee = id
  }
  deleteEmployee() {
    var data = {id: this.idForDeleteEmployee, is_deleted: true}
    this.editEmployee(data)
  }

  fetchEmployeeManagerList() {
    let data;
    this.http.fetchEmployeeManagerList(data).subscribe(res => {
      this.employeeManagerList = res['data'].results
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
}
