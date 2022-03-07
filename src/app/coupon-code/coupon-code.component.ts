import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';


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
      constructor(public https: HttpService) { }

      ngOnInit(): void {
            this.getCouponCodeList();
      }

      getCouponCodeList() {
            this.api_calling_loader['listLoader'] = true;
            let param = {  }
            this.https.getCouponCodeList(param).subscribe((res: any) => {
                  if (res?.success) {
                        console.log(res?.data);
                        this.couponCodeListData = res?.data?.results
                        this.api_calling_loader['listLoader'] = false;

                  } else {
                        this.api_calling_loader['listLoader'] = false;

                  }
            })
      }

      onCurrentPageDataChange(value) {

      }

      addNewCouponCode() {

      }
}