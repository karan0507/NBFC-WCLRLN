import { Component, Input, OnInit } from '@angular/core';
import { formatDistance } from 'date-fns';
import * as moment from 'moment';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/services/http.service';
import { GlobalservicesService } from '../../globalservices.service';

@Component({
  selector: 'app-audit-history',
  templateUrl: './audit-history.component.html',
  styleUrls: ['./audit-history.component.css']
})
export class AuditHistoryComponent implements OnInit {
  
  @Input() endpoint: any;
  @Input() endpoint_id: any;
  history_data: any;
  loading: boolean;

  constructor(public https: HttpService, public message: NzMessageService, public global: GlobalservicesService) {
    
   }

  ngOnInit(): void {
    this.fetchAuditHistory()
  }

  fetchAuditHistory() {
    // if(this.endpoint == 'Product') {
    //   let data = {
    //     id: this.endpoint_id
    //   }
    //   this.https.fetchProductAuditLog(data).subscribe( res => {
    //     if (res['success']) {
    //       this.history_data = res['data']
    //     } else {
  
    //     }
    //   }, err => {
  
    //   })
    // } else 
    if(this.endpoint == 'LoanApplication') {
      let data = {
        source: 'Onboarding',
        datapoint: 'history_audit_logs',
        endpoint: this.endpoint,
        id: this.endpoint_id
      }
      this.loading = true
      this.https.fetchLoanApplicationList(data).subscribe( res => {
        if (res?.success) {
          this.history_data = res.data
          this.loading = false
        } else {
          this.loading = false
  
        }
      }, err => {
  
      })
    } else {
      this.loading = true
      let data = {
        id: this.endpoint_id
      }
      this.https.fetchProductAuditLog(data, this.endpoint).subscribe( res => {
        if (res['success']) {
          this.history_data = res['data']
        } else {
  
        }
        this.loading = false
      }, err => {
  
      })
    }
  }

  getFormatedDate(date) {
    var formatted_date = formatDistance(new Date(), new Date(date))
    return formatted_date;
  }

  checkIfdateorString(data) {
    var formatted_value: any
    if ((data % 1) === 0) {
      // data is an integer
      formatted_value = data
    }
    else {
      if (moment(data).isValid()) { formatted_value = moment(data).format("MMM DD, yyyy") + ' ' + moment(data).format("hh:mm:ss A") }
      else { formatted_value = data }
    }
    return formatted_value;
  }

}
