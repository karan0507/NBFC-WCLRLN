import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEditLendersComponent } from './add-edit-lenders/add-edit-lenders.component';
import { LendersListComponent } from './lenders-list/lenders-list.component';

const routes: Routes = [
  {
    path: '',
    component: LendersListComponent,
    data: {
      title: 'Lenders List',
    }
  },
  {
    path: '',
    // component: LendersComponent,
    children: [
      {
        path: 'add',
        component: AddEditLendersComponent,
        data: {
          title: 'Add Lender',
          parent: 'Lenders',
        }
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LendersRoutingModule { }
