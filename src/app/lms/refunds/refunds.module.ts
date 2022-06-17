import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RefundsRoutingModule } from './refunds-routing.module';
import { RefundsComponent } from './refunds.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NgxPermissionsModule } from 'ngx-permissions';
import { DemoNgZorroAntdModule } from 'src/app/ng-zorro-antd.module';


@NgModule({
  declarations: [RefundsComponent],
  imports: [
    CommonModule,
    RefundsRoutingModule,
    DemoNgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    NzPopconfirmModule,
    NgxPermissionsModule.forChild()
  ]
})
export class RefundsModule { }
