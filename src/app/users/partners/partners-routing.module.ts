import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEditPartnersComponent } from './add-edit-partners/add-edit-partners.component';
import { PartnersListComponent } from './partners-list/partners-list.component';

const routes: Routes = [
  {
    path: '',
    component: PartnersListComponent,
    data: {
      title: 'Partners',
    }
  },
  {
    path: '',
    children: [
      {
        path: 'add',
        component: AddEditPartnersComponent,
        data: {
          title: 'Add Corporate',
          parent: 'Partners',
        }
      },
    ]
  },
  {
    path: '',
    children: [
      {
        path: 'edit',
        component: AddEditPartnersComponent,
        data: {
          title: 'Edit Corporate',
          parent: 'Partners',
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
