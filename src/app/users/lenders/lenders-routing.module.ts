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
      parent: 'Lenders',
      custom_url: 'lenders'
    },
  },
  {
    path: '',
    data: {
      title: 'Lenders List',
      parent: 'Lenders',
      custom_url: 'lenders'
    },
    // component: LendersComponent,
    children: [
      {
        path: 'add',
        component: AddEditLendersComponent,
        data: {
          title: 'Add Lender',
          parent: 'Lenders',
          custom_url: 'lenders/add'
        }
      },
      {
        path: 'edit',
        component: AddEditLendersComponent,
        data: {
          title: 'Edit Lender',
          parent: 'Lenders',
          custom_url: 'lenders/edit'
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
