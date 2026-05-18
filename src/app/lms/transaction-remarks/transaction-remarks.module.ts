import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionRemarksRoutingModule } from './transaction-remarks-routing.module';
import { TransactionRemarksComponent } from './transaction-remarks/transaction-remarks.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NgxPermissionsModule } from 'ngx-permissions';
import { DemoNgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [TransactionRemarksComponent],
  imports: [
    CommonModule,
    TransactionRemarksRoutingModule,
    DemoNgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NzDatePickerModule,
    NgxPermissionsModule.forChild()
  ]
})
export class TransactionRemarksModule { }
