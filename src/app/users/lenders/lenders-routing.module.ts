import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { AddEditLendersComponent } from './add-edit-lenders/add-edit-lenders.component';
import { LendersListComponent } from './lenders-list/lenders-list.component';

const routes: Routes = [
  {
    path: '',
    component: LendersListComponent,
    canActivate: [NgxPermissionsGuard],
    data: {
      title: 'Lenders List',
      parent: 'Users',
      custom_url: 'lenders',
      permissions: {
        only: 'view_lender',
        redirectTo: 'authentication/error-2'
    }
    },
  },
  {
    path: '',
    data: {
      title: 'Lenders List',
      parent: 'Users',
      custom_url: 'lenders',
      canActivate: [NgxPermissionsGuard],
      permissions: {
        only: 'view_lender',
        redirectTo: 'authentication/error-2'
      }
    },
    // component: LendersComponent,
    children: [
      {
        path: 'add',
        canActivate: [NgxPermissionsGuard],
        component: AddEditLendersComponent,
        data: {
          title: 'Add Lender',
          parent: 'Users',
          custom_url: 'lenders/add',
          permissions: {
            only: 'add_lender',
            redirectTo: 'authentication/error-2'
          }
        }
      },
      {
        path: 'edit',
        canActivate: [NgxPermissionsGuard],
        component: AddEditLendersComponent,
        data: {
          title: 'Edit Lender',
          parent: 'Users',
          custom_url: 'lenders/edit',
          permissions: {
            only: 'edit_lender',
            redirectTo: 'authentication/error-2'
          }
        }
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LendersRoutingModule { }
