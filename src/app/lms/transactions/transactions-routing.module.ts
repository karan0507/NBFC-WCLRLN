import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionsListComponent } from './transactions-list/transactions-list.component';
import { TransactionsComponent } from './transactions.component';
import { UploadTransactionsListComponent } from './upload-transactions-list/upload-transactions-list.component';

const routes: Routes = [
  {
    path: '',
    component: TransactionsListComponent,
    data: {
      title: 'Transactions',
      parent: 'LMS'
    }
  },
  {
    path: 'upload',
    component: UploadTransactionsListComponent,
    data: {
      title: 'Upload Transactions',
      parent: 'Transactions'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionsRoutingModule { }
