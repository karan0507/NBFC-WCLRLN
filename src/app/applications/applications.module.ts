import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

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
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { EditFormComponent } from './edit-form/edit-form.component';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzFormModule } from 'ng-zorro-antd/form';
import { TrackStatusComponent } from './track-status/track-status.component';
import { PerApprovedComponent } from './per-approved/per-approved.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NbfcApprovalComponent } from './nbfc-approval/nbfc-approval.component';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { CommonCibilSmsComponent } from './common-cibil-sms/common-cibil-sms.component';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { KycDocumentActionComponent } from './kyc-document-action/kyc-document-action.component';
import { CommonDocumentActionsComponent } from './common-document-actions/common-document-actions.component';
import { NzDividerModule } from 'ng-zorro-antd/divider';
// import { HttpService } from '../services/http.service';

@NgModule({
  declarations: [FormFillingComponent, DocumentUploadComponent, UnderwritingComponent, OfferProposedComponent, OfferAcceptanceComponent, VerificationComponent, ENachSigningComponent, DisbursementComponent, StageTriggersComponent, EditFormComponent, TrackStatusComponent, PerApprovedComponent, NbfcApprovalComponent, CommonCibilSmsComponent, KycDocumentActionComponent, CommonDocumentActionsComponent],
  imports: [
    CommonModule,
    ApplicationsRoutingModule,
    NzPageHeaderModule,
    FormsModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzTableModule,
    NzCardModule,
    NzInputModule,
    NzSelectModule,
    NzUploadModule,
    NzIconModule,
    NzDropDownModule,
    NzMenuModule,
    NzDatePickerModule,
    NzFormModule,
    NzModalModule,
    NzStepsModule,
    NzToolTipModule,
    NzPopoverModule,
    NzPopconfirmModule,
    NzImageModule,
    NzRadioModule,
    NzDividerModule
  ],
  providers:[
    // HttpService
    DatePipe
  ],
  exports:[CommonCibilSmsComponent]
})
export class ApplicationsModule { }
