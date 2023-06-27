import { SideNavInterface } from '../../interfaces/side-nav.type';
// export const g= {};

console.log();
// globalToggleValue : any = true
export const ROUTES: SideNavInterface[] = [
    {
        path: '/dashboard/home',
        globalToggleValue: true,
        permission: ['view_dashboard'],
        title: 'Dashboard',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'appstore',
        submenu: []
    },
    {
        path: 'product-list',
        globalToggleValue:true,
        permission: ['view_product'],
        title: 'Products',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'shopping',
        submenu: [
            // { 
            //     path: 'product-list',
            // globalToggleValue:this.globalToggleValue,
            //     title: 'View Products', 
            //     iconType: '', 
            //     icon: '',
            //     iconTheme: '',
            //     submenu: [] 
            // },
            // { 
            //     path: 'product/create-product',
            // globalToggleValue:this.globalToggleValue,
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
        globalToggleValue:true,
        title: 'Users',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'user',
        permission: ['view_lender', 'view_master_partner', 'view_partner', 'view_new_joinee', 'view_merchant', 'view_partner_dsa', 
    'view_corporate_employee_details', 'view_attendance','view_exit_employee','view_notice_period','view_action_performed','view_employee_list'],
        submenu: [
            {
                path: 'lenders',
                globalToggleValue:true,
                title: 'Lenders',
                iconType: '',
                icon: '',
                iconTheme: '',
                permission: ['view_lender'],
                submenu: []
            },
            {
                path: 'masters-partners',
                globalToggleValue:true,
                title: 'Master Partners',
                iconType: '',
                icon: '',
                iconTheme: '',
                permission: ['view_master_partner'],
                submenu: []
            },
            {
                path: 'partners',
                globalToggleValue:true,
                title: 'Corporate',
                iconType: '',
                icon: '',
                iconTheme: '',
                permission: ['view_partner'],
                submenu: []
            },
            {
                path: 'employeeDetail',
                globalToggleValue:true,
                title: 'User Employee Details',
                iconType: '',
                icon: '',
                iconTheme: '',
                permission: ['view_corporate_employee_details', 'view_attendance','view_exit_employee','view_notice_period','view_action_performed','view_employee_list','view_new_joinee'],
                submenu: []
            },
            {
                path: 'merchants',
                globalToggleValue:true,
                title: 'Merchants',
                iconType: '',
                icon: '',
                permission: ['view_merchant', 'view_partner_dsa'],
                iconTheme: '',
                submenu: [
                    {
                        path: 'merchants/list',
                        globalToggleValue:true,
                        title: 'Merchants',
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        permission: ['view_merchant'],
                        submenu: []
                    },
                    {
                        path: 'merchants/DSA',
                        globalToggleValue:true,
                        title: 'Partner DSA',
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        permission: ['view_partner_dsa'],
                        submenu: []
                    },
                ]
            }
        ]
    },
    {
        path: 'employees',
        globalToggleValue:true,
        title: 'Employees',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        permission: ['view_employee'],
        icon: 'user',
        submenu: []
    },
    {
        path: 'insurance',
        globalToggleValue:true,
        title: 'Insurance',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        permission: ['view_employee'],
        icon: 'usergroup-add',
        submenu: []
    },
    {
        path: 'super-app-user',
        globalToggleValue:true,
        title: 'Super App Users',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        permission: ['view_superapp_user'],
        icon: 'usergroup-add',
        submenu: []
    },
    {
        path: 'applications',
        globalToggleValue:true,
        title: 'Application',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        permission: ['view_form_filling_application', 'view_pre_approved_application', 'view_document_upload_application', 'view_underwriting_application', 'view_applicants','view_nbfc_approval_application', 'view_offer_proposed_application', 'view_offer_acceptance_application', 'view_e_sining_application', 'view_disbursement_application', 'view_dormant_application', 'view_closed_application'],
        icon: 'picture',
        submenu: [
            // {
    //     path: 'otp-list',
    // globalToggleValue:true,
    //     title: 'OTP List',
    //     iconType: 'nzIcon',
    //     iconTheme: 'outline',
    //     permission: [''],
    //     icon: 'file',
    //     submenu: []
    // },
            {
                path: 'otp-list',
                globalToggleValue:true,
                title: 'UNREGISTERED',
                iconType: '',
                icon: '',
                iconTheme: '',
                permission: ['view_unregistered'],
                submenu: []
            },
            {
                path: 'applications/all-application',
                globalToggleValue:true,
                title: 'All Applicants',
                iconType: '',
                icon: '',
                iconTheme: '',
                permission: ['view_applicants'],
                submenu: []
            },
            {
                path: 'applications/corporate-stage',
                globalToggleValue:true,
                title: 'Employee List',
                iconType: '',
                icon: '',
                iconTheme: '',
                permission: ['view_emp_list'],
                submenu: []
            },
            {
                path: 'applications/form-filling',
                globalToggleValue:true,
                title: 'Form Filling',
                iconType: '',
                icon: '',
                iconTheme: '',
                permission: ['view_form_filling_application'],
                submenu: []
            },
            {
                path: 'applications/document-upload',
                globalToggleValue:true,
                title: 'Document Upload',
                iconType: '',
                icon: '',
                permission: ['view_document_upload_application'],
                iconTheme: '',
                submenu: []
            },
            {
                path: 'applications/document-pending',
                globalToggleValue:true,
                title: 'Document Pending',
                iconType: '',
                icon: '',
                permission: ['view_document_pending'],
                iconTheme: '',
                submenu: []
            },
            {
                path: 'applications/pre-approved',
                globalToggleValue:true,
                title: 'Document verification',
                iconType: '',
                icon: '',
                iconTheme: '',
                permission: ['view_pre_approved_application'],
                submenu: []
            },
            {
                path: 'applications/underwriting',
                globalToggleValue:true,
                title: 'Underwriting',
                iconType: '',
                icon: '',
                permission: ['view_underwriting_application'],
                iconTheme: '',
                submenu: []
            },
            {
                path: 'applications/nbfc-approval',
                globalToggleValue:true,
                title: 'NBFC Approval',
                iconType: '',
                icon: '',
                iconTheme: '',
                permission: ['view_nbfc_approval_application'],
                submenu: []
            },
            {
                path: 'applications/offer-proposed',
                globalToggleValue:true,
                title: 'Offer Proposed',
                iconType: '',
                icon: '',
                iconTheme: '',
                permission: ['view_offer_proposed_application'],
                submenu: []
            },
            {
                path: 'applications/offer-acceptance',
                globalToggleValue:true,
                title: 'Offer Acceptance',
                iconType: '',
                icon: '',
                iconTheme: '',
                permission: ['view_offer_acceptance_application'],
                submenu: []
            },
            {
                path: 'applications/e-signing',
                globalToggleValue:true,
                title: 'E-Nach/Signing',
                iconType: '',
                icon: '',
                permission: ['view_e_sining_application'],
                iconTheme: '',
                submenu: []
            },
            {
                path: 'applications/disbursement',
                globalToggleValue:true,
                title: 'Disbursement',
                iconType: '',
                icon: '',
                permission: ['view_disbursement_application'],
                iconTheme: '',
                submenu: []
            },
            {
                path: 'applications/rejected',
                globalToggleValue:true,
                title: 'Rejected',
                iconType: '',
                icon: '',
                permission: ['view_rejected_application'],
                iconTheme: '',
                submenu: []
            },
            // {
            //     path: 'applications/dormant',
            // globalToggleValue:true,
            //     title: 'Dormant',
            //     iconType: '',
            //     icon: '',
            //     permission: ['view_dormant_application'],
            //     // permission: ['view_dormant_application'],
            //     iconTheme: '',
            //     submenu: []
            // },
            {
                path: 'applications/closed',
                globalToggleValue:true,
                title: 'Closed',
                iconType: '',
                icon: '',
                permission: ['view_closed_application'],
                iconTheme: '',
                submenu: []
            }
        ]
    },
    {
        path: 'lms',
        globalToggleValue:true,
        title: 'LMS',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        permission: ['view_borrowers', 'view_change_bill_date', 'view_transaction', 'view_manual_transaction', 'view_athorization_policy', 'view_borrowers', 'view_change_credit_line', 'view_lender_management'],
        icon: 'file',
        submenu: [
            {
                path: 'lms/borrowers',
                globalToggleValue: (localStorage.getItem('globalToggleValue')) == '1' ?  true : false,
                title: 'Borrowers',
                iconType: '',
                icon: '',
                iconTheme: '',
                permission: ['view_borrowers'],
                submenu: [
                    {
                        path: 'lms/borrowers/all',
                        globalToggleValue:true,
                        title: 'All',
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        permission: ['view_borrowers'],
                        submenu: []
                    },
                    // {
                    //     path: 'lms/borrowers/activation',
                    // globalToggleValue:true,
                    //     title: 'Activation',
                    //     iconType: '',
                    //     icon: '',
                    //     iconTheme: '',
                    //     permission: ['view_borrowers'],
                    //     submenu: []
                    // },
                    {
                        path: 'lms/borrowers/active',
                        globalToggleValue:true,
                        title: 'Active',
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        permission: ['view_borrowers'],
                        submenu: []
                    },
                    {
                        path: 'lms/borrowers/inactive',
                        globalToggleValue:true,
                        title: 'Inactive',
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        permission: ['view_borrowers'],
                        submenu: []
                    },
                    // {
                    //     path: 'lms/borrowers/delinquent',
                    // globalToggleValue:true,
                    //     title: 'Deliquent',
                    //     iconType: '',
                    //     icon: '',
                    //     iconTheme: '',
                    //     permission: ['view_borrowers'],
                    //     submenu: []
                    // },
                    {
                        path: 'lms/borrowers/close',
                        globalToggleValue:true,
                        title: 'Close',
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        permission: ['view_borrowers'],
                        submenu: []
                    },
                ]
            },
            {
                path: 'emi',
                globalToggleValue:(localStorage.getItem('globalToggleValue') == '1' ) ?  false : true,
                title: 'EMI',
                iconType: '',
                iconTheme: '',
                permission: ['view_borrowers', 'view_change_bill_date', 'view_transaction', 'view_manual_transaction', 'view_athorization_policy', 'view_borrowers', 'view_change_credit_line', 'view_lender_management'],
                icon: '',
                submenu: [
                    {
                        path: 'emi/offline-emi',
                        globalToggleValue:true,
                        title: 'Offline EMI',
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        permission: [''],
                        submenu: []
                    },
                    {
                        path: 'lms/emi/emi-borrowers',
                        globalToggleValue:true,
                        title: 'EMI Borrowers',
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        permission: ['view_emi_borrowers'],
                        submenu: []
                    },
                    {
                        path: 'lms/emi/emi-eligibility',
                        globalToggleValue:true,
                        title: 'EMI Eligibility',
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        permission: ['view_emi_eligibility'],
                        submenu: []
                    },
                ]
            },
            {
                path: '',
                globalToggleValue:true,
                title: 'ECM Actions',
                iconType: '',
                icon: '',
                iconTheme: '',
                permission: [''],
                submenu: [
                    // {
                    //     path: '',
                    // globalToggleValue:true,
                    //     title: 'Restructuring',
                    //     iconType: '',
                    //     icon: '',
                    //     iconTheme: '',
                    //     permission: [''],
                    //     submenu: []
                    // },
                    {
                        path: 'lms/change-bill-date',
                        globalToggleValue:true,
                        title: 'Change Bill date',
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        permission: ['view_change_bill_date','preview_change_bill_date','download_change_bill_date','approve_change_bill_date','reject_change_bill_date'],
                        submenu: []
                    },
                    {
                        path: 'lms/change-credit-line',
                        globalToggleValue:true,
                        title: 'Change Credit Line',
                        iconType: '',
                        icon: '',
                        permission: ['view_change_credit_line','preview_change_credit_line','download__change_credit_line','approve_change_credit_line','reject_change_credit_line'],
                        iconTheme: '',
                        submenu: []
                    },
                    {
                        path: 'lms/authorization-policy',
                        globalToggleValue:true,
                        title: 'Authorization Policy',
                        iconType: '',
                        icon: '',
                        permission: ['view_athorization_policy','upload_athorization_policy','toggle_athorization_policy','upi_id_edit_athorization_policy','upi_id_active_athorization_policy',
                                    'upi_id_inactive_athorization_policy','mcc_code_edit_athorization_policy','mcc_code_active_athorization_policy','mcc_code_inactive_athorization_policy',
                                    'pin_code_edit_athorization_policy','pin_code_active_athorization_policy','pin_code_inactive_athorization_policy','authorization_rules_edit_athorization_policy'
                    ],
                        iconTheme: '',
                        submenu: []
                    },
                    {
                        path: 'lms/send-payment-link',
                        globalToggleValue:true,
                        title: 'Send Payment Link',
                        iconType: '',
                        icon: '',
                        permission: ['view_send_payment_link'],
                        iconTheme: '',
                        submenu: []
                    },
                    {
                        path: 'lms/mandate-triggers',
                        globalToggleValue:true,
                        title: 'Mandate triggers',
                        iconType: '',
                        icon: '',
                        permission: ['view_mandate trigger'],
                        iconTheme: '',
                        submenu: []
                    },
                    {
                        path: 'lms/risk-policy',
                        globalToggleValue:true,
                        title: 'Risk Policy',
                        iconType: '',
                        icon: '',
                        permission: ['view_borrowers'],
                        iconTheme: '',
                        submenu: []
                    },
                    {
                        path: 'lms/nach-upload',
                        globalToggleValue:true,
                        title: 'Nach upload',
                        iconType: '',
                        icon: '',
                        permission: ['view_nach_upload'],
                        iconTheme: '',
                        submenu: []
                    },
                    {
                        path: 'lms/cli',
                        globalToggleValue:true,
                        title: 'CLI',
                        iconType: '',
                        icon: '',
                        permission: ['view_cli'],
                        iconTheme: '',
                        submenu: []
                    },
                    {
                        path: 'lms/transaction-remarks',
                        globalToggleValue:true,
                        title: 'Transaction remarks',
                        iconType: '',
                        icon: '',
                        permission: ['view_transaction_remarks','preview_transaction_remarks','download_transaction_remarks','approve_transaction_remarks','reject_transaction_remarks'],
                        iconTheme: '',
                        submenu: []
                    },
                ]
            },
            {
                path: '',
                globalToggleValue:true,
                title: 'Transactions',
                iconType: '',
                icon: '',
                iconTheme: '',
                permission: [''],
                submenu: [
                    {
                        path: 'lms/transactions',
                        globalToggleValue:true,
                        title: 'Transactions Data',
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        permission: ['view_transaction'],
                        submenu: []
                    },
                    // {
                    //     path: '',
                    // globalToggleValue:true,
                    //     title: 'Repayments',
                    //     iconType: '',
                    //     icon: '',
                    //     permission: [''],
                    //     iconTheme: '',
                    //     submenu: []
                    // },
                    {
                        path: 'lms/manual-transaction',
                        globalToggleValue:true,
                        title: 'Manual Transactions',
                        iconType: '',
                        permission: ['view_manual_transaction'],
                        icon: '',
                        iconTheme: '',
                        submenu: []
                    },
                    {
                        path: 'accounting/escrow-statement',
                        globalToggleValue:true,
                        title: 'Escrow Statement',
                        permission: [],
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        submenu: []
                    },
                    {
                        path: 'lms/expense-management',
                        globalToggleValue:true,
                        title: 'Corporate Expense',
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        permission: ['view_corporate expense'],
                        submenu: []
                    },
                    {
                        path: 'lms/deductions',
                        globalToggleValue:true,
                        title: 'Deduction Approvals',
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        permission: ['view_deduction approval'],
                        submenu: []
                    },
                    {
                        path: 'lms/transaction-action',
                        globalToggleValue:true,
                        title: 'Transaction Action',
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        permission: ['view_deduction approval'],
                        submenu: []
                    },
                    {
                        path: '',
                        globalToggleValue:true,
                        title: 'BBPS',
                        iconType: '',
                        icon: '',
                        permission: [''],
                        iconTheme: '',
                        submenu: [
                            {
                                path: 'lms/bbps/category',
                                globalToggleValue:true,
                                title: 'Category data',
                                iconType: '',
                                icon: '',
                                permission: [''],
                                iconTheme: '',
                                submenu: []
                            },
                            {
                                path: 'lms/bbps/billers',
                                globalToggleValue:true,
                                title: 'Billers data',
                                iconType: '',
                                icon: '',
                                permission: [''],
                                iconTheme: '',
                                submenu: []
                            },
                        ]
                    },

                ]
            },
            {
                path: '',
                globalToggleValue:true,
                title: 'Metrics',
                iconType: '',
                icon: '',
                iconTheme: '',
                permission: [''],
                submenu: [
                    {
                        path: 'lms/dpd-days',
                        globalToggleValue:true,
                        title: 'DPD Days',
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        permission: ['view_dpd'],
                        submenu: []
                    },
                    {
                        path: 'lms/billed-unbilled-data',
                        globalToggleValue:true,
                        title: 'Billed data',
                        iconType: '',
                        icon: '',
                        permission: ['view_billed '],
                        iconTheme: '',
                        submenu: []
                    },
                    {
                        path: 'lms/refunds',
                        globalToggleValue:true,
                        title: 'Refunds',
                        iconType: '',
                        icon: '',
                        permission: ['view_refund'],
                        iconTheme: '',
                        submenu: []
                    },
                    {
                        path: 'lms/bill-summarization',
                        globalToggleValue:true,
                        title: 'Bill summarization',
                        iconType: '',
                        icon: '',
                        permission: ['view_bill_summerization'],
                        iconTheme: '',
                        submenu: []
                    },
                    // {
                    //     path: 'lms/insurance',
                    //     globalToggleValue:true,
                    //     title: 'Insurance',
                    //     iconType: '',
                    //     icon: '',
                    //     permission: ['view_insurance'],
                    //     iconTheme: '',
                    //     submenu: []
                    // },
                ]
            },
            {
                path: 'lms/lender-management',
                globalToggleValue:true,
                title: 'Lender Management',
                permission: ['view_lender_management'],
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: []
            },
        ]
    },
    {
        path: '/accounting',
        globalToggleValue:true,
        title: 'Accounting',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        permission: ['view_gst_invoice','view_escrow_statement'],
        icon: 'file',
        submenu: [
            {
                path: 'accounting/gst-invoices',
                globalToggleValue:true,
                title: 'GST invoice',
                permission: ['view_gst_invoice'],
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: []
            },
            // {
            //     path: 'accounting/escrow-statement',
            // globalToggleValue:this.globalToggleValue,
            //     title: 'Escrow Statement',
            //     permission: ['view_escrow_statement'],
            //     iconType: '',
            //     icon: '',
            //     iconTheme: '',
            //     submenu: []
            // },
        ]
    },
    {
        path: '/black-box',
        globalToggleValue:true,
        title: 'Black box testing',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        permission: ['view_black_box'],
        icon: 'file',
        submenu: []
    },
    {
        path: '/dormant',
        globalToggleValue:true,
        title: 'Application Stage Trigger',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        permission: ['update_dormant_stage'],
        icon: 'file',
        submenu: []
    },
    {
        path: 'cashback-program',
        globalToggleValue:true,
        title: 'Cashback Program Statistics',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        permission: ['view_corporate_cashback_program'],
        icon: 'tags',
        submenu: []
    },
    {
        path: 'coupon-code',
        globalToggleValue:true,
        title: 'Coupon Code',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        permission: ['view_coupon_code'],
        icon: 'tags',
        submenu: []
    },
    {
        path: 'edit-employee-permission',
        globalToggleValue:true,
        title: 'Access control',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        permission: ['view_employee_permission', 'view_role', 'add_role', 'edit_role', 'delete_role'],
        icon: 'key',
        submenu: []
    },
    {
        path: '',
        globalToggleValue:true,
        title: 'Third party Api',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        permission: ['view_api_statistics'],
        icon: 'file',
        submenu: [
            {
                path: 'third-party-api-call',
                globalToggleValue: true,
                title: 'API buckets Statistics',
                iconType: 'nzIcon',
                iconTheme: 'outline',
                permission: ['view_api_statistics'],
                icon: '',
                submenu: []
            },
            {
                path: 'sms-services',
                globalToggleValue: true,
                title: 'SMS Enablers',
                iconType: 'nzIcon',
                iconTheme: 'outline',
                icon: '',
                submenu: [],
                permission: []
            }
        ]
    },
    // {
    //     path: 'otp-list',
    // globalToggleValue:this.globalToggleValue,
    //     title: 'OTP List',
    //     iconType: 'nzIcon',
    //     iconTheme: 'outline',
    //     permission: [''],
    //     icon: 'file',
    //     submenu: []
    // },
    {
        path: 'version',
        globalToggleValue:true,
        title: 'Version',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        permission: ['view_version'],
        icon: 'key',
        submenu: []
    },
    // <i nz-icon nzType="snippets" nzTheme="outline"></i>
    {
        path: 'reports',
        globalToggleValue:true,
        title: 'Reports',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        permission: ['view_reports'],
        icon: 'snippets',
        submenu: []
    },
    {
        path: 'downloads',
        globalToggleValue:true,
        title: 'Downloads',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        permission: [''],
        icon: 'snippets',
        submenu: []
    },
]    


// {
//     path: 'lms',
// globalToggleValue:this.globalToggleValue,
//     title: 'LMS',
//     iconType: 'nzIcon',
//     iconTheme: 'outline',
//     permission: ['view_borrowers', 'view_change_bill_date', 'view_transaction', 'view_manual_transaction', 'view_athorization_policy', 'view_borrowers', 'view_change_credit_line', 'view_lender_management'],
//     icon: 'file',
//     submenu: [
//         {
//             path: 'lms/lender-management',
// globalToggleValue:this.globalToggleValue,
//             title: 'Lender Management',
//             permission: ['view_lender_management'],
//             iconType: '',
//             icon: '',
//             iconTheme: '',
//             submenu: []
//         },
//     ]
// },