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
        path: 'employeeDetail',
        loadChildren: () => import('../../users/employee-details/employee-details.module').then(m => m.EmployeeDetailsModule),
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
        path: 'lms/change-bill-date',
        loadChildren: () => import('../../lms/change-bill-date/change-bill-date.module').then(m => m.ChangeBillDateModule),
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
    {
      path: 'coupon-code',
      loadChildren: () => import('../../coupon-code/coupon-code.module').then(m => m.CouponCodeModule),
    },
    {
        path: 'black-box',
        loadChildren: () => import('../../black-box-testing/black-box-testing.module').then(m => m.BlackBoxTestingModule),
    },
    {
        path: 'edit-employee-permission',
        loadChildren: () => import('../../employees/add-edit-permission/add-edit-permission.module').then(m => m.AddEditPermissionModule),
    },
    {
        path: 'lms/change-credit-line',
        loadChildren: () => import('../../lms/credit-line-inc-desc/credit-line-inc-desc.module').then(m => m.CreditLineIncDescModule),
    },
    {
        path: 'lms/send-payment-link',
        loadChildren: () => import('../../lms/send-payment-link/send-payment-link.module').then(m => m.SendPaymentLinkModule),
    },
    {
        path: 'lms/refunds',
        loadChildren: () => import('../../lms/refunds/refunds.module').then(m => m.RefundsModule),
    },
    {
        path: 'version',
        loadChildren: () => import('../../versioning/versioning.module').then(m => m.VersioningModule),
    },
    {
        path: 'accounting',
        loadChildren: () => import('../../accounting/accounting.module').then(m => m.AccountingModule),
    },
    {
        path: 'dormant',
        loadChildren: () => import('../../dormant-stage-trigger/dormant-stage-trigger.module').then(m => m.DormantStageTriggerModule),
    },
];