import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountingRoutingModule } from './accounting-routing.module';
import { GstInvoicesComponent } from './gst-invoices/gst-invoices.component';
import { EscrowStatementComponent } from './escrow-statement/escrow-statement.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NgxPermissionsModule } from 'ngx-permissions';
import { DemoNgZorroAntdModule } from '../ng-zorro-antd.module';


@NgModule({
  declarations: [GstInvoicesComponent, EscrowStatementComponent],
  imports: [
    CommonModule,
    AccountingRoutingModule,
    DemoNgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    NzPopconfirmModule,
    NgxPermissionsModule.forChild()
  ]
})
export class AccountingModule { }
