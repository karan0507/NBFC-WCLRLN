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
import { CreateProductComponent } from './create-product.component';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzCardModule } from 'ng-zorro-antd/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { DemoNgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
import { HttpService } from 'src/app/services/http.service';
import { ArrayFilterPipe } from 'src/app/shared/pipes/arrayFilter.pipe';


@NgModule({
  declarations: [
    CreateProductComponent,
    ArrayFilterPipe, 
    ProductDetailsComponent, 
    MasterPartnersComponent, 
    PartnersComponent, 
    LimitsComponent, 
    NbfcsComponent, 
    UnderwritingComponent, 
    OnboardingComponent, 
    FeesComponent, 
    LoanAgreementComponent],
  imports: [
    CommonModule,
    CreateProductRoutingModule,
    NzCollapseModule,
    NzCardModule,
    FormsModule, ReactiveFormsModule,
    NzFormModule,
    DemoNgZorroAntdModule,
  ],
  providers:[
    HttpService
  ]
})
export class CreateProductModule { }
