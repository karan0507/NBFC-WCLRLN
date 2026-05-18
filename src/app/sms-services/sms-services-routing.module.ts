import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SmsServicesComponent } from './sms-services.component';
import { NgxPermissionsGuard } from 'ngx-permissions';

const routes: Routes = [
  {
    path: '',
    component: SmsServicesComponent,
    canActivate: [NgxPermissionsGuard],
    data: {
      title: 'SMS Enablers',
      parent: 'SMS Enablers',
      custom_url: '',
      permissions: {
        only: '',
        redirectTo: 'authentication/error-2'
      }
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmsServicesRoutingModule { }
