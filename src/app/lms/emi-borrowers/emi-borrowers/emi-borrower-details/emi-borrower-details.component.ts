import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/services/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emi-borrower-details',
  templateUrl: './emi-borrower-details.component.html',
  styleUrls: ['./emi-borrower-details.component.css']
})
export class EmiBorrowerDetailsComponent implements OnInit {
  gridStyle = {
    width: '100%',
  };
  _currBorrowerId:any;
  page: any = 1
globalPageSize: any = '30'
  _currEMIBorrowerDetail:any
  total_count : any;
  schedulerDetails:any = []
  api_call_loading = {'btnLoader':false,'card':false}
  constructor(private http:  HttpService, private message:NzMessageService, private acRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.acRoute.queryParams.subscribe((param)=>{
      if(param['id']){
this._currBorrowerId = param['id'];
this.getDetailsEmiBorrowers()
      }
    })
  }

  getDetailsEmiBorrowers(){
    let data = {offer_id:this._currBorrowerId}
    this.http.fetchEmiBorrowersDetails(data).subscribe((res:any)=>{
      if(res.success){
        this.message.success(res.success);
        this._currEMIBorrowerDetail = res.data

      }
    })
  }

}
