import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.css']
})
export class OnboardingComponent implements OnInit {

  createEditForm: FormGroup;
  product_id: any;
  productDetails: any;
  selectedTab = 1
  employmentTypeData: any;
  documentData: any;
  entityData: any;
  productType = [
    {name: 'Fatak Pay', value: 1},
    {name: 'Fatak Pay EMI', value: 2}
  ]
  isRuledAdded: boolean;
  onboardingRuleData: any;
  product_priority_id: any;
  api_calling_loader: boolean;
  loading: boolean;
  thirdPartData: any;
  email_pincode_rules = ''


  constructor(private fb: FormBuilder, public http: HttpService, private message: NzMessageService,
    public router: Router,
    private route: ActivatedRoute,) { }

  ngOnInit(): void {
    // this.createEditFormFuction()
    this.route.queryParams.subscribe(params => {
      if (params['id']) {
        this.product_id = params['id']
        if (this.product_id) {
          this.fetchOnboardingRules()
        }
      } else {
        this.createEditFormFuction()
      }
    });
    this.fetchEmploymentTypeData()
  }

  
  fetchOnboardingRules() {
    let data = {
      product_id: this.product_id
    };
    this.api_calling_loader = true
    this.http.fetchOnboardingRules(data).subscribe(res => {
      if (res['data']) {
        this.onboardingRuleData = res['data']
        this.product_priority_id = this.onboardingRuleData.product_priority[0]?.id
        this.createEditFormFuction(this.onboardingRuleData)
        this.api_calling_loader = false
        if (this.product_priority_id) {
          this.isRuledAdded = true
        }
      }
    }, (err)=> {
      this.api_calling_loader = false
    })
  }

  createEditFormFuction(data?) {
    this.createEditForm = this.fb.group({
      // primary_product: [data ? data?.product_priority[0]?.primary_product?.id: '', [Validators.required]],
      // secondary_product: [data ? data?.product_priority[0]?.secondary_product?.id: '', [Validators.required]],
      // field_rules: this.fb.array([]),
      document_rules: this.fb.array([]),
      document_rules1: this.fb.array([]),
      document_rules2: this.fb.array([]),
      document_rules3: this.fb.array([]),
      third_party_calls: this.fb.array([]),
      aadhar_check: [data ? (data.aadhar_pan_rules ? data.aadhar_pan_rules?.aadhar_check : 'Mandatory') : 'Mandatory'],
      pan_check: [data ? (data.aadhar_pan_rules ? data.aadhar_pan_rules?.pan_check : 'Mandatory') : 'Mandatory'],
      pan_no_document_needed: [data ? (data.aadhar_pan_rules ? data.aadhar_pan_rules?.pan_no_document_needed : false) : false],
      email_check: [data ? (data.email_pincode_rules ? data.email_pincode_rules?.email_check : 'Mandatory') : 'Mandatory'],
      pincode_check: [data ? (data.email_pincode_rules ? data.email_pincode_rules?.pincode_check : 'Mandatory') : 'Mandatory'],
      show_nach_in_onboarding: [data ? data?.show_nach_in_onboarding : true],
      show_ocr: [data ? (data.aadhar_pan_rules ? data.aadhar_pan_rules?.show_ocr : true) : true]
    })
    // if (data?.field_rules[0]) {
    //   data?.field_rules.forEach(element => {
    //     // this.addFieldRules(element, true)  
    //   });
    // } else {
    //   this.fetchEntityData()
    // }
    // if (data?.document_rules[0]) {
    //   data?.document_rules.forEach(element => {
    //     this.addDocumentRules(element, true)  
    //   });

    //   // this.fetchDocumentMaster()
    // } else {
      if (this.product_id) {
        this.fetchDocumentMaster()
      }
    // }
    if (data?.third_party_calls[0]) {
      data?.third_party_calls.forEach(element => {
        this.addThirdParty(element, true)  
      });
    } else {
      this.fetchThirdPartyMaster()
    }
  }
  fetchThirdPartyMaster() {
    let data;
    this.http.fetchThirdPartyMaster(data).subscribe(res => {
      this.thirdPartData = res['data']
      this.thirdPartData.forEach(element => {
        this.addThirdParty(element, false)
      });
      // this.message.success(res['message'])
    })
  }

  get third_party_calls(): FormArray {
    return <FormArray>this.createEditForm.get('third_party_calls');
  }

  addThirdParty(data?, bool?) {
    this.third_party_calls.push(this.addThirdPartyControls(data, bool))
  }

  // get field_rules(): FormArray {
  //   return <FormArray>this.createEditForm.get('field_rules');
  // }

