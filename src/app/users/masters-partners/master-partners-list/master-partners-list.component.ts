import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-master-partners-list',
  templateUrl: './master-partners-list.component.html',
  styleUrls: ['./master-partners-list.component.css']
})
export class MasterPartnersListComponent implements OnInit {
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
  masterPartnerDetailList: any = [];
  isDelete: boolean;
  selectedUserId: any;
  toggleChangePassword: boolean;
  selectedUserData: any[];
  toggleOnUpgradeUser: boolean = false;
  
  onExpandChange(id: number, checked: boolean, i): void {
    console.log(checked);
    
    if (checked) {
      this.getMasterPartnerById(id, i)
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

  constructor(private http: HttpService, private message: NzMessageService ) { }

  ngOnInit(): void {
    this.selectedTab = 'all'
    this.page = 1
    this.getMasterPartner();
    
  }

  onClickChangeTab(e){
    this.selectedTab = e;
    this.getMasterPartner();
  }

  getResultBasedOnSearch(){
    this.page = 1;
    this.getMasterPartner();
  }

  getMasterPartnerById(id, i?){
    this._apiLoader["detailList"] = true;
    this.http.getMasterPartnerById(id).subscribe((res: any)=> {
      this.masterPartnerDetailList.push(res?.data);
      this.masterPartner[i].expandSet = res?.data;
      console.log('this.merchantList', this.masterPartner)
      this._apiLoader["detailList"] = false;
    }, err => {
      console.log(err);
      this._apiLoader["detailList"] = false;
      
    })
  }

  resetFilter(){
    this.page = 1;
    this.searchValue = ''
    this.getMasterPartner();
  }

  getMasterPartner(e?){
    if (this._apiLoader["list"]) { return; }
    if(e){
      this.page = e?.pageIndex;
      this.globalPageSize = e?.pageSize
    } 
    let data = {
      // 'user_type_id' : 2
      'page': this.page,
      'name': this.searchValue,
      'partner_nature': 'master',
      'status': this.selectedTab === 'all' ? '' : this.selectedTab === 'active' ? 'active' : this.selectedTab === 'inactive' ? 'inactive' : ''
    };
    // if(this.searchValue){
    //   data['']
    // }
    this._apiLoader["list"] = true;
    this.http.getMasterPartner(data).subscribe((res: any)=> {
      console.log(res);
      this.masterPartner = res?.data?.results
      this.total_count = res?.data?.total_count
      this._apiLoader["list"] = false;
    }, erro => {
      this._apiLoader["list"] = false;
    })
  }

  onCurrentPageDataChange(listOfCurrentPageData: readonly Data[]): void {
    this.listOfCurrentPageData = listOfCurrentPageData;
    this.refreshCheckedStatus();
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

  refreshCheckedStatus(): void {
    const listOfEnabledData = this.listOfCurrentPageData.filter(({ disabled }) => !disabled);
    this.checked = listOfEnabledData.every(({ id }) => this.setOfCheckedId.has(id));
    this.indeterminate = listOfEnabledData.some(({ id }) => this.setOfCheckedId.has(id)) && !this.checked;
  }

  handleCancel(){
    this.isDelete = false;
  }

  confirmationTrigger() {
      this.http.deleteMasterUserByUserId(this.selectedUserId).subscribe((res :any)=> {
        console.log(res);
        this.getMasterPartner();
        this.isDelete = false
      })
  }

  deleteUserByUserId(id){
    this.selectedUserId = id
    this.isDelete = true;
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


}
