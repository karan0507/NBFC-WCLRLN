import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEditMerchantsComponent } from './add-edit-merchants/add-edit-merchants.component';
import { MerchantsListComponent } from './merchants-list/merchants-list.component';

const routes: Routes = [
  {
    path: '',
    component: MerchantsListComponent,
    data: {
      title: 'Merchants',
    }
  },
  {
    path: '',
    children: [
      {
        path: 'add',
        component: AddEditMerchantsComponent,
        data: {
          title: 'Add Merchants',
          parent: 'Merchants',
        }
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MerchantsRoutingModule { }
