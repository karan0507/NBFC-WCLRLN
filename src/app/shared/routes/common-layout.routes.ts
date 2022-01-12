import { Routes } from '@angular/router';

export const CommonLayout_ROUTES: Routes = [
    // {
    //     path: 'authentication',
    //     loadChildren: () => import('../../authentication/authentication.module').then(m => m.AuthenticationModule),
    // },
    {
        path: 'dashboard',
        loadChildren: () => import('../../dashboard/dashboard.module').then(m => m.DashboardModule),
    },
    {
        path: 'product-list',
        loadChildren: () => import('../../products/product-list/product-list.module').then(m => m.ProductListModule),
    },
    {
        path: 'product',
        loadChildren: () => import('../../products/create-product/create-product.module').then(m => m.CreateProductModule),
    },
    {
        path: 'lenders',
        loadChildren: () => import('../../users/lenders/lenders.module').then(m => m.LendersModule),
    },
    {
        path: 'masters-partners',
        loadChildren: () => import('../../users/masters-partners/masters-partners.module').then(m => m.MastersPartnersModule),
    },
    {
        path: 'merchants',
        loadChildren: () => import('../../users/merchants/merchants.module').then(m => m.MerchantsModule),
    },
    {
        path: 'partners',
        loadChildren: () => import('../../users/partners/partners.module').then(m => m.PartnersModule),
    },
    {
        path: 'employees',
        loadChildren: () => import('../../employees/employees.module').then(m => m.EmployeesModule),
    },
    {
        path: 'applications',
        loadChildren: () => import('../../applications/applications.module').then(m => m.ApplicationsModule),
    },
    {
        path: 'lms',
        loadChildren: () => import('../../lms/lms.module').then(m => m.LmsModule),
    },
    {
        path: 'transactions',
        loadChildren: () => import('../../transactions/transactions.module').then(m => m.TransactionsModule),
    }
];