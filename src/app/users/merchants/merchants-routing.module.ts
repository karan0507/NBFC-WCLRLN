import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
                        component: DsaListComponent,
                        data: {
                              title: "Partner DSA",
                              parent: "Merchants",
                        },
                        children: [
                              {
                                    path: "add-dsa",
                                    component: AddEditDsaComponent,
                                    data: {
                                          title: "Add DSA",
                                          parent: "DSA List",
                                          custom_url: "add-dsa",
                                    },
                              },
                              {
                                    path: "edit-dsa",
                                    component: AddEditDsaComponent,
                                    data: {
                                          title: "Edit DSA",
                                          parent: "DSA List",
                                          custom_url: "edit-dsa",
                                    },
                              },
                        ],
                  },
                  {
                        path: "list",
                        component: MerchantsListComponent,
                        data: {
                              title: "Merchant List",
                              parent: "Merchants",
                              custom_url: "list",
                        },
                        children: [],
                  },
                  {
                        path: "list",
                        data: {
                              title: 'Merchant List',
                              parent:'Merchants',
                              custom_url: "merchants/list",
                        },
                        children: [
                              {
                                    path: "add-merchant",
                                    component: AddEditMerchantsComponent,
                                    data: {
                                          title: "Add Merchant",
                                          parent: "Merchant",
                                          custom_url: "add-merchant",
                                    },
                              },
                              {
                                    path: "edit-merchant",
                                    component: AddEditMerchantsComponent,
                                    data: {
                                          title: "Edit Merchant",
                                          parent: "Merchant",
                                          custom_url: "add-merchant",
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