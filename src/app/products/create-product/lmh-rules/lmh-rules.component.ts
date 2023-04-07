import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-lmh-rules',
  templateUrl: './lmh-rules.component.html',
  styleUrls: ['./lmh-rules.component.css']
})
export class LmhRulesComponent implements OnInit {

  createEditForm: FormGroup;
  @Input() product_id: any;
  loading: boolean;
  lmhConfigData: any;
  isloading: boolean;
  
  constructor(private fb: FormBuilder, public http: HttpService, private message: NzMessageService,
    public router: Router,
    private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['id']) {
        this.product_id = params['id']
        if (this.product_id) {
          this.getLmhRule()
        }
      } else {
        this.createEditFormFuction()
      }
    });
  }

  getLmhRule() {
    this.loading = true
    this.http.getLmhRule(this.product_id).subscribe(res => {
      this.loading = false
      this.lmhConfigData = res['data']
      this.createEditFormFuction()
      // this.message.success(res['message'])
    })
  }

  createEditFormFuction() {
    this.createEditForm = this.fb.group({
      metrics_arr: this.fb.array([]),
    })
    this.setFormData(this.lmhConfigData)

    if (this.router.url.includes('view-product')) {
      this.createEditForm.disable()
    }
  }

  setFormData(data?) {
    if (data) {
      data.forEach((element, index) => {
        this.addMasterPartner(element)
        element.actions.forEach(actions => {
          this.setSlabControlsFormData(actions, index)
        });
      });
    } else {
      this.addMasterPartner()
    }
  }
  get metrics_arr(): FormArray {
    return <FormArray>this.createEditForm.get('metrics_arr');
  }
  
  addMasterPartner(data?) {
    this.metrics_arr.push(this.addLmhSubArray(data))
  }
  public addLmhSubArray(data?): FormGroup {
    if (data) {
      return this.fb.group({
        actions: this.fb.array([]),
        rule_id: [data.id],
        rule_name: [data.display_text]
      });
    } else {
      return this.fb.group({
        actions: this.fb.array([]),
        rule_id: [],
        rule_name: []
      });
    }
  }
  setSlabControlsFormData(data, i) {
    if (data) {
      this.addSlabpartners(i, data)
    }
  }
  addSlabpartners(k, data?) {
    const control = <FormArray>this.createEditForm.get('metrics_arr')['controls'][k].get('actions');
    control.push(this.addCategoryArray(data))
  }
  private addCategoryArray(data?): FormGroup {
    if (data) {
      return this.fb.group({
        id: [data.id],
        is_value_dynamic: [data.is_value_dynamic],
        name: [data.name],
        supported_values: [data.supported_values],
        value: [data.value]
      });
    } else {
      return this.fb.group({
        id: [],
        is_value_dynamic: [],
        name: [],
        supported_values: [],
        value: []
      });
    }
  }
  get_metrics_arr(form) {
    return form.controls.metrics_arr.controls;
  }
  get_category_array(form) {
    return form.controls.actions.controls;
  }
  submitForm() {
    if ((!this.createEditForm.touched || this.createEditForm.touched) && this.createEditForm.pristine) {
      this.message.warning('data saved already')
      return false
    }
    this.addLmhConfiguration()
  }
  addLmhConfiguration() {
    const formData = this.createEditForm.get('metrics_arr').value

    let data = {
      product: this.product_id,
      lmh_rule_action_array: formData
    }
    this.isloading = true
    this.http.createConfigurationRule(data).subscribe(res => {
      this.isloading = false
      this.getLmhRule()
      this.message.success(res['message'])
    }, (err) => {
      this.isloading = false
    })

  }

}
