import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BorrowersDetailsComponent } from './borrowers-details/borrowers-details.component';
import { BorrowersListComponent } from './borrowers-list/borrowers-list.component';
import { BorrowersComponent } from './borrowers.component';

const routes: Routes = [
  {
    path: '',
    component: BorrowersListComponent,
    data: {
      title: 'Borrowers',
      parent: 'LMS',
      custom_url: 'lms/borrowers'
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
        data: {
          title: 'View Details',
          parent: 'LMS',
          hideTitle: true,
          custom_url: 'lms/borrowers/details'
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
