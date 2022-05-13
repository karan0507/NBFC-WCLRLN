import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { TransactionDetailsComponent } from './transaction-details/transaction-details.component';
import { TransactionsListComponent } from './transactions-list/transactions-list.component';
import { TransactionsComponent } from './transactions.component';
import { UploadTransactionsListComponent } from './upload-transactions-list/upload-transactions-list.component';

const routes: Routes = [
  {
    path: 'transactions',
    component: TransactionsListComponent,
    canActivate: [NgxPermissionsGuard],
    data: {
      title: 'Transactions',
      parent: 'LMS',
      custom_url: 'lms/transactions',
      permissions: {
        only: 'view_transaction',
        redirectTo: 'authentication/error-2'
      }
    },
  },
  {
    path: 'transactions',
    data: {
      title: 'Transactions',
      parent: 'LMS',
      custom_url: 'lms/transactions'
    },
    children: [
      {
        path: 'details',
        component: TransactionDetailsComponent,
        canActivate: [NgxPermissionsGuard],
        data: {
          title: 'Details',
          parent: 'Transactions',
          // custom_url: 'details',
      permissions: {
        only: 'view_transaction',
        redirectTo: 'authentication/error-2'
      }
        }
      },
    ]
  },
  {
    path: 'manual-transaction',
    component: UploadTransactionsListComponent,
    canActivate: [NgxPermissionsGuard],
    data: {
      title: 'Manual Transactions',
      parent: 'LMS',
      custom_url: 'lms/manual-transaction',
      permissions: {
        only: 'view_manual_transaction',
        redirectTo: 'authentication/error-2'
      }
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionsRoutingModule { }
