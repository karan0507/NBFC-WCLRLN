import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { differenceInCalendarDays } from 'date-fns/esm';
import { HttpService } from 'src/app/services/http.service';

@Component({
      selector: 'app-add-edit-coupon-code',
      templateUrl: './add-edit-coupon-code.component.html',
      styleUrls: ['./add-edit-coupon-code.component.css']
})
export class AddEditCouponCodeComponent implements OnInit {
      couponForm: FormGroup
      // disabledDate = (current: Date): boolean => {

      //       return differenceInCalendarDays(current,) > 0;
      //     };
      // Optional Select List 
      partnerList: any = [];
      masterList: any = [];
      productList: any = [];
      productFeesList: any = [];
      isEdit: boolean = false;
      currentCouponId : any;
      constructor(public https: HttpService, public fb: FormBuilder, public router: Router, public route: ActivatedRoute) { }

      ngOnInit(): void {

            this.route.queryParams.subscribe((params) => {

                  if (params['id']) {
                        this.isEdit = true;
                        this.currentCouponId = params['id']
                        this.getDetailForCoupon( this.currentCouponId)
                  }
            });
            this.couponForm = this.fb.group({
                  coupon_code: [null, [Validators.required]],
                  coupon_type: [1, [Validators.required]],
                  coupon_calculation_type: [1, [Validators.required]],
                  value: [null, [Validators.required]],
                  coupon_expiry: [null, [Validators.required]],
                  total_coupons: [null, [Validators.required]],
                  partner: [],
                  master: [],
                  product: [],
                  product_fees: []
            })
      }

      getDetailForCoupon(currentCouponId){
            let param = { keyword: 'ABC' }
            this.https.getCouponCodeList(param).subscribe((res: any) => {
                  if (res?.success) {
                        console.log(res?.data);
                  } 
            })
      }

      onFocusMethod(type?) {
            if (type == 'partner') {
                  this.https.fetchPartner().subscribe((res: any) => {
                        if (res) {
                              this.partnerList = res?.data?.results?.filter(res => { if (res?.name) { return res } });
                              console.log('Partern List=>', this.partnerList);

                        }
                  })
            } else if (type == 'master') {
                  this.https.fetchMasterPartner().subscribe((res: any) => {
                        if (res) {
                              this.masterList = res?.data?.results.filter(res => { if (res?.name) { return res } });
                              console.log('Master List=>', this.masterList);

                        }
                  })
            } else if (type == 'product') {
                  this.https.getAllProducts().subscribe((res: any) => {
                        if (res) {
                              this.productList = res?.data?.filter(res => { if (res?.name) { return res } });
                              console.log('Product List=>', this.productList);
                        }
                  })
            } else if (type == 'product-fees') {
                  this.https.getProductWiseFees(this.couponForm.get('product').value).subscribe((res: any) => {
                        if (res) {
                              this.productFeesList = res?.data?.filter(res => { if (res?.name) { return res } });
                              console.log('ProductFees List=>', this.productFeesList);
                        }
                  })
            }
      }

      saveFormData() {
            this.couponForm.valid
      }
}
