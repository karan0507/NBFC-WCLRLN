import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpenceManagementComponent } from './expence-management.component';

const routes: Routes = [
  {
    path: '',
    component: ExpenceManagementComponent,
    data: {
      title: 'Corporate Expense',
      parent: 'LMS',
      custom_url: 'lms/expense-management',
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpenceManagementRoutingModule { }
