import { EmiBorrowerDetailsComponent } from './emi-borrowers/emi-borrower-details/emi-borrower-details.component';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { EmiBorrowersComponent } from './emi-borrowers/emi-borrowers.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    component: EmiBorrowersComponent,
    canActivate: [NgxPermissionsGuard],
    data: {
      title: 'EMI Borrowers',
      parent: 'LMS',
      custom_url: 'lms/emi-borrowers',
      permissions: {
        only: '',
        redirectTo: 'authentication/error-2'
      }
    }
  },
  {
    path: '',
    data: {
      title: 'EMI Borrowers',
      parent: 'LMS',
      custom_url: 'lms/emi-borrowers',
    },
    children:[
      {
        path: 'details',
        component: EmiBorrowerDetailsComponent,
        canActivate: [NgxPermissionsGuard],
        data: {
          title: 'EMI Borrowers Details',
          parent: 'LMS',
          custom_url: 'lms/emi-borrowers/details',
          permissions: {
            only: '',
            redirectTo: 'authentication/error-2'
          }
        }
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmiBorrowersRoutingModule { }
