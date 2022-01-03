import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LendersRoutingModule } from './lenders-routing.module';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { AddEditLendersComponent } from './add-edit-lenders/add-edit-lenders.component';
import { LendersListComponent } from './lenders-list/lenders-list.component';


@NgModule({
  declarations: [ AddEditLendersComponent, LendersListComponent],
  imports: [
    CommonModule,
    LendersRoutingModule,
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
export class LendersModule { }
