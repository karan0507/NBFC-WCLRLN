import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { NachUploadComponent } from './nach-upload/nach-upload.component';

const routes: Routes = [
  {
    path: '',
    component: NachUploadComponent,
    canActivate: [NgxPermissionsGuard],
    data: {
      title: 'Nach upload',
      parent: 'Nach upload',
      custom_url: 'lms/nach-upload',
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
export class NachUploadRoutingModule { }
