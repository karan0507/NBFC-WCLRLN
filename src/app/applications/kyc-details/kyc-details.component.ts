import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
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

  constructor(public https: HttpService, public message: NzMessageService, public fb: FormBuilder, public sanitize: DomSanitizer,
    public global: GlobalservicesService, private route: ActivatedRoute, private router: Router) { }

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
    this.thirdPartyDataResponse = res
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

}
