import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: EmployeeDetailsComponent,
    data: {
      title: 'Employee Details',
    }
  },
  {
    path: '',
    children: [
      {
        path: 'employee-details',
        component: EmployeeDetailsComponent,
        data: {
          title: 'Employee Detail List',
          parent: 'Employee Details',
        }
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeDetailRoutingModule { }
