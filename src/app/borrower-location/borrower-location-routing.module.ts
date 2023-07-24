import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BorrowerLocationComponent } from './borrower-location/borrower-location.component';

const routes: Routes = [
  {
    path:'',
    component:BorrowerLocationComponent,
    data:{
      title:'Borrower-Location',
      parent:'',
      custom_url:'',
      // Permissions:{}
    }    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BorrowerLocationRoutingModule { }
