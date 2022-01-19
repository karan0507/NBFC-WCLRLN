import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BorrowersComponent } from './borrowers.component';

const routes: Routes = [
  {
    path: '',
    component: BorrowersComponent,
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
