import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/services/http.service';
import { GlobalservicesService } from 'src/app/shared/globalservices.service';

@Component({
  selector: 'app-bbps-category',
  templateUrl: './bbps-category.component.html',
  styleUrls: ['./bbps-category.component.css']
})
export class BbpsCategoryComponent implements OnInit {
  dataList: any;
  total_count: any;
  api_calling_loader: boolean;
  globalPageSize: any = 100;
  page: any = 1;
  search_params: any;
  category_id: any;
  status: any;

  constructor(public http: HttpService, private message: NzMessageService,
    private router: Router,
    public sanitize: DomSanitizer,
    private route: ActivatedRoute, public global: GlobalservicesService) { }

  ngOnInit(): void {
    this.getCategoryList()
  }

  getCategoryList(tabelFilter?) {
    this.page = tabelFilter?.pageIndex ? tabelFilter?.pageIndex : 1;
    this.globalPageSize = tabelFilter?.pageSize ? tabelFilter?.pageSize : 100;
    // }
    let data = {
      page: this.page,
      limit: this.globalPageSize,
      // from_date: this.date[0] ? moment(this.date[0]).format("YYYY-MM-DD") : '',
      // to_date: this.date[1] ? moment(this.date[1]).format("YYYY-MM-DD") : '',
    }

    this.api_calling_loader = true
    this.http.getCategoryList(data).subscribe(res => {
      this.api_calling_loader = false
      this.dataList = res['data']
      this.total_count = res['total_count']
      // this.message.success(res['message'])
    }, (err) => {
      this.api_calling_loader = false
    })
  }

  toggleStatus(id) {
    this.http.toogleStatusCategory(id).subscribe(res => {
      if (res['success']) {
        this.message.success(res['message'])
      } else {
        this.message.error(res['message'])
      }
      this.getCategoryList()
    }, (err) => {
      this.api_calling_loader = false
    })
  }

}
