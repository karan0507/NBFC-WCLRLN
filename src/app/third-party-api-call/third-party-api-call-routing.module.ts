import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { ThirdPartyApiCallComponent } from './third-party-api-call/third-party-api-call.component';

const routes: Routes = [
  {
    path: '',
    component: ThirdPartyApiCallComponent,
    canActivate: [NgxPermissionsGuard],
    data: {
      title: 'API buckets Statistics',
      parent: 'API buckets Statistics',
      custom_url: 'third-party-api-call',
      permissions: {
        only: 'view_api_statistics',
        redirectTo: 'authentication/error-2'
      }
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThirdPartyApiCallRoutingModule { }
