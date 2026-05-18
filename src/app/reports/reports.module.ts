import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsComponent } from './reports.component';
import { ReportsRoutingModule } from './reports-routing.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { DemoNgZorroAntdModule } from '../ng-zorro-antd.module';
import { NgxPermissionsModule } from 'ngx-permissions';
import { SharedModule } from '../shared/shared.module';


const antdModule = [
  NzButtonModule,
  DemoNgZorroAntdModule
]


@NgModule({
  declarations: [ReportsComponent],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    SharedModule,
    ...antdModule,
    NgxPermissionsModule.forChild(),
  ]
})
export class ReportsModule { }
