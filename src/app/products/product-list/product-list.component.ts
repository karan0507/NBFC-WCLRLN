import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { differenceInCalendarDays } from 'date-fns';
import * as moment from 'moment';
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
  _currentId: any;
  globalPageSize: number;
  draft_status: any;
  date = ''
  product_type = ''
  status: any;
  disabledDate = (current: Date): boolean =>
    // Can not select days before today and today
    differenceInCalendarDays(current, new Date()) > 0;
  partnerData: any;
  partner;
  customRanges = {
    Today: [new Date(), new Date()],
    'Last 7 days': [new Date().setDate(new Date().getDate() - 7), new Date()],
    'This Month': [new Date(new Date().getFullYear(), new Date().getMonth(), 1), new Date()],
    'Last Month': [new Date(new Date().getFullYear(), new Date().getMonth(), 1).setMonth(new Date().getMonth() - 1), new Date(new Date().getFullYear(), new Date().getMonth(), -1,30,31)],
    'Last 3 Months': [new Date(new Date().getFullYear(), new Date().getMonth(), 1).setMonth(new Date().getMonth() - 3), new Date(new Date().getFullYear(), new Date().getMonth(), -1,30,31)],
    'Last 6 Months': [new Date(new Date().getFullYear(), new Date().getMonth(), 1).setMonth(new Date().getMonth() - 6), new Date(new Date().getFullYear(), new Date().getMonth(), -1,30,31)],
    'This Year': [new Date(new Date().getFullYear(), 0, 1), new Date()],
    // 'Last Year': [new Date(new Date().getFullYear(), new Date().getMonth(), 1).setMonth(new Date().getMonth() - 12), new Date(new Date().getFullYear(), new Date().getMonth(), 1)],
    'Last Year': [new Date(new Date().getFullYear() - 1, 0, 1), new Date(new Date().getFullYear() - 1, 11, 31)],
    // d.setMonth(d.getMonth() - 3);
};

expandSet = new Set<number>();
  api_calling_loader_accordian: boolean;

  constructor(public http: HttpService, private message: NzMessageService,
    private router : Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.page = 1;
    this.globalPageSize = 100
    this.fetchProductList()
  }

  fetchProductList(tabelFilter?) {
    this.page = tabelFilter?.pageIndex ? tabelFilter?.pageIndex : 1;
    this.globalPageSize = tabelFilter?.pageSize ? tabelFilter?.pageSize : 100;
    let data = {
      page: this.page,
      product_master: this.product_master ? this.product_master : '',
      draft : this.draft_status ? this.draft_status : '',
      name: this.search_params,
      limit: this.globalPageSize,
      start_date: this.date[0] ? moment(this.date[0]).format("YYYY-MM-DD") : '',
      end_date: this.date[1] ? moment(this.date[1]).format("YYYY-MM-DD") : '',
      status: this.status ? this.status : 'all',
      partner: this.partner ? this.partner : '',
      product_type: this.product_type ? this.product_type : ''
      // id: this.product_id
    }
    this.productList = null
    this.total_count = null
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
    this.draft_status = ''
    this.date = ''
    this.status = ''
    this.partner = ''
    this.product_type = ''
    this.fetchProductList();
  }

  activeInactiveProduct(id) {
    this.http.activeInactiveProduct(id).subscribe(res => {
      this.message.success(res['message'])
      this.fetchProductList()
    })
  }

  
  fetchPartnerData() {
    let data;
    this.http.fetchPartner(data).subscribe(res => {
      this.partnerData = res['data'].results
      // this.message.success(res['message'])
    })
  }
  onExpandChange(id: number, checked: boolean, index?): void {

    if (id) {
      if (checked) {
        this.expandSet.add(id);
        this.getIdWiseData(this._currentId = id, index);
      } else {
        this.expandSet.delete(id);
        // console.log('Deleted array of active ids', this._activeLoans);
      }
    }
  }

  getIdWiseData(id?, index?) {
    this.api_calling_loader_accordian = true;
    this.http.fetchVersionDetails(id).subscribe(res => {
      if (res) {
        this.api_calling_loader_accordian = false;
        // this._activeLoans.push(res?.data?.results[0]);
        this.productList[index].expanddata = res['data'];
      } else {
        this.api_calling_loader_accordian = false;
      }
    }, error => {
      this.api_calling_loader_accordian = false;
    })
  }
  updateProductVersion(id) {
    let data = {
      product_id : id
    }
    const generateloader = this.message.loading('Updating product version....', { nzDuration: 0 }).messageId;
    this.http.updateProductVersion(data).subscribe(res => {
      if (res) {
        this.message.remove(generateloader);
        // this.fetchProductList()
        this.router.navigate(['/product/edit-product'], {queryParams : {id: res['data'].id}})
      } else {
        this.message.remove(generateloader);
      }
      this.message.success(res['message'])
    }, error => {
      this.message.remove(generateloader);
    })
  }

  public convertBillDateToText(date) {
    var finalDate = ''
    if (date) {
      date = String(date)
      if (date[date.length - 1] == '1') {
        finalDate = date + 'st every month'
      } else if (date[date.length - 1] == '2') {
        finalDate = date + 'nd every month'
      } else if (date[date.length - 1] == '3') {
        finalDate = date + 'rd every month'
      } else { 
        finalDate = date + 'th every month'
      }
    } else {
      finalDate = '-'
    }
    return finalDate
  }
}
