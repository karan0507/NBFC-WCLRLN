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
  isVisible: boolean;
  entityData: any;
  selectedEntity: any;
  selectedTab = 1
  employmentTypeData: any;
  filterArray: any
  underWritingRuleData: any;
  constructor(private fb: FormBuilder, public http: HttpService, private message: NzMessageService,
    private router: Router,
    private route: ActivatedRoute,) { }

  ngOnInit(): void {
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

    this.fetchEmploymentTypeData();
    this.fetchEntityData()
  }
  fetchUnderWritingRule() {
    let data = {
      product_id: this.product_id
    };
    this.http.fetchUnderWritingRule(data).subscribe(res => {
      if (res['data'].underwriting_rules) {
        this.underWritingRuleData = res['data']
        this.createEditFormFuction(this.underWritingRuleData)
      }
    })
  }
  createEditFormFuction(data?) {
    this.createEditForm = this.fb.group({
      blacklist_pincodes: [data ? data.blacklist_pincodes : [], [Validators.required]],
      rules: this.fb.array([]),
    })
    this.setFormData(data)
  }
  setFormData(data) {
    if (data) {
      data.underwriting_rules?.forEach(element => {
        this.selectedTab = element.employment_type.id
        this.addUnderWriting(element, true)
      });
    }
  }
  get rules(): FormArray {
    return <FormArray>this.createEditForm.get('rules');
  }

  addUnderWriting(data: any, value) {
    this.rules.push(this.addSlabControlsUnderWriting(data, value))
  }
  addSlabControlsUnderWriting(data: any, value): FormGroup {
    console.log(data)
    if (data && value) {
      return this.fb.group({
        product: [this.product_id],
        employment_type: [this.selectedTab],
        underwriting_entity: [ data ? data.underwriting_entity.id : ''],
        name: [ data ? data.underwriting_entity.display_name : ''],
        min_label: [ data ? data.underwriting_entity.min_label : ''],
        max_label: [ data ? data.underwriting_entity.max_label : ''],
        min: [ data ? data?.min : '', [Validators.required]],
        max: [ data ? data?.max : '', [Validators.required]],
        id: [data ? data.id : '']
      });
    } else {
      return this.fb.group({
        product: [this.product_id],
        employment_type: [this.selectedTab],
        underwriting_entity: [ data ? data.pk : ''],
        name: [ data ? data.name : ''],
        min_label: [ data ? data.min_label : ''],
        max_label: [ data ? data.max_label : ''],
        min: [ data ? data?.min : '', [Validators.required]],
        max: [ data ? data?.max : '', [Validators.required]],
      });
    }
  }

  submitForm() {
    this.createUnderWritingRule();
  }
  createUnderWritingRule() {
    this.createEditForm.value.rules.forEach(element => {
      element.employment_type = this.selectedTab
    });
    this.http.createUnderWritingRule(this.createEditForm.value).subscribe( res => {
      this.fetchUnderWritingRule()
      this.message.success(res['message'])
    })
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
  
  fetchEntityData() {
    let data;
    this.http.fetchEntity(data).subscribe(res => {
      this.entityData = res['data'].results
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

  addRule() {
    if (this.entityData.includes(this.selectedEntity)) {
      const index = this.entityData.indexOf(this.selectedEntity)
      this.entityData.splice(index,1)
    }
    this.addUnderWriting(this.selectedEntity, false)
    this.isVisible = false
  }

  get_underwritingArr(form) {
    return form.controls.rules.controls;
  }

}
