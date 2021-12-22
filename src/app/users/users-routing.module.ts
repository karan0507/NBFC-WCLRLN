import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LendersComponent } from './lenders/lenders.component';
import { MastersPartnersComponent } from './masters-partners/masters-partners.component';
import { MerchantsComponent } from './merchants/merchants.component';
import { PartnersComponent } from './partners/partners.component';

const routes: Routes = [
  {
    path: '',
    // component: ProductsComponent,
    children: [
      {
        path: 'lenders',
        component: LendersComponent,
        data: {
          title: 'Lenders',
          parent: 'users',
        }
      },
      {
        path: 'masters-partners',
        component: MastersPartnersComponent,
        data: {
          title: 'Masters Partners ',
          parent: 'users',
        }
      },
      {
        path: 'merchants',
        component: MerchantsComponent,
        data: {
          title: 'Merchants',
          parent: 'users',
        }
      },
      {
        path: 'partners',
        component: PartnersComponent,
        data: {
          title: 'Partners',
          parent: 'users',
        }
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
