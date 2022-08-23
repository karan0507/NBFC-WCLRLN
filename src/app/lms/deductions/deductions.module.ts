import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeductionsRoutingModule } from './deductions-routing.module';
import { DeductionsListComponent } from './deductions-list/deductions-list.component';


@NgModule({
  declarations: [DeductionsListComponent],
  imports: [
    CommonModule,
    DeductionsRoutingModule
  ]
})
export class DeductionsModule { }
