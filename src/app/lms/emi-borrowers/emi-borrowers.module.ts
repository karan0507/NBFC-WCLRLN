import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoNgZorroAntdModule } from './../../ng-zorro-antd.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmiBorrowersRoutingModule } from './emi-borrowers-routing.module';
import { EmiBorrowersComponent } from './emi-borrowers/emi-borrowers.component';
import { EmiBorrowerDetailsComponent } from './emi-borrowers/emi-borrower-details/emi-borrower-details.component';
import { EmiEligibilityListComponent } from './emi-eligibility-list/emi-eligibility-list.component';
import { NgxPermissionsModule } from 'ngx-permissions';

@NgModule({
  declarations: [EmiBorrowersComponent, EmiBorrowerDetailsComponent, EmiEligibilityListComponent],
  imports: [
    CommonModule,
    EmiBorrowersRoutingModule,
    DemoNgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPermissionsModule.forChild()
  ]
})
export class EmiBorrowersModule { }
