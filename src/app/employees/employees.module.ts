import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddEditPermissionComponent } from './add-edit-permission/add-edit-permission.component';


@NgModule({
  declarations: [EmployeeListComponent, AddEditPermissionComponent],
  imports: [
    CommonModule,
    EmployeesRoutingModule
  ]
})
export class EmployeesModule { }
