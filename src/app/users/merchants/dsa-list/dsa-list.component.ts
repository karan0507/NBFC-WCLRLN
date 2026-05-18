import * as FileSaver from 'file-saver';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Data } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/services/http.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  globalPageSize = 100;
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
  selectedUserData: any[];
  toggleChangePassword: boolean;
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

  dsaProductForm: FormGroup;
  _currentDsaId: any;
  isMapDsaModal = { isVisible: false, type: null, loader: false };
  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  constructor(private http: HttpService, private message: NzMessageService, private sanitized: DomSanitizer, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createResetPasswordForm();
    this.selectedTab = 'all'
    this.page = 1
    this.getPartnerDSAList();

  }

  passwordForAdmin = {
    'isVisibleModal': false,
    'toggleShoePasswordField': false,
    'apiLoaderOnClick': false,
    'password': null,
    'apiLoader': null
  };

  resetPasswordForm: FormGroup;

  createResetPasswordForm() {
    this.resetPasswordForm = this.fb.group({
      corporate_admin_id: [null, [Validators.required]],
      new_password: [null, [Validators.required]],
      retype_password: [null, [Validators.required]],
      send_email: [false],
    })
  }

  onClickGetPassword(action, data) {
    this.selectedUserId = data?.id;
    if (action == 'show') {
      this.passwordForAdmin['apiLoader'] = true;
      this.passwordForAdmin['isVisibleModal'] = true;
      this.passwordForAdmin['toggleShoePasswordField'] = true;
      this.http.showPasswordOfCorporateAdmin(data?.id).subscribe((res: any) => {
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

  onClickResetPassword() {
    for (const i in this.resetPasswordForm.controls) {
      this.resetPasswordForm.controls[i].markAsDirty();
      this.resetPasswordForm.controls[i].updateValueAndValidity();
    }
    if (this.resetPasswordForm.value.send_email == true) {
      this.resetPasswordForm.patchValue({
        'send_email': 0
      })
    } else {
      this.resetPasswordForm.patchValue({
        'send_email': 1
      })
    }
    console.log(this.resetPasswordForm.value);
    if (this.resetPasswordForm.valid) {
      if (this.resetPasswordForm.value.new_password != this.resetPasswordForm.value.retype_password) {
        this.message.error('Plz Make sure to match New Password & Confirm Password');
        return;
      }
      this.passwordForAdmin['apiLoaderOnClick'] = true;
      const sendDate = this.resetPasswordForm.value;
      let data = new FormData();
      for (var i in sendDate) {
        // if (sendDate[i]) {
        data.append(i, sendDate[i]);
        // }
        // }
        // data.append('corporate_limit_settings', JSON.stringify(corporate_limit_settings));
      }
      this.http.resetPasswordForCorporateAdmin(data).subscribe((res: any) => {
        this.passwordForAdmin['isVisibleModal'] = false;
        console.log(res)
        if (res?.success) {

          this.message.success(res?.message);
          this.passwordForAdmin['apiLoaderOnClick'] = true;
          this.passwordForAdmin['isVisibleModal'] = false;
        } else {
          this.message.error(res?.message);
          this.passwordForAdmin['isVisibleModal'] = false;
          this.passwordForAdmin['apiLoaderOnClick'] = true;
        }
      })
    }
  }


  onClickChangeTab(e) {
    this.selectedTab = e;
    this.getPartnerDSAList();
  }

  getResultBasedOnSearch() {
    this.page = 1;
    this.getPartnerDSAList();
  }

  cancel() {
  }

  onClickVerifyDoc(id) {
    let data
    this.http.verifyUploadedKycDocumentForMasterAndPartner(id, data).subscribe((res: any) => {
      this.message.success(res?.message);
      this.getMerchantDetail(this.storeDetailId, this.selectedIndexOfExpand)
      console.log(res);
    })
  }

  getMerchantDetail(id, i?) {
    this._apiLoader["detailList"] = true;
    this.http.getPartnerDSAListById(id).subscribe((res: any) => {
      // this.merchantDetailList = res?.data;
      this.resetPasswordForm.reset();
      this.merchantDetailList.push(res?.data);
      this.merchantList[i].expandSet = res?.data;
      console.log('this.merchantList', this.merchantList)
      this._apiLoader["detailList"] = false;
    }, err => {
      console.log(err);
      this._apiLoader["detailList"] = false;

    })
  }

  resetFilter() {
    this.page = 1;
    this.searchValue = ''
    this.getPartnerDSAList();
  }

  getPartnerDSAList(e?) {
    if (this._apiLoader["list"]) { return; }
    if (e) {
      this.page = e?.pageIndex;
      this.globalPageSize = e?.pageSize
    }
    let data = {
      // 'user_type_id' : 2
      'page': this.page,
      'limit': this.globalPageSize,
      'name': this.searchValue,
      'partner_nature': 'DSA',
      'status': this.selectedTab === 'all' ? 'all' : this.selectedTab === 'active' ? 'active' : this.selectedTab === 'inactive' ? 'inactive' : ''
    };
    // if(this.searchValue){
    //   data['']
    // }
    this._apiLoader["list"] = true;
    this.http.getPartnerDSAList(data).subscribe((res: any) => {
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
      this.selectedIndexOfExpand = i
      this.getMerchantDetail(this.storeDetailId = id, i)
      this.expandSet.add(id);
      // alert('Clicked On Expand ' + id)
    } else {
      this.expandSet.delete(id);
    }
  }

  handleCancel() {
    this.isDelete = false;
    this.pdf_viewer_object_values['boolean'] = false
    this.pdf_viewer_object_values['url'] = ''
  }

  confirmationTrigger(value: any) {
    this.http.deleteUserByUserId(this.selectedUserId).subscribe((res: any) => {
      if (res?.success) {
        this.message.success(res?.message)
      } else {
        this.message.error(res?.message?.[0])
      }
      this.getPartnerDSAList();
      this.isDelete = false
    }, err => {
      this.isDelete = false
    })
  }

  deleteUserByUserId(id, action) {
    this.statusOfSelectedLender = action;
    this.selectedUserId = id
    this.isDelete = true;
  }

  onClickChangePassword(e) {
    console.log('event to execute')
    console.log(e)
    this.http.changePasswordByAdmin(e).subscribe((res) => {
      this.message.success('Password Updated Successfully');
      this.toggleChangePassword = false;
    }, err => {
      this.toggleChangePassword = false;
    })
  }

  changePassword(data) {
    this.selectedUserData = [];
    const selectedData = {
      id: data?.user?.id,
      email: data?.contact_person_email,
      phone: data?.contact_person_phone,
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

  storeSelectedId(id, action, type?) {
    this.selectedIdForAgreement = id;
    if (action === 'get') {
      this.uploadAndShowAgreement('get');
    } else if (action === 'submitted') {
      const generateloader = this.message.loading('Generating Report..', { nzDuration: 0 }).messageId;
      this.pdf_viewer_object_values['title'] = 'Show ' + id?.document_master?.name
      if (type == 'single') {
        this.pdf_viewer_object_values['url'] = id?.document_file
      } else if (type == 'front') {
        this.pdf_viewer_object_values['url'] = id?.document_file_front
      } else if (type == 'back') {
        this.pdf_viewer_object_values['url'] = id?.document_file_back
      }
      this.pdf_viewer_object_values['boolean'] = true
      this.message.remove(generateloader);
    }
  }

  onClickDownloadSelectedDocument(e, action?) {
    if (action == 'front') {
      var data = new Blob([e?.document_file_front], { type: 'text/plain;charset=utf-8' });
      FileSaver.saveAs(data, `Front_Doc`);
    } else if (action == 'back') {
      var data = new Blob([e?.document_file_back], { type: 'text/plain;charset=utf-8' });
      FileSaver.saveAs(data, `Back_Doc`);
    } else if (action == 'single') {
      var data = new Blob([e?.document_file], { type: 'text/plain;charset=utf-8' });
      FileSaver.saveAs(data, `Document_Preview`);
    }
  }



  uploadAndShowAgreement(action?) {
    let data = new FormData();
    let endPoint = 'partner'
    data.append('file', this.uploaded_file);
    if (action === 'post') {
      const generateloader = this.message.loading('Uplaoding Document..', { nzDuration: 0 }).messageId;
      this.http.uploadAndShowAgreement(endPoint, 'post', this.selectedIdForAgreement, data).subscribe((res: any) => {
        console.log(res);
        if (res?.success) {
          this.message.remove(generateloader);
          this.message.success(res?.message)
        } else {
          this.message.remove(generateloader);
          this.message.error(res?.message?.[0])
        }
      }, error => {
        this.message.remove(generateloader);
        console.log(error);
      })
    } else {
      const generateloader = this.message.loading('Generating Report..', { nzDuration: 0 }).messageId;
      this.http.uploadAndShowAgreement(endPoint, 'get', this.selectedIdForAgreement).subscribe((res: any) => {
        console.log(res);
        // pdfViewerAndDownload(){
        if (res.success) {
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

  // productList: any = []
  getMappedProducts(id?) {
    // let data = {}
    console.log('Get Mapped');
    
    this.http.getMappedProducts(id).subscribe((res: any) => {
      if (res.success) {
        if(res.data?.length > 0){
          let tempProducts = [];
          res.data.forEach(element => {
            tempProducts.push(element.product.id)
          });
          this.createMapForm(tempProducts);
        }else{
          this. createMapForm()
        }
      }
    })
  }


  productList: any = []
  getProducts() {
    this.http.getProducts().subscribe((res: any) => {
      if (res.success) {
        this.productList = res.data
      }
    })
    console.log(this.dsaProductForm.value);
    
  }

  createMapForm(data?) {
    this.dsaProductForm = this.fb.group({
      product_ids: [data ? data : [], [Validators.required]]
    })
    
    this.getProducts();
    this.isMapDsaModal.type = 'dsa_product'
    this.isMapDsaModal.isVisible = true;    
  }


  handlecancel() {
    this.isMapDsaModal.isVisible = false;
    this.isMapDsaModal.type = null;
    this._currentFileName = null;
    this._currentDsaId = null;
    this.dsaProductForm.reset()
  }

  handleok() {
    if (this.isMapDsaModal.isVisible) {
      if (this.isMapDsaModal.type == 'dsa_product') {
        this.isMapDsaModal.loader = true
        let data = { 'product_ids': this.dsaProductForm.get('product_ids').value, 'dsa_id': this._currentDsaId };
        this.http.mapDSAtoProduct(data).subscribe((res: any) => {
          if (res.success) {
            this.message.success(res.message);
            this.getPartnerDSAList()
            this.isMapDsaModal.loader = false
            this.handlecancel();
          } else {
            this.isMapDsaModal.loader = false;
            this.handlecancel();
          }
        }, error => {
          this.message.error(error)
          this.isMapDsaModal.loader = false;
          this.handlecancel();
        })

      } else if (this.isMapDsaModal.type == 'importFile') {
        this.isMapDsaModal.loader = true
        let formData = new FormData();
        formData.append('file', this._currentFileName);
        this.http.uploadCommissionDsa(formData).subscribe((res: any) => {
          if (res.success) {
            this.message.success(res.message);
            this.getPartnerDSAList()
            this.isMapDsaModal.loader = false;
            this.handlecancel();
          } else {
            this.isMapDsaModal.loader = false;
            this.handlecancel();
          }
        }, error => {
          this.message.error(error)
          this.isMapDsaModal.loader = false;
          this.handlecancel();
        })
      }
    }
  }

  fileList: any = [];
  _currentFileName: any;
  beforeUploadName = (file) => {
    this.fileList = [];
    this.fileList = this.fileList.concat(file);
    this._currentFileName = this.fileList[0];
    console.log(this._currentFileName, file);
    // this.generateBase64View(file)
    return false;
  };

  downloadSampleFile() {
    var link = document.createElement('a');
    link.href = 'assets/static files/sample_file_commission.xlsx';
    link.download = 'sample_file_commission.xlsx';
    link.click();
  }
}
