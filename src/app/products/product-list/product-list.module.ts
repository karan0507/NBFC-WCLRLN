import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListRoutingModule } from './product-list-routing.module';
import { FatakPayDetailComponent } from './fatak-pay-detail/fatak-pay-detail.component';
import { FatakPayEmiDetailComponent } from './fatak-pay-emi-detail/fatak-pay-emi-detail.component';
import { FatakPayDraftComponent } from './fatak-pay-draft/fatak-pay-draft.component';
import { DemoNgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
import { ProductListComponent } from './product-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NgxPermissionsModule } from 'ngx-permissions';


@NgModule({
  declarations: [FatakPayDetailComponent, FatakPayEmiDetailComponent, FatakPayDraftComponent, ProductListComponent],
  imports: [
    CommonModule,
    ProductListRoutingModule,
    DemoNgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    NzPopconfirmModule,
    NgxPermissionsModule.forChild()
  ]
})
export class ProductListModule { }
