import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NachUploadRoutingModule } from './nach-upload-routing.module';
import { NachUploadComponent } from './nach-upload/nach-upload.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NgxPermissionsModule } from 'ngx-permissions';
import { DemoNgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [NachUploadComponent],
  imports: [
    CommonModule,
    NachUploadRoutingModule,
    DemoNgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NzDatePickerModule,
    NgxPermissionsModule.forChild()
  ]
})
export class NachUploadModule { }
