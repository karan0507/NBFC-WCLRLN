import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { DpdDaysComponent } from './dpd-days.component';

const routes: Routes = [
  {
    path: '',
    component: DpdDaysComponent,
    // canActivate: [NgxPermissionsGuard],
    data: {
      title: 'DPD Days',
      parent: 'LMS',
      custom_url: 'lms/dpd-days',
      // permissions: {
      //   only: 'view_lender_management',
      //   redirectTo: 'authentication/error-2'
      // }
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DpdDaysRoutingModule { }
