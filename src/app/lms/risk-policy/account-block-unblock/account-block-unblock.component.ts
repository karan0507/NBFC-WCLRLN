import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-account-block-unblock',
  templateUrl: './account-block-unblock.component.html',
  styleUrls: ['./account-block-unblock.component.css']
})
export class AccountBlockUnblockComponent implements OnInit {

  borrowertList
  statusTitle;
  isRestructure = false
  isUnblock;
  isblock = false
  page : any
  api_calling_loader: boolean;
  total_count = 0;
  search_param = '';
  globalPageSize: number;
  master_product_id = '';
  selectedCorporate: any;
  is_blocked;
  search_params = '';
  applications: any;
  is_active: any;
  statusChangeLoader: boolean;
  corporateList: any[];
  debounce: any;
  constructor(public http: HttpService, private message: NzMessageService,
    private router : Router,
    private route: ActivatedRoute) {
      http.refreshAccount.subscribe(res => {
        this.fetchBorrowerList()
      })
     }

  ngOnInit(): void {
    this.page = 1;
    this.globalPageSize = 100
    this.fetchBorrowerList()
  }

  fetchBorrowerList(tabelFilter?) {
    // if (tabelFilter) {
      this.page = tabelFilter?.pageIndex ? tabelFilter?.pageIndex : 1;
      this.globalPageSize = tabelFilter?.pageSize ? tabelFilter?.pageSize : 30;
    // }
    let data = {
      datapoint: 'loan_service',
      endpoint: 'LoanApplicationAcceptedProduct',
      source: 'LMS',
      page: this.page,
      limit: this.globalPageSize,
      product_type: this.master_product_id ? this.master_product_id : '',
      is_blocked: this.is_blocked ? (this.is_blocked == 1 ? false : true) : '',
      search_param: this.search_params ? this.search_params : '',
      account_status: this.is_active ? this.is_active : '',
      corporate_id: this.selectedCorporate ? this.selectedCorporate : ''
    }
    this.api_calling_loader = true
    this.http.fetchLoanApplicationList(data).subscribe(res => {
      this.api_calling_loader = false
      this.borrowertList = res['data']
      this.total_count = res.total_count
      // this.message.success(res['message'])
    }, (err) => {
      this.api_calling_loader = false
    })
  }
  toggleUserLineStatus() {
    let data = new FormData
      data.append('datapoint', 'toggle_risk_policy'),
      // endpoint: 'LoanApplicationAcceptedProduct',
      data.append('source', 'LMS'),
      data.append('toggle_type', 'ACCOUNT'),
      data.append('accepted_loan_application', this.applications),
      data.append('status_value', this.isUnblock),
    this.statusChangeLoader = true
    this.http.fetchLoanApplicationUpload(data).subscribe(res => {
      this.statusChangeLoader = false
      if (res.success) {
        this.isblock = false
        this.isUnblock = false
        this.message.success(res['message'])
        this.fetchBorrowerList()
      } else {
        this.message.error(res['message'])
      }
    }, (err) => {
      this.statusChangeLoader = false
    })
  }
  resetFilters() {
    this.search_params = ''
    this.is_blocked = ''
    this.master_product_id = ''
    this.is_active = ''
    this.selectedCorporate = ''
    this.fetchBorrowerList()
  }
  
  OnTypeSearchList(event){
    clearTimeout(this.debounce);
    this.debounce = setTimeout(() => {
      this.fetchPartnerList(event);
    }, 500);
  }

  fetchPartnerList(e?) {
    let data = {};
    if(e){
      data['name'] = e;
    }
    this.http.fetchPartner(data).subscribe((res: any) => {
      if (res?.success) {
        this.corporateList = [];
        res?.data?.results.map((res: any)=>{
          if(res?.name){
            this.corporateList.push(res)    
          }
        })
        // this.corporateList = res?.data?.results;
        console.log(this.corporateList);
      }
    });
    // }
  }

}
