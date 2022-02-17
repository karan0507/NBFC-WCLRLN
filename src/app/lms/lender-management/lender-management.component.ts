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
  total_count : any;
  api_calling_loader = {
      'listLoader' : false,
      'cardList':false
};
  constructor(private https: HttpService) { }

  ngOnInit(): void {
    this.page = 1;
    this.getLenderManagementList();
  }

  getLenderManagementList() {
    this.lenderListData = [];
    this.api_calling_loader['listLoader'] = true;
    this.api_calling_loader['cardList'] = true;
    let data = new FormData();
    data.append('page', '1');
    data.append('limit', '10')
    this.https.getLenderManagementList().subscribe((res : any) =>  {
     if(res?.data){
      this.lenderListData = res?.data?.list_data
      this.matricData = res?.data?.matric_data;
      this.api_calling_loader['listLoader'] = false;
      this.api_calling_loader['cardList'] = false;
      this.total_count = res?.total_count;
      // console.log(this.matricData, this.lenderListData,res, this.total_count);
     }
    },error=>{
      this.api_calling_loader['listLoader'] = false;
      this.api_calling_loader['cardList'] = false;
    })

  }

}
