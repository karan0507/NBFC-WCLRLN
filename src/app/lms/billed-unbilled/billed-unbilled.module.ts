import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BilledUnbilledRoutingModule } from './billed-unbilled-routing.module';
import { BilledUnbilledComponent } from './billed-unbilled/billed-unbilled.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NgxPermissionsModule } from 'ngx-permissions';
import { ApplicationsModule } from 'src/app/applications/applications.module';
import { DemoNgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShowAllBillsComponent } from './show-all-bills/show-all-bills.component';


@NgModule({
  declarations: [BilledUnbilledComponent, ShowAllBillsComponent],
  imports: [
    CommonModule,
    BilledUnbilledRoutingModule,
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
export class BilledUnbilledModule { }
