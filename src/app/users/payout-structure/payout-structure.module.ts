import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PayoutStructureComponent } from './payout-structure/payout-structure.component';
import { PayoutStructureRoutingModule } from './payoutStructure-routing.modules';



@NgModule({
  declarations: [PayoutStructureComponent],
  imports: [
    CommonModule,
    PayoutStructureRoutingModule
  ]
})
export class PayoutStructureModule { }
