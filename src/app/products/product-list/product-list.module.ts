import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListRoutingModule } from './product-list-routing.module';
import { FatakPayDetailComponent } from './fatak-pay-detail/fatak-pay-detail.component';
import { FatakPayEmiDetailComponent } from './fatak-pay-emi-detail/fatak-pay-emi-detail.component';
import { FatakPayDraftComponent } from './fatak-pay-draft/fatak-pay-draft.component';


@NgModule({
  declarations: [FatakPayDetailComponent, FatakPayEmiDetailComponent, FatakPayDraftComponent],
  imports: [
    CommonModule,
    ProductListRoutingModule
  ]
})
export class ProductListModule { }
