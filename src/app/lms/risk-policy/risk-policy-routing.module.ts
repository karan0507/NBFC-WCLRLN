import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RiskPolicyComponent } from './risk-policy.component';

const routes: Routes = [
  {
    path: '',
    component: RiskPolicyComponent,
    data: {
      title: 'Risk Policy',
      parent: 'LMS',
      custom_url: 'lms/risk-policy'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RiskPolicyRoutingModule { }
