import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
      selector: 'app-kyc-document-action',
      templateUrl: './kyc-document-action.component.html',
      styleUrls: ['./kyc-document-action.component.css']
})
export class KycDocumentActionComponent implements OnInit {
@Input() action;
@Input() documentData;
documentStatus = 1;
verifyRemarks = '';
      constructor(public sanitize : DomSanitizer) { }
      api_calling_loader = {
            'cardLoader' : false
      }
      ngOnInit(): void {
            // this.api_calling_loader['cardLoader'] = true;
            console.log(this.action,'<= Action Data =>', this.documentData);
            
      }

      sanatizeUrlToSafe(value) {
            this.api_calling_loader['cardLoader'] = false;            
            // let data = 'https://devadminapi.fatakpay.com/media/nbfc_agreements/2022/02/11/djangogirls-tutorial-en_DkLZGLR.pdf'
            return this.sanitize.bypassSecurityTrustResourceUrl(value);
      }
      handleDocMethod(){

      }
      handleCancel(){
            console.log('In Common Cancel');
            
      }

}
