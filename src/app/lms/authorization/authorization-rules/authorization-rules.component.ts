import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-authorization-rules',
  templateUrl: './authorization-rules.component.html',
  styleUrls: ['./authorization-rules.component.css']
})
export class AuthorizationRulesComponent implements OnInit {

  apiLoader = {
    'list': false,
    'onOk': false
  };
  isVisible: boolean;
  page = 1;

  total_count;
  authorizationRulesList: any;
  oldDetail: any;
  updateRuleDetails!: FormGroup

  constructor(private fb: FormBuilder,private http: HttpService, private message: NzMessageService) { }

  ngOnInit(): void {
    this.getAuthorizationList();
    this.createRulesForm();
  }

  storeFormData
  createRulesForm(){
    this.updateRuleDetails = this.fb.group({
      source : [null],
      datapoint : [null],
      endpoint : [null, [Validators.required]], 
      value :  [null, [Validators.required]],
      rules: [null],
    })
  }

  getResultBasedOnSearch(){

  }

  resetFilter(){

  }

  onClickEditForm(data){
    this.apiLoader['onOk'] = true;
    this.oldDetail = data;
    let body = {
      'source':'LMS',
      'datapoint':'authorization_detailed',
      'endpoint': `AuthorizationRules/${data?.id}`
    } 
    
    this.http.getLMSAuthorizationList(body).subscribe((res)=>{
      this.apiLoader['onOk'] = false;
      console.log(res);
      this.updateRuleDetails.patchValue({
      source:'LMS',
      datapoint:'authorization_edit',
      endpoint: `AuthorizationRules/${res?.data?.id}`,
      value: res?.data?.value,
      rules: res?.data?.rule_text
      })
      console.log(this.updateRuleDetails.value)
      this.isVisible = true
    }, error =>{
      this.apiLoader['onOk'] = false;
    })
  }
  // updateLMSAuthorizationList

  onClickUpdateDetails(){
    for (const i in this.updateRuleDetails.controls) {
      this.updateRuleDetails.controls[ i ].markAsDirty();
      this.updateRuleDetails.controls[ i ].updateValueAndValidity();
      this.apiLoader['onOk'] = false;
    }
    if(this.updateRuleDetails.valid){
      this.apiLoader['onOk'] = true;
      this.http.updateLMSAuthorizationList(this.updateRuleDetails.value).subscribe((res: any)=>{
        if(res?.success){
          this.message.success('Rules Updated');
          this.isVisible = false;
        } else {
          this.message.error(res?.message);
        }
        this.isVisible = false;
        this.apiLoader['onOk'] = false;
      }, error => {
        this.isVisible = false;
        this.apiLoader['onOk'] = false;
      })
    }
    
  }

  getAuthorizationList(e?){
    // this.listOfData;
    if(this.apiLoader['list']){return}
    this.apiLoader['list'] = true;
    let data = {
      'source': 'LMS',
      'datapoint':'authorization_get',
      'endpoint':'AuthorizationRules',
      // 'keyword': this.searchValue,
      'page': 1,
      'size': 30
    }
    // this.listOfData;
    this.http.getLMSAuthorizationList(data).subscribe((res)=> {
      this.authorizationRulesList = res?.data?.results;
      this.total_count = res?.data?.total_count;
      this.apiLoader['list'] = true;
      console.log(this.authorizationRulesList, 'this.authorizationRulesList');
    }, err => {
      console.log(err);
      this.apiLoader['list'] = false;
    })
  }

}
