import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfflineEmiRoutingModule } from './offline-emi-routing.module';
import { OfflineEmiComponent } from './offline-emi/offline-emi.component';
import { DemoNgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [OfflineEmiComponent],
  imports: [
    CommonModule,
    OfflineEmiRoutingModule,
    DemoNgZorroAntdModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class OfflineEmiModule { }
