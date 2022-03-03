import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CouponCodeRoutingModule } from './coupon-code-routing.module';
import { CouponCodeComponent } from './coupon-code.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { AddEditCouponCodeComponent } from './add-edit-coupon-code/add-edit-coupon-code.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzRadioModule } from 'ng-zorro-antd/radio';

@NgModule({
  declarations: [CouponCodeComponent, AddEditCouponCodeComponent],
  imports: [
    CommonModule,
    CouponCodeRoutingModule,
    NzCardModule,
    NzButtonModule,
    NzIconModule,
    NzDropDownModule,
    NzTableModule,
    NzModalModule,
    NzInputModule,
    FormsModule,
    ReactiveFormsModule,
    NzSelectModule,
    NzFormModule,
    NzDatePickerModule,
    NzRadioModule
  ]
})
export class CouponCodeModule { }
