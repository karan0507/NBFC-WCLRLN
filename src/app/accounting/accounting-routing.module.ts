import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { EscrowStatementComponent } from './escrow-statement/escrow-statement.component';
import { GstInvoicesComponent } from './gst-invoices/gst-invoices.component';

const routes: Routes = [
  {
    path: 'gst-invoices',
    component: GstInvoicesComponent,
    canActivate: [NgxPermissionsGuard],
    data: {
      title: 'GST invoice',
      parent: 'Accounting',
      custom_url: 'accounting',
      permissions: {
        only: '',
        redirectTo: 'authentication/error-2'
      }
    }
  },
  {
    path: 'escrow-statement',
    component: EscrowStatementComponent,
    canActivate: [NgxPermissionsGuard],
    data: {
      title: 'Escrow statement',
      parent: 'Accounting',
      custom_url: 'accounting',
      permissions: {
        only: '',
        redirectTo: 'authentication/error-2'
      }
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountingRoutingModule { }
