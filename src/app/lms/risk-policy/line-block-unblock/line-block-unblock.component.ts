import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-line-block-unblock',
  templateUrl: './line-block-unblock.component.html',
  styleUrls: ['./line-block-unblock.component.css']
})
export class LineBlockUnblockComponent implements OnInit {

  borrowertList
  isblock = false
  isUnblock = false
  page : any
  api_calling_loader: boolean;
  total_count = 0;
  search_param = '';
  selectedCorporate: any;
  globalPageSize: number;
  master_product_id = '';
  is_blocked;
  search_params = '';
  accepted_loan_application: any;
  is_active: any;
  corporateList: any;
  debounce: any;
  isbtnLoading: boolean;
  constructor(public http: HttpService, private message: NzMessageService,
    private router : Router,
    private route: ActivatedRoute) {
      this.page = 1;
      this.globalPageSize = 30
      http.refreshBorrower.subscribe(res => {
        this.fetchBorrowerList()
      })
    }
    remarksList = [
      'Requested By Corporate',
      'Employee Left the Corporate',
      'Customer Requested to Block Card',
      'Underwriting Check',
      'Fraudulent',
      'Requested By Fatakpay',
    ]
    remarks: any

  ngOnInit(): void {
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
      search_param: this.search_params,
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
  resetFilters() {
    this.search_params = ''
    this.is_blocked = ''
    this.master_product_id = ''
    this.selectedCorporate = ''
    this.is_active = ''
    this.fetchBorrowerList()
  }

  toggleUserLineStatus(value) {
    let data = {
      datapoint: 'toggle_risk_policy',
      // endpoint: 'LoanApplicationAcceptedProduct',
      source: 'LMS',
      toggle_type: 'LINE',
      toggle_value: value,
      accepted_loan_application: this.accepted_loan_application,
      remarks : this.remarks ?this.remarks : ''
    }
    this.isbtnLoading = true
    this.http.fetchLoanApplicationUpload(data).subscribe(res => {
      if (res.success) {
        this.isblock = false
        this.isUnblock = false
        this.message.success(res['message'])
        this.fetchBorrowerList()
      } else {
        this.message.error(res['message'])
      }
      this.isbtnLoading = false
    }, (err) => {
      this.isbtnLoading = false
    })
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
