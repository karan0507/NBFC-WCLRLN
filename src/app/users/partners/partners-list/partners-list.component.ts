import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-partners-list',
  templateUrl: './partners-list.component.html',
  styleUrls: ['./partners-list.component.css']
})
export class PartnersListComponent implements OnInit {
  selectedTab = 'all'
  listOfData = [
    {
      name: 'Bajaj Finance Ltd.',
      regDate: '12/4/21 12:02 PM',
      pan: 'ABCDE1234P',
      invest: 5000000,
      type: 'FatakPay FatakPayEMI',
      status: 'Active'
    },
    {
      name: 'Bajaj Finance Ltd.',
      regDate: '12/4/21 12:02 PM',
      pan: 'ABCDE1234P',
      invest: 5000000,
      type: 'FatakPay FatakPayEMI',
      status: 'Active'
    },
    {
      name: 'Bajaj Finance Ltd.',
      regDate: '12/4/21 12:02 PM',
      pan: 'ABCDE1234P',
      invest: 5000000,
      type: 'FatakPay FatakPayEMI',
      status: 'Active'
    },
    {
      name: 'Bajaj Finance Ltd.',
      regDate: '12/4/21 12:02 PM',
      pan: 'ABCDE1234P',
      invest: 5000000,
      type: 'FatakPay FatakPayEMI',
      status: 'Active'
    },
    {
      name: 'Bajaj Finance Ltd.',
      regDate: '12/4/21 12:02 PM',
      pan: 'ABCDE1234P',
      invest: 5000000,
      type: 'FatakPay FatakPayEMI',
      status: 'Active'
    },
    {
      name: 'Bajaj Finance Ltd.',
      regDate: '12/4/21 12:02 PM',
      pan: 'ABCDE1234P',
      invest: 5000000,
      type: 'FatakPay FatakPayEMI',
      status: 'Active'
    },
    {
      name: 'Bajaj Finance Ltd.',
      regDate: '12/4/21 12:02 PM',
      pan: 'ABCDE1234P',
      invest: 5000000,
      type: 'FatakPay FatakPayEMI',
      status: 'Active'
    }
  ];

  // selectedTab = 'all'

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
  partnerList: any;
  masterPartnerDetailList: any = [];
  isDelete: boolean = false;
  selectedUserId: any;

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.selectedTab = 'all';
    this.page = 1
    this.getPartnerList();
    
  }

  onExpandChange(id: number, checked: boolean, i): void {
    if (checked) {
      this.getPartnerListDetail(id, i)
      this.expandSet.add(id);
      // alert('Clicked On Expand ' + id)
    } else {
      this.expandSet.delete(id);
    }
  }
  
  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }


  onClickChangeTab(e){
    this.selectedTab = e;
    this.getPartnerList();
  }

  getResultBasedOnSearch(){
    this.page = 1;
    this.getPartnerList();
  }

  getPartnerListDetail(id, i?){
    this._apiLoader["detailList"] = true;
    this.http.getPartnerListDetail(id).subscribe((res: any)=> {
      this.masterPartnerDetailList.push(res?.data);
      this.partnerList[i].expandSet = res?.data;
      // console.log('this.merchantList', this.merchantList)
      this._apiLoader["detailList"] = false;
    }, err => {
      console.log(err);
      this._apiLoader["detailList"] = false;
      
    })
  }

  resetFilter(){
    this.page = 1;
    this.searchValue = ''
    this.getPartnerList();
  }

  getPartnerList(e?){
    if (this._apiLoader["list"]) { return; }
    if(e){
      this.page = e?.pageIndex;
      this.globalPageSize = e?.pageSize
    } 
    let data = {
      // 'user_type_id' : 2
      'page': this.page,
      'name': this.searchValue,
      'status': this.selectedTab === 'all' ? 'all' : this.selectedTab === 'active' ? 'active' : this.selectedTab === 'inactive' ? 'inactive' : ''
    };
    // if(this.searchValue){
    //   data['']
    // }
    this._apiLoader["list"] = true;
    this.http.getPartnerList(data).subscribe((res: any)=> {
      console.log(res);
      this.partnerList = res?.data?.results
      this.total_count = res?.data?.total_count
      this._apiLoader["list"] = false;
    }, erro => {
      this._apiLoader["list"] = false;
    })
  }

  // onCurrentPageDataChange(listOfCurrentPageData: readonly Data[]): void {
  //   this.listOfCurrentPageData = listOfCurrentPageData;
  //   this.refreshCheckedStatus();
  // }

  // onItemChecked(id: number, checked: boolean): void {
  //   this.updateCheckedSet(id, checked);
  //   this.refreshCheckedStatus();
  // }

  // onAllChecked(checked: boolean): void {
  //   this.listOfCurrentPageData
  //     .filter(({ disabled }) => !disabled)
  //     .forEach(({ id }) => this.updateCheckedSet(id, checked));
  //   this.refreshCheckedStatus();
  // }

  // refreshCheckedStatus(): void {
  //   const listOfEnabledData = this.listOfCurrentPageData.filter(({ disabled }) => !disabled);
  //   this.checked = listOfEnabledData.every(({ id }) => this.setOfCheckedId.has(id));
  //   this.indeterminate = listOfEnabledData.some(({ id }) => this.setOfCheckedId.has(id)) && !this.checked;
  // }

  handleCancel(){
    this.isDelete = false;
  }

  confirmationTrigger(value: any) {
    // if(value){
    //   value = this.section_id
    // }
    console.log(value);
    if(value){
      this.http.deleteUserByUserId(this.selectedUserId).subscribe((res :any)=> {
        console.log(res);
        this.getPartnerList();
        this.isDelete = false
      })
    }
    // this.confirmationEvent.emit(value);
  }

  deleteUserByUserId(id){
    this.selectedUserId = id
    this.isDelete = true;
  }

}
