import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { GlobalservicesService } from '../shared/globalservices.service';


@Component({
      selector: 'app-coupon-code',
      templateUrl: './coupon-code.component.html',
      styleUrls: ['./coupon-code.component.css']
})
export class CouponCodeComponent implements OnInit {
      api_calling_loader = {
            'listLoader': false
      }
      // CouponCode List var
      couponCodeListData: any = [];
      filters: any;
      searchValue: any;
      page = 1
      globalPageSize
      total_count: any;
      isActive: any;
      constructor(public https: HttpService, public global: GlobalservicesService) { }

      ngOnInit(): void {
            this.page = 1;
            this.globalPageSize = this.global.globalPageSize;
            this.getCouponCodeList();
      }

      getCouponCodeList(tableFilter?) {
            this.couponCodeListData = []
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
            this.https.getCouponCodeList(param).subscribe((res: any) => {
                  if (res?.success) {
                        this.total_count = res?.data?.total_count;
                        this.couponCodeListData = res?.data?.results
                        this.api_calling_loader['listLoader'] = false;
                  } else {
                        this.api_calling_loader['listLoader'] = false;
                  }
            }, err => {
                  this.api_calling_loader['listLoader'] = false;
            })
      }

      onCurrentPageDataChange(value) {

      }

      addNewCouponCode() {

      }

      resetFilters() {
            this.filters = null;
            this.searchValue = null;
            this.getCouponCodeList()
      }

      couponSwitch(data) {
            if (data?.id) {
                  let formData = new FormData()
                  this.https.couponStatusChange(data?.id, formData).subscribe((res: any) => {
                        if (res.success) {
                              this.getCouponCodeList();
                        }
                  })
            }

      }
}