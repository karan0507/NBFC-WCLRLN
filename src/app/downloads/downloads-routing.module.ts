import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { DownloadsComponent } from './downloads.component';

const routes: Routes = [
  {
    path: '',
    component: DownloadsComponent,
    canActivate: [NgxPermissionsGuard],
    data: {
      title: 'Downloads',
      parent: 'Downloads',
      custom_url: 'downloads',
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
export class DownloadsRoutingModule { }
