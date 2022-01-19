import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LenderManagementRoutingModule } from './lender-management-routing.module';
import { LenderManagementComponent } from './lender-management.component';


@NgModule({
  declarations: [LenderManagementComponent],
  imports: [
    CommonModule,
    LenderManagementRoutingModule
  ]
})
export class LenderManagementModule { }
