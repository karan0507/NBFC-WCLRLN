import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { LendersComponent } from './lenders/lenders.component';
import { MastersPartnersComponent } from './masters-partners/masters-partners.component';
import { PartnersComponent } from './partners/partners.component';
import { MerchantsComponent } from './merchants/merchants.component';


@NgModule({
  declarations: [LendersComponent, MastersPartnersComponent, PartnersComponent, MerchantsComponent],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
