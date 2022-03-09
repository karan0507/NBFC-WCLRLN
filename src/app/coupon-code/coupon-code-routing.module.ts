import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CouponCodeComponent } from './coupon-code.component';
import { AddEditCouponCodeComponent } from './add-edit-coupon-code/add-edit-coupon-code.component';
const routes: Routes = [
      {
            path: '',
            component: CouponCodeComponent,
            data: {
                  title: 'Coupon Code',
                  parent: 'Coupon Code',
                  custom_url: 'coupon-code'
            }
      },
      {
            path: '',
            data: {
                  title: 'Coupon Code',
                  parent: 'Coupon Code',
                  custom_url: 'coupon-code'
            },
            children: [
                  {
                        path: 'add-coupon-code',
                        component: AddEditCouponCodeComponent,
                        data: {
                              title: 'Add Coupon Code',
                              parent: 'Coupon Code',
                              custom_url: 'coupon-code/add-coupon-code'
                        }
                  },
                  {
                        path: 'edit-coupon-code',
                        component: AddEditCouponCodeComponent,
                        data: {
                              title: 'Edit Coupon Code',
                              parent: 'Coupon Code',
                              custom_url: 'coupon-code/edit-coupon-code'
                        }
                  }
            ]
      }
];

@NgModule({
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
})
export class CouponCodeRoutingModule { }
