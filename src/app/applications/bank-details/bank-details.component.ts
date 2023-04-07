import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/services/http.service';
import { GlobalservicesService } from 'src/app/shared/globalservices.service';

@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.css']
})
export class BankDetailsComponent implements OnInit {
  @Input() _currentId: any;
  api_calling_loader: boolean;
  data: any;
  constructor(public https: HttpService, public message: NzMessageService, public fb: FormBuilder, public sanitize: DomSanitizer,
    public global: GlobalservicesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getBankDetails()
  }

  getBankDetails() {
    this.api_calling_loader = true
    this.https.getBankDetails(this._currentId).subscribe(res => {
      this.api_calling_loader = false
      this.data = res['data']
      // this.message.success(res['message'])
    }, (err) => {
      this.api_calling_loader = false
    })
  }
}
