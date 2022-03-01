import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionsRoutingModule } from './transactions-routing.module';
import { TransactionsComponent } from './transactions.component';
import { TransactionsListComponent } from './transactions-list/transactions-list.component';
import { UploadTransactionsListComponent } from './upload-transactions-list/upload-transactions-list.component';
import { UploadTransactionsPreviewComponent } from './upload-transactions-preview/upload-transactions-preview.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoNgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';


@NgModule({
  declarations: [TransactionsComponent, TransactionsListComponent, UploadTransactionsListComponent, UploadTransactionsPreviewComponent],
  imports: [
    CommonModule,
    TransactionsRoutingModule,
    DemoNgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NzDatePickerModule
  ]
})
export class TransactionsModule { }
