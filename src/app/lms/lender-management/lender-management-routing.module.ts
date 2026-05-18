import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { LenderManagementComponent } from './lender-management.component';

const routes: Routes = [
  {
    path: '',
    component: LenderManagementComponent,
    canActivate: [NgxPermissionsGuard],
    data: {
      title: 'Lender Management',
      parent: 'LMS',
      custom_url: 'lms/lender-management',
      permissions: {
        only: 'view_lender_management',
        redirectTo: 'authentication/error-2'
      }
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LenderManagementRoutingModule { }
