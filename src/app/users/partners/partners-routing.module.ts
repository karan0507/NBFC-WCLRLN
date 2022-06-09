import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { AddEditPartnersComponent } from './add-edit-partners/add-edit-partners.component';
import { PartnersListComponent } from './partners-list/partners-list.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [NgxPermissionsGuard],
    component: PartnersListComponent,
    data: {
      title: 'Corporate List',
      parent: 'Users',
      custom_url: 'partners',
      permissions: {
        only: 'view_partner',
        redirectTo: 'authentication/error-2'
      }
    }
  },
  {
    path: '',
    canActivate: [NgxPermissionsGuard],
    data: {
      title: 'Corporate List',
      parent: 'Users',
      custom_url: 'partners',
      permissions: {
        only: 'view_corporate',
        redirectTo: 'authentication/error-2'
      }
    },
    // component: LendersComponent,
    children: [
      {
        path: 'add',
        // canActivate: [NgxPermissionsGuard],
        component: AddEditPartnersComponent,
        data: {
          title: 'Add Corporate',
          parent: 'Users',
          custom_url: 'partner/add',
          // permissions: {
          //   only: 'add_corporate',
          //   redirectTo: 'authentication/error-2'
          // }
        }
      },
      {
        path: 'edit',
        canActivate: [NgxPermissionsGuard],
        component: AddEditPartnersComponent,
        data: {
          title: 'Edit Corporate',
          parent: 'Users',
          custom_url: 'partner/edit',
          permissions: {
            only: 'edit_corporate',
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
export class PartnersRoutingModule { }
