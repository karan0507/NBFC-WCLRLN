import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { SharedModule } from '../shared.module';

import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { HeaderComponent } from "./header/header.component";
import { SearchComponent } from "./search/search.component";
import { QuickViewComponent } from './quick-view/quick-view.component';
import { SideNavComponent } from "./side-nav/side-nav.component";
import { FooterComponent } from "./footer/footer.component";

import { SideNavDirective } from "../directives/side-nav.directive";
import { ThemeConstantService } from '../services/theme-constant.service';
import { DemoNgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
import { DoubleConfirmationPopupComponent } from './double-confirmation-popup/double-confirmation-popup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { NgxPermissionsModule } from 'ngx-permissions';
import { AuditHistoryComponent } from './audit-history/audit-history.component';
import { BankStatementComponent } from './bank-statement/bank-statement.component';
import { CibilStatementComponent } from './cibil-statement/cibil-statement.component';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';

const antdModule = [
    NzAvatarModule,
    NzBadgeModule,
    NzRadioModule,
    NzDropDownModule,
    NzListModule,
    NzDrawerModule,
    NzDividerModule,
    NzSwitchModule,
    NzInputModule,
    NzButtonModule,
    DemoNgZorroAntdModule,
    NzDescriptionsModule
]

@NgModule({
    exports: [
        CommonModule,
        ChangePasswordComponent,
        DoubleConfirmationPopupComponent,
        HeaderComponent,
        SearchComponent,
        QuickViewComponent,
        SideNavComponent,
        SideNavDirective,
        FooterComponent,
        AuditHistoryComponent,
        BankStatementComponent,
        CibilStatementComponent,
    ],
    imports: [
        RouterModule,
        CommonModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        ...antdModule,
        NgxPermissionsModule.forChild()
    ],
    declarations: [
        HeaderComponent,
        SearchComponent,
        QuickViewComponent,
        SideNavComponent,
        SideNavDirective,
        FooterComponent,
        // BankStatementComponent,
        // CibilStatementComponent,
        // AuditHistoryComponent,
    ],
    providers: [ 
        ThemeConstantService
    ]
})

export class TemplateModule { }
