import * as FileSaver from 'file-saver';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/services/http.service';
import { DomSanitizer } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';
import { differenceInCalendarDays } from 'date-fns';
import * as moment from 'moment';
// import * as jsPDF from 'jspdf';  

@Component({
  selector: 'app-partners-list',
  templateUrl: './partners-list.component.html',
  styleUrls: ['./partners-list.component.css']
})
export class PartnersListComponent implements OnInit {
  selectedTab = 'all'
  listOfData : any;

  passwordForAdmin = {
    'isVisibleModal': false,
    'toggleShoePasswordField': false,
    'apiLoaderOnClick': false,
    'password': null,
    'apiLoader': null
  };

  resetPasswordForm: FormGroup;

  // selectedTab = 'all'

  setOfCheckedId = new Set<number>();
  listOfCurrentPageData: readonly Data[] = [];
  checked = false;
  indeterminate = false;
  _apiLoader = {
    list: false,
    detailList: false,
    upgradeLoading: false,
    invoicePdfLoader: false
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
  isModalVisibleForInvoicePDF: boolean;
  selectedDataForInvoicePDF: any;
  statusOfSelectedLender: any;
  selectedIndexOfExpand: any;
  date: any = ''

  today = new Date();

  disabledDate = (current: Date): boolean => {
    // Can not select days before today and today
    return differenceInCalendarDays(current, this.today) > 0;
};

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
  

  constructor(private http: HttpService, private message: NzMessageService,private sanitized: DomSanitizer, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createResetPasswordForm();
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

  onClickGetPassword(action, data){
    this.selectedUserId = data?.id;
    if(action == 'show'){
      this.passwordForAdmin['apiLoader'] = true;
      this.passwordForAdmin['isVisibleModal'] = true;
      this.passwordForAdmin['toggleShoePasswordField'] = true;
      this.http.showPasswordOfCorporateAdmin(data?.id).subscribe((res: any)=>{
        console.log(res);
        this.passwordForAdmin['apiLoader'] = false;
        this.passwordForAdmin['password'] = res?.data;
      })
    } else {
      this.passwordForAdmin['isVisibleModal'] = true;
      this.passwordForAdmin['toggleShoePasswordField'] = false;
      this.resetPasswordForm.patchValue({
        'corporate_admin_id': data?.id
      })
    }

  }

  onClickExportExcelData(id, action){
    let currentDate = new Date();
    const generateloader = this.message.loading('Generating File..', { nzDuration: 0 }).messageId;
    if(action == 'excel'){
    this.http.exportExcelDataOfPerticularCorporate(id).subscribe((res)=>{
      if (res.size > 89) {
        this.http.exportMasterSectionModule(res, 'ExcelDataExported', 'xlsx', generateloader)
        this.message.remove(generateloader);
      } else {
        this.message.error('No Data Found');
        this.message.remove(generateloader);
      }
    }, error=> {
      this.message.remove(generateloader);
    })
    } else if(action == 'invoicePDF') {
      this._apiLoader['invoicePdfLoader'] = true;
      let data = []
        data['start_date'] = this.date[0] ? moment(this.date[0]).format("YYYY-MM-DD") : '',
        data['end_date'] = this.date[1] ? moment(this.date[1]).format("YYYY-MM-DD") : '',
      // }
      this.http.getInvpoiceOfCorrespondingCorporate(id?.id, data).subscribe((res)=>{
        this.isModalVisibleForInvoicePDF = false;
        this.date = '';
        this._apiLoader['invoicePdfLoader'] = false;
        this.http.exportMasterSectionModule(res, `${id?.name + ' ' + currentDate}`, 'pdf', generateloader)
        console.log(res);
      }, error =>{
        this.message.error('No Data Found');
        this._apiLoader['invoicePdfLoader'] = false;
        this.isModalVisibleForInvoicePDF = false;
        this.date = '';
        this.message.remove(generateloader);
      })
    } else {
      this.http.exportAppDataOfPerticularCorporate(id).subscribe((res)=>{
        if (res.size > 41) {
          this.http.exportMasterSectionModule(res, 'AppDataExported', 'xlsx', generateloader)
          this.message.remove(generateloader);
        } else {
          this.message.error('No Data Found')
        }
      }, error=> {
        this.message.remove(generateloader);
      })
    }
    
    // this.http.exportMasterSectionModule(res, 'export', file_formate, generateloader, false)
  }

  onClickResetPassword(){
    for (const i in this.resetPasswordForm.controls) {
      this.resetPasswordForm.controls[i].markAsDirty();
      this.resetPasswordForm.controls[i].updateValueAndValidity();
    } 
    if(this.resetPasswordForm.value.send_email == true){
      this.resetPasswordForm.patchValue({
        'send_email': 0
      })
    } else {
      this.resetPasswordForm.patchValue({
        'send_email': 1
      })
    }
    console.log(this.resetPasswordForm.value); 
    if(this.resetPasswordForm.valid){
      if(this.resetPasswordForm.value.new_password != this.resetPasswordForm.value.retype_password){
        this.message.error('Plz Make sure to match New Password & Confirm Password');
        return;
      }
      this.passwordForAdmin['apiLoaderOnClick']= true;
      const sendDate = this.resetPasswordForm.value;
      let data = new FormData();
      for (var i in sendDate) {
          // if (sendDate[i]) {
            data.append(i, sendDate[i]);
          // }
        // }
        // data.append('corporate_limit_settings', JSON.stringify(corporate_limit_settings));
      }
      this.http.resetPasswordForCorporateAdmin(data).subscribe((res: any)=>{
        console.log(res)
        if(res?.success){
          this.message.success(res?.message);
          this.passwordForAdmin['apiLoaderOnClick']= false;
          this.passwordForAdmin['isVisibleModal'] = false;
        } else {
          this.message.error(res?.message);
          this.passwordForAdmin['apiLoaderOnClick']= false;
        }
      })
    }
  }
  
  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  createResetPasswordForm(){
    this.resetPasswordForm = this.fb.group({
      corporate_admin_id: [null, [Validators.required]],
      new_password: [null, [Validators.required]],
      retype_password: [null, [Validators.required]],
      send_email: [false],
    })
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
      this.resetPasswordForm.reset();
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

  onClickImpersonateCorporate(id){
    this._apiLoader['list'] = true;
    this.http.impersonateCorporate(id).subscribe((res: any)=>{
      if(res?.success){
        const token = res?.data?.token;
        const allowAccess = res?.data?.access;
        const url = `https://partner.fatakpay.com/authentication/login?token=${token}&allow_access=${allowAccess}`
        window.open(url,'_blank');
      } else {
        this.message.error(res?.message);
      }
      this._apiLoader['list'] = false;
    }, error=>{
      this.message.error(error);
      this._apiLoader['list'] = false;
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
      // email: data?.contact_person_email,
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
    if(action === 'upgrade'){
      this.selectedUserId = id;
      this.toggleOnUpgradeUser = true;
      return;
    }
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
    this._apiLoader['upgradeLoading'] = true;
    let data;
    this.http.upgradeToMasterPartner(this.selectedUserId, data).subscribe((res: any)=>{
      console.log(res);
      if(res?.success){
        this._apiLoader['upgradeLoading'] = false;
        this.message.success(res?.message);
      } else {
        this._apiLoader['upgradeLoading'] = false;
        this.message.error(res?.message);
      }
      this._apiLoader['upgradeLoading'] = false;
    }, error=>{
      this._apiLoader['upgradeLoading'] = false;
    })
    this.toggleOnUpgradeUser = false;
  }

  isView: boolean;
  hidePassword() {
    if (this.isView) {
      this.isView = false;
    } else {
      this.isView = true
    }

  }

}


// {
//   "corporate_admin_id":186,
//   "new_password":"18831786",
//   "retype_password":"18831786",
//   "send_email":1
// }