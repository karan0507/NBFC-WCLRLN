import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsuranceRoutingModule } from './insurance-routing.module';
import { InsuranceComponent } from './insurance/insurance.component';
import { DemoNgZorroAntdModule } from 'src/app/ng-zorro-antd.module';


@NgModule({
  declarations: [InsuranceComponent],
  imports: [
    CommonModule,
    InsuranceRoutingModule,
    DemoNgZorroAntdModule
  ]
})
export class InsuranceModule { }
