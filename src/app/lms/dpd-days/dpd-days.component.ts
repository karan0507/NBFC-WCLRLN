import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-dpd-days',
  templateUrl: './dpd-days.component.html',
  styleUrls: ['./dpd-days.component.css']
})
export class DpdDaysComponent implements OnInit {

  globalPageSize: any;
  page: any;
  search_params: any
  master_product_id: any;
  is_spend: any;
  is_blocked: any;
  is_active: any;
  selectedCorporate: any;
  dpdDaysList: any;
  dpdDaysMatrix: any;
  total_count: any;
  api_calling_loader: boolean;
  expandSet = new Set<number>();
  _currentId: any;
  _activeLoans: any = [];

  dpdFilterList = [
    {'name':'<30', 'label': 'Less Than >30' },
    {'name':'>30', 'label': 'Greater Than >30' },
    {'name':'>60', 'label': 'Greater Than >60'},
    {'name':'>90', 'label': 'Greater Than >90'},
  ];

  dpdEmployeeFilter = [
    {'employee_status':'Active'},
    {'employee_status':'Exited'}
  ];

  // employee_status | values = Active | Exited
  selectedFilterOfDays: any = '';
  selectedFilterOfEmp: any = '';

  api_calling_loader_accordian: boolean;
  constructor(public http: HttpService, private message: NzMessageService,
    private router : Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.page = 1;
    this.globalPageSize = 30
    this.fetchDpdDaysList();
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
        this.dpdDaysList[index].expanddata = res?.data?.results[0];
      } else {
        this.api_calling_loader_accordian = false;
      }
    }, error => {
      this.api_calling_loader_accordian = false;
    })
  }

  fetchDpdDaysList(tabelFilter?) {
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
      // product_type: this.master_product_id ? this.master_product_id : '',
      is_blocked: this.is_blocked ? (this.is_blocked == 1 ? false : true) : '',
      search_param: this.search_params ? this.search_params : '',
      // account_status: this.is_active ? this.is_active : '',
      corporate_id: this.selectedCorporate ? this.selectedCorporate : '',
      spent: this.is_spend ? this.is_spend : '',
      is_dpd_tab_set: 'YES'
    }
    if(this.selectedFilterOfDays){
      data['dpd_bucket'] = this.selectedFilterOfDays;
    }

    if(this.selectedFilterOfEmp){
      data['employee_status'] = this.selectedFilterOfEmp;
    }

    // employee_status | values = Active | Exited
    this.api_calling_loader = true
    this.http.fetchLoanApplicationList(data).subscribe(res => {
      this.api_calling_loader = false
      this.dpdDaysList = res['data']
      this.dpdDaysMatrix = res['matric_data']
      this.total_count = res.total_count
      // this.message.success(res['message'])
    }, (err) => {
      this.api_calling_loader = false
    })
  }

  exportGlobalFunction(file_formate){
    // let data = {
    //   datapoint: 'export_borrowers',
    //   // endpoint: 'LoanApplicationTransactions',
    //   source: 'LMS',
    //   page: this.page,
    //   limit: this.globalPageSize,
    //   product_type: this.master_product_id ? this.master_product_id : '',
    //   is_blocked: this.is_blocked ? (this.is_blocked == 1 ? false : true) : '',
    //   search_param: this.search_params ? this.search_params : '',
    //   account_status: this.is_active ? this.is_active : '',
    //   corporate_id: this.selectedCorporate ? this.selectedCorporate : '',
    //   spent: this.is_spend ? this.is_spend : '',
    //   file_type: file_formate
    // }
    let data = [];
    if(this.selectedCorporate){
      data['corporate_id'] = this.selectedCorporate;
    }
    const generateloader = this.message.loading('Generating File..', { nzDuration: 0 }).messageId;
    this.http.exportDPDDays(data).subscribe(res => {
      this.http.exportMasterSectionModule(res, 'dpd_days', file_formate, generateloader)
      // this.isVisible = false
    }, error => {
      this.message.remove(generateloader);
    })
  }

  resetFilters(){
  this.search_params = '';
  this.page = 1,
  this.selectedFilterOfDays = '';
  this.selectedFilterOfEmp = '';
  this.globalPageSize = 30;
  this.is_blocked = '';
  this.search_params ='';
  this.selectedCorporate = '';
  this.is_spend = '';
  this.fetchDpdDaysList();
  }

  debounce: any;
  corporateList: any;
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
