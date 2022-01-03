import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateProductComponent } from './create-product.component';

const routes: Routes = [
  {
    path: '',
    component: CreateProductComponent,
    data: {
      title: 'Create Product',
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateProductRoutingModule { }
