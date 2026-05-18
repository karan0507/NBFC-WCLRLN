import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
    {
        path: 'home',
        component: DashboardComponent,
        canActivate: [NgxPermissionsGuard],
        data: {
            title: 'Dashboard ',
            permissions: {
                only: 'view_dashboard',
                redirectTo: 'authentication/error-2'
            }
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DashboardRoutingModule { }
