import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {

  selectedTab = 'upi';

  constructor(private router: Router,
    private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      // if (params['id'] && params['depo']) {
        if(params['targetCategory']){
          this.selectedTab = params['targetCategory'];
        }else {
          this.selectedTab = 'upi';
        }
      // }else if(params['tabCategory']) {
      //   this.employeeTabs = params['tabCategory']
      // }
    }) 
  }

  onClickChangeTab(e){
    this.selectedTab = e;
    this.router.navigate(['/lms/authorization-policy'], { queryParams: { targetCategory: this.selectedTab} });
  }

}
