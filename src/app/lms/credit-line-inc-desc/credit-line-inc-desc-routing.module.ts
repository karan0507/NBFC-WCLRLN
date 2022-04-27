import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreditLineIncDescComponent } from './credit-line-inc-desc.component';

const routes: Routes = [
  {
    path: '',
    component: CreditLineIncDescComponent,
    data: {
      title: 'Change Credit Line',
      parent: 'LMS',
      custom_url: 'lms/change-credit-line'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditLineIncDescRoutingModule { }
