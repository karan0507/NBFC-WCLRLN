import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationsRoutingModule } from './applications-routing.module';
import { FormFillingComponent } from './form-filling/form-filling.component';
import { DocumentUploadComponent } from './document-upload/document-upload.component';
import { UnderwritingComponent } from './underwriting/underwriting.component';
import { OfferProposedComponent } from './offer-proposed/offer-proposed.component';
import { OfferAcceptanceComponent } from './offer-acceptance/offer-acceptance.component';
import { VerificationComponent } from './verification/verification.component';
import { ENachSigningComponent } from './e-nach-signing/e-nach-signing.component';
import { DisbursementComponent } from './disbursement/disbursement.component';
import { StageTriggersComponent } from './stage-triggers/stage-triggers.component';


@NgModule({
  declarations: [FormFillingComponent, DocumentUploadComponent, UnderwritingComponent, OfferProposedComponent, OfferAcceptanceComponent, VerificationComponent, ENachSigningComponent, DisbursementComponent, StageTriggersComponent],
  imports: [
    CommonModule,
    ApplicationsRoutingModule
  ]
})
export class ApplicationsModule { }
