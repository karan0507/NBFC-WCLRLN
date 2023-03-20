import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Subscription } from 'rxjs';
import { last, takeUntil } from 'rxjs/operators';
import { HttpService } from 'src/app/services/http.service';
import { GlobalservicesService } from 'src/app/shared/globalservices.service';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit, OnDestroy {

  @Input() _currentId: any;
  data
  api_calling_loader: boolean;
  generateloading: boolean;
  _isUpdateStatus: boolean;
  isFetchCibilSms: boolean;
  _isCibil: boolean;
  _currentLoanDetails: any;
  seviceCall: Subscription;
  isAttendanceVisible: boolean = false;
  constructor(public https: HttpService, public message: NzMessageService, public fb: FormBuilder, public sanitize: DomSanitizer,
    public global: GlobalservicesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    var count = 0
    this.seviceCall = this.https.expnadList.subscribe(res => {
      if (count == 0) {
        console.log(res)
        // this._currentId = res.values().next().value
        this.getPersonalDetails()
        count++;
      }
    })
  }

  ngOnDestroy(): void {
    this.seviceCall.unsubscribe()
    this.https.expnadList.next()
  }

  getPersonalDetails() {
    this.api_calling_loader = true
    this.https.getPersonalDetails(this._currentId).subscribe(res => {
      this.api_calling_loader = false
      this.data = res['data']
      // this.message.success(res['message'])
    }, (err) => {
      this.api_calling_loader = false
    })
  }


  pullprofile(id) {
    this.generateloading = true
    this.https.pullprofile(id).subscribe((res: any) => {
      if (res.success) {
        this.getPersonalDetails()
        this.message.success(res.message)

      } else {
        this.message.error(res.message)
      }
      // this.https.exportMasterSectionModule(res, 'attendance-' + id, 'xlsx', generateloader)
      this.generateloading = false

    }, error => {
      this.generateloading = false
      console.log(error);
    })
  }
  // Get Cibil Data API
  getCibilScoreData(type?, id?) {
    this._isUpdateStatus = true
    this.isFetchCibilSms = true;
    let data = { source: 'Onboarding', endpoint: id }
    if (type == 'cibil' && id) {
      this._isCibil = true;
      this._currentLoanDetails = id

    } else if (type == 'sms' && id) {
      this._isCibil = false;
      this._currentLoanDetails = id
    }
  }

  handleCancel() {
    // this._isOpenModal = false;
    // this._isViewDocument = false;
    // this._isUpload = false;
    // this._isVerify = false;
    // this._isPullData = false;
    this._isCibil = false;
    this.isFetchCibilSms = false
    this._isUpdateStatus = false;
    this.isVisible = false;
    this.isAttendanceVisible = false;
    this.attendance_date = null;
    this.attendance_data = []
    // this._isStatus = false;
    // this._isDocument = false;
    // this._isEditOffer = false;
    // this.isRejectModal = false;
    // this.pdf_viewer_object_values['boolean'] = false
    // this.pdf_viewer_object_values['url'] = null
    // this.pdf_viewer_object_values1['boolean'] = false
    // this.pdf_viewer_object_values1['url'] = null
  }

  attendance_date: any
  attendance_data: any = [];
  isVisible: boolean = false
  api_calling_Loader : boolean = false;
  handleOk(type?) {
    console.log(this.attendance_date);
    
    var newdata = {
      application: this._currentId,
      start_date: this.attendance_date[0] ? moment(this.attendance_date[0]).format("YYYY-MM-DD") : '',
      end_date: this.attendance_date[0] ? moment(this.attendance_date[0]).format("YYYY-MM-DD") : ''
    }
    this.api_calling_Loader = true
    this.isVisible = false
    this.https.pullAttendance(newdata).subscribe((res: any) => {
      if (res?.success) {
        this.attendance_data = res.data
        if (this.attendance_data[0]) {
          this.isAttendanceVisible = true
        } else {
          this.message.success(res.message)
        }
      } else {
        this.message.error(res?.message)
      }
      this.api_calling_Loader = false;
    }, err => {
      this.api_calling_Loader = false;
      this.message.error(err)
    })
  }

  downloadCibilPdf(item){
    let link     = document.createElement('a');
        link.href    = item;
        link.target  = '_blank';
        link.click();
  }
}
