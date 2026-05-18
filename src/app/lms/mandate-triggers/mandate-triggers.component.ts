import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Data } from '@angular/router';
import { differenceInCalendarDays } from 'date-fns';
import * as moment from 'moment';
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
  amount: any;
  isCaptureCollection: boolean;
  date = '';
  disabledDate = (current: Date): boolean =>
  // Can not select days before today and today
  differenceInCalendarDays(current, new Date()) > 0;

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
  constructor(public http: HttpService, private message: NzMessageService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.fetchMandateTriggerList()
  }

  fetchMandateTriggerList(tableFilter?) {
    var data;
    if (this.selectedTab == 'TXN') {
      this.page = tableFilter?.pageIndex ? tableFilter?.pageIndex : 1;
      this.globalPageSize = tableFilter?.pageSize ? tableFilter?.pageSize : 100;
      data = {
        datapoint: 'get_mandate_transactions',
        // endpoint: 'LoanApplicationTransactions',
        source: 'LMS',
        page: this.page,
        limit: this.globalPageSize,
        // product_type: this.master_product_id ? this.master_product_id : '',
        // txn_status: this.selectedStatus ? this.selectedStatus : '',
        // txn_type: this.selectedType ? this.selectedType : '',
        start_date: this.date[0] ? moment(this.date[0]).format("YYYY-MM-DD") : '',
        end_date: this.date[1] ? moment(this.date[1]).format("YYYY-MM-DD") : '',
        keyword: this.searchValue,
        corporate: this.selectedCorporate ? this.selectedCorporate : '',
        // section: this.selectedTab
      }
    } else {
      this.page = tableFilter?.pageIndex ? tableFilter?.pageIndex : 1;
      this.globalPageSize = tableFilter?.pageSize ? tableFilter?.pageSize : 100;
      data = {
        datapoint: 'admin_mandate_trigger_attempts',
        // endpoint: 'LoanApplicationTransactions',
        source: 'LMS',
        page: this.page,
        limit: this.globalPageSize,
        // product_type: this.master_product_id ? this.master_product_id : '',
        // txn_status: this.selectedStatus ? this.selectedStatus : '',
        // txn_type: this.selectedType ? this.selectedType : '',
        start_date: this.date[0] ? moment(this.date[0]).format("YYYY-MM-DD") : '',
        end_date: this.date[1] ? moment(this.date[1]).format("YYYY-MM-DD") : '',
        keyword: this.searchValue,
        corporate: this.selectedCorporate ? this.selectedCorporate : '',
        section: this.selectedTab
      }
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


  captureCollection(bill_id, i?) {
    let data = {
      'source': 'LMS',
      'datapoint': 'mandate_trigger_admin',
      'bill_id': bill_id,
      'amount': this.amount ? this.amount : null
    }
    if (i == undefined) {
      data['bill_id'] = []
      var bill_arry = []
      bill_id.forEach(element => {
        bill_arry.push(
          {
            id : element,
            amount : ''
          }
        )
        // data['bill_id'].push({
        //   id: element
        // })
      });
      data['bill_id'] = bill_arry
    } else {
      data['bill_id'] = [{
        id : bill_id,
        amount : this.amount
      }]
    }
    console.log(data)
    const generateloader = this.message.loading('Capturing collection..', { nzDuration: 0 }).messageId;
    this.http.fetchLoanApplicationUpload(data).subscribe(res => {
      this.message.remove(generateloader);
      if (res.success) {
        if (res?.data?.errors[0]) {
          this.message.error(res?.data?.errors[0].message)
        } else {
          this.message.success(res['message'])
        }
      } else {
        this.message.error(res['message'])
      }
      if (i != undefined) {
        this.listOfData[i].isCaptureCollection = false
      }
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
    this.date = ''
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

exportGlobalFunction(file_formate) {
  let data = {
    datapoint: 'export_mandate_trigger_attempts',
    source: 'LMS',
    page: this.page,
    limit: this.globalPageSize,
    section: this.selectedTab,
    keyword: this.searchValue,
  }
  const generateloader = this.message.loading('Generating File..', { nzDuration: 0 }).messageId;
  this.http.fetchLoanApplicationListExportGet(data).subscribe(res => {
    this.http.exportMasterSectionModule(res, 'Mandate Against Bill', file_formate, generateloader)
    // this.isVisible = false
  })
}

exportGlobalFunctionTnx(file_formate) {
  let data = {
    datapoint: 'export_mandate_transactions',
    source: 'LMS',
    page: this.page,
    limit: this.globalPageSize,
    keyword: this.searchValue,
  }
  const generateloader = this.message.loading('Generating File..', { nzDuration: 0 }).messageId;
  this.http.fetchLoanApplicationListExportGet(data).subscribe(res => {
    this.http.exportMasterSectionModule(res, 'Mandate Transaction', file_formate, generateloader)
    // this.isVisible = false
  })
}

}
