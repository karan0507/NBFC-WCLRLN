import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { ProductListComponent } from './product-list.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [NgxPermissionsGuard],
    component: ProductListComponent,
    data: {
      title: 'Product List',
      parent: 'Products',
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
export class ProductListRoutingModule { }
