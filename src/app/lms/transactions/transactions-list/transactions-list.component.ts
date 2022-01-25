import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.css']
})
export class TransactionsListComponent implements OnInit {
  selectedTab = 'all'
  searchValue = '';
  _apiLoader = {
    'list': false,
  }
  page = 1;
  globalPageSize: number;
  total_count = 10;
  listOfData = [];
  setOfCheckedId = new Set<number>();
  listOfCurrentPageData = [];
  checked = false;
  indeterminate = false;
  api_calling_loader: boolean;
  
  constructor(public http: HttpService, private message: NzMessageService,
    private router : Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.page = 1;
    this.globalPageSize = 30
    this.fetchTransactionList()
  }
  fetchTransactionList(e?) {
    let data = {
      page: this.page,
      // name: this.search_params
      limit: this.globalPageSize,
      txn_type: this.selectedTab
      // id: this.product_id
    }
    this.api_calling_loader = true
    this.http.fetchTransactionList(data).subscribe(res => {
      this.api_calling_loader = false
      this.listOfData = res['data']
      this.total_count = res['data'].total_count
      // this.message.success(res['message'])
    }, (err) => {
      this.api_calling_loader = false
    })
  }
  resetFilter(){

  }
  getResultBasedOnSearch(){

  }

  onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }
  onAllChecked(checked: boolean): void {
    this.listOfCurrentPageData
      .filter(({ disabled }) => !disabled)
      .forEach(({ id }) => this.updateCheckedSet(id, checked));
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
}
