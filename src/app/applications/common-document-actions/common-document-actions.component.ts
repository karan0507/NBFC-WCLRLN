import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-common-document-actions',
  templateUrl: './common-document-actions.component.html',
  styleUrls: ['./common-document-actions.component.css']
})
export class CommonDocumentActionsComponent implements OnInit {
@Input() _isOpenModal : any;
@Input() documentData : any;
@Input() action : any;
api_calling_loader = {
  'cardLoader': false
}
  constructor(public sanitize: DomSanitizer) { }

  ngOnInit(): void {
  }

  handleCancel(){}

  sanatizeUrlToSafe(value) {
    this.api_calling_loader['cardLoader'] = false;
    // let data = 'https://devadminapi.fatakpay.com/media/nbfc_agreements/2022/02/11/djangogirls-tutorial-en_DkLZGLR.pdf'
    return this.sanitize.bypassSecurityTrustResourceUrl(value);
}
}
