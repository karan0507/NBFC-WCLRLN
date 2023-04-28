import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperAppUserRoutingModule } from './super-app-user-routing.module';
import { SuperAppUserComponent } from './super-app-user/super-app-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { NgxPermissionsModule } from 'ngx-permissions';
import { DemoNgZorroAntdModule } from '../ng-zorro-antd.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [SuperAppUserComponent],
  imports: [
    CommonModule,
    SuperAppUserRoutingModule,
    NzPageHeaderModule,
    FormsModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzTableModule,
    NzCardModule,
    NzInputModule,
    NzSelectModule,
    NzUploadModule,
    NzIconModule,
    NzDropDownModule,
    NzMenuModule,
    NzCheckboxModule,
    NzDatePickerModule,
    NzFormModule,
    NzModalModule,
    NzStepsModule,
    NzToolTipModule,
    NzPopoverModule,
    NzPopconfirmModule,
    NzImageModule,
    NzRadioModule,
    NzDividerModule,
    NgxJsonViewerModule,
    SharedModule,
    DemoNgZorroAntdModule,
    NgxPermissionsModule.forChild()
 
  ]
})
export class SuperAppUserModule { }
