import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LmsListComponent } from './lms-list/lms-list.component';

const routes: Routes = [
  {
    path: '',
    component: LmsListComponent,
    data: {
      title: 'LMS list',
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LmsRoutingModule { }
