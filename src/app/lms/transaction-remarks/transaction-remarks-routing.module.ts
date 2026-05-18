import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { TrackStatusComponent } from 'src/app/applications/track-status/track-status.component';
import { TransactionRemarksComponent } from './transaction-remarks/transaction-remarks.component';

const routes: Routes = [
  {
    path: '',
    component: TransactionRemarksComponent,
    canActivate: [NgxPermissionsGuard],
    data: {
      title: 'Transaction remarks',
      parent: 'LMS',
      custom_url: 'lms/transaction-remarks',
      permissions: {
        only: '',
        redirectTo: 'authentication/error-2'
      }
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionRemarksRoutingModule { }
