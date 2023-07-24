import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NomineeUploadRoutingModule } from './nominee-upload-routing.module';
import { BulkNomineeUploadComponent } from './bulk-nominee-upload/bulk-nominee-upload.component';
import { DemoNgZorroAntdModule } from '../ng-zorro-antd.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [BulkNomineeUploadComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NomineeUploadRoutingModule,
    DemoNgZorroAntdModule
  ]
})
export class NomineeUploadModule { }
