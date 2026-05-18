import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { CreditLineIncDescComponent } from './credit-line-inc-desc.component';

const routes: Routes = [
  {
    path: '',
    component: CreditLineIncDescComponent,
    canActivate: [NgxPermissionsGuard],
    data: {
      title: 'Change Credit Line',
      parent: 'LMS',
      custom_url: 'lms/change-credit-line',
      permissions: {
        only: 'view_change_credit_line',
        redirectTo: 'authentication/error-2'
      }
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditLineIncDescRoutingModule { }
