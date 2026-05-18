import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddEditPermissionRoutingModule } from './add-edit-permission-routing.module';
import { AddEditPermissionComponent } from './add-edit-permission.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPermissionsModule } from 'ngx-permissions';
import { DemoNgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';


@NgModule({
  declarations: [AddEditPermissionComponent],
  imports: [
    NzPopconfirmModule,
    CommonModule,
    AddEditPermissionRoutingModule,
    DemoNgZorroAntdModule,
    FormsModule,
    NzTabsModule,
    ReactiveFormsModule,
    SharedModule,
    NgxPermissionsModule.forChild()
  ]
})
export class AddEditPermissionModule { }
