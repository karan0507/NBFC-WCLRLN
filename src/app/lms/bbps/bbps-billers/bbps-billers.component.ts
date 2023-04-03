import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/services/http.service';
import { GlobalservicesService } from 'src/app/shared/globalservices.service';

@Component({
  selector: 'app-bbps-billers',
  templateUrl: './bbps-billers.component.html',
  styleUrls: ['./bbps-billers.component.css']
})
export class BbpsBillersComponent implements OnInit {
  dataList: any;
  total_count: any;
  api_calling_loader: boolean;
  globalPageSize: any = 100;
  page: any = 1;
  search_params: any;
  category_id: any;
  status: any;
  categoryList: any;

  constructor(public http: HttpService, private message: NzMessageService,
    private router: Router,
    public sanitize: DomSanitizer,
    private route: ActivatedRoute, public global: GlobalservicesService) { }

  ngOnInit(): void {
    this.getBillersList()
  }

  getBillersList(tabelFilter?) {
    this.page = tabelFilter?.pageIndex ? tabelFilter?.pageIndex : 1;
    this.globalPageSize = tabelFilter?.pageSize ? tabelFilter?.pageSize : 30;
    // }
    let data = {
      page: this.page,
      limit: this.globalPageSize,
      search: this.search_params ? this.search_params : '',
      category_id: this.category_id ? this.category_id : '',
      status: this.status ? this.status : '',
      // search_param: this.search_params ? this.search_params : '',
      // from_date: this.date[0] ? moment(this.date[0]).format("YYYY-MM-DD") : '',
      // to_date: this.date[1] ? moment(this.date[1]).format("YYYY-MM-DD") : '',
    }

    this.api_calling_loader = true
    this.http.getBillersList(data).subscribe(res => {
      this.api_calling_loader = false
      this.dataList = res['data']
      this.total_count = res['total_count']
      // this.message.success(res['message'])
    }, (err) => {
      this.api_calling_loader = false
    })
  }
  resetFilters() {
    this.search_params = ''
    this.status = ''
    this.category_id = ''
    this.getBillersList()
  }

  getCategoryList() {
    let data = {
    }
    this.http.getCategoryList(data).subscribe(res => {
      this.categoryList = res['data']
      // this.message.success(res['message'])
    }, (err) => {
      this.api_calling_loader = false
    })
  }
  toggleStatus(id) {
    this.http.toogleStatusBillers(id).subscribe(res => {
      if (res['success']) {
        this.message.success(res['message'])
      } else {
        this.message.error(res['message'])
      }
      this.getBillersList()
    }, (err) => {
      this.api_calling_loader = false
    })
  }
}
