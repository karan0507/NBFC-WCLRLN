import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RiskPolicyRoutingModule } from './risk-policy-routing.module';
import { RiskPolicyComponent } from './risk-policy.component';
import { UserTerminateUnblockComponent } from './user-terminate-unblock/user-terminate-unblock.component';
import { LineBlockUnblockComponent } from './line-block-unblock/line-block-unblock.component';
import { AccountBlockUnblockComponent } from './account-block-unblock/account-block-unblock.component';
import { CreditLineIncDecComponent } from './credit-line-inc-dec/credit-line-inc-dec.component';
import { DemoNgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [RiskPolicyComponent, UserTerminateUnblockComponent, LineBlockUnblockComponent, AccountBlockUnblockComponent, CreditLineIncDecComponent],
  imports: [
    CommonModule,
    RiskPolicyRoutingModule,
    DemoNgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RiskPolicyModule { }
