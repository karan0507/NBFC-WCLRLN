import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { differenceInCalendarDays } from 'date-fns/esm';
import { HttpService } from 'src/app/services/http.service';
import { NzMessageService } from 'ng-zorro-antd/message';
// import {}

@Component({
      selector: 'app-edit-form',
      templateUrl: './edit-form.component.html',
      styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {
      personalDetails: FormGroup;
      employementDetails: FormGroup;
      preApprovedForm: FormGroup;
      documentForm: FormGroup;
      userId: any;
      api_calling_loader = {
            'listLoader': false,
            'accordian': false
      };
      masterIncomeRangeList: any = [];
      partnerList: any = [];
      documentList: any = [];
      today = new Date();
      disabledDate = (current: Date): boolean => {
            // Can not select days before today and today
            return differenceInCalendarDays(current, this.today) > 0;
      };
      constructor(private fb: FormBuilder, public https: HttpService, public route: ActivatedRoute, public router: Router, public datePipe: DatePipe, public message : NzMessageService) { }

      ngOnInit(): void {
            this.route.queryParams.subscribe(params => {
                  if (params['id']) {
                        this.userId = params['id'];
                        this.getFormLoanData();
                  }
            })
            this.personalDetails = this.fb.group(
                  {
                        email: ['', [Validators.required,Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
                        date_of_birth: [null, [Validators.required]],
                        income: [null, [Validators.required]]
                  })

            this.employementDetails = this.fb.group({
                  company_name: [null, [Validators.required]],
                  address: [null, [Validators.required]]
            })
            this.preApprovedForm = this.fb.group({
                  limitProcessed: [null, [Validators.required, Validators.maxLength(6), Validators.min(1)]],
                  product_name: [null, [Validators.required]]
            })

            this.documentForm = this.fb.group({
                  document_name: ['1'],
                  document_name_2: ['1']
            })
            this.fetchMasterIncomeRange();
            this.fetchPartnerList();
      }

      onChange(event) {
            // this.personalDetails.get('date_of_birth').setValue(this.datePipe.transform(event, 'yyyy-MM-dd'))
      }

      resetForm() {
            this.personalDetails.reset();
            this.employementDetails.reset();
            this.preApprovedForm.reset();
      }

      getFormLoanData() {
            this.api_calling_loader['accordian'] = true;
            let data = { 'source': 'Onboarding', 'datapoint': 'get_edit_application', 'endpoint': this.userId };
            this.https.fetchLoanApplicationList(data).subscribe(res => {
                  if (res.success) {
                        this.api_calling_loader['accordian'] = false;
                        this.personalDetails.patchValue({ date_of_birth: res?.data?.dob ? res?.data?.dob : '' });
                        this.personalDetails.patchValue({ email: res?.data?.email ? res?.data?.email : '--' });
                        this.personalDetails.patchValue({ income: res?.data?.income_range ? res?.data?.income_range?.id : '--' });
                        this.employementDetails.patchValue({ address: res?.data?.company_details ? res?.data?.company_details?.address : '' })
                        this.employementDetails.patchValue({ company_name: res?.data?.company_details ? res?.data?.company_details?.id : '' });
                        this.documentList = res?.data?.documents;

                  } else {
                        this.api_calling_loader['accordian'] = false;
                  }

            }, err => {
                  this.api_calling_loader['accordian'] = false;
            })
      }

      submitForm() {
            let data = new FormData();
            this.api_calling_loader['accordian'] = true
            console.log(this.employementDetails.value.company_name);
            data.append('application', this.userId);
            data.append('email', this.personalDetails.value.email);
            data.append('dob', this.datePipe.transform(this.personalDetails.value.date_of_birth, 'yyyy-MM-dd'));
            data.append('income_range', this.personalDetails.value.income);
            data.append('company_id', this.employementDetails.value.company_name);
            data.append('source', 'Onboarding');
            data.append('datapoint', 'edit_application');
            this.https.editLoanData(data).subscribe((res: any) => {
                  if (res?.success) {
                        // this.router.navigateByUrl('/applications/form-filling');
                        this.api_calling_loader['accordian'] = false
                        this.message.success(res?.message)
                        this.router.navigate(['.'], { relativeTo: this.route.parent });
                  } else {
                        // this.router.navigateByUrl('/applications/form-filling')
                        this.api_calling_loader['accordian'] = false
                  }
            })

      }

      fetchMasterIncomeRange() {
            this.https.getMasterIncomeSource().subscribe((res: any) => {
                  if (res?.success) {
                        this.masterIncomeRangeList = res?.data?.results;
                  }
            })
      }

      fetchPartnerList() {
            this.https.fetchPartner().subscribe((res: any) => {
                  if (res?.success) {
                        this.partnerList = res?.data?.results;
                  }
            })
      }

      editCompanyName(value?) {
            let data = this.partnerList.filter(res => res.pk == value);
            console.log(data);
            this.employementDetails.get('address').setValue(data[0]?.address);
      }
}
