import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { HttpService } from 'src/app/services/http.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-common-document-actions',
  templateUrl: './common-document-actions.component.html',
  styleUrls: ['./common-document-actions.component.css']
})
export class CommonDocumentActionsComponent implements OnInit, OnDestroy {
  @ViewChild("imageRotateClass") myNameElem: ElementRef;
  @ViewChild("imageRotateClassF") myNameElemF: ElementRef;
  @Input() _isOpenModal: boolean = false;
  @Input() documentData: any;
  @Input() userApplicationData: any;
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
  isDoubleSide: boolean = false;
  _currentFileName2: any;
  fileListSecond: any = []
  currentDocumentType: any = 1;
  state: string = '';
  axis = 0
  axisF = 0
  constructor(public sanitize: DomSanitizer, public https: HttpService, public message: NzMessageService,  private renderer: Renderer2) { }
  ngOnDestroy(): void {
    // this.close.emit(false)
  }

  ngOnInit(): void {
    console.log(this.documentData);

    if (this.documentData?.document_master?.require_front_back == 1) {
      // if(front_file_url){

      // }
      // this._currentFileName = this.documentData?.front_file_url
      // this._currentFileName2 = this.documentData?.front_file_url
      // this.fileList[0] = this.documentData?.front_file_name
      this.isDoubleSide = true;
    } else {
      this.isDoubleSide = false;
    }

  }

