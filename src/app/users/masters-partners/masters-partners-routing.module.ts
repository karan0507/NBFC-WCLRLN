import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { AddEditMastersComponent } from './add-edit-masters/add-edit-masters.component';
import { MasterPartnersListComponent } from './master-partners-list/master-partners-list.component';

const routes: Routes = [
  {
    path: '',
    component: MasterPartnersListComponent,
    canActivate: [NgxPermissionsGuard],
    data: {
      title: 'Masters Partners',
      parent: 'Users',
      custom_url: 'masters-partners',
      permissions: {
        only: 'view_master_partner',
        redirectTo: 'authentication/error-2'
      }
    }
  },
  {
    path: '',
    data: {
      title: 'Masters Partners',
      parent: 'Users',
      custom_url: 'masters-partners',
      canActivate: [NgxPermissionsGuard],
      permissions: {
        only: 'view_master_partner',
        redirectTo: 'authentication/error-2'
      }
    },
    // component: LendersComponent,
    children: [
      {
        path: 'add',
        component: AddEditMastersComponent,
        canActivate: [NgxPermissionsGuard],
        data: {
          title: 'Add Master Partner',
          parent: 'Users',
          custom_url: 'masters-partners/add',
          permissions: {
            only: 'add_master_partner',
            redirectTo: 'authentication/error-2'
          }
        }
      },
      {
        path: 'edit',
        component: AddEditMastersComponent,
        canActivate: [NgxPermissionsGuard],
        data: {
          title: 'Edit Master Partner',
          parent: 'Users',
          custom_url: 'masters-partners/edit',
          permissions: {
            only: 'edit_master_partner',
            redirectTo: 'authentication/error-2'
          }
        }
      },
    ]
  },
  // {
  //   path: '',
  //   children: [
  //     {
  //       path: 'add',
  //       component: AddEditMastersComponent,
  //       data: {
  //         title: 'Add Masters Partners',
  //         parent: 'Masters Partners',
  //       }
  //     },
  //   ]
  // },
  // {
  //   path: '',
  //   children: [
  //     {
  //       path: 'edit',
  //       component: AddEditMastersComponent,
  //       data: {
  //         title: 'Edit Masters Partners',
  //         parent: 'Masters Partners',
  //       }
  //     },
  //   ]
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MastersPartnersRoutingModule { }
