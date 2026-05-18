import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';

const routes: Routes = [
  {
    path: '',
    canActivate: [NgxPermissionsGuard],
    component: EmployeeDetailsComponent,
    data: {
      title: 'Employee Details',
      parent: 'Users',
      custom_url: 'employeeDetail',
      permissions: {
        only: ['view_corporate_employee_details', 'view_attendance','view_exit_employee','view_notice_period','view_action_performed','view_employee_list','view_new_joinee'],
        redirectTo: 'authentication/error-2'
      }
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeDetailRoutingModule { }
