import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { RiskPolicyComponent } from './risk-policy.component';

const routes: Routes = [
  {
    path: '',
    component: RiskPolicyComponent,
    canActivate: [NgxPermissionsGuard],
    data: {
      title: 'Risk Policy',
      parent: 'LMS',
      custom_url: 'lms/risk-policy',
      permissions: {
        only: 'view_borrowers',
        redirectTo: 'authentication/error-2'
      }
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RiskPolicyRoutingModule { }
