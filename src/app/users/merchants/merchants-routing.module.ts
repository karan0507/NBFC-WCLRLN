import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { AddEditDsaComponent } from './add-edit-dsa/add-edit-dsa.component';
import { AddEditMerchantsComponent } from './add-edit-merchants/add-edit-merchants.component';
import { DsaListComponent } from './dsa-list/dsa-list.component';
import { MerchantsListComponent } from './merchants-list/merchants-list.component';

const routes: Routes = [
      {
            path: '',
            children: [
                  {
                        path: "DSA",
                        canActivate: [NgxPermissionsGuard],
                        component: DsaListComponent,
                        data: {
                              title: "Partner DSA List",
                              parent: "Users",
                              custom_url: '/merchants/DSA',
                              permissions: {
                                    only: 'view_partner_dsa',
                                    redirectTo: 'authentication/error-2'
                                  }
                        },
                  },
                  {
                        path: "DSA",
                        canActivate: [NgxPermissionsGuard],
                        data: {
                              title: "Partner DSA List",
                              parent: "Users",
                              custom_url : '/merchants/DSA',
                              permissions: {
                                    only: 'view_partner_dsa',
                                    redirectTo: 'authentication/error-2'
                                  }
                        },
                        children: [
                              {
                                    path: "add-dsa",
                                    canActivate: [NgxPermissionsGuard],
                                    component: AddEditDsaComponent,
                                    data: {
                                          title: "Add DSA",
                                          parent: "Users",
                                          custom_url: "add-dsa",
                                          permissions: {
                                                only: 'add_partner_dsa',
                                                redirectTo: 'authentication/error-2'
                                              }
                                    },
                              },
                              {
                                    path: "edit-dsa",
                                    component: AddEditDsaComponent,
                                    canActivate: [NgxPermissionsGuard],
                                    data: {
                                          title: "Edit DSA",
                                          parent: "DSA List",
                                          custom_url: "edit-dsa",
                                          permissions: {
                                                only: 'edit_partner_dsa',
                                                redirectTo: 'authentication/error-2'
                                              }
                                    },
                              },
                        ],
                  },
                  {
                        path: "list",
                        component: MerchantsListComponent,
                        canActivate: [NgxPermissionsGuard],
                        data: {
                              title: "Merchant List",
                              parent: "Users",
                              custom_url: "list",
                              permissions: {
                                    only: 'view_merchant',
                                    redirectTo: 'authentication/error-2'
                                  }
                        },
                  },
                  {
                        path: "list",
                        canActivate: [NgxPermissionsGuard],
                        data: {
                              title: 'Merchant List',
                              parent: 'Users',
                              custom_url: "merchants/list",
                              permissions: {
                                    only: 'view_merchant',
                                    redirectTo: 'authentication/error-2'
                                  }
                        },
                        children: [
                              {
                                    path: "add-merchant",
                                    canActivate: [NgxPermissionsGuard],
                                    component: AddEditMerchantsComponent,
                                    data: {
                                          title: "Add Merchant",
                                          parent: "Users",
                                          custom_url: "add-merchant",
                                          permissions: {
                                                only: 'add_merchant',
                                                redirectTo: 'authentication/error-2'
                                              }
                                    },
                              },
                              {
                                    path: "edit-merchant",
                                    canActivate: [NgxPermissionsGuard],
                                    component: AddEditMerchantsComponent,
                                    data: {
                                          title: "Edit Merchant",
                                          parent: "Users",
                                          custom_url: "add-merchant",
                                          permissions: {
                                                only: 'edit_merchant',
                                                redirectTo: 'authentication/error-2'
                                              }
                                    },
                              },
                        ],
                  },
            ]
      },
];

@NgModule({
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
})
export class MerchantsRoutingModule { }


// {
//   path: 'add-merchant',
//   component: AddEditMerchantsComponent,
//   data: {
//     title: 'Add Merchant',
//     parent: 'Merchant List',
//     custom_url: 'add-merchant'
//   }
// },
// {
//   path: 'edit-merchant',
//   component: AddEditMerchantsComponent,
//   data: {
//     title: 'Edit Merchant',
//     parent: 'Merchant',
//     custom_url: 'add-merchant'
//   }
// },





// {
//   path: 'add-merchant',
//   component: AddEditMerchantsComponent,
//   data: {
//     title: 'Add Merchant',
//     parent: 'Merchant List',
//     custom_url: 'add-merchant'
//   }
// },
// {
//   path: 'edit-merchant',
//   component: AddEditMerchantsComponent,
//   data: {
//     title: 'Edit Merchant',
//     parent: 'Merchant',
//     custom_url: 'add-merchant'
//   }
// },





// {
//   path: 'add-dsa',
//   component: AddEditDsaComponent,
//   data: {
//     title: 'Partner DSA',
//     parent: 'Merchants',
//   }
// },
// {
//   path: 'edit-dsa',
//   component: AddEditDsaComponent,
//   data: {
//     title: 'Edit Partner DSA',
//     parent: 'Merchants',
//   }
// },

// {
      //   path: 'add-merchant',
      //   component: AddEditMerchantsComponent,
      //   data: {
      //     title: 'Add Merchants',
      //     parent: 'Merchants',
      //   }
      // },
      // {
      //   path: 'edit-merchant',
      //   component: AddEditMerchantsComponent,
      //   data: {
      //     title: 'Edit Merchants',
      //     parent: 'Merchants',
      //   }
      // },