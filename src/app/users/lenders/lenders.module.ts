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
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { SharedModule } from 'src/app/shared/shared.module';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NgxPermissionsModule } from 'ngx-permissions';

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
    NzTagModule,
    NzDropDownModule,
    NzPageHeaderModule,
    NzModalModule,
    NzFormModule,
    NzDividerModule,
    NzUploadModule,
    NzCheckboxModule,
    SharedModule,
    NzPopconfirmModule,
    NgxPermissionsModule.forChild()
  ]
})
export class LendersModule { }
