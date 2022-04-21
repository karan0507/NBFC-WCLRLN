import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlackBoxTestingRoutingModule } from './black-box-testing-routing.module';
import { BlackBoxTestingComponent } from './black-box-testing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzFormModule } from 'ng-zorro-antd/form';
import { DemoNgZorroAntdModule } from '../ng-zorro-antd.module';
import { NgxPermissionsModule } from 'ngx-permissions';


@NgModule({
  declarations: [BlackBoxTestingComponent],
  imports: [
    CommonModule,
    BlackBoxTestingRoutingModule,
    CommonModule,
    NzCollapseModule,
    NzCardModule,
    FormsModule, ReactiveFormsModule,
    NzFormModule,
    DemoNgZorroAntdModule,
    NgxPermissionsModule.forChild()
  ]
})
export class BlackBoxTestingModule { }
