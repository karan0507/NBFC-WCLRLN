import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateProductRoutingModule } from './create-product-routing.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { MasterPartnersComponent } from './master-partners/master-partners.component';
import { PartnersComponent } from './partners/partners.component';
import { LimitsComponent } from './limits/limits.component';
import { NbfcsComponent } from './nbfcs/nbfcs.component';
import { UnderwritingComponent } from './underwriting/underwriting.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { FeesComponent } from './fees/fees.component';
import { LoanAgreementComponent } from './loan-agreement/loan-agreement.component';


@NgModule({
  declarations: [ProductDetailsComponent, MasterPartnersComponent, PartnersComponent, LimitsComponent, NbfcsComponent, UnderwritingComponent, OnboardingComponent, FeesComponent, LoanAgreementComponent],
  imports: [
    CommonModule,
    CreateProductRoutingModule
  ]
})
export class CreateProductModule { }
