import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditLineIncDescRoutingModule } from './credit-line-inc-desc-routing.module';
import { CreditLineIncDescComponent } from './credit-line-inc-desc.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NgxPermissionsModule } from 'ngx-permissions';
import { DemoNgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [CreditLineIncDescComponent],
  imports: [
    CommonModule,
    CreditLineIncDescRoutingModule,
    DemoNgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NzDatePickerModule,
    NgxPermissionsModule.forChild()
  ]
})
export class CreditLineIncDescModule { }
