import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { stringify } from 'querystring';

@Component({
      selector: 'app-kyc-document-action',
      templateUrl: './kyc-document-action.component.html',
      styleUrls: ['./kyc-document-action.component.css']
})
export class KycDocumentActionComponent implements OnInit, OnDestroy {
      @Input() action;
      @Input() documentData;
      remarks: any;
      @Output() verifyRemarks = new EventEmitter<string>();
      fileList: any;
      @Output() _currentFileName = new EventEmitter<string>();
      @Output() docStatus = new EventEmitter<string>();

      constructor(public sanitize: DomSanitizer) { }
      ngOnDestroy(): void {
            throw new Error('Method not implemented.');
      }
      api_calling_loader = {
            'cardLoader': false
      }
      ngOnInit(): void {
            // this.api_calling_loader['cardLoader'] = true;
            console.log(this.action, '<= Action Data =>', this.documentData);

      }

      sanatizeUrlToSafe(value) {
            this.api_calling_loader['cardLoader'] = false;
            // let data = 'https://devadminapi.fatakpay.com/media/nbfc_agreements/2022/02/11/djangogirls-tutorial-en_DkLZGLR.pdf'
            return this.sanitize.bypassSecurityTrustResourceUrl(value);
      }
      handleDocMethod() {

      }
      handleCancel() {
            console.log('In Common Cancel');
      }

      beforeUploadName = (file: NzUploadFile): boolean => {
            this.fileList = [];
            this.fileList = this.fileList.concat(file);
            this._currentFileName.emit(stringify(file))
            // this.generateBase64View(file)
            return false;
      };

      statusChange(data?) {
            this.docStatus.emit(data)
      }

}
