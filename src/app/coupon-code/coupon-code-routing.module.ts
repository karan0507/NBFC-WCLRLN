import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CouponCodeComponent } from './coupon-code.component';

const routes: Routes = [
      {
            path:'',
            component: CouponCodeComponent,
            data:{
                  'title':'Coupon Code'
            }
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CouponCodeRoutingModule { }
