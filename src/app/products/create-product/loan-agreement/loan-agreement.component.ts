import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loan-agreement',
  templateUrl: './loan-agreement.component.html',
  styleUrls: ['./loan-agreement.component.css']
})
export class LoanAgreementComponent implements OnInit {

  @Input() product_id: any;
  @Input() productDetails: any;
  constructor() { }

  ngOnInit(): void {
  }

}
