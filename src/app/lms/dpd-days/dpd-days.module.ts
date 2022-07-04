import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DpdDaysComponent } from './dpd-days.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NgxPermissionsModule } from 'ngx-permissions';
import { DpdDaysRoutingModule } from './dpd-days-routing.module';
import { DemoNgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
import { SharedModule } from 'src/app/shared/shared.module';


const antdModule = [
  NzButtonModule,
  DemoNgZorroAntdModule
]

@NgModule({
  declarations: [DpdDaysComponent],
  imports: [
    CommonModule,
    ...antdModule,
    SharedModule,
    // LenderManagementRoutingModule,
    DpdDaysRoutingModule,
    NgxPermissionsModule.forChild()
  ]
})
export class DpdDaysModule { }
