
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { DormantStageComponent } from './dormant-stage/dormant-stage.component';

const routes: Routes = [
  {
    path: '',
    // canActivate: [NgxPermissionsGuard],
    component: DormantStageComponent,
    data: {
      title: 'Dormant-Stage',
      parent: 'Dormant',
      custom_url: 'dormant',
      // permissions: {
      //   only: ['dormant'],
      //   redirectTo: 'authentication/error-2'
      // }
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DormantStageRoutingModule { }
