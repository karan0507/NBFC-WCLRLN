import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';

import { registerLocaleData, PathLocationStrategy, LocationStrategy } from '@angular/common';
import en from '@angular/common/locales/en';

import { AppRoutingModule } from './app-routing.module';
import { TemplateModule } from './shared/template/template.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { CommonLayoutComponent } from './layouts/common-layout/common-layout.component';
import { FullLayoutComponent } from './layouts/full-layout/full-layout.component';

import { NgChartjsModule } from 'ng-chartjs';
import { ThemeConstantService } from './shared/services/theme-constant.service';

import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { CustomHttpInterceptor } from './services/custom-http-interceptor';
import { ArrayFilterPipe } from './shared/pipes/arrayFilter.pipe';
import { DemoNgZorroAntdModule } from './ng-zorro-antd.module';
import { HttpService } from './services/http.service';
import { NgxPermissionsModule } from 'ngx-permissions';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { NgxCaptchaModule } from 'ngx-captcha';


registerLocaleData(en);

@NgModule({
    declarations: [
        AppComponent,
        CommonLayoutComponent,
        FullLayoutComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        NzBreadCrumbModule,
        TemplateModule,
        SharedModule,
        NgChartjsModule,
        DemoNgZorroAntdModule,
        NgxCaptchaModule,
        NgxJsonViewerModule,
        NgxPermissionsModule.forRoot()
    ],
    providers: [
        { 
            provide: NZ_I18N,
            useValue: en_US, 
        },
        {
            provide: LocationStrategy, 
            useClass: PathLocationStrategy
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: CustomHttpInterceptor,
            multi: true
        },
        ThemeConstantService,
        HttpService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
