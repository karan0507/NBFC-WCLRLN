import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangeBillDateRoutingModule } from './change-bill-date-routing.module';
import { ChangeBillDateComponent } from './change-bill-date.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { DemoNgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [ChangeBillDateComponent],
  imports: [
    CommonModule,
    ChangeBillDateRoutingModule,
    DemoNgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NzDatePickerModule
  ]
})
export class ChangeBillDateModule { }
