import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  
  product_id: any;
  productDetails: any;
  is_product_id = false

  constructor(private fb: FormBuilder, public http: HttpService, private message: NzMessageService,
    private router : Router,
    private route: ActivatedRoute,) {
    this.route.queryParams.subscribe(params => {
      if(params['id']){
        this.is_product_id = true
        this.product_id = params['id']
        this.fetchProductDetailsbyId()
      }
    }); }

  ngOnInit(): void {
  }

  
  fetchProductDetailsbyId() {
    let data = {
      id: this.product_id
    }
    this.http.fetchProductDetailsbyId(data).subscribe(res => {
      this.productDetails = res['data']
      this.message.success(res['message'])
    })
  }

}
