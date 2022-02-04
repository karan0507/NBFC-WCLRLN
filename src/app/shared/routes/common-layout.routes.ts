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
        path: 'payoutStructure',
        loadChildren: () => import('../../users/payout-structure/payout-structure.module').then(m => m.PayoutStructureModule),
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
        path: 'lms/borrowers',
        loadChildren: () => import('../../lms/borrowers/borrowers.module').then(m => m.BorrowersModule),
    },
    {
        path: 'lms',
        loadChildren: () => import('../../lms/transactions/transactions.module').then(m => m.TransactionsModule),
    },
    {
        path: 'lms/authorization-policy',
        loadChildren: () => import('../../lms/authorization/authorization.module').then(m => m.AuthorizationModule),
    },
    {
        path: 'lms/risk-policy',
        loadChildren: () => import('../../lms/risk-policy/risk-policy.module').then(m => m.RiskPolicyModule),
    },
    {
        path: 'lms/lender-management',
        loadChildren: () => import('../../lms/lender-management/lender-management.module').then(m => m.LenderManagementModule),
    },
];