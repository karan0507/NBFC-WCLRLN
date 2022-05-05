import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionDetailsComponent } from './transaction-details/transaction-details.component';
import { TransactionsListComponent } from './transactions-list/transactions-list.component';
import { TransactionsComponent } from './transactions.component';
import { UploadTransactionsListComponent } from './upload-transactions-list/upload-transactions-list.component';

const routes: Routes = [
  {
    path: 'transactions',
    component: TransactionsListComponent,
    data: {
      title: 'Transactions',
      parent: 'LMS',
      custom_url: 'lms/transactions'
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
        data: {
          title: 'Details',
          parent: 'Transactions',
          // custom_url: 'details'
        }
      },
    ]
  },
  {
    path: 'manual-transaction',
    component: UploadTransactionsListComponent,
    data: {
      title: 'Manual Transactions',
      parent: 'LMS',
      custom_url: 'lms/manual-transaction'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionsRoutingModule { }
