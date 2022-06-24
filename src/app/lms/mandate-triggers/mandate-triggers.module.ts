import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MandateTriggersRoutingModule } from './mandate-triggers-routing.module';
import { MandateTriggersComponent } from './mandate-triggers.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NgxPermissionsModule } from 'ngx-permissions';
import { ApplicationsModule } from 'src/app/applications/applications.module';
import { DemoNgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [MandateTriggersComponent],
  imports: [
    CommonModule,
    MandateTriggersRoutingModule,
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
export class MandateTriggersModule { }
