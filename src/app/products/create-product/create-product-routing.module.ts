import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateProductComponent } from './create-product.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'create-product'
  // },
  {
    path:'',
    children: [
      {
        path: 'create-product',
        component: CreateProductComponent,
        data: {
          title: 'Create New Product',
          parent: 'Product'
        }
      },
      {
        path: 'edit-product',
        component: CreateProductComponent,
        data: {
          title: 'Edit Product',
          parent: 'Product'
        }
      },
      {
        path: 'view-product',
        component: CreateProductComponent,
        data: {
          title: 'View Product',
          parent: 'Product'
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
