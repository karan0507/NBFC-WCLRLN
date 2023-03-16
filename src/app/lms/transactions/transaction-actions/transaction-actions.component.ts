import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/services/http.service';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-transaction-actions',
  templateUrl: './transaction-actions.component.html',
  styleUrls: ['./transaction-actions.component.css']
})
export class TransactionActionsComponent implements OnInit {
  setOfCheckedId = new Set<number>();
  listOfCurrentPageData = [];
  checked = false;
  indeterminate = false;
  api_calling_loader = { card:false,modal:false}
  actionData: any = []

  page = 1;
  globalPageSize = 30
  total_count: any;
  search_params = ''

  isModalVisible: boolean = false;
  _currentId: any;
  detailActionData: any = []
  det_page = 1;
  det_globalPageSize = 30
  det_total_count: any;
  constructor(private http: HttpService, private message: NzMessageService) { }

  ngOnInit(): void {
    this.fetchTransactionActions()
  }


  fetchTransactionActions(tableFilter?) {
    this.page = tableFilter?.pageIndex ? tableFilter?.pageIndex : 1;
    this.globalPageSize = tableFilter?.pageSize ? tableFilter?.pageSize : 30;
    let data = {
      page: this.page,
      // search_param: this.search_params ? this.search_params : '',
      limit: this.globalPageSize,
    }
    this.api_calling_loader['card'] = true
    this.http.getTransactionActionList(data).subscribe(res => {
    
      this.actionData = res['data'].data
      this.total_count = res['data']['total_count'];
      this.api_calling_loader['card'] = false
      // this.message.success(res['message'])
    }, (err) => {
      this.api_calling_loader['card'] = false
    })
  }

  getDetailsAction(tableFilter?) {
    this.det_page = tableFilter?.pageIndex ? tableFilter?.pageIndex : 1;
    this.det_globalPageSize = tableFilter?.pageSize ? tableFilter?.pageSize : 30;
    let data = {
      page: this.det_page,
      // search_param: this.search_params ? this.search_params : '',
      limit: this.det_globalPageSize,
    }
    this.api_calling_loader['modal'] = true
    this.http.getDetailTransactionAction(data, this._currentId).subscribe((res: any) => {
      if (res.success) {
        this.detailActionData = res['data'].results
        this.det_total_count = res['data']['total_count'];
        this.api_calling_loader['modal'] = false
        this.isModalVisible = true
      }
    }, (err) => {
      this.api_calling_loader['modal'] = false
    })
  }
}
