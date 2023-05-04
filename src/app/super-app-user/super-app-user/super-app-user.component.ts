import { Component, OnInit, } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { GlobalservicesService } from 'src/app/shared/globalservices.service';
import * as moment from 'moment';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { differenceInCalendarDays } from 'date-fns';
import { NzMessageService } from 'ng-zorro-antd/message';
@Component({
  selector: 'app-super-app-user',
  templateUrl: './super-app-user.component.html',
  styleUrls: ['./super-app-user.component.css']
})
export class SuperAppUserComponent implements OnInit {
  searchValue: any = '';
  total_count:any;
  selectedTabFilter: any = 'all';
  superuserList:any;
  product:any;
  partnerList:any;
  userPersonalDetails:any;
  userEmpDetails:any;
  selfie:any;
  changeStep:any;
  partner:any;
  step:any;
  page = 1;
  _currentId: any;
  _isVerify: boolean = false;
  today = new Date();
  listOfCurrentPageData: readonly Data[] = [];
  globalPageSize = this.global.globalPageSize;
  _currentModalData: any;
  _isViewDocument: boolean = false
  _isUpload: boolean = false;
  isVisible = false;
  userId:any;
  api_calling_loader = {
    'listLoader': false,
    'accordian': false,
    'button': false
};
  constructor(public https: HttpService, public global: GlobalservicesService,private message: NzMessageService) { }

  ngOnInit(): void {
    this.page = 1
      this.globalPageSize = this.global.globalPageSize;
    this.getUsersData();
    this.getPrartnerList();   
  }
  disabledDate = (current: Date): boolean => {
    // Can not select days before today and today
    return differenceInCalendarDays(current, this.today) > 0;
};
  date = '';

  onChange(result: Date[]): void {
    console.log('onChange: ', result);
  }

  getWeek(result: Date[]): void {
    // console.log('week: ', result.map(getISOWeek));
  }
  customRanges = {
    Today: [new Date(), new Date()],
    'Last 7 days': [new Date().setDate(new Date().getDate() - 7), new Date()],
    'This Month': [new Date(new Date().getFullYear(), new Date().getMonth(), 1), new Date()],
    'Last Month': [new Date(new Date().getFullYear(), new Date().getMonth(), 1).setMonth(new Date().getMonth() - 1), new Date(new Date().getFullYear(), new Date().getMonth(), -1,30,31)],
    'Last 3 Months': [new Date(new Date().getFullYear(), new Date().getMonth(), 1).setMonth(new Date().getMonth() - 3), new Date(new Date().getFullYear(), new Date().getMonth(), -1,30,31)],
    'Last 6 Months': [new Date(new Date().getFullYear(), new Date().getMonth(), 1).setMonth(new Date().getMonth() - 6), new Date(new Date().getFullYear(), new Date().getMonth(), -1,30,31)],
    'This Year': [new Date(new Date().getFullYear(), 0, 1), new Date()],
    // 'Last Year': [new Date(new Date().getFullYear(), new Date().getMonth(), 1).setMonth(new Date().getMonth() - 12), new Date(new Date().getFullYear(), new Date().getMonth(), 1)],
    'Last Year': [new Date(new Date().getFullYear() - 1, 0, 1), new Date(new Date().getFullYear() - 1, 11, 31)],
    // d.setMonth(d.getMonth() - 3);
};
resetFilters() {
  this.date = '';
  this.searchValue = null;
  this.partner = null;
  this.step=null;
  this.product=null;

}
onClickChangeTabFilter(e){
  console.log(e);
  // this.resetFilters();
  this.selectedTabFilter = e
  this.getUsersData(); 
}

getPrartnerList(){
  this.https.fetchPartner().subscribe((res:any)=>{
    console.log(res);
    // this.partnerList = res?.data?.results?.filter(res => { if (res?.name) { return res } });
})
}

onFocusMethod(type) {
  // if (type == 'product') {
  //       this.https.getAllProducts().subscribe((res: any) => {
  //             this.productList = res?.data
  //       })
  // } else if (type == 'status') {
  //       let params = { 'source': 'Onboarding', endpoint: '1', 'datapoint': 'get-stage-statuses' }
  //       this.https.getStatusStageWise(params).subscribe((res: any) => {
  //             this.stageStatusList = res?.data
  //       })
  if(type == 'partner'){
        this.https.fetchPartner().subscribe((res:any)=>{
              this.partnerList = res?.data?.results?.filter(res => { if (res?.name) { return res } });
        })
  }
}
onCurrentPageDataChange(listOfCurrentPageData: Data[]): void {
  this.listOfCurrentPageData = listOfCurrentPageData;
  // this.refreshCheckedStatus();
}
getUsersData(tableFilter?){
  this.api_calling_loader['listLoader'] = true;
  let data={
    app_user_nature:this.selectedTabFilter
  };
  if(this.product){
     data['product'] = this.product;  
  }
  if(this.step){
    data['step'] = this.step;  
  }
  if(this.partner){
    data['corporate'] = this.partner;  
  }
  if (this.searchValue) {  
    data['search_param'] = this.searchValue
}
this.page = tableFilter?.pageIndex ? tableFilter?.pageIndex : 1;
this.globalPageSize = tableFilter?.pageSize ? tableFilter?.pageSize : 100;
data['page'] = tableFilter?.pageIndex ? tableFilter?.pageIndex : 1
data['limit'] = tableFilter?.pageSize ? tableFilter?.pageSize : this.globalPageSize

  data['start_date'] = this.date[0] ? moment(this.date[0]).format("YYYY-MM-DD") : '',
  data['end_date'] = this.date[1] ? moment(this.date[1]).format("YYYY-MM-DD") : '',
  this.https.fetchSuperAppUserData(data).subscribe(res=>{
    console.log(res);
    this.superuserList=res?.data.results;
    this.total_count = res?.data?.total_count;
    console.log(this.superuserList);
    this.api_calling_loader['listLoader'] = false;

  })
}

expandSet = new Set<number>();
onExpandChange(id: number, checked: boolean, index?): void {

      if (checked) {
          this.expandSet.clear()
          this._currentId = id
          this.expandSet.add(id);
          this.https.expnadList.next(this.expandSet)
      } else {
            this.expandSet.delete(id);
            console.log('Deleted array of active ids');
      }
}

getUserDetails(id?){
  let data;
  this.https.fetchSuperAppUserDetails(id).subscribe(res=>{  
    this.userPersonalDetails = res.data?.name_details;
    this.userEmpDetails = res.data?.employment_details;
    this.selfie = {}
    this.selfie['file_url'] = res.data?.selfie;
  })
}

showModal(id): void {
  this.isVisible = true;
  console.log(id);
  this.userId=id;
}

handleOk(): void {
  console.log('Button ok clicked!');
  this.isVisible = false;
}

handleCancel(): void {
  console.log('Button cancel clicked!');
  this.isVisible = false;
}

changeStepAction(){
  let data={
    user_id:this.userId,
    step:this.changeStep,
  };
  this.https.changeStep(data).subscribe(res=>{
  console.log(res);
  this.message.success(res['message']);
})
}
}
