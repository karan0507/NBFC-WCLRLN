import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-double-confirmation-popup',
  templateUrl: './double-confirmation-popup.component.html',
  styleUrls: ['./double-confirmation-popup.component.css']
})
export class DoubleConfirmationPopupComponent implements OnInit {

  @Input() title;
  @Input() alertWarning;
  @Input() subTitle;
  @Input() submitBtnTxt;
  @Input() cancelBtnTxt;
  @Input() icon;
  @Output() onOkCall = new EventEmitter<any>();
  @Output() onCencelCall = new EventEmitter<any>();
  @Input() isbtnLoading;
  

  constructor() { }

  ngOnInit(): void {
  }

}
