import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DownloadsRoutingModule } from './downloads-routing.module';
import { DownloadsComponent } from './downloads.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NgxPermissionsModule } from 'ngx-permissions';
import { DemoNgZorroAntdModule } from '../ng-zorro-antd.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [DownloadsComponent],
  imports: [
    CommonModule,
    DownloadsRoutingModule,
    DemoNgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NzModalModule,
    NgxPermissionsModule.forChild()
  ]
})
export class DownloadsModule { }
