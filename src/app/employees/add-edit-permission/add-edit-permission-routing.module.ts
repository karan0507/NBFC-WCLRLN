import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEditPermissionComponent } from './add-edit-permission.component';

const routes: Routes = [
  {
    path: '',
    component: AddEditPermissionComponent,
    data: {
      title: 'Edit Permission',
      parent: 'Access control',
      custom_url: 'edit-employee-permission'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddEditPermissionRoutingModule { }
