import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorizationRoutingModule } from './authorization-routing.module';
import { AuthorizationComponent } from './authorization.component';
import { AuthorizationUpiIdComponent } from './authorization-upi-id/authorization-upi-id.component';
import { AuthorizationMccCodeComponent } from './authorization-mcc-code/authorization-mcc-code.component';
import { AuthorizationPinCodeComponent } from './authorization-pin-code/authorization-pin-code.component';
import { FailedTransactionsComponent } from './failed-transactions/failed-transactions.component';
import { AuthorizationRulesComponent } from './authorization-rules/authorization-rules.component';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzUploadModule } from 'ng-zorro-antd/upload';


@NgModule({
  declarations: [AuthorizationComponent, AuthorizationUpiIdComponent, AuthorizationMccCodeComponent, AuthorizationPinCodeComponent, FailedTransactionsComponent, AuthorizationRulesComponent],
  imports: [
    CommonModule,
    AuthorizationRoutingModule,
    NzRadioModule,
    NzFormModule,
    FormsModule,
    ReactiveFormsModule,
    NzCardModule,
    NzTableModule,
    NzIconModule,
    NzSelectModule,
    NzInputModule,
    NzButtonModule,
    NzTableModule,
    NzTagModule,
    NzDropDownModule,
    NzPageHeaderModule,
    NzModalModule,
    NzDividerModule,
    NzUploadModule,
  ]
})
export class AuthorizationModule { }
