import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BorrowersListComponent } from './borrowers-list/borrowers-list.component';
import { BorrowersComponent } from './borrowers.component';

const routes: Routes = [
  {
    path: '',
    component: BorrowersListComponent,
    data: {
      title: 'Borrowers',
      parent: 'LMS'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BorrowersRoutingModule { }
