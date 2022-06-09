import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { AllApplicantsComponent } from './all-applicants/all-applicants.component';
import { ClosedComponent } from './closed/closed.component';
import { CommonCibilSmsComponent } from './common-cibil-sms/common-cibil-sms.component';
import { DisbursementComponent } from './disbursement/disbursement.component';
import { DocumentUploadComponent } from './document-upload/document-upload.component';
import { ENachSigningComponent } from './e-nach-signing/e-nach-signing.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { FormFillingComponent } from './form-filling/form-filling.component';
import { NbfcApprovalComponent } from './nbfc-approval/nbfc-approval.component';
import { OfferAcceptanceComponent } from './offer-acceptance/offer-acceptance.component';
import { OfferProposedComponent } from './offer-proposed/offer-proposed.component';
import { PerApprovedComponent } from './per-approved/per-approved.component';
import { StageTriggersComponent } from './stage-triggers/stage-triggers.component';
import { TrackStatusComponent } from './track-status/track-status.component';
import { UnderwritingComponent } from './underwriting/underwriting.component';
import { VerificationComponent } from './verification/verification.component';

const routes: Routes = [
      {
            path: '',
            children: [
                  {
                        path: 'form-filling',
                        component: FormFillingComponent,
                        canActivate: [NgxPermissionsGuard],
                        data: {
                              title: 'Form Filling',
                              parent: 'Application',
                              custom_url: '/applications/form-filling',
                              permissions: {
                                only: 'view_form_filling_application',
                                redirectTo: 'authentication/error-2'
                              }
                        },
                  },
                  {
                        path: 'all-application',
                        component: AllApplicantsComponent,
                        canActivate: [NgxPermissionsGuard],
                        data: {
                              title: 'All Applicants',
                              parent: 'Application',
                              custom_url: '/applications/all-application',
                              permissions: {
                                only: '',
                                redirectTo: 'authentication/error-2'
                              }
                        },
                  },
                  {
                        path: 'pre-approved',
                        component: PerApprovedComponent,
                        canActivate: [NgxPermissionsGuard],
                        data: {
                              title: 'Pre Approved Offer',
                              parent: 'Application',
                              permissions: {
                                only: 'view_pre_approved_application',
                                redirectTo: 'authentication/error-2'
                              }
                        }
                  },
                  {
                        path: 'document-upload',
                        component: DocumentUploadComponent,
                        canActivate: [NgxPermissionsGuard],
                        data: {
                              title: 'Document Upload',
                              parent: 'Application',
                              permissions: {
                                only: 'view_document_upload_application',
                                redirectTo: 'authentication/error-2'
                              }
                        }
                  },
                  {
                        path: 'underwriting',
                        component: UnderwritingComponent,
                        canActivate: [NgxPermissionsGuard],
                        data: {
                              title: 'Underwriting',
                              parent: 'Application',
                              permissions: {
                                only: 'view_underwriting_application',
                                redirectTo: 'authentication/error-2'
                              }
                        }
                  },
                  {
                        path: 'nbfc-approval',
                        component: NbfcApprovalComponent,
                        canActivate: [NgxPermissionsGuard],
                        data: {
                              title: 'NBFC Approval',
                              parent: 'Application',
                              permissions: {
                                only: 'view_nbfc_approval_application',
                                redirectTo: 'authentication/error-2'
                              }
                        }
                  },
                  {
                        path: 'offer-proposed',
                        component: OfferProposedComponent,
                        canActivate: [NgxPermissionsGuard],
                        data: {
                              title: 'Offer Proposed',
                              parent: 'Application',
                              permissions: {
                                only: 'view_offer_proposed_application',
                                redirectTo: 'authentication/error-2'
                              }
                        }
                  },
                  {
                        path: 'offer-acceptance',
                        component: OfferAcceptanceComponent,
                        canActivate: [NgxPermissionsGuard],
                        data: {
                              title: 'Offer Acceptance',
                              parent: 'Application',
                              permissions: {
                                only: 'view_offer_acceptance_application',
                                redirectTo: 'authentication/error-2'
                              }
                        }
                  },
                  {
                        path: 'e-signing',
                        component: ENachSigningComponent,
                        canActivate: [NgxPermissionsGuard],
                        data: {
                              title: 'e-Signing',
                              parent: 'Application',
                              permissions: {
                                only: 'view_e_sining_application',
                                redirectTo: 'authentication/error-2'
                              }
                        }
                  },
                  {
                        path: 'disbursement',
                        component: DisbursementComponent,
                        canActivate: [NgxPermissionsGuard],
                        data: {
                              title: 'Disbursement',
                              parent: 'Application',
                              permissions: {
                                only: 'view_disbursement_application',
                                redirectTo: 'authentication/error-2'
                              }
                        }
                  },
                  {
                        path: 'rejected',
                        component: VerificationComponent,
                        canActivate: [NgxPermissionsGuard],
                        data: {
                              title: 'Rejected',
                              parent: 'Application',
                              permissions: {
                                only: 'view_rejected_application',
                                redirectTo: 'authentication/error-2'
                              }
                        }
                  },
                  {
                        path: 'dormant',
                        component: StageTriggersComponent,
                        canActivate: [NgxPermissionsGuard],
                        data: {
                              title: 'Dormant',
                              parent: 'Application',
                              permissions: {
                                only: 'view_dormant_application',
                                redirectTo: 'authentication/error-2'
                              }
                        }
                  },
                  {
                        path: 'closed',
                        component: ClosedComponent,
                        canActivate: [NgxPermissionsGuard],
                        data: {
                              title: 'Closed',
                              parent: 'Application',
                              permissions: {
                                only: 'view_closed_application',
                                redirectTo: 'authentication/error-2'
                              }
                        }
                  },
            ]
      },

      {
            path: '',
            children: [
                  {
                        path: 'form-filling',
                        data: {
                              title: 'Form Filling',
                              parent: 'Applications',
                              custom_url: '/applications/form-filling'
                        },
                        children: [
                              {
                                    path: 'edit-form',
                                    component: EditFormComponent,
                                    canActivate: [NgxPermissionsGuard],
                                    data: {
                                          title: 'Edit Form',
                                          parent: 'Applications',
                                          permissions: {
                                            only: 'edit_form_filling_application',
                                            redirectTo: 'authentication/error-2'
                                          }
                                    },
                              },
                              {
                                    path: 'track-status',
                                    component: TrackStatusComponent,
                                    canActivate: [NgxPermissionsGuard],
                                    data: {
                                          title: 'Track Status',
                                          parent: 'Application',
                                          permissions: {
                                            only: 'track_form_filling_status_application',
                                            redirectTo: 'authentication/error-2'
                                          }
                                    }
                              }
                        ]
                  },

                  {
                        path: 'pre-approved',
                        data: {
                              title: 'Pre Approved Offer',
                              parent: 'Application',
                              custom_url: '/applications/pre-approved'
                        },
                        children: [
                              {
                                    path: 'edit-form',
                                    component: EditFormComponent,
                                    canActivate: [NgxPermissionsGuard],
                                    data: {
                                          title: 'Edit Form',
                                          parent: 'Applications',
                                          permissions: {
                                            only: 'edit_pre_approved_application',
                                            redirectTo: 'authentication/error-2'
                                          }
                                    },
                              },
                              {
                                    path: 'track-status',
                                    component: TrackStatusComponent,
                                    canActivate: [NgxPermissionsGuard],
                                    data: {
                                          title: 'Track Status',
                                          parent: 'Application',
                                          permissions: {
                                            only: 'track_pre_approved_status_application',
                                            redirectTo: 'authentication/error-2'
                                          }
                                    }
                              }
                        ]
                  },
                 
            
                 
                  {
                        path: 'document-upload',
                        data: {
                              title: 'Document Upload',
                              parent: 'Application',
                              custom_url: '/applications/document-upload'
                        },
                        children: [
                              {
                                    path: 'edit-form',
                                    component: EditFormComponent,
                                    canActivate: [NgxPermissionsGuard],
                                    data: {
                                          title: 'Edit Form',
                                          parent: 'Applications',
                                          permissions: {
                                            only: 'edit_document_upload_application',
                                            redirectTo: 'authentication/error-2'
                                          }
                                    },
                              },
                              {
                                    path: 'track-status',
                                    component: TrackStatusComponent,
                                    canActivate: [NgxPermissionsGuard],
                                    data: {
                                          title: 'Track Status',
                                          parent: 'Application',
                                          permissions: {
                                            only: 'track_document_upload_status_application',
                                            redirectTo: 'authentication/error-2'
                                          }
                                    }
                              }
                        ]
                  },

                  {
                        path: 'underwriting',
                        data: {
                              title: 'Underwriting',
                              parent: 'Application',
                              custom_url: '/applications/underwriting'
                        },
                        children: [
                              {
                                    path: 'edit-form',
                                    component: EditFormComponent,
                                    canActivate: [NgxPermissionsGuard],
                                    data: {
                                          title: 'Edit Form',
                                          parent: 'Applications',
                                          permissions: {
                                            only: 'edit_underwriting_application',
                                            redirectTo: 'authentication/error-2'
                                          }
                                    },
                              },
                              {
                                    path: 'track-status',
                                    component: TrackStatusComponent,
                                    canActivate: [NgxPermissionsGuard],
                                    data: {
                                          title: 'Track Status',
                                          parent: 'Application',
                                          permissions: {
                                                only: 'track_underwriting_status_application',
                                                redirectTo: 'authentication/error-2'
                                          }
                                    }
                              }
                        ]
                  },
            ]
      },

      {
            path: '',
            children: [
                  {
                        path: 'underwriting',
                        data: {
                              title: 'Underwriting',
                              parent: 'Applications',
                              custom_url: '/applications/underwriting'
                        },
                        children: [
                              {
                                    path: 'pull-data',
                                    component: CommonCibilSmsComponent,
                              },
                        ]
                  },
            ]
      }

];

@NgModule({
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
})
export class ApplicationsRoutingModule { }
