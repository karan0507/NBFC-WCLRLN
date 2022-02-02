import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-dsa-list',
  templateUrl: './dsa-list.component.html',
  styleUrls: ['./dsa-list.component.css']
})
// getPartnerDSAList
export class DsaListComponent implements OnInit {

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
  merchantDetailList: any = [];
  isDelete: boolean;
  selectedUserId: any;
  
  
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
    this.getPartnerDSAList();
    
  }

  onClickChangeTab(e){
    this.selectedTab = e;
    this.getPartnerDSAList();
  }

  getResultBasedOnSearch(){
    this.page = 1;
    this.getPartnerDSAList();
  }

  getMerchantDetail(id, i?){
    this._apiLoader["detailList"] = true;
    this.http.getPartnerDSAListById(id).subscribe((res: any)=> {
      // this.merchantDetailList = res?.data;
      this.merchantDetailList.push(res?.data);
      this.merchantList[i].expandSet = res?.data;
      console.log('this.merchantList', this.merchantList)
      this._apiLoader["detailList"] = false;
    }, err => {
      console.log(err);
      this._apiLoader["detailList"] = false;
      
    })
  }

  resetFilter(){
    this.page = 1;
    this.searchValue = ''
    this.getPartnerDSAList();
  }

  getPartnerDSAList(e?){
    if (this._apiLoader["list"]) { return; }
    if(e){
      this.page = e?.pageIndex;
      this.globalPageSize = e?.pageSize
    } 
    let data = {
      // 'user_type_id' : 2
      'page': this.page,
      'name': this.searchValue,
      'partner_nature': 'DSA',
      'status': this.selectedTab === 'all' ? '' : this.selectedTab === 'active' ? 'active' : this.selectedTab === 'inactive' ? 'inactive' : ''
    };
    // if(this.searchValue){
    //   data['']
    // }
    this._apiLoader["list"] = true;
    this.http.getPartnerDSAList(data).subscribe((res: any)=> {
      console.log(res);
      this.merchantList = res?.data?.results
      this.total_count = res?.data?.total_count
      this._apiLoader["list"] = false;
    }, erro => {
      this._apiLoader["list"] = false;
    })
  }

  onExpandChange(id: number, checked: boolean, i): void {
    if (checked) {
      this.getMerchantDetail(id, i)
      this.expandSet.add(id);
      // alert('Clicked On Expand ' + id)
    } else {
      this.expandSet.delete(id);
    }
  }

  handleCancel(){
    this.isDelete = false;
  }

  confirmationTrigger(value: any) {
      this.http.deleteUserByUserId(this.selectedUserId).subscribe((res :any)=> {
        console.log(res);
        this.getPartnerDSAList();
        this.isDelete = false
      })
  }

  deleteUserByUserId(id){
    this.selectedUserId = id
    this.isDelete = true;
  }

  

}
