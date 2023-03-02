import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/services/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cli',
  templateUrl: './cli.component.html',
  styleUrls: ['./cli.component.css']
})
export class CliComponent implements OnInit {
  debounce: any;
  search_params: any;
  application_nature = '';
  corporate = '';
  cli_nach_status = '';
  user_approval_status = '';
  corporateList: any = [];
  cliListData: any = []
  api_calling_loader: boolean = false;
  page = 1
  total_count: any;
  globalPageSize = 30
  constructor(private http: HttpService, private message: NzMessageService) { }

  ngOnInit(): void {

    this.fetchCliList()
  }

  fetchCliList(tableFilter?) {
    this.cliListData = [];
    this.api_calling_loader = true;
    this.page = tableFilter?.pageIndex ? tableFilter?.pageIndex : 1;
    this.globalPageSize = tableFilter?.pageSize ? tableFilter?.pageSize : 30;
    let data = {
      search_param: this.search_params ? this.search_params : "",
      page: this.page,
      limit: this.globalPageSize,
      application_nature: this.application_nature ? this.application_nature : '',
      cli_nach_status: this.cli_nach_status ? this.cli_nach_status : '',
      user_approval_status: this.user_approval_status ? this.user_approval_status : '',
      corporate: this.corporate ? this.corporate : ''
    };
    this.http.getLMSCliList(data).subscribe((res: any) => {
      if (res.success) {
        this.cliListData = res.data.results;
        this.total_count = res.data.total_count;
        this.api_calling_loader = false
      } else {
        this.api_calling_loader = false
      }
    })


  }

  resetFilters() {
    this.search_params = '';
    this.application_nature = ''
    this.cli_nach_status = ''
    this.user_approval_status = ''
    this.corporate = '';
    this.page =1 ;
    this.globalPageSize = 30
    this.fetchCliList()
  }

  OnTypeSearchList(event) {
    clearTimeout(this.debounce);
    this.debounce = setTimeout(() => {
      this.fetchPartnerList(event);
    }, 500);
  }

  fetchPartnerList(e?) {
    let data = {};
    if (e) {
      data['name'] = e;
    }
    this.http.fetchPartner(data).subscribe((res: any) => {
      if (res?.success) {
        this.corporateList = [];
        res?.data?.results.map((res: any) => {
          if (res?.name) {
            this.corporateList.push(res)
          }
        })
      }
    });
  }
}
