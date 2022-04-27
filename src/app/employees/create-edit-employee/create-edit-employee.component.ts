import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-create-edit-employee',
  templateUrl: './create-edit-employee.component.html',
  styleUrls: ['./create-edit-employee.component.css']
})
export class CreateEditEmployeeComponent implements OnInit {

  
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
  globalPageSize: number;
  modalTitle: string;
  roleData: any;
  employee_id: any;
  api_calling_loader: boolean;
  employeedata: any;
  isEdit: boolean;
  isDelete: boolean;

  constructor(public http: HttpService, private message: NzMessageService,
    private router : Router,
    private route: ActivatedRoute,private fb: FormBuilder,) {
      this.route.queryParams.subscribe(params => {
        if(params['id']){
          this.employee_id = params['id']
        }
      })
     }

  ngOnInit(): void {
    this.createEditFormFunction()
    if (this.employee_id) {
      this.fetchEmployeeList()
    }
  }
  createEditFormFunction(data?) {
    if (data) {
      this.createEditForm = this.fb.group({
        id: [data ? data.id : '', [Validators.required]],
        first_name: [data ? data.first_name : '', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
        last_name: [data ? data.last_name : '', [Validators.required, Validators.pattern('[a-zA-Z ]+')]],
        unique_code: [data ? data.unique_code : '', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
        role: [data ? data.role?.id : ''],
        associated_team: [data ? data.associated_team : ''],
        reporting_manager: [data ? data.reporting_manager?.id : ''],
        mobile: [data ? data.mobile : '', [Validators.required, Validators.pattern('[0-9]{10}')]],
        email: [data ? data.email : '', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
        is_active: [data ? data.is_active : '', [Validators.required]]
      })
      this.fetchEmployeeManagerList()
      this.fetchRoles()
    } else {
      this.createEditForm = this.fb.group({
        first_name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]+')]],
        last_name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]+')]],
        unique_code: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
        role: [''],
        associated_team: [''],
        reporting_manager: [''],
        mobile: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
        email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
        is_active: [ '', [Validators.required]]
      })
    }
  }

  fetchEmployeeManagerList() {
    let data;
    this.http.fetchEmployeeManagerList(data).subscribe(res => {
      this.employeeManagerList = res['data']?.results
    })
  }

  fetchRoles() {
    let data;
    this.http.fetchRoles(data).subscribe(res => {
      this.roleData = res['data'].results
      // this.message.success(res['message'])
    })
  }

  fetchEmployeeList() {
    let data = {
      id: this.employee_id,
    }
    this.api_calling_loader = true
    this.http.fetchEmployeeList(data).subscribe(res => {
      this.api_calling_loader = false
      this.employeedata = res['data'].results[0]
      this.createEditFormFunction(this.employeedata)
      // this.message.success(res['message'])
    }, (err) => {
      this.api_calling_loader = false
    })
  }

  editEmployee(data) {
    this.formLoading = true
    if (data?.id) {
      this.http.addEditEmployee(data).subscribe(res => {
        this.formLoading = false
        this.isEdit = false
        this.isDelete = false
        this.message.success(res['message'])
        this.router.navigate(['employees'])
      }, (err) => {
        this.formLoading = false
      })
    } else {
      this.http.addEmployee(data).subscribe(res => {
        this.formLoading = false
        this.isEdit = false
        this.isDelete = false
        this.message.success(res['message'])
        this.router.navigate(['employees'])
      }, (err) => {
        this.formLoading = false
      })
    }
  }

}
