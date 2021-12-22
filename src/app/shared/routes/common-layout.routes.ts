import { Routes } from '@angular/router';

export const CommonLayout_ROUTES: Routes = [
    {
        path: 'dashboard',
        loadChildren: () => import('../../dashboard/dashboard.module').then(m => m.DashboardModule),
    },
    {
        path: 'products',
        loadChildren: () => import('../../products/products.module').then(m => m.ProductsModule),
    },
    {
        path: 'users',
        loadChildren: () => import('../../users/users.module').then(m => m.UsersModule),
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