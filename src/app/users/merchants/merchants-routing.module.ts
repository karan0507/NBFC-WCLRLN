import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEditDsaComponent } from './add-edit-dsa/add-edit-dsa.component';
import { AddEditMerchantsComponent } from './add-edit-merchants/add-edit-merchants.component';
import { DsaListComponent } from './dsa-list/dsa-list.component';
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
        path: 'add-merchant',
        component: AddEditMerchantsComponent,
        data: {
          title: 'Add Merchants',
          parent: 'Merchants',
        }
      },
      {
        path: 'edit-merchant',
        component: AddEditMerchantsComponent,
        data: {
          title: 'Edit Merchants',
          parent: 'Merchants',
        }
      },
      {
        path: 'add-dsa',
        component: AddEditDsaComponent,
        data: {
          title: 'Partner DSA',
          parent: 'Merchants',
        }
      },
      {
        path: 'edit-dsa',
        component: AddEditDsaComponent,
        data: {
          title: 'Edit Partner DSA',
          parent: 'Merchants',
        }
      },
      {
        path: 'DSA',
        component: DsaListComponent,
        data: {
          title: 'Partner DSA',
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
