import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { VersioningComponent } from './versioning.component';

const routes: Routes = [
      {
            path: '',
            component: VersioningComponent,
            canActivate: [NgxPermissionsGuard],
            data: {
              title: 'Version',
              parent: 'Version',
              custom_url: 'version',
              permissions: {
                only: 'view_version',
                redirectTo: 'authentication/error-2'
              }
            }
          },
];

@NgModule({
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
})
export class VersioningRoutingModule { }


