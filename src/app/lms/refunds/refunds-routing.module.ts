import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { RefundsComponent } from './refunds.component';

const routes: Routes = [
  {
    path: '',
    component: RefundsComponent,
    canActivate: [NgxPermissionsGuard],
    data: {
      title: 'Refunds',
      parent: 'LMS',
      custom_url: 'lms/refunds',
      permissions: {
        only: '',
        redirectTo: 'authentication/error-2'
      }
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RefundsRoutingModule { }
