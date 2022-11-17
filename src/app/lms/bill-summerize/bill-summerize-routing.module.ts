import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { BillSummerizeComponent } from './bill-summerize/bill-summerize.component';

const routes: Routes = [
  {
    path: '',
    component: BillSummerizeComponent,
    canActivate: [NgxPermissionsGuard],
    data: {
      title: 'Bill summarization',
      parent: 'Bill summarization',
      custom_url: 'lms/bill-summarization',
      permissions: {
        only: 'view_bill_summerization',
        redirectTo: 'authentication/error-2'
      }
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillSummerizeRoutingModule { }
