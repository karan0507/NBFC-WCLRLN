import { SideNavInterface } from '../../interfaces/side-nav.type';
export const ROUTES: SideNavInterface[] = [
    {
        path: '/dashboard/home',
        title: 'Masters',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'appstore',
        submenu: []
    },
    {
        path: 'product-list',
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
        submenu: [
            { 
                path: 'lenders',
                title: 'Lenders', 
                iconType: '', 
                icon: '',
                iconTheme: '',
                submenu: [] 
            },
            { 
                path: 'masters-partners',
                title: 'Master Partners', 
                iconType: '', 
                icon: '',
                iconTheme: '',
                submenu: [] 
            },
            { 
                path: 'partners',
                title: 'Partners', 
                iconType: '', 
                icon: '',
                iconTheme: '',
                submenu: [] 
            },
            { 
                path: 'merchants',
                title: 'Merchants', 
                iconType: '', 
                icon: '',
                iconTheme: '',
                submenu: [] 
            }
        ]
    },
    {
        path: 'employees',
        title: 'Employees',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'user',
        submenu: []
    },
    {
        path: 'applications',
        title: 'Application',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'picture',
        submenu: [
            { 
                path: 'applications/form-filling',
                title: 'Form Filling', 
                iconType: '', 
                icon: '',
                iconTheme: '',
                submenu: [] 
            },
            { 
                path: 'applications/document-upload',
                title: 'Document Upload', 
                iconType: '', 
                icon: '',
                iconTheme: '',
                submenu: [] 
            },
            { 
                path: 'applications/underwriting',
                title: 'Underwriting', 
                iconType: '', 
                icon: '',
                iconTheme: '',
                submenu: [] 
            },
            { 
                path: 'applications/offer-proposed',
                title: 'Offer Proposed', 
                iconType: '', 
                icon: '',
                iconTheme: '',
                submenu: [] 
            },
            { 
                path: 'applications/offer-acceptance',
                title: 'Offer Acceptance', 
                iconType: '', 
                icon: '',
                iconTheme: '',
                submenu: [] 
            },
            { 
                path: 'applications/verification',
                title: 'Verification', 
                iconType: '', 
                icon: '',
                iconTheme: '',
                submenu: [] 
            },
            { 
                path: 'applications/e-signing',
                title: 'E-Nach/Signing', 
                iconType: '', 
                icon: '',
                iconTheme: '',
                submenu: [] 
            },
            { 
                path: 'applications/disbursement',
                title: 'Disbursement', 
                iconType: '', 
                icon: '',
                iconTheme: '',
                submenu: [] 
            },
            { 
                path: 'applications/stage-triggers',
                title: 'Stage Triggers ', 
                iconType: '', 
                icon: '',
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
        icon: 'file',
        submenu: []
    },
    {
        path: 'transactions',
        title: 'Transactions',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'ng-zorro:indian_rupee',
        submenu: []
    }
]    