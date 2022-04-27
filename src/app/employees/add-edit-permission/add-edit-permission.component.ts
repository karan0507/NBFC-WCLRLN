import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-add-edit-permission',
  templateUrl: './add-edit-permission.component.html',
  styleUrls: ['./add-edit-permission.component.css']
})
export class AddEditPermissionComponent implements OnInit {

  constructor(private http: HttpService) { }
  permissionList: any = [];
  apiLoader = {
    'list': false
  }

  ngOnInit(): void {
    this.fetchSlagsList();
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

}