  handleCancel() {
    this._isOpenModal = false;
    this.close.emit(false)
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
        let ocr_formData = new FormData()
        ocr_formData.append('application', this.documentData?.application)
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
        if (this.isDoubleSide && this._currentFileName) {
          uploadDoc.append('front_file', this._currentFileName)
        }
        if (this.isDoubleSide && this._currentFileName2) {
          uploadDoc.append('back_file', this._currentFileName2)
        }
        if (!this.isDoubleSide && this._currentFileName) {
          uploadDoc.append('file', this._currentFileName)
        }
        console.clear();
        console.log(this.documentData)
        if (this.documentData?.document_master?.name == "Aadhar Card") {
          ocr_formData.append('document_type', 'AADHAR')
          ocr_formData.append('file_front', this._currentFileName)
          ocr_formData.append('file_back', this._currentFileName2)
        }

        if (this.documentData?.document_master?.name == "Pan") {
          ocr_formData.append('document_type', 'PAN')
          ocr_formData.append('document', this._currentFileName)
        }

        if (this.documentData?.document_master?.name == "Voter ID") {
          ocr_formData.append('document_type', 'VOTERID')
          ocr_formData.append('file_front', this._currentFileName)
          ocr_formData.append('file_back', this._currentFileName2)
        }

        if (this.documentData?.document_master?.name == "Driving License") {
          ocr_formData.append('document_type', 'DRIVING')
          ocr_formData.append('file_front', this._currentFileName)
          ocr_formData.append('file_back', this._currentFileName2)
        }
        // this.documentData?.document_master?.name == "Other Document"

        // console.log(this.documentData?.document_master?.name + ' Testing Is In progress');
        // return;
        // "Other Document" this.documentData?.document_master?.name == "Selfie" ||
        if ( this.documentData?.document_master?.name == "Other Document" || this.documentData?.document_master?.name == "Selfie"){
          let uploadDocForOtherDoc = new FormData()
          console.log(uploadDoc);
          // delete uploadDoc['kyc_document_id'];
          // uploadDocForOtherDoc.append('application_id', this.documentData?.application);
          if(this.documentData?.document_master?.name == "Other Document"){
            uploadDocForOtherDoc.append('document_id', this.documentData?.document_master?.id);
            uploadDocForOtherDoc.append('application_id', this.documentData?.application);
            uploadDocForOtherDoc.append('file', this._currentFileName);
          }
          if(this.documentData?.document_master?.name == "Selfie"){
            // uploadDocForOtherDoc.append('endpoint', this.documentData?.application);
            uploadDocForOtherDoc.append('endpoint', this.userApplicationData?.user_info?.id);
            uploadDocForOtherDoc.append('selfie', this._currentFileName);
          }
          // endpoint
          uploadDocForOtherDoc.append('source', 'Onboarding');
          uploadDocForOtherDoc.append('datapoint', this.documentData?.document_master?.name == "Selfie" ? 'upload_selfie_appuser' : 'upload_kyc_doc');
          this.https.uploadLoanDocument(uploadDocForOtherDoc).subscribe((res: any) => {
            if (res?.success) {
              this.api_calling_loader['button'] = false;
              this.fileList = [];
              this.message.success(res?.message)
            } else {
              this.api_calling_loader['button'] = false;
              this.fileList = [];
              this.message.error(res?.message)
            }
            if (this.documentData?.document_master?.name != "Aadhar Card" ||
              this.documentData?.document_master?.name != "Pan" ||
              this.documentData?.document_master?.name != "Voter ID" ||
              this.documentData?.document_master?.name != "Driving License") {
              this.handleCancel();
            }
          }, err => {
            this.api_calling_loader['button'] = false;
            this.message.error(err)
          })
        }
        // uploadOtherDocument
        // if ( this.documentData?.document_master?.name == "Other Document"){
        //   this.https.uploadLoanDocument(uploadDoc).subscribe((res: any) => {
        //     if (res?.success) {
        //       this.api_calling_loader['button'] = false;
        //       this.fileList = [];
        //       this.message.success(res?.message)
        //     } else {
        //       this.api_calling_loader['button'] = false;
        //       this.fileList = [];
        //       this.message.error(res?.message)
        //     }
        //     if (this.documentData?.document_master?.name != "Aadhar Card" ||
        //       this.documentData?.document_master?.name != "Pan" ||
        //       this.documentData?.document_master?.name != "Voter ID" ||
        //       this.documentData?.document_master?.name != "Driving License") {
        //       this.handleCancel();
        //     }
        //   }, err => {
        //     this.api_calling_loader['button'] = false;
        //     this.message.error(err)
        //   })
        // }

        if (this.documentData?.document_master?.name == "Aadhar Card" ||
          this.documentData?.document_master?.name == "Pan" ||
          this.documentData?.document_master?.name == "Voter ID" ||
          this.documentData?.document_master?.name == "Driving License") {
          this.https.uploadOcrDocument(ocr_formData).subscribe((res: any) => {
            if (res?.success) {
              this.handleCancel();
              this.message.success(res?.message)
            } else {
              this.handleCancel();
              this.message.error(res?.message)
            }
          }, err => {
            this.handleCancel();
          })
        }

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

  beforeUpload = (file: NzUploadFile): boolean => {
    this.fileListSecond = [];
    this.fileListSecond = this.fileListSecond.concat(file);
    this._currentFileName2 = file;
    // this.generateBase64View(file)
    return false;
  };

  rotateRight() {
    this.axis = this.axis + 90
    if (this.axis == 90) {
      this.renderer.setStyle(this.myNameElem.nativeElement, 'transform', 'rotate(-90deg)')
    } else if (this.axis == 180) {
      this.renderer.setStyle(this.myNameElem.nativeElement, 'transform', 'rotate(-180deg)')
    } else if (this.axis == 270) {
      this.renderer.setStyle(this.myNameElem.nativeElement, 'transform', 'rotate(-270deg)')
    } else {
      this.renderer.setStyle(this.myNameElem.nativeElement, 'transform', 'rotate(0deg)')
      this.axis = 0
    }
  }
  rotateLeft() {
    this.axis = this.axis - 90
    if (this.axis == 90) {
      this.renderer.setStyle(this.myNameElem.nativeElement, 'transform', 'rotate(90deg)')
    } else if (this.axis == 180) {
      this.renderer.setStyle(this.myNameElem.nativeElement, 'transform', 'rotate(180deg)')
    } else if (this.axis == 270) {
      this.renderer.setStyle(this.myNameElem.nativeElement, 'transform', 'rotate(270deg)')
    } else {
      this.renderer.setStyle(this.myNameElem.nativeElement, 'transform', 'rotate(0deg)')
      this.axis = 0
    }
  }

  
  rotateRightF() {
    this.axisF = this.axisF + 90
    if (this.axisF == 90) {
      this.renderer.setStyle(this.myNameElemF.nativeElement, 'transform', 'rotate(-90deg)')
    } else if (this.axisF == 180) {
      this.renderer.setStyle(this.myNameElemF.nativeElement, 'transform', 'rotate(-180deg)')
    } else if (this.axisF == 270) {
      this.renderer.setStyle(this.myNameElemF.nativeElement, 'transform', 'rotate(-270deg)')
    } else {
      this.renderer.setStyle(this.myNameElemF.nativeElement, 'transform', 'rotate(0deg)')
      this.axisF = 0
    }
  }
  rotateLeftF() {
    this.axisF = this.axisF + 90
    if (this.axisF == 90) {
      this.renderer.setStyle(this.myNameElemF.nativeElement, 'transform', 'rotate(90deg)')
    } else if (this.axisF == 180) {
      this.renderer.setStyle(this.myNameElemF.nativeElement, 'transform', 'rotate(180deg)')
    } else if (this.axisF == 270) {
      this.renderer.setStyle(this.myNameElemF.nativeElement, 'transform', 'rotate(270deg)')
    } else {
      this.renderer.setStyle(this.myNameElemF.nativeElement, 'transform', 'rotate(0deg)')
      this.axisF = 0
    }
  }
}
