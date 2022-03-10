import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEditPartnersComponent } from './add-edit-partners/add-edit-partners.component';
import { PartnersListComponent } from './partners-list/partners-list.component';

const routes: Routes = [
  {
    path: '',
    component: PartnersListComponent,
    data: {
      title: 'Corporate List',
      parent: 'Corporate',
      custom_url: 'partners'
    }
  },
  {
    path: '',
    data: {
      title: 'Corporate List',
      parent: 'Corporate',
      custom_url: 'partners'
    },
    // component: LendersComponent,
    children: [
      {
        path: 'add',
        component: AddEditPartnersComponent,
        data: {
          title: 'Add Corporate',
          parent: 'Corporate',
          custom_url: 'partner/add'
        }
      },
      {
        path: 'edit',
        component: AddEditPartnersComponent,
        data: {
          title: 'Edit Corporate',
          parent: 'Corporate',
          custom_url: 'partner/edit'
        }
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartnersRoutingModule { }
