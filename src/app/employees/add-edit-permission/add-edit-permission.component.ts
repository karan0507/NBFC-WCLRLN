import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-add-edit-permission',
  templateUrl: './add-edit-permission.component.html',
  styleUrls: ['./add-edit-permission.component.css']
})
export class AddEditPermissionComponent implements OnInit {

  constructor(private http: HttpService, private route: ActivatedRoute, private router: Router, private message: NzMessageService) { }
  permissionList: any = [];
  slugList: any[] = [];
  apiLoader = {
    'list': false,
    'onOk': false
  }

  selectedRole: number;
  fetchedRole: any[] = [];

  ngOnInit(): void {
    // this.route.queryParams.subscribe((res: any)=>{
    //   this.selectedRole = res?.id;
    // })
    // this.fetchSlagsList();
    this.fetchRoles();
  }

  fetchRoles(){
    let data;
    this.http.fetchRoles(data).subscribe((res: any)=>{
      res?.data.results.map((data)=>{
        if(data?.name.toLowerCase() !== 'Superuser'.toLowerCase()){
          this.fetchedRole.push(data)
        }
      })
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

  ngModelChange(e, data, action){
    // if(action === 'slugs'){
      // if(action == 'head'){
      //   if(e){
      //     data?.slugs_list.forEach(element => {
      //       if(this.slugList.includes(data?.element?.id)){
      //         this.deleteSlug(element?.function_name);
      //       } else {
      //         this.slugList.push(element?.id)     
      //       }
      //     });
      //   } else {
      //     data?.slugs_list.forEach(element => {
      //       this.deleteSlug(element?.id);
      //       // this.slugList.push(element?.function_name)   
      //     });
      //     // this.deleteSlug(data?.function_name);
      //   }
      // } else{
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
      this.message.success(res?.message);
    } else {
      this.message.error(res?.message);
    }
  }, error=>{
    this.apiLoader['onOk']= false
  })
}


}
