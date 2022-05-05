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
  fetchedRole: any;

  ngOnInit(): void {
    // this.route.queryParams.subscribe((res: any)=>{
    //   this.selectedRole = res?.id;
    // })
    this.fetchSlagsList();
    this.fetchRoles();
  }

  fetchRoles(){
    let data;
    this.http.fetchRoles(data).subscribe((res: any)=>{
      this.fetchedRole = res?.data?.results;
    })
  }

  fetchSlagsList(){
    this.apiLoader['list'] = true;
    this.http.fetchPermissionSlugsForEmployee().subscribe((res: any)=>{
      this.permissionList = []
      res?.data.map((data)=>{
        if(data?.slugs_list.length > 0){
          this.permissionList.push(data);
        }
      })
      // this.permissionList = res?.data
      this.apiLoader['list'] = false;
      console.log(this.permissionList);
    }, error=>{
      this.apiLoader['list'] = false;
    })
  }

  ngModelChange(e, data, action){
    // if(action === 'slugs'){
      if(action == 'head'){
        console.log(data);
        if(e){
          data?.slugs_list.forEach(element => {
            if(this.slugList.includes(data?.element?.function_name)){
              this.deleteSlug(element?.function_name);
            } else {
              this.slugList.push(element?.function_name)     
            }
          });
        } else {
          data?.slugs_list.forEach(element => {
            this.deleteSlug(element?.function_name);
            // this.slugList.push(element?.function_name)   
          });
          // this.deleteSlug(data?.function_name);
        }
        console.log(data);
        console.log(this.slugList);
      } else{
      if(e){
        if(this.slugList.includes(data?.function_name)){
          return;
        }
        this.slugList.push(data?.function_name) 
        } else {
          this.deleteSlug(data?.function_name);
        }
      }
    // } else {
      // this.selectedRole
    // }
    
  }

  deleteSlug(msg:string) {
    const index: number = this.slugList.indexOf(msg);
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

updatePermissionBasedOnType(){
  const data = {
    "permissions": this.slugList,
  }
  this.apiLoader['onOk']= true;
  this.http.updatePermissionBasedOnType(this.selectedRole,data).subscribe((res: any)=>{
    this.apiLoader['onOk']= false
    if(res?.success){
      // let newRouterLink = "/employee";
      this.router.navigate(['../employees']);
      this.message.success(res?.message);
    } else {
      this.message.error(res?.message);
    }
    console.log('Permission Updated')
  }, error=>{
    this.apiLoader['onOk']= false
  })
}


}
