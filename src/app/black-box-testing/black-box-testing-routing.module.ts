import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { BlackBoxTestingComponent } from './black-box-testing.component';

const routes: Routes = [
  {
    path: '',
    component: BlackBoxTestingComponent,
    canActivate: [NgxPermissionsGuard],
    data: {
      title: 'Black Box',
      parent: 'Black Box',
      custom_url: 'black-box',
      permissions: {
        only: 'view_black_box',
        redirectTo: 'authentication/error-2'
      }
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlackBoxTestingRoutingModule { }
