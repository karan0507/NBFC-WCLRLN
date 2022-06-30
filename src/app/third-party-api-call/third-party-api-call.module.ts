import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThirdPartyApiCallRoutingModule } from './third-party-api-call-routing.module';
import { ThirdPartyApiCallComponent } from './third-party-api-call/third-party-api-call.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NgxPermissionsModule } from 'ngx-permissions';
import { DemoNgZorroAntdModule } from '../ng-zorro-antd.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ThirdPartyApiCallComponent],
  imports: [
    CommonModule,
    ThirdPartyApiCallRoutingModule,
    DemoNgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NzModalModule,
    NgxPermissionsModule.forChild()
  ]
})
export class ThirdPartyApiCallModule { }
