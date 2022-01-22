import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-borrowers-details',
  templateUrl: './borrowers-details.component.html',
  styleUrls: ['./borrowers-details.component.css']
})
export class BorrowersDetailsComponent implements OnInit {

  selectedTab = '1'
  dataSet = [{},{}]
  constructor() { }

  ngOnInit(): void {
  }

  onClickChangeTab(e) {

  }

}
