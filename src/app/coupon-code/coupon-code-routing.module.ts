import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CouponCodeComponent } from './coupon-code.component';
import { AddEditCouponCodeComponent } from './add-edit-coupon-code/add-edit-coupon-code.component';
import { NgxPermissionsGuard } from 'ngx-permissions';
const routes: Routes = [
      {
            path: '',
            component: CouponCodeComponent,
            canActivate: [NgxPermissionsGuard],
            data: {
                  title: 'Coupon Code',
                  parent: 'Coupon Code',
                  custom_url: 'coupon-code',
                  permissions: {
                        only: 'view_coupon_code',
                        redirectTo: 'authentication/error-2'
                      }
            }
      },
      {
            path: '',
            canActivate: [NgxPermissionsGuard],
            data: {
                  title: 'Coupon Code',
                  parent: 'Coupon Code',
                  custom_url: 'coupon-code',
                  permissions: {
                        only: 'view_coupon_code',
                        redirectTo: 'authentication/error-2'
                      }
            },
            children: [
                  {
                        path: 'add-coupon-code',
                        component: AddEditCouponCodeComponent,
                        canActivate: [NgxPermissionsGuard],
                        data: {
                              title: 'Add Coupon Code',
                              parent: 'Coupon Code',
                              custom_url: 'coupon-code/add-coupon-code',
                              permissions: {
                                    only: 'add_coupon_code',
                                    redirectTo: 'authentication/error-2'
                                  }
                        }
                  },
                  {
                        path: 'edit-coupon-code',
                        component: AddEditCouponCodeComponent,
                        canActivate: [NgxPermissionsGuard],
                        data: {
                              title: 'Edit Coupon Code',
                              parent: 'Coupon Code',
                              custom_url: 'coupon-code/edit-coupon-code',
                              permissions: {
                                    only: 'edit_coupon_code',
                                    redirectTo: 'authentication/error-2'
                                  }
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
