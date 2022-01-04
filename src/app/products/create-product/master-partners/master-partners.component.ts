import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-master-partners',
  templateUrl: './master-partners.component.html',
  styleUrls: ['./master-partners.component.css']
})
export class MasterPartnersComponent implements OnInit {
  createEditForm: FormGroup;
  @Input() product_id: any;
  @Input() productDetails: any;

  constructor(private fb: FormBuilder, public http: HttpService, private message: NzMessageService,
    private router : Router,
    private route: ActivatedRoute,) { 
      // this.route.queryParams.subscribe(params => {
      //   if(params['id']){
      //     this.product_id = params['id']
      //     // this.fetchProductDetailsbyId()
      //   }
      // });
    }

  ngOnInit(): void {
    console.log(this.product_id)
    this.createEditForm = this.fb.group({})
  }

  submitForm() {
    // this.createProductDetail();
  }

}
