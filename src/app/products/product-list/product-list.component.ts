import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  selectedTab = '1'
  page : any
  productList: any;
  api_calling_loader: boolean;
  total_count = 0;
  product_master = '';
  search_params = '';
  globalPageSize: number;


  constructor(public http: HttpService, private message: NzMessageService,
    private router : Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.page = 1;
    this.globalPageSize = 30
    this.fetchProductList()
  }

  fetchProductList() {
    let data = {
      page: this.page,
      product_master: this.product_master,
      name: this.search_params
      // id: this.product_id
    }
    this.api_calling_loader = true
    this.http.fetchProductList(data).subscribe(res => {
      this.api_calling_loader = false
      this.productList = res['data'].results
      this.total_count = res['data'].total_count
      // this.message.success(res['message'])
    }, (err) => {
      this.api_calling_loader = false
    })
  }

  resetFilters() {
    this.search_params = ''
    this.product_master = ''
    this.fetchProductList();
  }
}
