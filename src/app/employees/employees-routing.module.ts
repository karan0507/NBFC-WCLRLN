import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { AddEditPermissionComponent } from './add-edit-permission/add-edit-permission.component';
import { CreateEditEmployeeComponent } from './create-edit-employee/create-edit-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeListComponent,
    canActivate: [NgxPermissionsGuard],
    data: {
      title: 'Employees',
      parent: 'Employee',
      custom_url: 'employees',
      permissions: {
        only: 'view_employee',
        redirectTo: 'authentication/error-2'
      }
    }
  },
  {
    path:'',
    data: {
      title: 'Employees',
      parent: 'Employee',
      custom_url: 'employees',
      canActivate: [NgxPermissionsGuard],
      permissions: {
        only: 'view_employee',
        redirectTo: 'authentication/error-2'
      }
    },
    children: [
      {
        path: 'create-employee',
        component: CreateEditEmployeeComponent,
        canActivate: [NgxPermissionsGuard],
        data: {
          title: 'Create New Employee',
          parent: 'Employee',
          custom_url: 'employees/create-employee',
          permissions: {
            only: 'add_employee',
            redirectTo: 'authentication/error-2'
          }
        }
      },
      {
        path: 'edit-employee',
        component: CreateEditEmployeeComponent,
        canActivate: [NgxPermissionsGuard],
        data: {
          title: 'Edit Employee',
          parent: 'Employee',
          custom_url: 'employees/edit-employee',
          permissions: {
            only: 'edit_employee',
            redirectTo: 'authentication/error-2'
          }
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
