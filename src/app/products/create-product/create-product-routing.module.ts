import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateProductComponent } from './create-product.component';
import { ViewProductComponent } from './view-product/view-product.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'create-product'
  // },
  {
    path:'',
    data: {
      title: 'Product List',
      parent: 'Products',
      custom_url: 'product-list'
    },
    children: [
      {
        path: 'create-product',
        component: CreateProductComponent,
        data: {
          title: 'Create New Product',
          parent: 'Product',
          custom_url: 'product/create-product'
        }
      },
      {
        path: 'edit-product',
        component: CreateProductComponent,
        data: {
          title: 'Edit Product',
          parent: 'Product',
          custom_url: 'product/edit-product'
        }
      },
      {
        path: 'view-product',
        component: ViewProductComponent,
        data: {
          title: 'View Product',
          parent: 'Product',
          custom_url: 'product/view-product'
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
