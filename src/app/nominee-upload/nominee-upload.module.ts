import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NomineeUploadRoutingModule } from './nominee-upload-routing.module';
import { BulkNomineeUploadComponent } from './bulk-nominee-upload/bulk-nominee-upload.component';
import { DemoNgZorroAntdModule } from '../ng-zorro-antd.module';


@NgModule({
  declarations: [BulkNomineeUploadComponent],
  imports: [
    CommonModule,
    NomineeUploadRoutingModule,
    DemoNgZorroAntdModule
  ]
})
export class NomineeUploadModule { }
