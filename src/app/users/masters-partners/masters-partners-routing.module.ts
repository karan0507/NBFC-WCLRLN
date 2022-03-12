import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEditMastersComponent } from './add-edit-masters/add-edit-masters.component';
import { MasterPartnersListComponent } from './master-partners-list/master-partners-list.component';

const routes: Routes = [
  {
    path: '',
    component: MasterPartnersListComponent,
    data: {
      title: 'Masters Partners',
      parent: 'Users',
      custom_url: 'masters-partners'
    }
  },
  {
    path: '',
    data: {
      title: 'Masters Partners',
      parent: 'Users',
      custom_url: 'masters-partners'
    },
    // component: LendersComponent,
    children: [
      {
        path: 'add',
        component: AddEditMastersComponent,
        data: {
          title: 'Add Master Partner',
          parent: 'Users',
          custom_url: 'masters-partners/add'
        }
      },
      {
        path: 'edit',
        component: AddEditMastersComponent,
        data: {
          title: 'Edit Master Partner',
          parent: 'Users',
          custom_url: 'masters-partners/edit'
        }
      },
    ]
  },
  // {
  //   path: '',
  //   children: [
  //     {
  //       path: 'add',
  //       component: AddEditMastersComponent,
  //       data: {
  //         title: 'Add Masters Partners',
  //         parent: 'Masters Partners',
  //       }
  //     },
  //   ]
  // },
  // {
  //   path: '',
  //   children: [
  //     {
  //       path: 'edit',
  //       component: AddEditMastersComponent,
  //       data: {
  //         title: 'Edit Masters Partners',
  //         parent: 'Masters Partners',
  //       }
  //     },
  //   ]
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MastersPartnersRoutingModule { }
