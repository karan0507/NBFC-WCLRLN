import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LenderManagementComponent } from './lender-management.component';

const routes: Routes = [
  {
    path: '',
    component: LenderManagementComponent,
    data: {
      title: 'Lender Management',
      parent: 'LMS'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LenderManagementRoutingModule { }
