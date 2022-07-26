import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpenceManagementRoutingModule } from './expence-management-routing.module';
import { ExpenceManagementComponent } from './expence-management.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';


@NgModule({
  declarations: [ExpenceManagementComponent],
  imports: [
    CommonModule,
    ExpenceManagementRoutingModule,
    NzButtonModule, 
    NzCardModule, 
    NzTableModule,
    NzModalModule, 
    NzInputModule, 
    NzSelectModule,
    NzIconModule,
    NzModalModule,
    NzPopconfirmModule,
    NzDatePickerModule,
    FormsModule,
    ReactiveFormsModule,
    NzToolTipModule,
    NzInputModule,
    NzFormModule,
    NzDropDownModule,
    NzDividerModule,
    NzCheckboxModule,
    NzCardModule,
    NzButtonModule,
    NzDatePickerModule
  ]
})
export class ExpenceManagementModule { }
