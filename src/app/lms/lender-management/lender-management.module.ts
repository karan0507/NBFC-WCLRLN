import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LenderManagementRoutingModule } from './lender-management-routing.module';
import { LenderManagementComponent } from './lender-management.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';


@NgModule({
  declarations: [LenderManagementComponent],
  imports: [
    CommonModule,
    LenderManagementRoutingModule,
    NzCardModule,
    NzButtonModule,
    NzPageHeaderModule,
    NzIconModule,
    NzDropDownModule,
    NzTableModule,
    NzModalModule,
    NzInputModule,
    FormsModule, 
    ReactiveFormsModule,
    NzFormModule,
    NzDatePickerModule
  ]
})
export class LenderManagementModule { }
