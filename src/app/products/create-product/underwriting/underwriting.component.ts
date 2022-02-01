import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-underwriting',
  templateUrl: './underwriting.component.html',
  styleUrls: ['./underwriting.component.css']
})
export class UnderwritingComponent implements OnInit {

  createEditForm: FormGroup;
  product_id: any;
  @Input() productDetails: any;
  // isVisible: boolean;
  entityData: any;
  selectedEntity: any;
  selectedTab = 1
  employmentTypeData: any;
  filterArray: any
  underWritingRuleData: any;
  loading: boolean;
  constructor(private fb: FormBuilder, public http: HttpService, private message: NzMessageService,
    private router: Router,
    private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.fetchEmploymentTypeData();
    this.fetchEntityData()
    this.createEditFormFuction()
    this.route.queryParams.subscribe(params => {
      if (params['id']) {
        this.product_id = params['id']
        if (this.product_id) {
          this.fetchUnderWritingRule()
        }
      } else {
        this.underWritingRuleData = null
        this.createEditFormFuction()
      }
    });

  }
  fetchUnderWritingRule() {
    let data = {
      product_id: this.product_id
    };
    this.http.fetchUnderWritingRule(data).subscribe(res => {
      // if (res['data'].results) {
        if (res['data']) {
          this.underWritingRuleData = res['data']
          this.createEditFormFuction(this.underWritingRuleData, true)
        }
      // } else {
        
      // }
    })
  }
  createEditFormFuction(data?, isedit?) {
    this.createEditForm = this.fb.group({
      blacklist_pincodes: [data ? data.blacklist_pincodes : [], [Validators.required]],
      servicable_pincodes: [data ? data.servicable_pincodes : [], [Validators.required]],
      range_entities: this.fb.array([]),
      comparison_entities: this.fb.array([]),
      validation_entities: this.fb.array([]),
    })
    this.setFormData(isedit ? data.underwriting_rules : data, isedit)
    
    if (this.router.url.includes('view-product')) {
      this.createEditForm.disable()
    }
  }
  setFormData(data, isedit) {
    if (data) {
      data.range_entities?.forEach(element => {
        // this.selectedTab = element.employment_type.id
        this.addUnderWriting(element, isedit)
      });
      data.comparison_entities?.forEach(element => {
        // this.selectedTab = element.employment_type.id
        this.addUnderWritingcomparison_entities(element, isedit)
      });
      data.validation_entities?.forEach(element => {
        // this.selectedTab = element.employment_type.id
        this.addUnderWritingvalidation_entities(element, isedit)
      });
    }
  }
  get range_entities(): FormArray {
    return <FormArray>this.createEditForm.get('range_entities');
  }
  get validation_entities(): FormArray {
    return <FormArray>this.createEditForm.get('validation_entities');
  }
  get comparison_entities(): FormArray {
    return <FormArray>this.createEditForm.get('comparison_entities');
  }

  addUnderWriting(data: any, value) {
    this.range_entities.push(this.addSlabControlsUnderWriting(data, value))
  }
  addUnderWritingvalidation_entities(data: any, value) {
    this.validation_entities.push(this.addSlabControlsUnderWritingvalidation_entities(data, value))
  }
  addUnderWritingcomparison_entities(data: any, value) {
    this.comparison_entities.push(this.addSlabControlsUnderWritingcomparison_entities(data, value))
  }
  addSlabControlsUnderWriting(data: any, value): FormGroup {
    if (data && value) {
      return this.fb.group({
        product: [this.product_id],
        employment_type: [ data ? data.employment_type?.id : this.selectedTab],
        underwriting_entity: [ data ? data?.underwriting_entity?.id : ''],
        name: [ data ? data.underwriting_entity?.display_name : ''],
        min_label: [ data ? data.underwriting_entity?.min_label : ''],
        max_label: [ data ? data.underwriting_entity?.max_label : ''],
        min: [ data ? data?.min : '', [Validators.required]],
        max: [ data ? data?.max : '', [Validators.required]],
        id: [data ? data.id : '']
      });
    } else {
      return this.fb.group({
        product: [this.product_id],
        employment_type: [this.selectedTab],
        underwriting_entity: [ data ? data.id : ''],
        name: [ data ? data.display_name : ''],
        min_label: [ data ? data.min_label : ''],
        max_label: [ data ? data.max_label : ''],
        min: [ data ? data?.min : '', [Validators.required]],
        max: [ data ? data?.max : '', [Validators.required]],
      });
    }
  }
  addSlabControlsUnderWritingvalidation_entities(data: any, value): FormGroup {
    if (data && value) {
      return this.fb.group({
        product: [this.product_id],
        employment_type: [ data ? data.employment_type?.id : this.selectedTab],
        underwriting_entity: [ data ? data?.underwriting_entity?.id : ''],
        name: [ data ? data.underwriting_entity?.display_name : ''],
        value: [ data ? data.value : 'Yes', [Validators.required]],
        id: [data ? data.id : '']
      });
    } else {
      return this.fb.group({
        product: [this.product_id],
        employment_type: [this.selectedTab],
        underwriting_entity: [ data ? data.id : ''],
        name: [ data ? data.display_name : ''],
        value: [ 'Yes', [Validators.required]],
      });
    }
  }
  addSlabControlsUnderWritingcomparison_entities(data: any, value): FormGroup {
    if (data && value) {
      return this.fb.group({
        product: [this.product_id],
        employment_type: [ data ? data.employment_type?.id : this.selectedTab],
        underwriting_entity: [ data ? data?.underwriting_entity?.id : ''],
        name: [ data ? data.underwriting_entity?.display_name : ''],
        comparison_operator: [data ? data.underwriting_entity?.comparison_operator : ''],
        value: [ data ? data.value : '', [Validators.required]],
        id: [data ? data.id : '']
      });
    } else {
      return this.fb.group({
        product: [this.product_id],
        employment_type: [this.selectedTab],
        underwriting_entity: [ data ? data.id : ''],
        name: [ data ? data.display_name : ''],
        comparison_operator: [data ? data.comparison_operator : ''],
        value: [ '', [Validators.required]],
      });
    }
  }
  submitForm() {
    this.createUnderWritingRule();
  }
  createUnderWritingRule() {
    var rule_data = []
    this.createEditForm.value.comparison_entities.forEach(element => {
      element.employment_type = this.selectedTab
      rule_data.push(element)
    });
    this.createEditForm.value.range_entities.forEach(element => {
      element.employment_type = this.selectedTab
      rule_data.push(element)
    });
    this.createEditForm.value.validation_entities.forEach(element => {
      element.employment_type = this.selectedTab
      rule_data.push(element)
    });
    var form_data = {
      blacklist_pincodes: this.createEditForm.value.blacklist_pincodes,
      servicable_pincodes: this.createEditForm.value.servicable_pincodes,
      rules: rule_data
    }
    console.log(form_data);
    this.loading = true
    this.http.createUnderWritingRule(form_data).subscribe( res => {
      this.loading = false
      this.fetchUnderWritingRule()
      this.message.success(res['message'])
    }, (err) => {
      this.loading = false
    })
  }

  // handleCancel(): void {
  //   this.isVisible = false;
  // }
  
  fetchEntityData() {
    let data;
    this.http.fetchUnderWritingSpecificEntity().subscribe(res => {
      this.entityData = res['data']
      this.createEditFormFuction(this.entityData, false)
      // this.message.success(res['message'])
    })
  }

  fetchEmploymentTypeData() {
    let data;
    this.http.fetchEmploymentType(data).subscribe(res => {
      this.employmentTypeData = res['data'].results
      // this.message.success(res['message'])
    })
  }

  // addRule() {
  //   if (this.entityData.includes(this.selectedEntity)) {
  //     const index = this.entityData.indexOf(this.selectedEntity)
  //     this.entityData.splice(index,1)
  //   }
  //   this.addUnderWriting(this.selectedEntity, false)
  //   this.isVisible = false
  // }

  get_underwritingArr(form) {
    return form.controls.range_entities.controls;
  }
  get_underwritingvalidation_entitiesArr(form) {
    return form.controls.validation_entities.controls;
  }
  get_underwritingcomparison_entitiesArr(form) {
    return form.controls.comparison_entities.controls;
  }

}
