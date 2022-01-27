import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-authorization-rules',
  templateUrl: './authorization-rules.component.html',
  styleUrls: ['./authorization-rules.component.css']
})
export class AuthorizationRulesComponent implements OnInit {

  apiLoader = {
    'list': false,
  }
  page = 1;

  total_count;
  authorizationRulesList: any;

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.getAuthorizationList();
  }

  getResultBasedOnSearch(){

  }

  resetFilter(){

  }

  getAuthorizationList(e?){
    // this.listOfData;
    if(this.apiLoader['list']){return}
    this.apiLoader['list'] = true;
    let data = {
      'source': 'LMS',
      'datapoint':'authorization_get',
      'endpoint':'AuthorizationRules',
      // 'keyword': this.searchValue,
      'page': 1,
      'size': 30
    }
    // this.listOfData;
    this.http.getLMSAuthorizationList(data).subscribe((res)=> {
      this.authorizationRulesList = res?.data?.results;
      this.total_count = res?.data?.total_count;
      this.apiLoader['list'] = true;
      console.log(this.authorizationRulesList, 'this.authorizationRulesList');
    }, err => {
      console.log(err);
      this.apiLoader['list'] = false;
    })
  }

}
