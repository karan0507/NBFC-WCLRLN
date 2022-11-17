import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { ExpenceManagementComponent } from './expence-management.component';

const routes: Routes = [
  {
    path: '',
    component: ExpenceManagementComponent,
    canActivate: [NgxPermissionsGuard],
    data: {
      title: 'Corporate Expense',
      parent: 'LMS',
      custom_url: 'lms/expense-management',
      permissions: {
        only: 'view _corporate expense',
        redirectTo: 'authentication/error-2'
      }
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpenceManagementRoutingModule { }
