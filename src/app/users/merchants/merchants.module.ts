import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MerchantsRoutingModule } from './merchants-routing.module';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { MerchantsListComponent } from './merchants-list/merchants-list.component';
import { AddEditMerchantsComponent } from './add-edit-merchants/add-edit-merchants.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NgxPermissionsModule } from 'ngx-permissions';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { AddEditDsaComponent } from './add-edit-dsa/add-edit-dsa.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DsaListComponent } from './dsa-list/dsa-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';


@NgModule({
  declarations: [MerchantsListComponent, AddEditMerchantsComponent, AddEditDsaComponent, DsaListComponent],
  imports: [
    CommonModule,
    MerchantsRoutingModule,
    NzRadioModule,
    FormsModule,
    ReactiveFormsModule,
    NzCardModule,
    NzTableModule,
    NzIconModule,
    NzSelectModule,
    NzInputModule,
    NzButtonModule,
    NzPageHeaderModule,
    NzTagModule,
    NzModalModule,
    NzFormModule,
    NzDividerModule,
    NzUploadModule,
    NzDropDownModule,
    NzCheckboxModule,
    DragDropModule,
    SharedModule,
    NzPopconfirmModule,
    NgxPermissionsModule.forChild()
  ]
})
export class MerchantsModule { }
