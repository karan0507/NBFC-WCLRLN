import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEditEmployeeComponent } from './create-edit-employee/create-edit-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeListComponent,
    data: {
      title: 'Employees',
      parent: 'Employee',
      custom_url: 'employees'
    }
  },
  {
    path:'',
    data: {
      title: 'Employees',
      parent: 'Employee',
      custom_url: 'employees'
    },
    children: [
      {
        path: 'create-employee',
        component: CreateEditEmployeeComponent,
        data: {
          title: 'Create New Employee',
          parent: 'Employee',
          custom_url: 'employees/create-employee'
        }
      },
      {
        path: 'edit-employee',
        component: CreateEditEmployeeComponent,
        data: {
          title: 'Edit Employee',
          parent: 'Employee',
          custom_url: 'employees/edit-employee'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