  // addFieldRules(data?, bool?) {
  //   this.field_rules.push(this.addFieldRulesControls(data, bool))
  // }
  public addFieldRulesControls(data, bool): FormGroup {
    if (data && bool) {
      return this.fb.group({
        id: [data.id],
        entity: [data.entity ? data.entity.id : ''],
        label_txt: [data.entity ? data.entity.display_name : ''],
        check_type: [data ? data.check_type : 'Mandatory'],
        employment_type: [data.employment_type ? data.employment_type.id : ''],
      });
    } else {
      return this.fb.group({
        entity: [data ? data.pk :''],
        label_txt: [data ? data.display_name : ''],
        check_type: ['Mandatory'],
        employment_type: [this.selectedTab],
      });
    }
  }
  public addThirdPartyControls(data, bool): FormGroup {
    if (data && bool) {
      return this.fb.group({
        id: [data.id],
        third_party: [data.third_party ? data.third_party.id : ''],
        label_txt: [data.third_party ? data.third_party.name : ''],
        check_type: [data ? data.check_type : 'Mandatory'],
      });
    } else {
      return this.fb.group({
        third_party: [data ? data.id :''],
        label_txt: [data ? data.name : ''],
        check_type: ['Mandatory'],
      });
    }
  }

  get document_rules(): FormArray {
    return <FormArray>this.createEditForm.get('document_rules');
  }
  get document_rules1(): FormArray {
    return <FormArray>this.createEditForm.get('document_rules1');
  }
  get document_rules2(): FormArray {
    return <FormArray>this.createEditForm.get('document_rules2');
  }
  get document_rules3(): FormArray {
    return <FormArray>this.createEditForm.get('document_rules3');
  }

  addDocumentRules(data?) {
    this.document_rules.push(this.addDocumentRulesControls(data))
  }
  addDocumentRules1(data?) {
    this.document_rules1.push(this.addDocumentRulesControls1(data))
  }
  addDocumentRules2(data?) {
    this.document_rules2.push(this.addDocumentRulesControls2(data))
  }
  addDocumentRules3(data?) {
    this.document_rules3.push(this.addDocumentRulesControls3(data))
  }
  public addDocumentRulesControls(data): FormGroup {
    if (data.id) {
      return this.fb.group({
        id: [data.id],
        document: [data?.product_document_data?.document__id ? data?.product_document_data?.document__id : ''],
        label_txt: [data.name ? data.name : ''],
        check_type: [data.product_document_data ? data.product_document_data.check_type : 'Mandatory'],
        employment_type: [data.product_document_data ? data.product_document_data.employment_type__id : ''],
      });
    } else {
      return this.fb.group({
        document: [data?.product_document_data?.document__id],
        label_txt: [data.name],
        check_type: [''],
        employment_type: [''],
      });
    }
  }
  public addDocumentRulesControls1(data): FormGroup {
    if (data.id) {
      return this.fb.group({
        id: [data.id],
        document: [data?.product_document_data?.document__id ? data?.product_document_data?.document__id : ''],
        label_txt: [data.name ? data.name : ''],
        check_type: [data.product_document_data ? data.product_document_data.check_type : 'Mandatory'],
        employment_type: [data.product_document_data ? data.product_document_data.employment_type__id : ''],
      });
    } else {
      return this.fb.group({
        document: [data?.product_document_data?.document__id],
        label_txt: [data.name],
        check_type: [''],
        employment_type: [''],
      });
    }
  }
  public addDocumentRulesControls2(data): FormGroup {
    if (data.id) {
      return this.fb.group({
        id: [data.id],
        document: [data?.product_document_data?.document__id ? data?.product_document_data?.document__id : ''],
        label_txt: [data.name ? data.name : ''],
        check_type: [data.product_document_data ? data.product_document_data.check_type : 'Mandatory'],
        employment_type: [data.product_document_data ? data.product_document_data.employment_type__id : ''],
      });
    } else {
      return this.fb.group({
        document: [data?.product_document_data?.document__id],
        label_txt: [data.name],
        check_type: [''],
        employment_type: [''],
      });
    }
  }
  public addDocumentRulesControls3(data): FormGroup {
    if (data.id) {
      return this.fb.group({
        id: [data.id],
        document: [data?.product_document_data?.document__id ? data?.product_document_data?.document__id : ''],
        label_txt: [data.name ? data.name : ''],
        check_type: [data.product_document_data ? data.product_document_data.check_type : 'Mandatory'],
        employment_type: [data.product_document_data ? data.product_document_data.employment_type__id : ''],
      });
    } else {
      return this.fb.group({
        document: [data?.product_document_data?.document__id],
        label_txt: [data.name],
        check_type: [''],
        employment_type: [''],
      });
    }
  }

  fetchEmploymentTypeData() {
    let data;
    this.http.fetchEmploymentType(data).subscribe(res => {
      this.employmentTypeData = res['data'].results
      // this.message.success(res['message'])
    })
  }
  fetchDocumentMaster() {
    let data;
    this.http.fetchAllDocumentRules(this.product_id).subscribe(res => {
      this.documentData = res['data']      
      this.documentData['Address Proof'].forEach(element => {
        this.addDocumentRules(element)
      });
      this.documentData['Identity Proof'].forEach(element => {
        this.addDocumentRules1(element)
      });
      this.documentData['Income Proof'].forEach(element => {
        this.addDocumentRules2(element)
      });
      this.documentData['Nationality Proof'].forEach(element => {
        this.addDocumentRules3(element)
      });
      // this.message.success(res['message'])
    })
  }

