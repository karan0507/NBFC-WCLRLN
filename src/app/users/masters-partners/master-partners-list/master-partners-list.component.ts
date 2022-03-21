import { NzUploadFile } from 'ng-zorro-antd/upload';
import { saveAs } from "file-saver";
import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/services/http.service';
import { DomSanitizer } from '@angular/platform-browser';
import * as FileSaver from 'file-saver';
// import jsPDF from 'jspdf';


const getBase64 = (file: File): Promise<string | ArrayBuffer | null> =>
        new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result);
          reader.onerror = (error) => reject(error);
        });

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
  pdf_viewer_object_values = {
    'boolean': false,
    'url': '',
    'title': ''
  }
  file: string;
  uploaded_file: any;
  storeDetailId: number;
  statusOfSelectedLender: any;
  selectedIndexOfExpand: any;
  
  onExpandChange(id: number, checked: boolean, i): void {
    this.selectedIndexOfExpand = i;
    if (checked) {
      this.getMasterPartnerById(this.storeDetailId = id, i)
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

  constructor(private http: HttpService, private message: NzMessageService,private sanitized: DomSanitizer  ) { }

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
      'limit': this.globalPageSize,
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
    this.pdf_viewer_object_values['boolean'] = false
    this.pdf_viewer_object_values['url'] = ''
  }

  cancel(){
  }

  onClickVerifyDoc(id){
    let data
    this.http.verifyUploadedKycDocumentForMaster(id,data).subscribe((res: any)=> {
    this.message.success(res?.message);
      this.getMasterPartnerById(this.storeDetailId, this.selectedIndexOfExpand)
      console.log(res);
    })
  }

  confirmationTrigger() {
      this.http.deleteMasterUserByUserId(this.selectedUserId).subscribe((res :any)=> {
        if(res?.success){
          this.message.success(res?.message)
        } else {
          this.message.error(res?.message?.[0])
        }
        this.getMasterPartner();
        this.isDelete = false
      }, err=>{
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

  storeSelectedId(id, action){
    this.selectedIdForAgreement = id;
    if(action === 'get'){
      this.uploadAndShowAgreement('get');
    } else if(action === 'submitted'){
      const generateloader = this.message.loading('Generating Report..', { nzDuration: 0 }).messageId; 
      this.pdf_viewer_object_values['title'] = 'Show ' + id?.document_master?.name
          this.pdf_viewer_object_values['url'] = id?.document_file
          this.pdf_viewer_object_values['boolean'] = true
          this.message.remove(generateloader);
    }
  }
  filePreview: string  
  onClickDownloadSelectedDocument(e){
    var data = new Blob([e?.document_file]);
    FileSaver.saveAs(data,  `${e?.file_name}`);
  }

  

  // downloadPdf(base64String, fileName) {
  //   const source = `data:application/pdf;base64,${base64String}`;
  //   const link = document.createElement("a");
  //   link.href = source;
  //   link.download = `${fileName}.pdf`
  //   link.click();
  // }


  uploadAndShowAgreement(action?){
    let data = new FormData();
    let endPoint =  'master' 
    data.append('file', this.uploaded_file);
    if(action === 'post' ){
      const generateloader = this.message.loading('Uploading Document..', { nzDuration: 0 }).messageId;
      this.http.uploadAndShowAgreement(endPoint, 'post', this.selectedIdForAgreement, data).subscribe((res?: any)=> {
        this.message.remove(generateloader);
        console.log(res);
        if(res?.success){
          this.message.success(res?.message)
        } else {
          this.message.error(res?.message?.[0])
        }
      }, error => {
        this.message.remove(generateloader);
        console.log(error);
      })
    } else {
      const generateloader = this.message.loading('Generating Report..', { nzDuration: 0 }).messageId;
      this.http.uploadAndShowAgreement(endPoint, 'get', this.selectedIdForAgreement).subscribe((res: any)=> {
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
      }, error => {
        this.message.remove(generateloader);
        console.log(error);
      })

    }
  }


}
