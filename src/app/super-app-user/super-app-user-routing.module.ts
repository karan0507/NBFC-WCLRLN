import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuperAppUserComponent } from './super-app-user/super-app-user.component';

const routes: Routes = [
  {
    path: '',
    // canActivate: [NgxPermissionsGuard],
    component: SuperAppUserComponent,
    data: {
      title: 'Super App User',
      parent: 'Super App User',
      custom_url: 'product-list',
      permissions: {
                only: 'view_product',
                redirectTo: 'authentication/error-2'
            }
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperAppUserRoutingModule { }
