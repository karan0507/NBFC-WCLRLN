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
      api_calling_loader = {
            'listLoader': false,
      }
      // disabledDate = (current: Date): boolean => {

      //       return differenceInCalendarDays(current,) > 0;
      //     };
      // Optional Select List 
      partnerList: any = [];
      masterList: any = [];
      productList: any = [];
      productFeesList: any = [];
      isEdit: boolean = false;
      currentCouponId: any;
      couponDetail: any;
      constructor(public https: HttpService, public fb: FormBuilder, public router: Router, public route: ActivatedRoute) { }

      ngOnInit(): void {

            this.route.queryParams.subscribe((params) => {

                  if (params['id']) {
                        this.isEdit = true;
                        this.currentCouponId = params['id']
                        this.getDetailForCoupon(this.currentCouponId);
                  }
            });
            this.couponForm = this.fb.group({
                  coupon_code: [null, [Validators.required]],
                  coupon_type: [1, [Validators.required]],
                  coupon_calculation_type: [1, [Validators.required]],
                  value: [null, [Validators.required, Validators.min(1)]],
                  coupon_expiry: [null, [Validators.required]],
                  total_coupons: [null, [Validators.required, Validators.min(1)]],
                  partner: [],
                  master: [],
                  product: [],
                  product_fees: []
            })
      }

      getDetailForCoupon(currentCouponId) {
            this.api_calling_loader['listLoader'] = true;
            this.https.getCouponDetail(currentCouponId).subscribe((res: any) => {
                  if (res?.success) {
                        this.couponDetail = res?.data
                        this.couponForm.get('coupon_code').setValue(this.couponDetail?.coupon_code)
                        this.couponForm.get('value').setValue(this.couponDetail?.value)
                        this.couponForm.get('coupon_calculation_type').setValue(this.couponDetail?.coupon_calculation_type == 'Variable' ? 1 : 2);
                        this.couponForm.get('coupon_type').setValue(this.couponDetail?.coupon_type == 'Fees waiver' ? 1 : 2)
                        this.couponForm.get('coupon_expiry').setValue(this.couponDetail?.coupon_expiry)
                        this.couponForm.get('total_coupons').setValue(this.couponDetail?.total_coupons)
                        this.couponForm.get('partner').setValue(this.couponDetail?.partner ? this.couponDetail?.partner.id : null)
                        this.couponForm.get('master').setValue(this.couponDetail?.master ? this.couponDetail?.master?.id : null)
                        this.couponForm.get('product').setValue(this.couponDetail?.product ? this.couponDetail?.product?.id : null)
                        this.couponForm.get('product_fees').setValue(this.couponDetail?.product_fees ? this.couponDetail?.product_fees?.id : null)
                        this.callMultipleMasters();
                        this.api_calling_loader['listLoader'] = false;
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
            if (this.couponForm.valid) {
                  if(this.couponForm.get('coupon_calculation_type').value == 1){
                        this.couponForm.get('coupon_calculation_type').setValue('Variable');
                  }else{
                        this.couponForm.get('coupon_calculation_type').setValue('Flat')
                  }
                  if(this.couponForm.get('coupon_type').value == 1){
                        this.couponForm.get('coupon_type').setValue('Fees waiver')
                  }else{
                        this.couponForm.get('coupon_type').setValue('Promotional')
                  }
                  console.log('you are about to call API', this.couponForm.value);
                  // this.https.addEditCouponCode().subscribe((res: any) => {

                  // })
            }
      }

      callMultipleMasters() {
            console.log(this.couponForm?.get('product')?.value);
            this.https.getAllProducts().subscribe((res: any) => {
                  if (res) {
                        this.productList = res?.data?.filter(res => { if (res?.name) { return res } });
                        console.log('Product List=>', this.productList);
                  }
            })

            if (this.couponForm?.value?.product ? true : false) {
                  this.https.getProductWiseFees(this.couponForm.get('product').value).subscribe((res: any) => {
                        if (res) {
                              this.productFeesList = res?.data?.filter(res => { if (res?.name) { return res } });
                              console.log('ProductFees List=>', this.productFeesList);
                        }
                  })

            }


            this.https.fetchMasterPartner().subscribe((res: any) => {
                  if (res) {
                        this.masterList = res?.data?.results.filter(res => { if (res?.name) { return res } });
                        console.log('Master List=>', this.masterList);
                  }
            })

            this.https.fetchPartner().subscribe((res: any) => {
                  if (res) {
                        this.partnerList = res?.data?.results?.filter(res => { if (res?.name) { return res } });
                        console.log('Partern List=>', this.partnerList);
                  }
            })
      }
}
