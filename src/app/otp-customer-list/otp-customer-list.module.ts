import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtpCustomerListComponent } from './otp-customer-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NgxPermissionsModule } from 'ngx-permissions';
import { DemoNgZorroAntdModule } from '../ng-zorro-antd.module';
import { SharedModule } from '../shared/shared.module';
import { OtpRoutingModule } from './otp-routing.module';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';



@NgModule({
  declarations: [OtpCustomerListComponent],
  imports: [
    CommonModule,
    DemoNgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NzDatePickerModule,
    NzModalModule,
    OtpRoutingModule,
    NgxPermissionsModule.forChild()
  ]
})
export class OtpCustomerListModule { }