  fetchEntityData() {
    let data;
    this.http.fetchEntity(data).subscribe(res => {
      this.entityData = res['data'].results
      this.entityData.forEach(element => {
        // this.addFieldRules(element, false)
      });
      // this.message.success(res['message'])
    })
  }

  // get_field_rules(form) {
  //   return form.controls.field_rules.controls;
  // }

  get_Third_party(form) {
    return form.controls.third_party_calls.controls;
  }

  get_document_rules(form) {
    return form.controls.document_rules.controls;
  }
  get_document_rules1(form) {
    return form.controls.document_rules1.controls;
  }
  get_document_rules2(form) {
    return form.controls.document_rules2.controls;
  }
  get_document_rules3(form) {
    return form.controls.document_rules3.controls;
  }

  submitForm() {
    if ((!this.createEditForm.touched || this.createEditForm.touched) && this.createEditForm.pristine && this.isRuledAdded) {
      this.message.warning('data saved already')
      return false
    }
    // this.createEditForm.value.field_rules.forEach(element => {
    //   element.employment_type = this.selectedTab
    // });
    let product_priority;
    if (this.product_priority_id) {
      product_priority = [
        {
          id: this.product_priority_id,
          // primary_product: this.createEditForm.value.primary_product,
          // secondary_product: this.createEditForm.value.secondary_product,
          employment_type: this.selectedTab,
        }
      ];
    } else {
      product_priority = [
        {
          // primary_product: this.createEditForm.value.primary_product,
          // secondary_product: this.createEditForm.value.secondary_product,
          employment_type: this.selectedTab,
        }
      ];
    }
    var aadhar_pan_rules;
    var email_pincode_rules;
    if (this.onboardingRuleData?.aadhar_pan_rules) {
      aadhar_pan_rules = {
        id: this.onboardingRuleData?.aadhar_pan_rules.id,
        aadhar_check : this.createEditForm.value.aadhar_check,
        pan_check: this.createEditForm.value.pan_check,
        pan_no_document_needed: this.createEditForm.value.pan_no_document_needed,
        employment_type: this.selectedTab,
        show_ocr: this.createEditForm.value.show_ocr
      }
    } else {
      aadhar_pan_rules = {
        aadhar_check : this.createEditForm.value.aadhar_check,
        pan_check: this.createEditForm.value.pan_check,
        pan_no_document_needed: this.createEditForm.value.pan_no_document_needed,
        employment_type: this.selectedTab,
        show_ocr: this.createEditForm.value.show_ocr
      }
    }
    if (this.onboardingRuleData?.email_pincode_rules) {
      email_pincode_rules = {
        employment_type: this.selectedTab,
        email_check: this.createEditForm.value.email_check,
        pincode_check: this.createEditForm.value.pincode_check,
        id: this.onboardingRuleData?.email_pincode_rules.id,
      }
    } else {
      email_pincode_rules = {
        employment_type: this.selectedTab,
        email_check: this.createEditForm.value.email_check,
        pincode_check: this.createEditForm.value.pincode_check,
      }
    }
    let document_rules = []
    this.createEditForm.value.document_rules.forEach(element => {
      element.employment_type = this.selectedTab
      document_rules.push(element)
    });
    this.createEditForm.value.document_rules1.forEach(element => {
      element.employment_type = this.selectedTab
      document_rules.push(element)
    });
    this.createEditForm.value.document_rules2.forEach(element => {
      element.employment_type = this.selectedTab
      document_rules.push(element)
    });
    this.createEditForm.value.document_rules3.forEach(element => {
      element.employment_type = this.selectedTab
      document_rules.push(element)
    });
    let data = {
      // product_priority : product_priority,
      // field_rules : this.createEditForm.value.field_rules,
      document_rules: document_rules,
      third_party_calls: this.createEditForm.value.third_party_calls,
      aadhar_pan_rules: aadhar_pan_rules,
      email_pincode_rules: email_pincode_rules,
      show_nach_in_onboarding: this.createEditForm.value.show_nach_in_onboarding
    }
    console.log(data)
    // return;
    if (this.isRuledAdded) {
      this.editOnboardingRules(data);
    } else {
      this.createOnboardingRules(data);
    }
    // this.createProductDetail();
  }
  editOnboardingRules(data) {
    this.loading = true
    this.http.editOnboardingRules(data, this.product_id).subscribe(res => {
      this.loading = false
      this.message.success(res['message'])
      this.fetchOnboardingRules()
    }, (err) => {
      this.loading = false
    })
  }
  createOnboardingRules(data) {
    this.loading = true
    this.http.createOnboardingRules(data, this.product_id).subscribe(res => {
      this.loading = false
      this.isRuledAdded = true;
      this.fetchOnboardingRules()
      this.message.success(res['message'])
    }, (err) => {
      this.loading = false
    })
  }
  

}
