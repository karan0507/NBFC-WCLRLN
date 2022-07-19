import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { BilledUnbilledComponent } from './billed-unbilled/billed-unbilled.component';
import { ShowAllBillsComponent } from './show-all-bills/show-all-bills.component';

const routes: Routes = [
  {
    path: '',
    component: BilledUnbilledComponent,
    canActivate: [NgxPermissionsGuard],
    data: {
      title: 'Billed data',
      parent: 'LMS',
      custom_url: 'lms/billed-unbilled-data',
      permissions: {
        only: '',
        redirectTo: 'authentication/error-2'
      }
    }
  },
  {
    path: '',
    data: {
      title: 'Billed data',
      parent: 'LMS',
      custom_url: 'lms/billed-unbilled-data',
    },
    children: [
      {
        path: 'all-bills',
        component: ShowAllBillsComponent,
        canActivate: [NgxPermissionsGuard],
        data: {
          title: 'all bills',
          parent: 'LMS',
          permissions: {
            only: '',
            redirectTo: 'authentication/error-2'
          }
        }
      }
    ]
  },
  {
    path: 'all-bills',
    component: ShowAllBillsComponent,
    canActivate: [NgxPermissionsGuard],
    data: {
      title: 'Billed data',
      parent: 'LMS',
      custom_url: 'lms/billed-unbilled-data',
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
export class BilledUnbilledRoutingModule { }
