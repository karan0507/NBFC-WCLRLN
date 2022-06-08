import * as FileSaver from 'file-saver';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Data } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { HttpService } from 'src/app/services/http.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-lenders-list',
  templateUrl: './lenders-list.component.html',
  styleUrls: ['./lenders-list.component.css']
})
export class LendersListComponent implements OnInit {
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
  pdf_viewer_object_values = {
    'boolean': false,
    'url': '',
    'title': ''
  }
  file: string;
  uploaded_file: any;

  expandSet = new Set<number>();
  masterPartner: any;
  masterPartnerDetailList: any = [];
  isDelete: boolean = false;
  selectedUserId: any;
  selectedId: number;
  toggleChangePassword: boolean = false;
  selectedUserData: any;
  storeDetailId: number;
  statusOfSelectedLender: any;
  selectedIndexOfExpand: any;
  onExpandChange(id: number, checked: boolean, i): void {
    if (checked) {
      this.selectedId = id;
      this.selectedIndexOfExpand = i;
      this.getNBFCDetail(this.storeDetailId = id, i)
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
  resetPasswordForm: FormGroup;

  constructor(private http: HttpService, private message: NzMessageService,private sanitized: DomSanitizer, private fb: FormBuilder  ) { }

  ngOnInit(): void {
    this.selectedTab = 'all';
    this.createResetPasswordForm();
    this.page = 1
    this.getNBFCList();
    
  }

  createResetPasswordForm(){
    this.resetPasswordForm = this.fb.group({
      nbfc_user_id: [null, [Validators.required]],
      new_password: [null, [Validators.required]],
      retype_password: [null, [Validators.required]],
      send_email: [false],
    })
  }

  onClickChangeTab(e){
    this.selectedTab = e;
    this.getNBFCList();
  }

  getResultBasedOnSearch(){
    this.page = 1;
    this.getNBFCList();
  }

  passwordForAdmin = {
    'isVisibleModal': false,
    'toggleShoePasswordField': false,
    'apiLoaderOnClick': false,
    'password': null,
    'apiLoader': null
  };

  onClickGetPassword(action, data){
    this.selectedUserId = data?.id;
    if(action == 'show'){
      this.passwordForAdmin['apiLoader'] = true;
      this.passwordForAdmin['isVisibleModal'] = true;
      this.passwordForAdmin['toggleShoePasswordField'] = true;
      this.http.showPasswordOfLenderAdmin(data?.id).subscribe((res: any)=>{
        console.log(res);
        this.passwordForAdmin['apiLoader'] = false;
        this.passwordForAdmin['password'] = res?.data;
      })
    } else {
      this.passwordForAdmin['isVisibleModal'] = true;
      this.passwordForAdmin['toggleShoePasswordField'] = false;
      this.resetPasswordForm.patchValue({
        'nbfc_user_id': data?.id
      })
    }
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
      this.http.resetPasswordForLenderAdmin(data).subscribe((res: any)=>{
        console.log(res)
        if(res?.success){
          this.message.success(res?.message);
          this.passwordForAdmin['apiLoaderOnClick']= false;
          this.passwordForAdmin['isVisibleModal'] = false;
          this.resetPasswordForm.reset();
        } else {
          this.message.error(res?.message);
          this.passwordForAdmin['apiLoaderOnClick']= false;
        }
      })
    }
  }

  getNBFCDetail(id, i?){
    this._apiLoader["detailList"] = true;
    this.http.getNBFCDetail(id).subscribe((res: any)=> {
      // this.masterPartnerDetailList = res?.data;
      this.masterPartnerDetailList.push(res?.data);
      this.masterPartner[i].expandSet = res?.data;
      this._apiLoader["detailList"] = false;
    }, err => {
      console.log(err);
      this._apiLoader["detailList"] = false;
      
    })
  }

  resetFilter(){
    this.page = 1;
    this.searchValue = ''
    this.getNBFCList();
  }

  getNBFCList(e?){
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
      'status_type': this.selectedTab === 'all' ? 'all' : this.selectedTab === 'active' ? 'active' : this.selectedTab === 'inactive' ? 'inactive' : ''
    };
    // if(this.searchValue){
    //   data['']
    // }
    this._apiLoader["list"] = true;
    this.http.getNBFCList(data).subscribe((res: any)=> {
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
    this.pdf_viewer_object_values['boolean'] = false
    this.pdf_viewer_object_values['url'] = ''
  }

  cancel(){
  }

  onClickVerifyDoc(id){
    let data
    this.http.verifyUploadedKycDocumentForNBFC(id,data).subscribe((res: any)=> {
    this.message.success(res?.message);
      this.getNBFCDetail(this.storeDetailId, this.selectedIndexOfExpand)
      console.log(res);
    })
  }

  confirmationTrigger(value: any) {
    console.log(value);
      this.http.deleteNBFCUserByUserId(this.selectedUserId).subscribe((res :any)=> {
        if(res?.success){
          this.message.success(res?.message)
        } else {
          this.message.error(res?.message?.[0])
        }
        this.getNBFCList();
        this.isDelete = false
      }, err=> {
        this.isDelete = false
      })
  }

  deleteUserByUserId(id, action){
    this.statusOfSelectedLender = action;
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

  storeSelectedId(id, action, type){
    this.selectedIdForAgreement = id;
    if(action === 'get'){
      this.uploadAndShowAgreement('get');
    } else if(action === 'submitted'){
      const generateloader = this.message.loading('Generating Report..', { nzDuration: 0 }).messageId; 
      this.pdf_viewer_object_values['title'] = 'Show ' + id?.document_master?.name
      if(type == 'single'){
        this.pdf_viewer_object_values['url'] = id?.document_file
      } else if(type == 'front'){
        this.pdf_viewer_object_values['url'] = id?.document_file_front
      } else if(type == 'back'){
        this.pdf_viewer_object_values['url'] = id?.document_file_back
      }
          this.pdf_viewer_object_values['boolean'] = true
          this.message.remove(generateloader);
    }
  }

  onClickDownloadSelectedDocument(e, action){
    // var data = new Blob([e?.document_file], { type: 'text/plain;charset=utf-8;png;JPEG;jpeg' });
    // FileSaver.saveAs(data, 'image.png' );
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
    // `${e?.file_name}`
  }



  uploadAndShowAgreement(action?){
    let data = new FormData();
    // let endPoint =  'partner' 
    data.append('file', this.uploaded_file);
    if(action === 'post' ){
      const generateloader = this.message.loading('Uploading Document..', { nzDuration: 0 }).messageId;
      this.http.uploadAndShowAgreementForNBFC('post', this.selectedIdForAgreement, data).subscribe((res: any)=> {
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
      this.http.uploadAndShowAgreementForNBFC('get', this.selectedIdForAgreement).subscribe((res: any)=> {
        if(res.success){
          this.pdf_viewer_object_values['title'] = 'Show Agreement'
          this.pdf_viewer_object_values['url'] = res?.data.agreement
          this.pdf_viewer_object_values['boolean'] = true
          this.message.remove(generateloader);
        } else {
          this.message.remove(generateloader);
          this.message.error('No Reports To Generate..');
        }
        // pdfViewerAndDownload(){
        // }
      }, error => {
        this.message.remove(generateloader);
        console.log(error);
      })

    }
  }
}
