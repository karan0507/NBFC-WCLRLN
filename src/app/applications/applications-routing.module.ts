import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisbursementComponent } from './disbursement/disbursement.component';
import { DocumentUploadComponent } from './document-upload/document-upload.component';
import { ENachSigningComponent } from './e-nach-signing/e-nach-signing.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { FormFillingComponent } from './form-filling/form-filling.component';
import { OfferAcceptanceComponent } from './offer-acceptance/offer-acceptance.component';
import { OfferProposedComponent } from './offer-proposed/offer-proposed.component';
import { StageTriggersComponent } from './stage-triggers/stage-triggers.component';
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
          parent: 'applications',
          custom_url:'/applications/form-filling'
        }
      },
      {
        path: 'document-upload',
        component: DocumentUploadComponent,
        data: {
          title: 'Document Upload',
          parent: 'applications',
        }
      },
      {
        path: 'underwriting',
        component: UnderwritingComponent,
        data: {
          title: 'Underwriting',
          parent: 'applications',
        }
      },
      {
        path: 'offer-proposed',
        component: OfferProposedComponent,
        data: {
          title: 'Offer Proposed',
          parent: 'applications',
        }
      },
      {
        path: 'offer-acceptance',
        component: OfferAcceptanceComponent,
        data: {
          title: 'Offer Acceptance',
          parent: 'applications',
        }
      },
      {
        path: 'verification',
        component: VerificationComponent,
        data: {
          title: 'Verification',
          parent: 'applications',
        }
      },
      {
        path: 'e-signing',
        component: ENachSigningComponent,
        data: {
          title: 'e-Signing',
          parent: 'applications',
        }
      },
      {
        path: 'disbursement',
        component: DisbursementComponent,
        data: {
          title: 'Disbursement',
          parent: 'applications',
        }
      },
      {
        path: 'stage-triggers',
        component: StageTriggersComponent,
        data: {
          title: 'StageTriggers',
          parent: 'applications',
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
            parent: 'applications',
            custom_url:'/applications/form-filling'
          },
          children:[
            {
             path: 'edit-form',
             component: EditFormComponent,
             data: {
               title: 'Edit Form',
               parent: 'applications',
             },
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
