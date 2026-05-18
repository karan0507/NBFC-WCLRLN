import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsuranceRoutingModule } from './insurance-routing.module';
import { InsuranceComponent } from './insurance/insurance.component';
import { DemoNgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
import { NgxPermissionsModule } from 'ngx-permissions';


@NgModule({
  declarations: [InsuranceComponent],
  imports: [
    CommonModule,
    InsuranceRoutingModule,
    DemoNgZorroAntdModule,
    NgxPermissionsModule.forChild()
  ]
})
export class InsuranceModule { }
