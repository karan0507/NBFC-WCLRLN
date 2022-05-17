import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-add-edit-permission',
  templateUrl: './add-edit-permission.component.html',
  styleUrls: ['./add-edit-permission.component.css']
})
export class AddEditPermissionComponent implements OnInit {
  currentTabIndex = 0;
  selectedRoleForUpdate: any;

  constructor(private http: HttpService, private route: ActivatedRoute, private router: Router, private message: NzMessageService, private fb: FormBuilder) { }
  permissionList: any = [];
  slugList: any[] = [];
  apiLoader = {
    'list': false,
    'onOk': false
  } 

  roleManagementLoader = {
    'onUpdate': false,
    'addRole': false,
    'isVisible': false,
    'fetchRole': true
  }

  addEditRoleForm: FormGroup;

  selectedRole: number;
  fetchedRole: any[] = [];
  updatedRole: any

  ngOnInit(): void {
    this.createAddEditRole();
    this.route.queryParams.subscribe((params) => {
      if (params["targetCategory"]) {
        this.currentTabIndex = params["targetCategory"];
      } else {
        this.currentTabIndex = 0;
      }
    });
    this.fetchRoles();
  }

  createAddEditRole(){
    this.addEditRoleForm = this.fb.group({
      id: [null],
      name: [null, [Validators.required]],
    })
  }

  addEditRole(action, data?){
    if(action == 'add'){
      this.roleManagementLoader['addRole'] = true;
      this.roleManagementLoader['isVisible'] = true;
      // isVisible
    } else if(action =='edit'){
      this.roleManagementLoader['addRole'] = false;
      this.selectedRoleForUpdate = data
      this.addEditRoleForm.patchValue({
        id: data?.pk,
        name: data?.name,
      })
      this.roleManagementLoader['isVisible'] = true;
    }
  }

  onCLickDeleteRole(action,data){
    let body = {
      id: data?.pk,
      name: data?.name
    }
    this.http.deleteRole(data?.pk, body).subscribe((res:any)=>{
      if(res?.success){
        this.message.success(res?.message);
        this.fetchRoles();
      } else {
        this.message.error(res?.message);
      }
    })
  }

  onClickAddEditRole(){
    console.log(this.addEditRoleForm.value)
    // if(this.roleManagementLoader['addRole']){
      // this
      for (const i in this.addEditRoleForm.controls) {
        this.addEditRoleForm.controls[i].markAsDirty();
        this.addEditRoleForm.controls[i].updateValueAndValidity();
      } 
      if(this.addEditRoleForm.valid){
        this.roleManagementLoader['onUpdate'] = true;
        const data = {
          id: this.addEditRoleForm.value.id,
          name: this.addEditRoleForm.value.name
        }

        if(this.roleManagementLoader['addRole']){
           delete data['id']
        }
        // const url = this.roleManagementLoader['addRole'] ? this.http.addEditExistingRole(data) : this.http.addEditExistingRole()
        this.http.addEditExistingRole(data).subscribe((res: any)=>{
          if(res?.success){
            this.addEditRoleForm.reset();
            this.roleManagementLoader['onUpdate'] = false;
            this.message.success(res?.message);
            this.roleManagementLoader['isVisible'] = false
            this.fetchRoles();
          } else {
            this.message.error(res?.message);
            this.addEditRoleForm.reset();
            this.roleManagementLoader['onUpdate'] = false;
            this.roleManagementLoader['isVisible'] = false;
          }
        }, error=>{
          this.roleManagementLoader['isVisible'] = false;
          this.addEditRoleForm.reset();
          this.roleManagementLoader['onUpdate'] = false;
        })

      }
    // }
  }

  fetchRoles(){
    this.roleManagementLoader['fetchRole'] = true
    let data;
    this.http.fetchRoles(data).subscribe((res: any)=>{
      this.roleManagementLoader['fetchRole'] = false,
      this.updatedRole = res?.data?.results;
      res?.data.results.map((data)=>{
        if(data?.name.toLowerCase() !== 'Superuser'.toLowerCase()){
          this.fetchedRole.push(data)
        }
      })
    }, error=>{
      this.roleManagementLoader['fetchRole'] = false;
    })
  }

  onChange(e){
    this.slugList= [];
    this.fetchSlagsList(e);
  }

  fetchSlagsList(e?){
    this.apiLoader['list'] = true;
    let data = {
      'role_id': e
    }
    this.http.fetchPermissionSlugsForEmployee(data).subscribe((res: any)=>{
      this.permissionList = []
      res?.data.map((data)=>{
        if(data?.slugs_list.length > 0){
          this.permissionList.push(data);
        }
      })
      // this.permissionList = res?.data
      this.permissionList.map((res)=>{
        res?.slugs_list.map((slug)=>{
          if(slug?.flag){
            this.slugList.push(slug?.id) 
          }
        })
      })
      this.apiLoader['list'] = false;
    }, error=>{
      this.apiLoader['list'] = false;
    })
  }

  onTabChange(e){
    this.currentTabIndex = e.index;
    this.router.navigate(["/edit-employee-permission"], {
      queryParams: { targetCategory: this.currentTabIndex },
    });
    // if(this.currentTabIndex == 1 ){
    //   this.fetchListOfRole()
    // }
  }

  ngModelChange(e, data, action){
      if(e){
        if(this.slugList.includes(data?.id)){
          return;
        }
        this.slugList.push(data?.id) 
        } else {
          this.deleteSlug(data?.id);
        }
      // }
  }

  onCLickSelectAll(e, loop){
    loop?.slugs_list.forEach(data => {
      if(e){
        if(!this.slugList.includes(data?.id)){
          data.flag = true
          this.slugList.push(data?.id);
          console.log(this.slugList.length);
        } 
      } else {
        data.flag = false;
        this.deleteSlug(data?.id); 
        console.log(this.slugList.length);
      }
    });
  }

  deleteSlug(id:string) {
    const index: number = this.slugList.indexOf(id);
    if (index !== -1) {
        this.slugList.splice(index, 1);
    }        
}


slugListCheckBoxSelection(slug){
  // if(!e){
  //   return false;
  // }
  if(this.slugList.includes(slug)){
    return true;
  }else{
    return false;
  }
}

slugListMaxCheckBoxSelection(event){
  const count = event.length;
  let i = 0;
  event.forEach(element => {
    if(element?.flag)
    i++;
  });
  if(count == i){
    return true;
  } else {
    return false;
  }
}

updatePermissionBasedOnType(){
  const data = {
    "permissions": this.slugList,
  }
  this.apiLoader['onOk']= true;
  this.http.updatePermissionBasedOnType(this.selectedRole,data).subscribe((res: any)=>{
    this.apiLoader['onOk']= false
    if(res?.success){
      // let newRouterLink = "/employee";
      // this.router.navigate(['../employees']);
      this.selectedRole = null;
      this.message.success(res?.message);
    } else {
      this.message.error(res?.message);
    }
  }, error=>{
    this.apiLoader['onOk']= false
  })
}


}
