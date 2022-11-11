import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { BbpsBillersComponent } from './bbps-billers/bbps-billers.component';
import { BbpsCategoryComponent } from './bbps-category/bbps-category.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';

const routes: Routes = [
  {
    path: 'category',
    component: BbpsCategoryComponent,
    canActivate: [NgxPermissionsGuard],
    data: {
      title: 'Category',
      parent: 'BBPS',
      custom_url: 'lms/bbps/category',
      permissions: {
        only: '',
        redirectTo: 'authentication/error-2'
      }
    },
    // children: [
    //   {
    //     path: 'edit',
    //     component: EditCategoryComponent,
    //     canActivate: [NgxPermissionsGuard],
    //     data: {
    //       title: 'Edit category',
    //       parent: 'BBPS',
    //       hideTitle: true,
    //       custom_url: 'lms/bbps/category/edit',
    //       permissions: {
    //         only: '',
    //         redirectTo: 'authentication/error-2'
    //       }
    //     }
    //   },
    // ]
  },
  {
    path: 'category',
    children: [
      {
        path: 'edit',
        component: EditCategoryComponent,
        canActivate: [NgxPermissionsGuard],
        data: {
          title: 'Edit category',
          parent: 'BBPS',
          hideTitle: true,
          custom_url: 'lms/bbps/category/edit',
          permissions: {
            only: '',
            redirectTo: 'authentication/error-2'
          }
        }
      },
    ]
  },
  {
    path: 'billers',
    component: BbpsBillersComponent,
    canActivate: [NgxPermissionsGuard],
    data: {
      title: 'Billers',
      parent: 'BBPS',
      custom_url: 'lms/bbps/billers',
      permissions: {
        only: '',
        redirectTo: 'authentication/error-2'
      }
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BbpsRoutingModule { }
