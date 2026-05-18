import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VersioningComponent } from './versioning.component';
import { VersioningRoutingModule } from './versioning-routing.module';
import { DemoNgZorroAntdModule } from '../ng-zorro-antd.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NgxPermissionsModule } from 'ngx-permissions';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [VersioningComponent],
  imports: [
    CommonModule,
    VersioningRoutingModule,
    DemoNgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NzModalModule,
    NgxPermissionsModule.forChild()
  ]
})
export class VersioningModule { }
