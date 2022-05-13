import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { BorrowersDetailsComponent } from './borrowers-details/borrowers-details.component';
import { BorrowersListComponent } from './borrowers-list/borrowers-list.component';
import { BorrowersComponent } from './borrowers.component';

const routes: Routes = [
  {
    path: '',
    component: BorrowersListComponent,
    canActivate: [NgxPermissionsGuard],
    data: {
      title: 'Borrowers',
      parent: 'LMS',
      custom_url: 'lms/borrowers',
      permissions: {
        only: 'view_borrowers',
        redirectTo: 'authentication/error-2'
      }
    }
  },
  {
    path: '',
    data: {
      title: 'Borrowers',
      parent: 'LMS',
      custom_url: 'lms/borrowers'
    },
    children: [
      {
        path: 'details',
        component: BorrowersDetailsComponent,
        canActivate: [NgxPermissionsGuard],
        data: {
          title: 'View Details',
          parent: 'LMS',
          hideTitle: true,
          custom_url: 'lms/borrowers/details',
          permissions: {
            only: 'view_borrowers',
            redirectTo: 'authentication/error-2'
          }
        }
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BorrowersRoutingModule { }
