import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PayoutStructureComponent } from './payout-structure/payout-structure.component';

const routes: Routes = [
  {
    path: '',
    component: PayoutStructureComponent,
    data: {
      title: 'PayoutStructure',
    }
  },
  {
    path: '',
    children: [
      {
        path: 'add',
        component: PayoutStructureComponent,
        data: {
          title: 'PayoutStructure',
          parent: 'PayoutStructure',
        }
      },{
        path: 'edit',
        component: PayoutStructureComponent,
        data: {
          title: 'PayoutStructure',
          parent: 'PayoutStructure',
        }
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayoutStructureRoutingModule { }
