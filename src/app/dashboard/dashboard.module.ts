import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from './dashboard.component';

/** Import any ng-zorro components as the module required except icon module */
import { NzButtonModule } from 'ng-zorro-antd/button';
import { DemoNgZorroAntdModule } from '../ng-zorro-antd.module';
import { NgChartjsModule } from 'ng-chartjs';
import { NgxPermissionsModule } from 'ngx-permissions';

/** Assign all ng-zorro modules to this array*/
const antdModule = [
    NzButtonModule,
    DemoNgZorroAntdModule
]

@NgModule({
    imports: [
        SharedModule,
        DashboardRoutingModule,
        ...antdModule,
        NgChartjsModule,
        NgxPermissionsModule.forChild()
    ],
    exports: [],
    declarations: [
        DashboardComponent
    ]
})
export class DashboardModule { }
