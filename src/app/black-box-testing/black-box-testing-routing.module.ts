import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlackBoxTestingComponent } from './black-box-testing.component';

const routes: Routes = [
  {
    path: '',
    component: BlackBoxTestingComponent,
    data: {
      title: 'Black Box',
      parent: 'Black Box',
      custom_url: 'black-box'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlackBoxTestingRoutingModule { }
