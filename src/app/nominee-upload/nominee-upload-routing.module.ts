import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BulkNomineeUploadComponent } from './bulk-nominee-upload/bulk-nominee-upload.component';

const routes: Routes = [
  
    {
      path:'',
      component:BulkNomineeUploadComponent,
      data:{
        title:'Nominee Upload',
        parent:'Nominee Upload',
        custom_url:'',
        // Permissions:{}
      }    
    }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NomineeUploadRoutingModule {


  
 }
