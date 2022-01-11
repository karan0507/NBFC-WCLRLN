import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MastersPartnersRoutingModule } from './masters-partners-routing.module';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { AddEditMastersComponent } from './add-edit-masters/add-edit-masters.component';
import { MasterPartnersListComponent } from './master-partners-list/master-partners-list.component';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzDividerModule } from 'ng-zorro-antd/divider';



@NgModule({
  declarations: [ AddEditMastersComponent, MasterPartnersListComponent],
  imports: [
    NzDropDownModule,
    CommonModule,
    MastersPartnersRoutingModule,
    NzRadioModule,
    FormsModule,
    ReactiveFormsModule,
    NzCardModule,
    NzTableModule,
    NzIconModule,
    NzSelectModule,
    NzInputModule,
    NzButtonModule,
    NzTagModule,
    NzPageHeaderModule,
    NzFormModule,
    NzDividerModule
  ]
})
export class MastersPartnersModule { }
