import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { DeductionsListComponent } from './deductions-list/deductions-list.component';

const routes: Routes = [
  {
    path: '',
    component: DeductionsListComponent,
    canActivate: [NgxPermissionsGuard],
    data: {
      title: 'Deduction',
      parent: 'Deduction',
      custom_url: 'lms/deductions',
      permissions: {
        only: 'view_deduction approval',
        redirectTo: 'authentication/error-2'
      }
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeductionsRoutingModule { }
