import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { GlobalservicesService } from '../shared/globalservices.service';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-sms-services',
  templateUrl: './sms-services.component.html',
  styleUrls: ['./sms-services.component.css']
})
export class SmsServicesComponent implements OnInit {
  selectedTab = 'sms'

  notificationTypeListData: any = [];
  api_calling_loader = {
    'listLoader': false
  }
  filters: any;
  searchValue: any;
  page = 1
  globalPageSize = 100
  total_count: any;
  constructor(public https: HttpService, public global: GlobalservicesService, private modal: NzModalService) { }

  ngOnInit(): void {
    this.getMasterNotificationType()
  }

  getMasterNotificationType(tableFilter?) {
    this.notificationTypeListData = []
    this.api_calling_loader['listLoader'] = true;
    let param = new FormData()

    if (this.filters) {
      param['status'] = this.filters == 1 ? 'active' : 'inactive';
    }
    if (this.searchValue) {
      param['keyword'] = this.searchValue
    }
    if (tableFilter) {
      this.page = tableFilter?.pageIndex
      this.globalPageSize = tableFilter?.pageSize
      param['page'] = tableFilter?.pageIndex
      param['limit'] = tableFilter?.pageSize
    } else {
      param['page'] = this.page
      param['limit'] = this.globalPageSize
    }
    this.https.getMasterNotificationType(param).subscribe((res: any) => {
      if (res?.success) {
        this.total_count = res?.data?.total_count;
        this.notificationTypeListData = res?.data?.results
        this.api_calling_loader['listLoader'] = false;
      } else {
        this.api_calling_loader['listLoader'] = false;
      }
    }, err => {
      this.api_calling_loader['listLoader'] = false;
    })
  }


  changeServices(index, section) {
    if (section == 1) {
      this.notificationTypeListData[index].ics_flag = false
      this.notificationTypeListData[index].gupshup_flag = true
    } else if (section == 2) {
      this.notificationTypeListData[index].ics_flag = true
      this.notificationTypeListData[index].gupshup_flag = false
    }

    this.modal.confirm({
      nzTitle: '<i>Do you Want to change to service?</i>',
      nzOnOk: () => this.changeNotificationFlag(this.notificationTypeListData[index], section),
      nzOnCancel: () => this.resetServiceChange(index, section),
      nzOkText: 'Yes',
      nzCancelText: 'No'
    });
  }

  resetServiceChange(index, section) {
    if (section == 1) {
      this.notificationTypeListData[index].gupshup_flag = !this.notificationTypeListData[index].gupshup_flag
      this.notificationTypeListData[index].ics_flag = !this.notificationTypeListData[index].gupshup_flag
    } else if (section == 2) {
      this.notificationTypeListData[index].ics_flag = !this.notificationTypeListData[index].ics_flag
      this.notificationTypeListData[index].gupshup_flag = !this.notificationTypeListData[index].ics_flag
    }
  }
  replace(str) {
    return str.replaceAll('\\n', '<br>')
  }


  changeNotificationFlag(data, section) {
    if (section == 3) {
      data.is_deleted = !data.is_deleted
    }
    this.api_calling_loader['listLoader'] = true;
    this.https.changeNotificationFlag(data).subscribe((res: any) => {
      if (res?.success) {
        this.getMasterNotificationType()
      } else {
        this.api_calling_loader['listLoader'] = false;
      }
    }, err => {
      this.api_calling_loader['listLoader'] = false;
    })
  }

}
