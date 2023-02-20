import { ChangePasswordComponent } from './template/change-password/change-password.component';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { RouterModule } from "@angular/router";
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { ThemeConstantService } from './services/theme-constant.service';
import { SearchPipe } from './pipes/search.pipe';
import { DoubleConfirmationPopupComponent } from './template/double-confirmation-popup/double-confirmation-popup.component';
import { DemoNgZorroAntdModule } from '../ng-zorro-antd.module';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NgxPermissionsModule } from 'ngx-permissions';
import { AuditHistoryComponent } from './template/audit-history/audit-history.component';
import { HttpService } from '../services/http.service';
import { DeatilsComponent } from '../applications/deatils/deatils.component';
import { BankDetailsComponent } from '../applications/bank-details/bank-details.component';
import { KycDetailsComponent } from '../applications/kyc-details/kyc-details.component';
import { PersonalDetailsComponent } from '../applications/personal-details/personal-details.component';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { CommonDocumentActionsComponent } from '../applications/common-document-actions/common-document-actions.component';

@NgModule({
    exports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        HttpClientJsonpModule,
        NzIconModule,
        PerfectScrollbarModule,
        SearchPipe,
        DoubleConfirmationPopupComponent,
        ChangePasswordComponent,
        AuditHistoryComponent,
        NgxJsonViewerModule,
        DeatilsComponent, PersonalDetailsComponent, BankDetailsComponent, KycDetailsComponent, CommonDocumentActionsComponent
    ],
    imports: [
        RouterModule,
        CommonModule,
        NzIconModule,
        NzToolTipModule,
        PerfectScrollbarModule,
        DemoNgZorroAntdModule,
        NzFormModule,
        FormsModule,
        ReactiveFormsModule,
        NzInputModule,
        NgxJsonViewerModule
        // NgxPermissionsModule
    ],
    declarations: [
        SearchPipe,
        DoubleConfirmationPopupComponent,
        ChangePasswordComponent,
        AuditHistoryComponent,
        DeatilsComponent, PersonalDetailsComponent, BankDetailsComponent, KycDetailsComponent, CommonDocumentActionsComponent
    ],
    providers: [
        ThemeConstantService
    ]
})

export class SharedModule { }
