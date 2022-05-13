import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { CreateProductComponent } from './create-product.component';
import { ViewProductComponent } from './view-product/view-product.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'create-product'
  // },
  {
    path:'',
    canActivate: [NgxPermissionsGuard],
    data: {
      title: 'Product List',
      parent: 'Products',
      custom_url: 'product-list',
      permissions: {
        only: 'view_product',
        redirectTo: 'authentication/error-2'
    }
    },
    children: [
      {
        path: 'create-product',
        canActivate: [NgxPermissionsGuard],
        component: CreateProductComponent,
        data: {
          title: 'Create New Product',
          parent: 'Product',
          custom_url: 'product/create-product',
          permissions: {
            only: 'add_product',
            redirectTo: 'authentication/error-2'
        }
        }
      },
      {
        path: 'edit-product',
        canActivate: [NgxPermissionsGuard],
        component: CreateProductComponent,
        data: {
          title: 'Edit Product',
          parent: 'Product',
          custom_url: 'product/edit-product',
          permissions: {
            only: 'edit_product',
            redirectTo: 'authentication/error-2'
        }
        }
      },
      {
        path: 'view-product',
        canActivate: [NgxPermissionsGuard],
        component: ViewProductComponent,
        data: {
          title: 'View Product',
          parent: 'Product',
          custom_url: 'product/view-product',
          permissions: {
            only: 'view_product',
            redirectTo: 'authentication/error-2'
        }
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateProductRoutingModule { }
