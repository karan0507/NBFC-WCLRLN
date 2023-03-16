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
  _currBorrowerId: any;
  page: any = 1
  globalPageSize: any = '30'
  _currEMIBorrowerDetail: any
  total_count: any;
  schedulerDetails: any = [];
  api_call_loading = { 'btnLoader': false, 'card': false }
  cardLoading: boolean = false;
  constructor(private http: HttpService, private message: NzMessageService, private acRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.acRoute.queryParams.subscribe((param) => {
      if (param['id']) {
        this._currBorrowerId = param['id'];
        this.getDetailsEmiBorrowers()
      }
    })
  }

  getDetailsEmiBorrowers() {
    this.cardLoading = true
    let data = { offer_id: this._currBorrowerId }
    this.http.fetchEmiBorrowersDetails(data).subscribe((res: any) => {
      if (res.success) {
        this._currEMIBorrowerDetail = res.data;
        this.schedulerDetails = res?.data?.shcedular_details
        this.cardLoading = false
      } else {
        this.cardLoading = false
      }
    }, error => {

    })
  }

  expandSet = new Set<number>();
  onExpandChange(id: number, checked: boolean, index?, data?): void {
    if (checked) {
      this.expandSet.clear()
      this.expandSet.add(id);
      this.schedulerDetails[index]['allocation_data'] = data?.allocation_data
    } else {
      this.expandSet.delete(id);
    }
  }


}
