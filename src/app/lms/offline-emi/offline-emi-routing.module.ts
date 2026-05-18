import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { OfflineEmiComponent } from './offline-emi/offline-emi.component';

const routes: Routes = [
  {
    path: '',
    component: OfflineEmiComponent,
    canActivate: [NgxPermissionsGuard],
    data: {
      title: 'Offline EMI',
      parent: 'LMS',
      custom_url: 'emi/offline-emi',
      permissions: {
        only: '',
        redirectTo: 'authentication/error-2'
      }
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfflineEmiRoutingModule { }
