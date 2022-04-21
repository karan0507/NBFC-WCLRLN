import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: EmployeeDetailsComponent,
    data: {
      title: 'Employee Details',
      parent: 'Users',
      custom_url: 'employeeDetail'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeDetailRoutingModule { }
