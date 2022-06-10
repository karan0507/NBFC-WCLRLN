import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-borrowers-list',
  templateUrl: './borrowers-list.component.html',
  styleUrls: ['./borrowers-list.component.css']
})
export class BorrowersListComponent implements OnInit {
  borrowertList;

  page : any
  api_calling_loader: boolean;
  total_count = 0;
  search_params = '';
  globalPageSize: number;
  is_spend = ''
  expandSet = new Set<number>();
  _currentId: any;
  _activeLoans: any = [];
  loanApplicationData: any = [];
  
  selectedCorporate: any;
  master_product_id = '';
  is_blocked;
  is_active: any;
  corporateList: any[];
  debounce:any;
  api_calling_loader_accordian: boolean;
  constructor(public http: HttpService, private message: NzMessageService,
    private router : Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.page = 1;
    this.globalPageSize = 30
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
      corporate_id: this.selectedCorporate ? this.selectedCorporate : '',
      spent: this.is_spend ? this.is_spend : ''
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
    this.is_active = ''
    this.selectedCorporate = ''
    this.is_spend = ''
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
  // export function
  exportGlobalFunction(file_formate){
    let data = {
      datapoint: 'export_borrowers',
      // endpoint: 'LoanApplicationTransactions',
      source: 'LMS',
      page: this.page,
      limit: this.globalPageSize,
      product_type: this.master_product_id ? this.master_product_id : '',
      is_blocked: this.is_blocked ? (this.is_blocked == 1 ? false : true) : '',
      search_param: this.search_params ? this.search_params : '',
      account_status: this.is_active ? this.is_active : '',
      corporate_id: this.selectedCorporate ? this.selectedCorporate : '',
      spent: this.is_spend ? this.is_spend : '',
      file_type: file_formate
    }
    const generateloader = this.message.loading('Generating File..', { nzDuration: 0 }).messageId;
    this.http.fetchLoanApplicationListExportGet(data).subscribe(res => {
      this.http.exportMasterSectionModule(res, 'borrowers_list', file_formate, generateloader)
    })
  }

  exportGlobalFunctionTnx(file_formate, offer_id ){
    let data = {
      datapoint: 'lender_master_export',
      endpoint: 'LoanApplicationTransactions',
      source: 'LMS',
      offer_id: offer_id ,
      file_type: file_formate
    }
    const generateloader = this.message.loading('Generating File..', { nzDuration: 0 }).messageId;
    this.http.fetchLoanApplicationListExportGet(data).subscribe(res => {
      this.http.exportMasterSectionModule(res, 'transaction', file_formate, generateloader)
    })
  }

  
  onExpandChange(id: number, checked: boolean, index?): void {

    if (checked) {
      this.expandSet.add(id);
      this.getIdWiseData(this._currentId = id, index);
    } else {
      this.expandSet.delete(id);
      console.log('Deleted array of active ids', this._activeLoans);
    }
  }
  getIdWiseData(id?, index?) {
    this.api_calling_loader_accordian = true;
    let data = { 'datapoint': 'loan_application', 'endpoint': 'LoanApplication?id=' + id, 'source': 'Onboarding' };
    this.http.fetchLoanApplicationList(data).subscribe(res => {
      if (res) {
        this.api_calling_loader_accordian = false;
        this._activeLoans.push(res?.data?.results[0]);
        this.borrowertList[index].expanddata = res?.data?.results[0];
      } else {
        this.api_calling_loader_accordian = false;
      }
    }, error => {
      this.api_calling_loader_accordian = false;
    })
  }
}
