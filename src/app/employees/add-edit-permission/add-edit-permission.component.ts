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

  checkBoolean(data){
    if(data['value'].length >= 1){
      return true;
    } else {
      return false;
    }
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
      this.permissionList = res?.data;
      const loopedData = [];
      for(let key in this.permissionList) {
        let child = this.permissionList[key];
        if(child.length >= 1){
          child.map((val)=>{
            loopedData.push(val?.slugs_list);
          })
        }
        }
        for(let key in loopedData) {
          let trigger = loopedData[key];
          for(let k in trigger) {
            let triggeredData = trigger[k];
            if(triggeredData.length >= 0){
              triggeredData?.map((triggeredRep)=>{
                      if(triggeredRep?.flag){
                        this.slugList.push(triggeredRep?.id) 
                      }
              })
            }
          }
        }
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
  }s

  onCLickSelectAll(e, loop){
    loop.forEach(data => {
      if(e){
        if(!this.slugList.includes(data?.id)){
          data.flag = true
          this.slugList.push(data?.id);
        } 
      } else {
        data.flag = false;
        this.deleteSlug(data?.id); 
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
  if(this.slugList.includes(slug)){
    return true;
  }else{
    return false;
  }
}

slugListMaxCheckBoxSelection(event){
  const count = event.length;
  let i = 0;
  event?.forEach(element => {
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
      // this.selectedRole = null;
      this.message.success(res?.message);
    } else {
      this.apiLoader['onOk']= false
      this.message.error(res?.message);
    }
  }, error=>{
    this.apiLoader['onOk']= false
  })
}

returnZero(){
  return 0;
}


getColor(i){
  if (i % 2 === 0 && i != 0){i = 'odd';}
  // if (this.courses && (this.courses.length - 1 === i)) {i = 'last'}
  switch (i) {
    case i = 0 : return '#bfaabf';
    case i = 'odd' : return '#ecddf0';
  }
  // return 'red';
}
}
