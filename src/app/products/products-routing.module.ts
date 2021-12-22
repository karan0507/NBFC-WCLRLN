import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {
    path: '',
    // component: ProductsComponent,
    children: [
      {
        path: 'create-product',
        component: CreateProductComponent,
        data: {
          title: 'Create Product',
          parent: 'products',
        }
      },
      {
        path: 'product-list',
        component: ProductListComponent,
        data: {
          title: 'List',
          parent: 'products',
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
