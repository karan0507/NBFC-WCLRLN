import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChangeBillDateComponent } from './change-bill-date.component';

const routes: Routes = [
  {
    path: '',
    component: ChangeBillDateComponent,
    data: {
      title: 'Change Bill Date',
      parent: 'LMS',
      custom_url: 'lms/change-bill-date'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChangeBillDateRoutingModule { }
