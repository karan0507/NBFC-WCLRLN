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
      third_party_calls: this.fb.array([])
    })
    // if (data?.field_rules[0]) {
    //   data?.field_rules.forEach(element => {
    //     // this.addFieldRules(element, true)  
    //   });
    // } else {
    //   this.fetchEntityData()
    // }
    if (data?.document_rules[0]) {
      data?.document_rules.forEach(element => {
        this.addDocumentRules(element, true)  
      });
    } else {
      this.fetchDocumentMaster()
    }
    // if (data?.document_rules[0]) {
    //   data?.document_rules.forEach(element => {
    //     this.addDocumentRules(element, true)  
    //   });
    // } else {
      this.fetchThirdPartyMaster()
    // }
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

  addDocumentRules(data?, bool?) {
    this.document_rules.push(this.addDocumentRulesControls(data, bool))
  }
  public addDocumentRulesControls(data, bool?): FormGroup {
    if (data && bool) {
      return this.fb.group({
        id: [data.id],
        document: [data.document ? data.document.id : ''],
        label_txt: [data.document ? data.document.name : ''],
        check_type: [data ? data.check_type : 'Mandatory'],
        employment_type: [data.employment_type ? data.employment_type.id : ''],
      });
    } else {
      return this.fb.group({
        document: [data.pk],
        label_txt: [data.name],
        check_type: ['Mandatory'],
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
    this.http.fetchDocumentMaster(data).subscribe(res => {
      this.documentData = res['data'].results
      this.documentData.forEach(element => {
        this.addDocumentRules(element, false)
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

  submitForm() {
    this.createEditForm.value.document_rules.forEach(element => {
      element.employment_type = this.selectedTab
    });
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
    let data = {
      // product_priority : product_priority,
      // field_rules : this.createEditForm.value.field_rules,
      document_rules: this.createEditForm.value.document_rules,
      third_party_calls: this.createEditForm.value.third_party_calls
    }
    
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
