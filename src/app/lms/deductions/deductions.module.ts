import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeductionsRoutingModule } from './deductions-routing.module';
import { DeductionsListComponent } from './deductions-list/deductions-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NgxPermissionsModule } from 'ngx-permissions';
import { ApplicationsModule } from 'src/app/applications/applications.module';
import { DemoNgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [DeductionsListComponent],
  imports: [
    CommonModule,
    DeductionsRoutingModule,
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
export class DeductionsModule { }
