import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LmsRoutingModule } from './lms-routing.module';
import { LmsListComponent } from './lms-list/lms-list.component';
import { ProductFatakPayComponent } from './product-fatak-pay/product-fatak-pay.component';
import { ProductFatakPayEmiComponent } from './product-fatak-pay-emi/product-fatak-pay-emi.component';
import { CashbackRewardsComponent } from './cashback-rewards/cashback-rewards.component';
import { BureauSmsDataComponent } from './bureau-sms-data/bureau-sms-data.component';
import { AppDownloadsComponent } from './app-downloads/app-downloads.component';


@NgModule({
  declarations: [LmsListComponent, ProductFatakPayComponent, ProductFatakPayEmiComponent, CashbackRewardsComponent, BureauSmsDataComponent, AppDownloadsComponent],
  imports: [
    CommonModule,
    LmsRoutingModule
  ]
})
export class LmsModule { }
