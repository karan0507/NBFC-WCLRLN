import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-common-document-actions',
  templateUrl: './common-document-actions.component.html',
  styleUrls: ['./common-document-actions.component.css']
})
export class CommonDocumentActionsComponent implements OnInit, OnDestroy {
  @Input() _isOpenModal: boolean = false;
  @Input() documentData: any;
  @Input() action: any;
  @Output() close = new EventEmitter<any>();
  documentStatus: any;
  verifyRemarks: any
  fileList: any = [];
  _currentFileName: any
  api_calling_loader = {
    'cardLoader': false,
    'button': false
  }
  constructor(public sanitize: DomSanitizer, public https: HttpService, public message: NzMessageService) { }
  ngOnDestroy(): void {
    // throw new Error('Method not implemented.');
    this.close.emit(false)
  }

  ngOnInit(): void {
    console.log(this.documentData);

  }

  handleCancel() {
    this._isOpenModal = false;
    this.close.emit()
  }

  sanatizeUrlToSafe(value) {
    this.api_calling_loader['cardLoader'] = false;
    // let data = 'https://devadminapi.fatakpay.com/media/nbfc_agreements/2022/02/11/djangogirls-tutorial-en_DkLZGLR.pdf'
    return this.sanitize.bypassSecurityTrustResourceUrl(value);
  }

  handleOk(type?) {
    switch (type) {
      case 'verify':
        this.api_calling_loader['button'] = true
        let params = new FormData()
        params.append('source', 'Onboarding')
        if (this.documentData?.document_master?.id) {
          params.append('datapoint', 'verify_kyc_doc');
          params.append('application_id', this.documentData?.application);
          params.append('kyc_document_id', this.documentData?.id)
          params.append('status', this.documentStatus == 1 ? 'Accepted' : 'Rejected')
          params.append('reason', this.verifyRemarks ? this.verifyRemarks : '')
        } else if (this.documentData?.document_master?.name == "Selfie") {
          params.append('datapoint', 'verify_selfie');
          params.append('application_id', this.documentData?.application);
          params.append('status', this.documentStatus == 1 ? 'Accepted' : 'Rejected')
          params.append('reason', this.verifyRemarks ? this.verifyRemarks : '')
        }
        console.log(this.documentStatus);

        this.https.verifyLoanDocument(params).subscribe((res: any) => {
          if (res?.success) {
            this.api_calling_loader['button'] = false
            this.message.success(res?.message);
            this.handleCancel();
          } else {
            this.api_calling_loader['button'] = false
            this.message.error(res?.message);
          }
        }, err => {
          this.api_calling_loader['button'] = false
          this.message.error(err);
        })

        break;
      case 'uploadDocument':
        this.api_calling_loader['button'] = true;
        let uploadDoc = new FormData()
        uploadDoc.append('source', 'Onboarding')
        if (this.documentData?.document_master?.id) {
          uploadDoc.append('datapoint', 'upload_kyc_doc')

        } else if (this.documentData?.document_master?.name == "Selfie") {
          uploadDoc.append('datapoint', 'upload_selfie')
        }
        uploadDoc.append('application_id', this.documentData?.application)
        if (this.documentData?.id) {
          uploadDoc.append('kyc_document_id', this.documentData?.id)
        }
        if (this.documentData?.document_master?.id) {
          uploadDoc.append('document_id', this.documentData?.document_master?.id)
        }
        uploadDoc.append('file', this._currentFileName)
        this.https.uploadLoanDocument(uploadDoc).subscribe((res: any) => {
          if (res?.success) {
            this.api_calling_loader['button'] = false;
            this.fileList = [];
            this.message.success(res?.message)
            this.handleCancel();
          } else {
            this.api_calling_loader['button'] = false;
            this.fileList = [];
            this.message.error(res?.message)
            this.handleCancel();
          }
        }, err => {
          this.api_calling_loader['button'] = false;
          this.message.error(err)
        })
        break;

    }
  }


  beforeUploadName = (file: NzUploadFile): boolean => {
    this.fileList = [];
    this.fileList = this.fileList.concat(file);
    this._currentFileName = file;
    // this.generateBase64View(file)
    return false;
  };
}
