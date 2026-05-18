import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BbpsRoutingModule } from './bbps-routing.module';
import { BbpsCategoryComponent } from './bbps-category/bbps-category.component';
import { BbpsBillersComponent } from './bbps-billers/bbps-billers.component';
import { BbpsTransactionComponent } from './bbps-transaction/bbps-transaction.component';
import { BbpsComplaintsComponent } from './bbps-complaints/bbps-complaints.component';
import { DemoNgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NgxPermissionsModule } from 'ngx-permissions';
import { ApplicationsModule } from 'src/app/applications/applications.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { EditCategoryComponent } from './edit-category/edit-category.component';


@NgModule({
  declarations: [BbpsCategoryComponent, BbpsBillersComponent, BbpsTransactionComponent, BbpsComplaintsComponent, EditCategoryComponent],
  imports: [
    CommonModule,
    BbpsRoutingModule,
    DemoNgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NzPopoverModule,
    NzTagModule,
    ApplicationsModule,
    NgxPermissionsModule.forChild()
  ]
})
export class BbpsModule { }
