import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { AuthorizationComponent } from './authorization.component';

const routes: Routes = [
  {
    path: '',
    component: AuthorizationComponent,
    canActivate: [NgxPermissionsGuard],
    data: {
      title: 'Authorization Policy',
      parent: 'LMS',
      custom_url: 'lms/authorization-policy',
      permissions: {
        only: 'view_athorization_policy',
        redirectTo: 'authentication/error-2'
      }
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorizationRoutingModule { }
