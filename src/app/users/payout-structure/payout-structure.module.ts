import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PayoutStructureComponent } from './payout-structure/payout-structure.component';
import { PayoutStructureRoutingModule } from './payoutStructure-routing.modules';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxPermissionsModule } from 'ngx-permissions';



@NgModule({
  declarations: [PayoutStructureComponent],
  imports: [
    CommonModule,
    PayoutStructureRoutingModule,
    NzRadioModule,
    FormsModule,
    ReactiveFormsModule,
    NzCardModule,
    NzTableModule,
    NzIconModule,
    NzSelectModule,
    NzInputModule,
    NzButtonModule,
    NzTagModule,
    NzDropDownModule,
    NzPageHeaderModule,
    NzModalModule,
    NzFormModule,
    NzDividerModule,
    NzUploadModule,
    NzCheckboxModule,
    SharedModule,
    NgxPermissionsModule.forChild()
  ]
})
export class PayoutStructureModule { }
