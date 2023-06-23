import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SmsServicesRoutingModule } from './sms-services-routing.module';
import { SmsServicesComponent } from './sms-services.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoNgZorroAntdModule } from '../ng-zorro-antd.module';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';


@NgModule({
  declarations: [SmsServicesComponent],
  imports: [
    CommonModule,
    SmsServicesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DemoNgZorroAntdModule,
    NzPopconfirmModule
  ]
})
export class SmsServicesModule { }
