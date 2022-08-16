import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { TrackStatusComponent } from 'src/app/applications/track-status/track-status.component';
import { BorrowersDetailsComponent } from './borrowers-details/borrowers-details.component';
import { BorrowersListComponent } from './borrowers-list/borrowers-list.component';
import { BorrowersComponent } from './borrowers.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'lms/borrowers/all',
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
      },
      {
        path: 'track-status',
        component: TrackStatusComponent,
        canActivate: [NgxPermissionsGuard],
        data: {
          title: 'Track Status',
          parent: 'LMS',
          hideTitle: true,
          custom_url: 'lms/borrowers/track-status',
          permissions: {
            only: '',
            redirectTo: 'authentication/error-2'
          }
        }
      },
      ///////////////////////
      {
        path: 'all',
        component: BorrowersListComponent,
        canActivate: [NgxPermissionsGuard],
        data: {
          title: 'All',
          parent: 'LMS',
          hideTitle: true,
          custom_url: 'lms/borrowers/all',
          permissions: {
            only: 'view_borrowers',
            redirectTo: 'authentication/error-2'
          }
        }
      },
      {
        path: 'activation',
        component: BorrowersListComponent,
        canActivate: [NgxPermissionsGuard],
        data: {
          title: 'Activation',
          parent: 'LMS',
          hideTitle: true,
          custom_url: 'lms/borrowers/activation',
          permissions: {
            only: 'view_borrowers',
            redirectTo: 'authentication/error-2'
          }
        }
      },
      {
        path: 'active',
        component: BorrowersListComponent,
        canActivate: [NgxPermissionsGuard],
        data: {
          title: 'active',
          parent: 'LMS',
          hideTitle: true,
          custom_url: 'lms/borrowers/active',
          permissions: {
            only: 'view_borrowers',
            redirectTo: 'authentication/error-2'
          }
        }
      },
      {
        path: 'inactive',
        component: BorrowersListComponent,
        canActivate: [NgxPermissionsGuard],
        data: {
          title: 'Inactive',
          parent: 'LMS',
          hideTitle: true,
          custom_url: 'lms/borrowers/inactive',
          permissions: {
            only: 'view_borrowers',
            redirectTo: 'authentication/error-2'
          }
        }
      },
      {
        path: 'delinquent',
        component: BorrowersListComponent,
        canActivate: [NgxPermissionsGuard],
        data: {
          title: 'Delinquent',
          parent: 'LMS',
          hideTitle: true,
          custom_url: 'lms/borrowers/delinquent',
          permissions: {
            only: 'view_borrowers',
            redirectTo: 'authentication/error-2'
          }
        }
      },
      {
        path: 'close',
        component: BorrowersListComponent,
        canActivate: [NgxPermissionsGuard],
        data: {
          title: 'Close',
          parent: 'LMS',
          hideTitle: true,
          custom_url: 'lms/borrowers/close',
          permissions: {
            only: 'view_borrowers',
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
export class BorrowersRoutingModule { }
