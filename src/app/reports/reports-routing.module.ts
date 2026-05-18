import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { ReportsComponent } from './reports.component';

const routes: Routes = [
  {
    path: '',
    component: ReportsComponent,
    canActivate: [NgxPermissionsGuard],
    data: {
      title: 'Reports',
      parent: 'Report',
      custom_url: 'reports',
      permissions: {
        only: 'view_reports',
        redirectTo: 'authentication/error-2'
      }
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
