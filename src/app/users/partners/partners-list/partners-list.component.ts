import * as FileSaver from 'file-saver';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/services/http.service';
import { DomSanitizer } from '@angular/platform-browser';
// import * as jsPDF from 'jspdf';  

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
  selectedUserData: any;
  toggleChangePassword: boolean;
  toggleOnUpgradeUser: boolean = false;
  file: string;
  uploaded_file: any;
  storeDetailId: any;
  pdf_viewer_object_values = {
    'boolean': false,
    'url': '',
    'title': ''
  }
  statusOfSelectedLender: any;
  selectedIndexOfExpand: any;
  

  constructor(private http: HttpService, private message: NzMessageService,private sanitized: DomSanitizer ) { }

  ngOnInit(): void {
    this.selectedTab = 'all';
    this.page = 1
    this.getPartnerList();
    
  }

  onExpandChange(id: number, checked: boolean, i): void {
    this.selectedIndexOfExpand = i
    if (checked) {
      this.getPartnerListDetail(this.storeDetailId = id, i);
      this.expandSet.add(id);
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
    this.page = 1;
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
      'limit': this.globalPageSize,
      'name': this.searchValue,
      'partner_nature': 'Partner',
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

  cancel(){
  }

  onClickVerifyDoc(id){
    let data
    this.http.verifyUploadedKycDocumentForMasterAndPartner(id,data).subscribe((res: any)=> {
    this.message.success(res?.message);
      this.getPartnerListDetail(this.storeDetailId, this.selectedIndexOfExpand)
      console.log(res);
    })
  }

  handleCancel(){
    this.isDelete = false;
    this.pdf_viewer_object_values['boolean'] = false
    this.pdf_viewer_object_values['url'] = ''
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

  confirmationTrigger() {
      this.http.deleteUserByUserId(this.selectedUserId).subscribe((res :any)=> {
        if(res?.success){
          this.message.success(res?.message)
        } else {
          this.message.error(res?.message?.[0])
        }
        this.getPartnerList();
        this.isDelete = false
      }, err=>{
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

  onClickDownloadSelectedDocument(e, action?){
    if(action== 'front'){
      var data = new Blob([e?.document_file_front], { type: 'text/plain;charset=utf-8' });
      FileSaver.saveAs(data,  `Front_Doc`);
    } else if(action == 'back'){
      var data = new Blob([e?.document_file_back], { type: 'text/plain;charset=utf-8' });
      FileSaver.saveAs(data,  `Back_Doc`);
    } else if(action == 'single'){
      var data = new Blob([e?.document_file], { type: 'text/plain;charset=utf-8' });
      FileSaver.saveAs(data,  `Document_Preview`);
    }
  }

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

  // sanatizeUrlToSafe(value) {
  //   // let data = 'https://devadminapi.fatakpay.com/media/nbfc_agreements/2022/02/11/djangogirls-tutorial-en_DkLZGLR.pdf'
  //   return this.sanitized.bypassSecurityTrustResourceUrl(value);
  // }

  sanatizeUrlToSafe: any

  storeSelectedId(id, action, type?){
    this.selectedIdForAgreement = id;
    if(action === 'get'){
      this.uploadAndShowAgreement('get');
    } else if(action === 'submitted'){
      const generateloader = this.message.loading('Generating Report..', { nzDuration: 0 }).messageId; 
      this.pdf_viewer_object_values['title'] = 'Show ' + id?.document_master?.name
      if(type== 'single'){
        this.pdf_viewer_object_values['url'] = id?.document_file
        this.sanatizeUrlToSafe =  this.sanitized.bypassSecurityTrustResourceUrl(this.pdf_viewer_object_values['url']);
        // this.sanitized.bypassSecurityTrustResourceUrl(value);
      } else if(type == 'front'){
        this.pdf_viewer_object_values['url'] = id?.document_file_front
      } else if(type == 'back'){
        this.pdf_viewer_object_values['url'] = id?.document_file_back
      }
          this.pdf_viewer_object_values['boolean'] = true
          this.message.remove(generateloader);
    }
  }



  uploadAndShowAgreement(action?){
    let data = new FormData();
    data.append('file', this.uploaded_file);
    let endPoint =  'partner' 
    if(action === 'post' ){
      const generateloader = this.message.loading('Uploading Document..', { nzDuration: 0 }).messageId;
      this.http.uploadAndShowAgreement(endPoint, 'post', this.selectedIdForAgreement, data).subscribe((res?: any)=> {
        console.log(res);
        if(res?.success){
          this.message.remove(generateloader);
          this.message.success(res?.message)
        } else {
          this.message.remove(generateloader);
          this.message.error(res?.message?.[0])
        }
      },error => {
        this.message.remove(generateloader);
        console.log(error);
      })
    } else {
      const generateloader = this.message.loading('Generating Report..', { nzDuration: 0 }).messageId;
      this.http.uploadAndShowAgreement(endPoint, 'get', this.selectedIdForAgreement).subscribe((res: any)=> {
        if(res.data){
          this.pdf_viewer_object_values['title'] = 'Show Agreement'
          this.pdf_viewer_object_values['url'] = res?.data?.agreement
          this.sanatizeUrlToSafe =  this.sanitized.bypassSecurityTrustResourceUrl(this.pdf_viewer_object_values['url']);
          this.pdf_viewer_object_values['boolean'] = true
          this.message.remove(generateloader);
        } else {
          this.message.remove(generateloader);
          this.message.error('No Reports To Generate..');
        }
      }, error => {
        this.message.remove(generateloader);
        console.log(error);
      })

    }
  }

  confirmationForUpdation(){
    this.toggleOnUpgradeUser = false;
  }

}
