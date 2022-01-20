import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BorrowersRoutingModule } from './borrowers-routing.module';
import { BorrowersComponent } from './borrowers.component';
import { BorrowersListComponent } from './borrowers-list/borrowers-list.component';
import { BorrowersDetailsComponent } from './borrowers-details/borrowers-details.component';
import { AppDownloadsComponent } from './app-downloads/app-downloads.component';
import { DemoNgZorroAntdModule } from 'src/app/ng-zorro-antd.module';


@NgModule({
  declarations: [BorrowersComponent, BorrowersListComponent, BorrowersDetailsComponent, AppDownloadsComponent],
  imports: [
    CommonModule,
    BorrowersRoutingModule,
    DemoNgZorroAntdModule
  ]
})
export class BorrowersModule { }
