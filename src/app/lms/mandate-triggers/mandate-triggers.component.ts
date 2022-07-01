import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Data } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-mandate-triggers',
  templateUrl: './mandate-triggers.component.html',
  styleUrls: ['./mandate-triggers.component.css']
})
export class MandateTriggersComponent implements OnInit {

  selectedTab = 'bill'
  checked: boolean = false;
  indeterminate: boolean = false;
  page = 1;
  _checkedLoanList: any[];
  globalPageSize: number;
  searchValue = '';
  api_calling_loader: boolean;
  total_count;
  listOfData = [];
  listOfCurrentPageData: readonly Data[] = [];
  setOfCheckedId = new Set<number>();
  selectedCorporate: any;
  debounce: any;
  corporateList: any[];

  constructor(public http: HttpService, private message: NzMessageService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.fetchMandateTriggerList()
  }

  fetchMandateTriggerList(tableFilter?) {
    this.page = tableFilter?.pageIndex ? tableFilter?.pageIndex : 1;
    this.globalPageSize = tableFilter?.pageSize ? tableFilter?.pageSize : 30;
    let data = {
      datapoint: 'admin_mandate_trigger_attempts',
      // endpoint: 'LoanApplicationTransactions',
      source: 'LMS',
      page: this.page,
      limit: this.globalPageSize,
      // product_type: this.master_product_id ? this.master_product_id : '',
      // txn_status: this.selectedStatus ? this.selectedStatus : '',
      // txn_type: this.selectedType ? this.selectedType : '',
      // start_date: this.date[0] ? moment(this.date[0]).format("YYYY-MM-DD") : '',
      // end_date: this.date[1] ? moment(this.date[1]).format("YYYY-MM-DD") : '',
      keyword: this.searchValue,
      corporate: this.selectedCorporate ? this.selectedCorporate : '',
      section: this.selectedTab
    }
    this.api_calling_loader = true
    this.http.fetchLoanApplicationList(data).subscribe(res => {
      this.api_calling_loader = false
      this.listOfData = res['data'].results
      this.total_count = res['data'].total_count
      // this.message.success(res['message'])
    }, (err) => {
      this.api_calling_loader = false
    })
  }


  captureCollection(bill_id) {
    let data = {
      'source': 'LMS',
      'datapoint': 'mandate_trigger_admin',
      'bill_id': bill_id
    }
    // data.append('source', 'LMS'),
    // data.append('datapoint', 'mandate_trigger_admin'),
    // data.append('bill_id', JSON.stringify(bill_id))
      // console.log(JSON.stringify(bill_id))
    const generateloader = this.message.loading('Capturing collection..', { nzDuration: 0 }).messageId;
    this.http.fetchLoanApplicationUpload(data).subscribe(res => {
      this.message.remove(generateloader);
      this.message.success(res['message'])
      this.fetchMandateTriggerList()
    }, (err) => {
      this.message.remove(generateloader);
    })
  }

  onAllChecked(checked: boolean): void {
    this.listOfCurrentPageData
      .filter(({ disabled }) => !disabled)
      .forEach(({ id }) => this.updateCheckedSet(id, checked));
    this.refreshCheckedStatus();
  }
  onCurrentPageDataChange(listOfCurrentPageData: Data[]): void {
    this.listOfCurrentPageData = listOfCurrentPageData;
    this.refreshCheckedStatus();
  }
  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }
  refreshCheckedStatus(): void {
    const listOfEnabledData = this.listOfCurrentPageData.filter(({ disabled }) => !disabled);
    this.checked = listOfEnabledData.every(({ id }) => this.setOfCheckedId.has(id));
    this.indeterminate = listOfEnabledData.some(({ id }) => this.setOfCheckedId.has(id)) && !this.checked;
  }
  onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }
  checkDisabledStatus() {
    this._checkedLoanList = Array.from(this.setOfCheckedId);
    if (this._checkedLoanList.length > 0) {
      return false
    } else {
      return true
    }
  }

  resetFilter() {
    this.searchValue = ''
    // this.selectedType = ''
    // this.selectedStatus = ''
    // this.date = ''
    this.selectedCorporate = ''
    this.fetchMandateTriggerList();
  }

  updateStatus() {
    // this._isUpdateStatus = true;
    this.captureCollection(this._checkedLoanList)
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
