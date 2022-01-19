import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionsRoutingModule } from './transactions-routing.module';
import { TransactionsComponent } from './transactions.component';
import { TransactionsListComponent } from './transactions-list/transactions-list.component';
import { UploadTransactionsListComponent } from './upload-transactions-list/upload-transactions-list.component';
import { UploadTransactionsPreviewComponent } from './upload-transactions-preview/upload-transactions-preview.component';


@NgModule({
  declarations: [TransactionsComponent, TransactionsListComponent, UploadTransactionsListComponent, UploadTransactionsPreviewComponent],
  imports: [
    CommonModule,
    TransactionsRoutingModule
  ]
})
export class TransactionsModule { }
