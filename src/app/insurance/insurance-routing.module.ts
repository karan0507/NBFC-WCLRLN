import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InsuranceComponent } from './insurance/insurance.component';
import { NgxPermissionsGuard } from 'ngx-permissions/lib/router/permissions-guard.service';

const routes: Routes = [
  {
    path: '',
    component: InsuranceComponent,
    // canActivate: [NgxPermissionsGuard],
    data: {
      title: 'Insurance',
      parent: 'Insurance',
      custom_url: 'insurance',
      permissions: {
        only: 'view_insurance',
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
