import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { SendPaymentLinkComponent } from './send-payment-link.component';

const routes: Routes = [
  {
    path: '',
    component: SendPaymentLinkComponent,
    // canActivate: [NgxPermissionsGuard],
    data: {
      title: 'Send Payment Link',
      parent: 'LMS',
      custom_url: 'lms/send-payment-link',
      // permissions: {
      //   only: 'view_change_credit_line',
      //   redirectTo: 'authentication/error-2'
      // }
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SendPaymentLinkRoutingModule { }
