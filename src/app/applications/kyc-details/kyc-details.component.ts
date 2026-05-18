import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import * as FileSaver from 'file-saver';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { HttpService } from 'src/app/services/http.service';
import { GlobalservicesService } from 'src/app/shared/globalservices.service';

@Component({
  selector: 'app-kyc-details',
  templateUrl: './kyc-details.component.html',
  styleUrls: ['./kyc-details.component.css']
})
export class KycDetailsComponent implements OnInit {

  @Input() uploadPermission: any;
  @Input() _currentId: any;
  @Input() _currStage: any
  api_calling_loader: boolean;
  data: any;
  isVisibleThirdPartyResp: boolean;
  thirdPartyDataResponse = [];
  _isUpload: boolean = false;
  api_calling_loader1: boolean;
  isVisibleUploadedImage = false;
  storedSelfieImage: any;
  api_calling_loader2: boolean;
  _currentModalData: any;
  _isViewDocument: boolean = false
  _isVerify: boolean = false;
  api_calling_loader_modal : boolean = false;
  constructor(public https: HttpService, public message: NzMessageService, public fb: FormBuilder, public sanitize: DomSanitizer,
    public global: GlobalservicesService, private route: ActivatedRoute, private router: Router, private modal : NzModalService) { }

  ngOnInit(): void {
    this.getKycDetails()
  }

  getKycDetails() {
    this.api_calling_loader = true
    this.https.getKycDetails(this._currentId).subscribe(res => {
      this.api_calling_loader = false
      this.data = res['data']
      // this.message.success(res['message'])
    }, (err) => {
      this.api_calling_loader = false
    })
  }

  onClickShowJSONPreview(res) {
    this.isVisibleThirdPartyResp = true
    this.api_calling_loader1 = true;
    this.thirdPartyDataResponse = res.api_response
    this.api_calling_loader1 = false;
  }

  onClickPreviewImage(id) {
    this.isVisibleUploadedImage = true;
    this.api_calling_loader2 = true;
    let data = {
      'source': 'Onboarding',
      'datapoint': 'get_aadhar_selfie_image',
      'endpoint': id
    }
    this.https.fetchXMLData(data).subscribe((res: any) => {
      if (res?.success) {
        this.api_calling_loader2 = false;
        this.storedSelfieImage = res.data
      } else {
        this.message.error(res?.message);
        this.api_calling_loader2 = false;
      }
    }, error => {
      // this.message.error(res?.message);
      this.api_calling_loader2 = false;
    })
  }

  downloadFile(res, name) {
    FileSaver.saveAs(res, 'verification' + name)
  }

  _currPhysicalProof: any;
  _currModalType: any;
  reason:any;
  isPhysicalProof: boolean = false;
  uploaded_file: any;
  fileList: any=[]
  beforeUploadName = (file: NzUploadFile): boolean => {
    this.fileList = [];
    this.fileList = this.fileList.concat(file);
    this.uploaded_file = file;
    // this.generateBase64View(file)
    return false;
  };

  remarks: any;
  _currByPassId:any
  openModalPhysicalProofs(type){
    this._currModalType = type;
    if(type == 'upload'){
      this.fileList =[];
      this.uploaded_file = ''
      this.isPhysicalProof = true;
    }else if(type == 'byPass'){
      this.remarks = '';
      this.isPhysicalProof = true;
    }
  }

  verifyByPass(){
    this.modal.confirm({
      nzTitle: 'Are you sure ',  /*+ this.party_name + '?'*/
      nzContent: 'You want to verify physical verification document',
      nzOkText: 'Confirm',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => this.confirmByPass(),
      nzCancelText: 'No',
      nzOnCancel: () => console.log('Cancel')
  });
  }

  confirmByPass(){
    let data = {id:this._currByPassId, 'status':'APPROVED'}
    this.https.verifyPhysicalVerification(data).subscribe((res:any)=>{
      if(res.success){
        this.message.success(res.message);
        this.modal.closeAll()
      }
    })
  }

//   uploadPhysicalVerificationDocument
// byPasPhysicalVerification
// verifyPhysicalVerification

  handleOk(){
    this.api_calling_loader_modal = true;
    let formData = new FormData()
    formData.append('application',this._currentId)
    formData.append('file',this.uploaded_file)
    this.https.uploadPhysicalVerificationDocument(formData).subscribe((res:any)=>{
      if(res.success){
        this.message.success(res.mesage);

      }
    })
  }
}
