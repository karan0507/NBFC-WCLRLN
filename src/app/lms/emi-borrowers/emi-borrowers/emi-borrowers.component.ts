import { error } from '@angular/compiler/src/util';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/services/http.service';
import { Component, OnInit } from '@angular/core';
import { differenceInCalendarDays } from 'date-fns';
import * as moment from 'moment';

@Component({
  selector: 'app-emi-borrowers',
  templateUrl: './emi-borrowers.component.html',
  styleUrls: ['./emi-borrowers.component.css']
})
export class EmiBorrowersComponent implements OnInit {
  search_params: any
  disabledDate = (current: Date): boolean =>
    // Can not select days before today and today
    differenceInCalendarDays(current, new Date()) > 0;
  _currDate= ''
  customRanges = {
    Today: [new Date(), new Date()],
    'Last 7 days': [new Date().setDate(new Date().getDate() - 7), new Date()],
    'This Month': [new Date(new Date().getFullYear(), new Date().getMonth(), 1), new Date()],
    'Last Month': [new Date(new Date().getFullYear(), new Date().getMonth(), 1).setMonth(new Date().getMonth() - 1), new Date(new Date().getFullYear(), new Date().getMonth(), -1, 30, 31)],
    'Last 3 Months': [new Date(new Date().getFullYear(), new Date().getMonth(), 1).setMonth(new Date().getMonth() - 3), new Date(new Date().getFullYear(), new Date().getMonth(), -1, 30, 31)],
    'Last 6 Months': [new Date(new Date().getFullYear(), new Date().getMonth(), 1).setMonth(new Date().getMonth() - 6), new Date(new Date().getFullYear(), new Date().getMonth(), -1, 30, 31)],
    'This Year': [new Date(new Date().getFullYear(), 0, 1), new Date()],
    // 'Last Year': [new Date(new Date().getFullYear(), new Date().getMonth(), 1).setMonth(new Date().getMonth() - 12), new Date(new Date().getFullYear(), new Date().getMonth(), 1)],
    'Last Year': [new Date(new Date().getFullYear() - 1, 0, 1), new Date(new Date().getFullYear() - 1, 11, 31)],
    // d.setMonth(d.getMonth() - 3);
  };
  emiBorrowersList: any = []
  page: any = 1
  total_count: any
  globalPageSize = '30'
  api_calling_loader: boolean = false;
  corporateList : any = [];
  selectedCorporate : any;

  expandSet = new Set<number>();
  constructor(private http: HttpService, private message: NzMessageService) { }

  ngOnInit(): void {
  }

  fetchPartnerList(e?) {
    let data = {};
    if (e) {
      data['name'] = e;
    }
    this.http.fetchPartner(data).subscribe((res: any) => {
      if (res?.success) {
        this.corporateList = [];
        res?.data?.results.map((res: any) => {
          if (res?.name) {
            this.corporateList.push(res)
          }
        })
        // this.corporateList = res?.data?.results;
        console.log(this.corporateList);
      }
    });
    // }
  }

  fetchEmiBorrowersList(tabelFilter?) {
    this.api_calling_loader = true
    this.page = tabelFilter?.pageIndex ? tabelFilter?.pageIndex : 1;
    this.globalPageSize = tabelFilter?.pageSize ? tabelFilter?.pageSize : 100;
    let data = {
      // datapoint: 'loan_service',
      // endpoint: 'LoanApplicationAcceptedProduct',
      // source: 'LMS',
      page: this.page,
      limit: this.globalPageSize,
      emi_date: this._currDate ? moment(this._currDate).format("YYYY-MM-DD") : '',
      search_param: this.search_params ? this.search_params : '',
      corporate_id : this.selectedCorporate ? this.selectedCorporate : '',
      // product_id : ''
    }    

    this.http.fetchEmiBorrowersList(data).subscribe((res: any) => {
      if (res.success) {
        this.emiBorrowersList = res.data;
        this.api_calling_loader = false;
        this.total_count = res.total_count
      }else{
        this.api_calling_loader = false;
      }
    },error=>{
      this.api_calling_loader = false;
    })
  }

  resetFilters() {
    this.search_params = '';
    this._currDate = '';
    this.page = 1;
    this.globalPageSize = '30';
    this.fetchEmiBorrowersList()
   }
   _currentId : any;
  onExpandChange(id: number, checked: boolean, index?): void {

    if (checked) {
      this.expandSet.clear()
      this._currentId = id
      this.expandSet.add(id);
      this.http.expnadList.next(this.expandSet)
    } else {
      this.expandSet.delete(id);
    }
  }
}
