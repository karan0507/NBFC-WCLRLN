import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { OtpCustomerListComponent } from './otp-customer-list.component';

const routes: Routes = [
    {
        path: '',
        // canActivate: [NgxPermissionsGuard],
        component: OtpCustomerListComponent,
        data: {
          title: 'OTP Customer List',
          parent: 'OTP List',
          custom_url: 'otp-list',
          // permissions: {
          //   only: ['dormant'],
          //   redirectTo: 'authentication/error-2'
          // }
        }
      },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtpRoutingModule { }
