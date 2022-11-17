import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { MandateTriggersComponent } from './mandate-triggers.component';

const routes: Routes = [
  {
    path: '',
    component: MandateTriggersComponent,
    canActivate: [NgxPermissionsGuard],
    data: {
      title: 'Mandate triggers',
      parent: 'LMS',
      custom_url: 'lms/mandate-triggers',
      permissions: {
        only: 'view_mandate trigger ',
        redirectTo: 'authentication/error-2'
      }
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MandateTriggersRoutingModule { }
