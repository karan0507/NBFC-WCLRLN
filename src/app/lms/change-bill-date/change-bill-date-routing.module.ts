import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { ChangeBillDateComponent } from './change-bill-date.component';

const routes: Routes = [
  {
    path: '',
    component: ChangeBillDateComponent,
    canActivate: [NgxPermissionsGuard],
    data: {
      title: 'Change Bill Date',
      parent: 'LMS',
      custom_url: 'lms/change-bill-date',
      permissions: {
        only: 'view_change_bill_date',
        redirectTo: 'authentication/error-2'
      }
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChangeBillDateRoutingModule { }
