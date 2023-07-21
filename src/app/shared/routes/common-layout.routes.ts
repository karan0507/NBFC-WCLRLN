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
        path: 'insurance',
        loadChildren: () => import('../../insurance/insurance.module').then(m => m.InsuranceModule),
    },
    {
        path: 'super-app-user',
        loadChildren: () => import('../../super-app-user/super-app-user.module').then(m => m.SuperAppUserModule),
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
        path: 'lms/emi',
        loadChildren: () => import('../../lms/emi-borrowers/emi-borrowers.module').then(m => m.EmiBorrowersModule),
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
        path: 'lms/dpd-days',
        loadChildren: () => import('../../lms/dpd-days/dpd-days.module').then(m => m.DpdDaysModule),
    },
    {
        path: 'reports',
        loadChildren: () => import('../../reports/reports.module').then(m => m.ReportsModule),
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
        path: 'lms/transaction-remarks',
        loadChildren: () => import('../../lms/transaction-remarks/transaction-remarks.module').then(m => m.TransactionRemarksModule),
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
        path: 'lms/mandate-triggers',
        loadChildren: () => import('../../lms/mandate-triggers/mandate-triggers.module').then(m => m.MandateTriggersModule),
    },
    {
        path: 'lms/billed-unbilled-data',
        loadChildren: () => import('../../lms/billed-unbilled/billed-unbilled.module').then(m => m.BilledUnbilledModule),
    },
    {
        path: 'lms/expense-management',
        loadChildren: () => import('../../lms/expence-management/expence-management.module').then(m => m.ExpenceManagementModule),
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
        path: 'third-party-api-call',
        loadChildren: () => import('../../third-party-api-call/third-party-api-call.module').then(m => m.ThirdPartyApiCallModule),
    },
    {
        path: 'otp-list',
        loadChildren: () => import('../../otp-customer-list/otp-customer-list.module').then(m => m.OtpCustomerListModule),
    },
    {
        path: 'dormant',
        loadChildren: () => import('../../dormant-stage-trigger/dormant-stage-trigger.module').then(m => m.DormantStageTriggerModule),
    },
    {
        path: 'lms/deductions',
        loadChildren: () => import('../../lms/deductions/deductions.module').then(m => m.DeductionsModule),
    },
    {
        path: 'lms/bill-summarization',
        loadChildren: () => import('../../lms/bill-summerize/bill-summerize.module').then(m => m.BillSummerizeModule),
    },
    {
        path: 'lms/nach-upload',
        loadChildren: () => import('../../lms/nach-upload/nach-upload.module').then(m => m.NachUploadModule),
    },
    {
        path: 'lms/insurance',
        loadChildren: () => import('../../lms/insurance/insurance.module').then(m => m.InsuranceModule),
    },
    {
        path: 'cashback-program',
        loadChildren: () => import('../../cashback-data/cashback-data.module').then(m => m.CashbackDataModule),
    },
    {
        path: 'lms/bbps',
        loadChildren: () => import('../../lms/bbps/bbps.module').then(m => m.BbpsModule),
    },
    {
        path: 'downloads',
        loadChildren: () => import('../../downloads/downloads.module').then(m => m.DownloadsModule),
    },
    {
        path: 'emi/offline-emi',
        loadChildren: () => import('../../lms/offline-emi/offline-emi.module').then(m => m.OfflineEmiModule),
    },
    {
        path: 'sms-services',
        loadChildren: () => import('../../sms-services/sms-services.module').then(m => m.SmsServicesModule),
    },
    {
        path:'borrower-location',
        loadChildren: () => import('../../borrower-location/borrower-location.module').then(m => m.BorrowerLocationModule)
    },
    {
        path:'nominee-upload',
        loadChildren: () => import('../../nominee-upload/nominee-upload.module').then(m => m.NomineeUploadModule)
    },
];