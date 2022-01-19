import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-merchants-list',
  templateUrl: './merchants-list.component.html',
  styleUrls: ['./merchants-list.component.css']
})
export class MerchantsListComponent implements OnInit {
  selectedTab = 'all'

  setOfCheckedId = new Set<number>();
  listOfCurrentPageData: readonly Data[] = [];
  checked = false;
  indeterminate = false;
  _apiLoader = {
    list: false,
    detailList: false,
  };
  globalPageSize = 30;
  page;
  isVisible = false;
  total_count: any;
  searchValue = ''

  expandSet = new Set<number>();
  masterPartner: any;
  masterPartnerDetailList: Object;
  merchantList: any;
  merchantDetailList: Object;
  
  
  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.page = 1
    this.getMerchantList();
    
  }

  onClickChangeTab(e){
    this.selectedTab = e;
    this.getMerchantList();
  }

  getResultBasedOnSearch(){
    this.page = 1;
    this.getMerchantList();
  }

  getMerchantDetail(id){
    this._apiLoader["detailList"] = true;
    this.http.getMerchantDetail(id).subscribe((res: any)=> {
      this.merchantDetailList = res?.data;
      this._apiLoader["detailList"] = false;
    }, err => {
      console.log(err);
      this._apiLoader["detailList"] = false;
      
    })
  }

  resetFilter(){
    this.page = 1;
    this.searchValue = ''
    this.getMerchantList();
  }

  getMerchantList(e?){
    if (this._apiLoader["list"]) { return; }
    if(e){
      this.page = e?.pageIndex;
      this.globalPageSize = e?.pageSize
    } 
    let data = {
      // 'user_type_id' : 2
      'page': this.page,
      'name': this.searchValue,
      'status': this.selectedTab === 'all' ? '' : this.selectedTab === 'active' ? 'active' : this.selectedTab === 'inactive' ? 'inactive' : ''
    };
    // if(this.searchValue){
    //   data['']
    // }
    this._apiLoader["list"] = true;
    this.http.getMerchantList(data).subscribe((res: any)=> {
      console.log(res);
      this.merchantList = res?.data?.results
      this.total_count = res?.data?.total_count
      this._apiLoader["list"] = false;
    }, erro => {
      this._apiLoader["list"] = false;
    })
  }

  onExpandChange(id: number, checked: boolean): void {
    if (checked) {
      this.getMerchantDetail(id)
      this.expandSet.add(id);
      // alert('Clicked On Expand ' + id)
    } else {
      this.expandSet.delete(id);
    }
  }

  

}
