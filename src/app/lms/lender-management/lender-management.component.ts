import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-lender-management',
  templateUrl: './lender-management.component.html',
  styleUrls: ['./lender-management.component.css']
})
export class LenderManagementComponent implements OnInit {
  lenderListData: any = [];
  matricData: any = [];
  page: number;
  limit: any;
  constructor(private https: HttpService) { }

  ngOnInit(): void {
    this.page = 1;
    this.getLenderManagementList();
  }

  getLenderManagementList() {
    this.lenderListData = [];
    let data = new FormData();
    data.append('page', '1');
    data.append('limit', '10')
    this.https.getLenderManagementList().subscribe((res : any) =>  {
      this.lenderListData = res?.data?.list_data
      this.matricData = res?.data?.matric_data;
      console.log(this.matricData, this.lenderListData);
    })

  }

}
