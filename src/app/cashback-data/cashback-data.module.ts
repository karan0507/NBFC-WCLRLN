import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CashbackDataRoutingModule } from './cashback-data-routing.module';
import { CashbackDataComponent } from './cashback-data.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPermissionsModule } from 'ngx-permissions';
import { DemoNgZorroAntdModule } from '../ng-zorro-antd.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [CashbackDataComponent],
  imports: [
    CommonModule,
    CashbackDataRoutingModule,
    DemoNgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgxPermissionsModule.forChild()
  ]
})
export class CashbackDataModule { }
