import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { differenceInCalendarDays } from 'date-fns/esm';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/services/http.service';
import * as moment from 'moment';

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
      today = new Date();
      disabledDate = (current: Date): boolean => {
            // Can not select days before today and today
            return differenceInCalendarDays(this.today, current) > 0;
      };
      // Optional Select List 
      partnerList: any = [];
      masterList: any = [];
      productList: any = [];
      productFeesList: any = [];
      isEdit: boolean = false;
      currentCouponId: any;
      couponDetail: any;
      constructor(public https: HttpService, public fb: FormBuilder, public router: Router, public route: ActivatedRoute, public message: NzMessageService) { }

      ngOnInit(): void {

            this.route.queryParams.subscribe((params) => {

                  if (params['id']) {
                        this.isEdit = true;
                        this.currentCouponId = params['id']
                        this.getDetailForCoupon(this.currentCouponId);
                  }
            });
            this.couponForm = this.fb.group({
                  coupon_code: [null, [Validators.required, Validators.pattern("^[a-zA-Z0-9_]*$")]],
                  coupon_type: [1, [Validators.required]],
                  coupon_calculation_type: [1, [Validators.required]],
                  value: [null, [Validators.required, Validators.min(1)]],
                  coupon_expiry: [null, [Validators.required]],
                  total_coupons: [null, [Validators.required, Validators.min(1)]],
                  partner: [],
                  isAllPartner:[],
                  master: [],
                  isAllMaster: [],
                  product: [],
                  product_fees: []
            })
      }

      getDetailForCoupon(currentCouponId) {
            this.api_calling_loader['listLoader'] = true;
            this.https.getCouponDetail(currentCouponId).subscribe((res: any) => {
                  if (res?.success) {
                        this.callMultipleMasters();
                        this.couponDetail = res?.data
                        this.couponForm.get('coupon_code').setValue(this.couponDetail?.coupon_code)
                        this.couponForm.get('value').setValue(this.couponDetail?.value)
                        this.couponForm.get('coupon_calculation_type').setValue(this.couponDetail?.coupon_calculation_type == 'Variable' ? 1 : 2);
                        this.couponForm.get('coupon_type').setValue(this.couponDetail?.coupon_type == 'Fees waiver' ? 1 : 2)
                        this.couponForm.get('coupon_expiry').setValue(this.couponDetail?.coupon_expiry)
                        this.couponForm.get('total_coupons').setValue(this.couponDetail?.total_coupons)
                        this.couponForm.get('partner').setValue(this.couponDetail?.partner ? this.couponDetail?.partner.id : null)
                        this.couponForm.get('isAllPartner').setValue(this.couponDetail?.all_partners ? true : false)
                        this.couponForm.get('master').setValue(this.couponDetail?.master ? this.couponDetail?.master?.id : null)
                        this.couponForm.get('isAllMaster').setValue(this.couponDetail?.all_masters ? true : false)
                        this.couponForm.get('product').setValue(this.couponDetail?.product ? this.couponDetail?.product?.id : null)
                        this.couponForm.get('product_fees').setValue(this.couponDetail?.product_fees ? this.couponDetail?.product_fees?.id : null)
                        this.api_calling_loader['listLoader'] = false;
                  }
            })
           
            
      }

      onFocusMethod(type?) {
            if (type == 'partner') {
                  this.https.fetchPartner().subscribe((res: any) => {
                        if (res) {
                              this.partnerList = res?.data?.results?.filter(res => { if (res?.name) { return res } });
                        }
                  })
            } else if (type == 'master') {
                  this.https.fetchMasterPartner().subscribe((res: any) => {
                        if (res) {
                              this.masterList = res?.data?.results.filter(res => { if (res?.name) { return res } });
                        }
                  })
            } else if (type == 'product') {
                  this.https.getProducts().subscribe((res: any) => {
                        if (res) {
                              this.productList = res?.data?.filter(res => { if (res?.name) { return res } });
                        }
                  })
            } else if (type == 'product-fees') {
                  this.https.getProductWiseFees(this.couponForm.get('product').value).subscribe((res: any) => {
                        if (res) {
                              this.productFeesList = res?.data?.filter(res => { if (res?.name) { return res } });
                        }
                  })
            }
      }

      saveFormData() {
            let data = {
                  'coupon_code': this.couponForm.get('coupon_code').value,
                  'value': this.couponForm.get('value').value,
                  'coupon_calculation_type': this.couponForm.get('coupon_calculation_type').value == 1 ? 'Variable' : 'Flat',
                  'coupon_type': this.couponForm.get('coupon_type').value == 1 ? 'Fees waiver' : 'Promotional',
                  'coupon_expiry': moment(this.couponForm.get('coupon_expiry').value).format("YYYY-MM-DD"),
                  'total_coupons': this.couponForm.get('total_coupons').value,
            }
            if (this.isEdit) {
                  data['id'] = this.couponDetail?.id
            }
            if (this.couponForm.get('isAllPartner').value) {
                  data['all_partners'] = this.couponForm.get('isAllPartner').value

            }else if(this.couponForm.get('partner').value && !this.couponForm.get('isAllPartner').value){
                  data['partner'] = this.couponForm.get('partner').value
            }

            if(this.couponForm.get('isAllMaster').value){
                  data['all_masters'] = this.couponForm.get('isAllMaster').value
            }
            else if (this.couponForm.get('master').value) {
                  data['master'] = this.couponForm.get('master').value
            }

            if (this.couponForm.get('product').value) {
                  data['product'] = this.couponForm.get('product').value
            }
            if (this.couponForm.get('product_fees').value) {
                  data['product_fees'] = this.couponForm.get('product_fees').value
            }
            this.https.addEditCouponCode(data).subscribe((res: any) => {
                  if (res?.success) {
                        this.message.success(res?.message)
                        this.router.navigateByUrl(`/coupon-code`);
                  } else {
                        this.message.error(res?.message)
                  }
            })
      }

      callMultipleMasters() {
            this.https.getProducts().subscribe((res: any) => {
                  if (res) {
                        this.productList = res?.data?.filter(res => { if (res?.name) { return res } });
                  }
            })

            if (this.couponForm?.value?.product ? true : false) {
                  this.https.getProductWiseFees(this.couponForm.get('product').value).subscribe((res: any) => {
                        if (res) {
                              this.productFeesList = res?.data?.filter(res => { if (res?.name) { return res } });
                        }
                  })

            }


            this.https.fetchMasterPartner().subscribe((res: any) => {
                  if (res) {
                        this.masterList = res?.data?.results.filter(res => { if (res?.name) { return res } });
                  }
            })

            this.https.fetchPartner().subscribe((res: any) => {
                  if (res) {
                        this.partnerList = res?.data?.results?.filter(res => { if (res?.name) { return res } });
                  }
            })
      }

}
