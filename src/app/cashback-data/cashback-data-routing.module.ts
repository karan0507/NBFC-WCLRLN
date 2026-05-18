import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { CashbackDataComponent } from './cashback-data.component';

const routes: Routes = [
  {
    path: '',
    component: CashbackDataComponent,
    canActivate: [NgxPermissionsGuard],
    data: {
          title: 'Corporate cashback program',
          parent: 'Corporate cashback program',
          custom_url: 'cashback-program',
          permissions: {
                only: 'view_corporate_cashback_program',
                redirectTo: 'authentication/error-2'
              }
    }
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CashbackDataRoutingModule { }
