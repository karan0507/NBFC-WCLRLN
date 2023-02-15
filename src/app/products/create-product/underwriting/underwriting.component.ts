import { GlobalservicesService } from 'src/app/shared/globalservices.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/services/http.service';
import { NzUploadFile } from 'ng-zorro-antd/upload';

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
  api_calling_loader:boolean = false;
  pincodes : any = [];
  servicePincodes : any = []
  inputVisible = true;
  inputValue = '';
  isPincodeVisible : boolean = false;
  type:any
  searchValue : string;
  isUploadPincodes : boolean = false;
  constructor(private fb: FormBuilder, public http: HttpService, private message: NzMessageService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.fetchEmploymentTypeData();
    this.createEditFormFuction()
    this.route.queryParams.subscribe(params => {
      if (params['id']) {
        this.product_id = params['id']
        if (this.product_id) {
          this.fetchUnderWritingRule()
        }
      } else {
        this.underWritingRuleData = null
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
        } else {
          this.fetchEntityData()
      }
    })
  }

  handleClose(removedTag, type): void {
    if(type == 'negative'){
      this.pincodes.splice(removedTag, 1)
      // this.pincodes = this.pincodes.filter(tag => tag !== removedTag);
    }else if(type == 'service'){
      // this.servicePincodes = this.servicePincodes.filter(tag => tag !== removedTag);
      this.servicePincodes.splice(removedTag, 1)
    }
  }

  handleInputConfirm(type): void {
    if(type == 'negative'){
      if(this.createEditForm.value.inputValue?.length == 6){
        if(!(this.pincodes.includes(this.createEditForm.value.inputValue))){
        this.pincodes.push(this.createEditForm.value.inputValue)
        this.createEditForm.controls['inputValue'].reset()
        }else{
          this.message.warning('Pincode has already been added')
          this.createEditForm.controls['inputValue'].reset()
        }
      }else{
        if(this.createEditForm.value.inputValue){
          this.message.error('Pincode should be 6 digit only')
        }
      }
    }else if(type == 'service'){
      if(this.createEditForm.value.servicable_pincodes?.length == 6){
        if(!(this.servicePincodes.includes(this.createEditForm.value.servicable_pincodes))){
        this.servicePincodes.push(this.createEditForm.value.servicable_pincodes)
        this.createEditForm.controls['servicable_pincodes'].reset()
        }else{
          this.message.warning('Pincode has already been added')
          this.createEditForm.controls['servicable_pincodes'].reset()
        }
      }else{
        if(this.createEditForm.value.servicable_pincodes){
          this.message.error('Pincode should be 6 digit only')
        }
      }
    }
  }

    createEditFormFuction(data?, isedit?) {
    this.createEditForm = this.fb.group({
      inputValue : [null,[Validators.maxLength(6), Validators.minLength(6), Validators.pattern("^[0-9]*$")]],
      blacklist_pincodes: [data ? data.blacklist_pincodes : []],
      servicable_pincodes: [null,[Validators.maxLength(6), Validators.minLength(6), Validators.pattern("^[0-9]*$")]],
      range_entities: this.fb.array([]),
      comparison_entities: this.fb.array([]),
      // validation_entities: this.fb.array([]),
    })
    this.pincodes = data?.blacklist_pincodes ? data.blacklist_pincodes : []
    this.servicePincodes = data?.servicable_pincodes ? data.servicable_pincodes : []
    this.setFormData(isedit ? data.underwriting_rules : data, isedit)
    
    if (this.router.url.includes('view-product')) {
      this.createEditForm.disable()
    }
  }
  setFormData(data, isedit) {
    if (data) {
      data.range_entities?.forEach(element => {
        this.selectedTab = element?.employment_type?.id ? element?.employment_type?.id : this.selectedTab
        this.addUnderWriting(element, isedit)
      });
      data.comparison_entities?.forEach(element => {
        // this.selectedTab = element.employment_type.id
        this.addUnderWritingcomparison_entities(element, isedit)
      });
      // data.validation_entities?.forEach(element => {
      //   // this.selectedTab = element.employment_type.id
      //   this.addUnderWritingvalidation_entities(element, isedit)
      // });
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
    // if ((!this.createEditForm.touched || this.createEditForm.touched) && this.createEditForm.pristine) {
    //   this.message.warning('data saved already')
    //   return false
    // }
    this.createUnderWritingRule();
  }
  createUnderWritingRule() {
    var rule_data = []
    this.createEditForm.value.comparison_entities.forEach(element => {
      element.employment_type = this.selectedTab
      element.product = this.product_id
      rule_data.push(element)
    });
    this.createEditForm.value.range_entities.forEach(element => {
      element.employment_type = this.selectedTab
      element.product = this.product_id
      rule_data.push(element)
    });
    // this.createEditForm.value.validation_entities.forEach(element => {
    //   element.employment_type = this.selectedTab
    //   rule_data.push(element)
    // });
    var form_data = {
      blacklist_pincodes: this.pincodes,
      servicable_pincodes: this.servicePincodes,
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
      console.log(res['data'])
      this.entityData = res['data']
      this.createEditFormFuction(this.entityData, false)
      // this.message.success(res['message'])
    })
  }

  fetchEmploymentTypeData() {
    let data;
    this.http.fetchEmploymentType(data).subscribe(res => {
      console.log(res['data'].results)
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


  handleCancel(){
    this.isPincodeVisible = false;
    this.isUploadPincodes = false;
    this._currentFileName = null;
    this.type = '';
  }

  handleOk(){
    this.api_calling_loader = true;
    let formData = new FormData()
    formData.append('product',this.product_id)
    formData.append('pincode_file', this._currentFileName)
    formData.append('file_type',this.type)
    this.http.uploadPincodes(formData).subscribe((res:any)=>{
      if(res.success){
        this.api_calling_loader = false;
        this.message.success(res.message)
      }else{
        this.api_calling_loader = false;
        this.message.error(res.message)
      }
    })
  }

  exportPincodes(type){
    this.http.exportPincodesType(this.product_id,type).subscribe((res:any)=>{
      if(res){
        const generateloader = this.message.loading('Generating File..', { nzDuration: 0 }).messageId
        this.http.exportMasterSectionModule(res,type,'xlsx',generateloader)
      }
    })
  }
  fileList : any = []
  _currentFileName : any;
  beforeUploadName = (file: NzUploadFile): boolean => {
    this.fileList = [];
    this.fileList = this.fileList.concat(file);
    this._currentFileName = false
    return false;
};
}
