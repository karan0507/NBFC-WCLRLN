import { SideNavInterface } from '../../interfaces/side-nav.type';
export const ROUTES: SideNavInterface[] = [
    {
        path: '/dashboard/home',
        permission:'',
        title: 'Dashboard',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'appstore',
        submenu: []
    },
    {
        path: 'product-list',
        permission:'view_product',
        title: 'Products',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'shopping',
        submenu: [
            // { 
            //     path: 'product-list',
            //     title: 'View Products', 
            //     iconType: '', 
            //     icon: '',
            //     iconTheme: '',
            //     submenu: [] 
            // },
            // { 
            //     path: 'product/create-product',
            //     title: 'Create New Product', 
            //     iconType: '', 
            //     icon: '',
            //     iconTheme: '',
            //     submenu: [] 
            // }
        ]
    },
    {
        path: 'users',
        title: 'Users',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'user',
        permission:'',
        submenu: [
            { 
                path: 'lenders',
                title: 'Lenders', 
                iconType: '', 
                icon: '',
                iconTheme: '',
                permission:'view_lender',
                submenu: [] 
            },
            { 
                path: 'masters-partners',
                title: 'Master Partners', 
                iconType: '', 
                icon: '',
                iconTheme: '',
                permission:'view_master_partner',
                submenu: [] 
            },
            { 
                path: 'partners',
                title: 'Corporate', 
                iconType: '', 
                icon: '',
                iconTheme: '',
                permission:'view_corporate',
                submenu: [] 
            },
            { 
                path: 'employeeDetail',
                title: 'User Employee Details', 
                iconType: '', 
                icon: '',
                iconTheme: '',
                permission:'view_user_employee',
                submenu: [] 
            },
            { 
                path: 'merchants',
                title: 'Merchants', 
                iconType: '', 
                icon: '',
                permission:'',
                iconTheme: '',
                submenu: [
                    { 
                        path: 'merchants/list',
                        title: 'Merchants', 
                        iconType: '', 
                        icon: '',
                        iconTheme: '',
                        permission:'view_merchants',
                        submenu: [] 
                    },
                    { 
                        path: 'merchants/DSA',
                        title: 'Partner DSA', 
                        iconType: '', 
                        icon: '',
                        iconTheme: '',
                        permission:'view_partner_dsa',
                        submenu: [] 
                    },
                ] 
            }
        ]
    },
    {
        path: 'employees',
        title: 'Employees',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        permission:'view_employees',
        icon: 'user',
        submenu: []
    },
    {
        path: 'applications',
        title: 'Application',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        permission:'view_application',
        icon: 'picture',
        submenu: [
            { 
                path: 'applications/form-filling',
                title: 'Form Filling', 
                iconType: '', 
                icon: '',
                iconTheme: '',
                permission:'view_application',
                submenu: [] 
            },
            { 
                path: 'applications/pre-approved',
                title: 'Pre Approved', 
                iconType: '', 
                icon: '',
                iconTheme: '',
                permission:'view_application',
                submenu: [] 
            },
            { 
                path: 'applications/document-upload',
                title: 'Document Upload', 
                iconType: '', 
                icon: '',
                permission:'view_application',
                iconTheme: '',
                submenu: [] 
            },
            { 
                path: 'applications/underwriting',
                title: 'Underwriting', 
                iconType: '', 
                icon: '',
                permission:'view_application',
                iconTheme: '',
                submenu: [] 
            },
            { 
                  path: 'applications/nbfc-approval',
                  title: 'NBFC Approval', 
                  iconType: '', 
                  icon: '',
                  iconTheme: '',
                  permission:'view_application',
                  submenu: [] 
              },
            { 
                path: 'applications/offer-proposed',
                title: 'Offer Proposed', 
                iconType: '', 
                icon: '',
                iconTheme: '',
                permission:'view_application',
                submenu: [] 
            },
            { 
                path: 'applications/offer-acceptance',
                title: 'Offer Acceptance', 
                iconType: '', 
                icon: '',
                iconTheme: '',
                permission:'view_application',
                submenu: [] 
            },
            { 
                path: 'applications/e-signing',
                title: 'E-Nach/Signing', 
                iconType: '', 
                icon: '',
                permission:'view_application',
                iconTheme: '',
                submenu: [] 
            },
            { 
                path: 'applications/disbursement',
                title: 'Disbursement', 
                iconType: '', 
                icon: '',
                permission:'view_application',
                iconTheme: '',
                submenu: [] 
            },
            { 
                  path: 'applications/rejected',
                  title: 'Rejected', 
                  iconType: '', 
                  icon: '',
                  permission:'view_application',
                  iconTheme: '',
                  submenu: [] 
              },
            { 
                path: 'applications/dormant',
                title: 'Dormant ', 
                iconType: '', 
                icon: '',
                permission:'view_application',
                iconTheme: '',
                submenu: [] 
            },
            { 
                path: 'applications/closed',
                title: 'Closed ', 
                iconType: '', 
                icon: '',
                permission:'view_application',
                iconTheme: '',
                submenu: [] 
            }
        ]
    },
    {
        path: 'lms',
        title: 'LMS',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        permission:'',
        icon: 'file',
        submenu: [
            { 
                path: 'lms/borrowers',
                title: 'Borrowers', 
                iconType: '', 
                icon: '',
                iconTheme: '',
                permission:'view_borrowers',
                submenu: [] 
            },
            { 
                path: 'lms/change-bill-date',
                title: 'Change Bill date', 
                iconType: '', 
                icon: '',
                iconTheme: '',
                permission:'view_change_bill_date',
                submenu: [] 
            },
            { 
                path: 'lms/transactions',
                title: 'Transactions', 
                iconType: '', 
                icon: '',
                iconTheme: '',
                permission:'view_transaction',
                submenu: [] 
            },
            { 
                path: 'lms/manual-transaction',
                title: 'Manual Transactions', 
                iconType: '', 
                permission:'view_manual_transaction',
                icon: '',
                iconTheme: '',
                submenu: [] 
            },
            { 
                path: 'lms/authorization-policy',
                title: 'Authorization Policy', 
                iconType: '', 
                icon: '',
                permission:'view_athorization_policy',
                iconTheme: '',
                submenu: [] 
            },
            { 
                path: 'lms/risk-policy',
                title: 'Risk Policy', 
                iconType: '', 
                icon: '',
                permission:'view_borrowers',
                iconTheme: '',
                submenu: [] 
            },
            { 
                path: 'lms/change-credit-line',
                title: 'Change Credit Line', 
                iconType: '', 
                icon: '',
                permission:'',
                iconTheme: '',
                submenu: [] 
            },
            { 
                path: 'lms/lender-management',
                title: 'Lender Management', 
                permission:'',
                iconType: '', 
                icon: '',
                iconTheme: '',
                submenu: [] 
            },
        ]
    },
    {
        path: '/black-box',
        title: 'Black box testing',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        permission:'',
        icon: 'file',
        submenu: []
    },
    {
      path: 'coupon-code',
      title: 'Coupon Code',
      iconType: 'nzIcon',
      iconTheme: 'outline',
      permission:'',
      icon: 'picture',
      submenu: []
    },
    {
        path: 'edit-employee-permission',
        title: 'Access control',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        permission:'',
        icon: 'key',
        submenu: []
    },
    // {
    //     path: 'transactions',
    //     title: 'Transactions',
    //     iconType: 'nzIcon',
    //     iconTheme: 'outline',
    //     icon: 'ng-zorro:indian_rupee',
    //     submenu: []
    // }
]    