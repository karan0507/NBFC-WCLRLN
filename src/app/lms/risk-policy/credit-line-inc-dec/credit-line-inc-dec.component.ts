import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-credit-line-inc-dec',
  templateUrl: './credit-line-inc-dec.component.html',
  styleUrls: ['./credit-line-inc-dec.component.css']
})
export class CreditLineIncDecComponent implements OnInit {

  borrowertList = [{}]
  constructor() { }

  ngOnInit(): void {
  }

}
