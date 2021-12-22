import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { LendersComponent } from './lenders/lenders.component';
import { MastersPartnersComponent } from './masters-partners/masters-partners.component';
import { PartnersComponent } from './partners/partners.component';
import { MerchantsComponent } from './merchants/merchants.component';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTagModule } from 'ng-zorro-antd/tag';


@NgModule({
  declarations: [LendersComponent, MastersPartnersComponent, PartnersComponent, MerchantsComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    NzRadioModule,
    FormsModule,
    ReactiveFormsModule,
    NzCardModule,
    NzTableModule,
    NzIconModule,
    NzSelectModule,
    NzInputModule,
    NzButtonModule,
    NzTagModule
  ]
})
export class UsersModule { }
