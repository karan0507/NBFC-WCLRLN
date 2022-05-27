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
    ],
    imports: [
        RouterModule,
        CommonModule,
        NzIconModule,
        NzToolTipModule,
        PerfectScrollbarModule,
        DemoNgZorroAntdModule,
        NzFormModule,
        ReactiveFormsModule,
        NzInputModule,
        // NgxPermissionsModule
    ],
    declarations: [
        SearchPipe,
        DoubleConfirmationPopupComponent,
        ChangePasswordComponent,
        AuditHistoryComponent,
    ],
    providers: [
        ThemeConstantService
    ]
})

export class SharedModule { }
