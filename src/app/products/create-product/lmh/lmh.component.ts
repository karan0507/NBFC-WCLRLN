import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-lmh',
  templateUrl: './lmh.component.html',
  styleUrls: ['./lmh.component.css']
})
export class LmhComponent implements OnInit {
  createEditForm: FormGroup;
  @Input() product_id: any;
  loading: boolean;
  lmhConfigData: any;
  isloading: boolean;

  constructor(private fb: FormBuilder, public http: HttpService, private message: NzMessageService,
    public router: Router,
    private route: ActivatedRoute,) { }

  ngOnInit(): void {
    // this.createEditFormFuction()
    this.route.queryParams.subscribe(params => {
      if (params['id']) {
        this.product_id = params['id']
        if (this.product_id) {
          this.getLmhConfig()
        }
      } else {
        this.createEditFormFuction()
      }
    });
  }

  getLmhConfig() {
    this.loading = true
    this.http.getLmhConfig(this.product_id).subscribe(res => {
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

  get metrics_arr(): FormArray {
    return <FormArray>this.createEditForm.get('metrics_arr');
  }

  addMasterPartner(data?) {
    this.metrics_arr.push(this.addLmhSubArray(data))
  }

  public addLmhSubArray(data?): FormGroup {
    if (data) {
      return this.fb.group({
        missing_data_category: [data.missing_data_category],
        config: this.fb.array([]),
        metric: [data.metric_id],
        metric_name: [data.metric_name]
      });
    } else {
      return this.fb.group({
        missing_data_category: [''],
        config: this.fb.array([]),
        metric: [],
        metric_name: []
      });
    }
  }

  private addCategoryArray(data?): FormGroup {
    if (data) {
      return this.fb.group({
        min_val: [data.min_val],
        max_val: [data.max_val],
        category: [data.category]
      });
    } else {
      return this.fb.group({
        min_val: [''],
        max_val: [''],
        category: []
      });
    }
  }
  get_lmh_config_array(form) {
    return form.controls.lmh_config_array.controls;
  }

  get_category_array(form) {
    return form.controls.config.controls;
  }


  get_metrics_arr(form) {
    return form.controls.metrics_arr.controls;
  }

  setFormData(data?) {
    if (data) {
      data.forEach((element, index) => {
        this.addMasterPartner(element)
        element.configs.forEach(config => {
          this.setSlabControlsFormData(config, index)
        });
      });
    } else {
      this.addMasterPartner()
    }
  }

  addSlabpartners(k, data?) {
    const control = <FormArray>this.createEditForm.get('metrics_arr')['controls'][k].get('config');
    control.push(this.addCategoryArray(data))
  }

  setSlabControlsFormData(data, i) {
    if (data) {
      this.addSlabpartners(i, data)
    }
  }

  submitForm() {
    if ((!this.createEditForm.touched || this.createEditForm.touched) && this.createEditForm.pristine) {
      this.message.warning('data saved already')
      return false
    }
    this.addLmhConfiguration()
  }
  addLmhConfiguration() {
    console.log(this.createEditForm.get('metrics_arr').value)
    const formData = this.createEditForm.get('metrics_arr').value

    let data = {
      product: this.product_id,
      lmh_config_array: formData
    }

    console.log(data)

    this.isloading = true
    this.http.createConfiguration(data).subscribe(res => {
      this.isloading = false
      this.getLmhConfig()
      this.message.success(res['message'])
    }, (err) => {
      this.isloading = false
    })

  }

}



