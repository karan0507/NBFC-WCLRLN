import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SendPaymentLinkRoutingModule } from './send-payment-link-routing.module';
import { SendPaymentLinkComponent } from './send-payment-link.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NgxPermissionsModule } from 'ngx-permissions';
import { DemoNgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [SendPaymentLinkComponent],
  imports: [
    CommonModule,
    SendPaymentLinkRoutingModule,
    DemoNgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NzDatePickerModule,
    NgxPermissionsModule.forChild()
  ]
})
export class SendPaymentLinkModule { }
