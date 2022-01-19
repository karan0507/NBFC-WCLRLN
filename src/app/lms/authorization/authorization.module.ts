import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorizationRoutingModule } from './authorization-routing.module';
import { AuthorizationComponent } from './authorization.component';
import { AuthorizationUpiIdComponent } from './authorization-upi-id/authorization-upi-id.component';
import { AuthorizationMccCodeComponent } from './authorization-mcc-code/authorization-mcc-code.component';
import { AuthorizationPinCodeComponent } from './authorization-pin-code/authorization-pin-code.component';
import { FailedTransactionsComponent } from './failed-transactions/failed-transactions.component';


@NgModule({
  declarations: [AuthorizationComponent, AuthorizationUpiIdComponent, AuthorizationMccCodeComponent, AuthorizationPinCodeComponent, FailedTransactionsComponent],
  imports: [
    CommonModule,
    AuthorizationRoutingModule
  ]
})
export class AuthorizationModule { }
