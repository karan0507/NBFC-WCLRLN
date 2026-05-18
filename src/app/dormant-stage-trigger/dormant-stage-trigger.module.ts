import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DormantStageComponent } from './dormant-stage/dormant-stage.component';
import { DormantStageRoutingModule } from './dormant-stage-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NgxPermissionsModule } from 'ngx-permissions';
import { DemoNgZorroAntdModule } from '../ng-zorro-antd.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [DormantStageComponent],
  imports: [
    CommonModule,
    DormantStageRoutingModule,
    DemoNgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NzModalModule,
    NgxPermissionsModule.forChild()
  ]
})
export class DormantStageTriggerModule { }
