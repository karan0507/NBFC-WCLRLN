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
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BorrowersRoutingModule { }
