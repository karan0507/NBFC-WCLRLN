import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
            // component: ProductsComponent,
            children: [
                  {
                        path: 'form-filling',
                        component: FormFillingComponent,
                        data: {
                              title: 'Form Filling',
                              parent: 'Application',
                              custom_url: '/applications/form-filling'
                        },
                  },
                  {
                        path: 'pre-approved',
                        component: PerApprovedComponent,
                        data: {
                              title: 'Pre Approved Offer',
                              parent: 'Application',
                        }
                  },
                  {
                        path: 'document-upload',
                        component: DocumentUploadComponent,
                        data: {
                              title: 'Document Upload',
                              parent: 'Application',
                        }
                  },
                  {
                        path: 'underwriting',
                        component: UnderwritingComponent,
                        data: {
                              title: 'Underwriting',
                              parent: 'Application',
                        }
                  },
                  {
                        path: 'nbfc-approval',
                        component: NbfcApprovalComponent,
                        data: {
                              title: 'NBFC Approval',
                              parent: 'Application',
                        }
                  },
                  {
                        path: 'offer-proposed',
                        component: OfferProposedComponent,
                        data: {
                              title: 'Offer Proposed',
                              parent: 'Application',
                        }
                  },
                  {
                        path: 'offer-acceptance',
                        component: OfferAcceptanceComponent,
                        data: {
                              title: 'Offer Acceptance',
                              parent: 'Application',
                        }
                  },
                  {
                        path: 'e-signing',
                        component: ENachSigningComponent,
                        data: {
                              title: 'e-Signing',
                              parent: 'Application',
                        }
                  },
                  {
                        path: 'disbursement',
                        component: DisbursementComponent,
                        data: {
                              title: 'Disbursement',
                              parent: 'Application',
                        }
                  },
                  {
                        path: 'rejected',
                        component: VerificationComponent,
                        data: {
                              title: 'Rejected',
                              parent: 'Application',
                        }
                  },
                  {
                        path: 'dormant',
                        component: StageTriggersComponent,
                        data: {
                              title: 'Dormant',
                              parent: 'Application',
                        }
                  },
            ]
      },

      {
            path: '',
            // component: ProductsComponent,
            children: [
                  {
                        path: 'form-filling',
                        // component: FormFillingComponent,
                        // redirectTo:'/applications/form-filling',
                        data: {
                              title: 'Form Filling',
                              parent: 'Applications',
                              custom_url: '/applications/form-filling'
                        },
                        children: [
                              {
                                    path: 'edit-form',
                                    component: EditFormComponent,
                                    data: {
                                          title: 'Edit Form',
                                          parent: 'Applications',
                                    },
                              },
                              {
                                    path: 'track-status',
                                    component: TrackStatusComponent,
                                    data: {
                                          title: 'Track Status',
                                          parent: 'Application',
                                    }
                              }
                        ]
                  },
            ]
      }
      ,

];

@NgModule({
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
})
export class ApplicationsRoutingModule { }
