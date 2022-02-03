import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
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
  isDelete = false;
  total_count: any;
  searchValue = ''

  expandSet = new Set<number>();
  masterPartner: any;
  masterPartnerDetailList: Object;
  merchantList: any;
  merchantDetailList: any = [];
  selectedUserId: any;
  selectedUserData: any[];
  toggleChangePassword: boolean;
  toggleOnUpgradeUser: boolean;
  
  
  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  constructor(private http: HttpService, private message: NzMessageService ) { }

  ngOnInit(): void {
    this.selectedTab = 'all'
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

  getMerchantDetail(id, i?){
    this._apiLoader["detailList"] = true;
    this.http.getPartnerListDetail(id).subscribe((res: any)=> {
      this.merchantDetailList.push(res?.data);
      this.merchantList[i].expandSet = res?.data;
      console.log('this.merchantList', this.merchantList)

    //   this._activeLoans.push(res?.data?.results[0]);
    //  this.loanApplicationData[index].expanddata = res?.data?.results[0];
    //  console.log(this.loanApplicationData[index].expanddata)
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
      'partner_nature': 'Merchant',
      'status': this.selectedTab === 'all' ? 'all' : this.selectedTab === 'active' ? 'active' : this.selectedTab === 'inactive' ? 'inactive' : ''
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

  onExpandChange(id: number, checked: boolean, i): void {
    if (checked) {
      this.getMerchantDetail(id, i)
      this.expandSet.add(id);
      // alert('Clicked On Expand ' + id)
    } else {
      alert('id '+ id + checked)
      this.expandSet.delete(id);
    }
  }

  handleCancel(){
    this.isDelete = false;
  }

  confirmationTrigger(value: any) {
      this.http.deleteUserByUserId(this.selectedUserId).subscribe((res :any)=> {
        console.log(res);
        this.getMerchantList();
        this.isDelete = false
      })
  }

  deleteUserByUserId(id, action){
    if(action === 'delete'){
      this.selectedUserId = id;
      this.isDelete = true;
    } else {
      this.toggleOnUpgradeUser = true;
    }
  }

  confirmationForUpdation(){
    this.toggleOnUpgradeUser = false;
  }

  onClickChangePassword(e){
    console.log('event to execute')
    console.log(e)
    this.http.changePasswordByAdmin(e).subscribe((res)=>{
      this.message.success('Password Updated Successfully');
      this.toggleChangePassword = false;
    }, err => {
      this.toggleChangePassword = false;
    })
  }

  changePassword(data){
    this.selectedUserData = [];
    const selectedData = {
      id: data?.user?.id,
      email: data?.contact_person_email,
      phone:data?.contact_person_phone,
      name: data?.name
    }
    this.selectedUserData.push(selectedData)
    // this.selectedUserData = data;
    console.log(this.selectedUserData)
    this.toggleChangePassword = true
  }

  // handleCancel(){
  //   this.isVisible = false
  //   this.confirmationTrigger(false)
  // }

}
