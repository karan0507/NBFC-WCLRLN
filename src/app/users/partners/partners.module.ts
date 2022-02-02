import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartnersRoutingModule } from './partners-routing.module';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { PartnersListComponent } from './partners-list/partners-list.component';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { AddEditPartnersComponent } from './add-edit-partners/add-edit-partners.component';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [PartnersListComponent, AddEditPartnersComponent],
  imports: [
    CommonModule,
    PartnersRoutingModule,
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
    NzDropDownModule,
    NzPageHeaderModule,
    NzModalModule,
    NzFormModule,
    NzDividerModule,
    NzUploadModule,
    NzCheckboxModule,
    SharedModule
  ]
})
export class PartnersModule { }
