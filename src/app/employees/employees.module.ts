import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddEditPermissionComponent } from './add-edit-permission/add-edit-permission.component';
import { DemoNgZorroAntdModule } from '../ng-zorro-antd.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { TemplateModule } from '../shared/template/template.module';
import { NgxPermissionsModule } from 'ngx-permissions';
import { CreateEditEmployeeComponent } from './create-edit-employee/create-edit-employee.component';


@NgModule({
  declarations: [EmployeeListComponent, AddEditPermissionComponent, CreateEditEmployeeComponent],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    DemoNgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgxPermissionsModule.forChild()
  ]
})
export class EmployeesModule { }
