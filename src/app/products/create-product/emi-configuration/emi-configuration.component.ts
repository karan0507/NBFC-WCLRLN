import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-emi-configuration',
  templateUrl: './emi-configuration.component.html',
  styleUrls: ['./emi-configuration.component.css']
})
export class EmiConfigurationComponent implements OnInit {

  createEditForm: FormGroup;
  data: any;
  product_id: any;
  priodicityData: any;
  tenureData: any;
  loading: boolean;
  constructor(private fb: FormBuilder, public http: HttpService, private message: NzMessageService,
    private router: Router,
    private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['id']) {
        this.product_id = params['id']
        if (this.product_id) {
          this.fetchProductEMI()
        }
      } else {
        this.data = null
        this.createEditFormFuction();
      }
    });
    this.createEditFormFuction();
  }

  createEditFormFuction() {
    console.log(this.data)
    let tenure = []
    let priodicity = []
    this.data?.tenure.forEach(element => {
      tenure.push(element.id)
    });
    this.data?.priodicity.forEach(element => {
      priodicity.push(element.id)
    });
    this.createEditForm = this.fb.group({
      interest_rate: [this.data ? this.data.interest_rate : ''],
      maximum_amount: [this.data ? this.data.maximum_amount : ''],
      minimum_amount: [this.data ? this.data.minimum_amount : ''],
      tenure: [this.data ? tenure : []],
      priodicity: [this.data ? priodicity : []],
    })

    if (this.router.url.includes('view-product')) {
      this.createEditForm.disable()
    }
  }

  fetchProductEMI() {
    this.http.fetchProductEMI(this.product_id).subscribe(res => {
      this.data = res['data'][0]
      this.createEditFormFuction();
      this.fetchMasterData('TenureMaster')
      this.fetchMasterData('EMIPriodicityMaster')
    })
  }
  fetchMasterData(master) {
    // TenureMaster | EMIPriodicityMaster

    this.http.fetchMasterData(master).subscribe(res => {
      if (master == 'TenureMaster') {
        this.tenureData = res['data'].results
      } else {
        this.priodicityData = res['data'].results
      }
      // this.message.success(res['message'])
    })
  }

  submitForm() {
    this.createEmiConfiguration();
  }

  createEmiConfiguration() {
    this.loading = true
    console.log(this.createEditForm.value)
    // return
    this.http.createEmiConfiguration(this.createEditForm.value, this.product_id).subscribe(res => {
      this.loading = false
      this.fetchProductEMI()
      this.message.success(res['message'])
    }, (err) => {
      this.loading = false
    })
  }
}
