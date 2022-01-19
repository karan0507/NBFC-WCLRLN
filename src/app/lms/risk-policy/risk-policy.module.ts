import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RiskPolicyRoutingModule } from './risk-policy-routing.module';
import { RiskPolicyComponent } from './risk-policy.component';


@NgModule({
  declarations: [RiskPolicyComponent],
  imports: [
    CommonModule,
    RiskPolicyRoutingModule
  ]
})
export class RiskPolicyModule { }
