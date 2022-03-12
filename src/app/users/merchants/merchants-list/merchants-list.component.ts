import { saveAs } from "file-saver";
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
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
  pdf_viewer_object_values = {
    'boolean': false,
    'url': '',
    'title': ''
  }
  file: string;
  uploaded_file: any;
  storeDetailId: number;
  statusOfSelectedLender: any;
  
  
  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  constructor(private http: HttpService, private message: NzMessageService,private sanitized: DomSanitizer ) { }

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
      'limit': this.globalPageSize,
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
      this.getMerchantDetail(this.storeDetailId = id, i)
      this.expandSet.add(id);
      // alert('Clicked On Expand ' + id)
    } else {
      this.expandSet.delete(id);
    }
  }

  handleCancel(){
    this.isDelete = false;
    this.pdf_viewer_object_values['boolean'] = false
    this.pdf_viewer_object_values['url'] = ''
  }

  confirmationTrigger(value: any) {
      this.http.deleteUserByUserId(this.selectedUserId).subscribe((res :any)=> {
        console.log(res);
        if(res.success){
          this.message.success(res?.message)
        } else {
          this.message.error('Unable to Delete User......')
        }
        this.getMerchantList();
        this.isDelete = false
      })
  }

  deleteUserByUserId(id, action){
    // if(action === 'delete'){
      this.statusOfSelectedLender = action;
      this.selectedUserId = id;
      this.isDelete = true;
    // } else {
    //   this.toggleOnUpgradeUser = true;
    // }
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

  selectedIdForAgreement: any;

  beforeUpload = (file: NzUploadFile): boolean => {
    console.log(file.name);
    this.file = file.name
    this.uploaded_file = file
    console.log(file);
    console.log(this.uploaded_file);
    // this.updateMCCCodeWithUploadingFile();
    this.uploadAndShowAgreement('post');
    return false;
  };

  sanatizeUrlToSafe(value) {
    // let data = 'https://devadminapi.fatakpay.com/media/nbfc_agreements/2022/02/11/djangogirls-tutorial-en_DkLZGLR.pdf'
    return this.sanitized.bypassSecurityTrustResourceUrl(value);
  }

  storeSelectedId(id, action){
    this.selectedIdForAgreement = id;
    if(action === 'get'){
      this.uploadAndShowAgreement('get');
    }  else if(action === 'submitted'){
      const generateloader = this.message.loading('Generating Report..', { nzDuration: 0 }).messageId; 
      this.pdf_viewer_object_values['title'] = 'Show ' + id?.document_master?.name
          this.pdf_viewer_object_values['url'] = id?.document_file
          this.pdf_viewer_object_values['boolean'] = true
          this.message.remove(generateloader);
    }
  }

  onClickDownloadSelectedDocument(e){
    console.log(e)
    // if(e?.document_file?.includes('pdf')){
    // alert(true)
    saveAs(e?.document_file, `${e?.file_name}`);
    // } else {
    // alert(false)
    // }
  }



  uploadAndShowAgreement(action?){
    let data = new FormData();
    let endPoint =  'partner' 
    data.append('file', this.uploaded_file);
    if(action === 'post' ){
      this.http.uploadAndShowAgreement(endPoint, 'post', this.selectedIdForAgreement, data).subscribe((res: any)=> {
        console.log(res);
        if(res?.success){
          this.message.success(res?.message)
        } else {
          this.message.error(res?.message?.[0])
        }
      }, err => {
        console.log(err);
      })
    } else {
      const generateloader = this.message.loading('Generating Report..', { nzDuration: 0 }).messageId;
      this.http.uploadAndShowAgreement(endPoint, 'get', this.selectedIdForAgreement).subscribe((res: any)=> {
        console.log(res);
        // pdfViewerAndDownload(){
          if(res.success){
            this.pdf_viewer_object_values['title'] = 'Show Agreement'
            this.pdf_viewer_object_values['url'] = res?.data.agreement
            this.pdf_viewer_object_values['boolean'] = true
            this.message.remove(generateloader);
          } else {
            this.message.remove(generateloader);
            this.message.error('No Reports To Generate..');
          }
        // }
      }, err => {
        console.log(err);
      })

    }
  }


}
