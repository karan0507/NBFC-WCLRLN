import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { InsuranceComponent } from './insurance/insurance.component';

const routes: Routes = [
  {
    path: '',
    component: InsuranceComponent,
    canActivate: [NgxPermissionsGuard],
    data: {
      title: 'Insurance',
      parent: 'LMS',
      custom_url: 'lms/insurance',
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
export class InsuranceRoutingModule { }
