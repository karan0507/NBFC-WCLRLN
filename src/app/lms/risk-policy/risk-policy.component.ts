import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-risk-policy',
  templateUrl: './risk-policy.component.html',
  styleUrls: ['./risk-policy.component.css']
})
export class RiskPolicyComponent implements OnInit {

  selectedTab = '1'
  constructor() { }

  ngOnInit(): void {
  }

  onClickChangeTab(e) {

  }
}
