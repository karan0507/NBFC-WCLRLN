import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-borrowers-list',
  templateUrl: './borrowers-list.component.html',
  styleUrls: ['./borrowers-list.component.css']
})
export class BorrowersListComponent implements OnInit {
  borrowertList = [
    {
      username: 'Samyak',
      load_id: '#F-EMI4567',
      applied_on: '12/4/2112:02 PM',
      credit_line: '10,000',
      credit_untilised: '5,000',
      outstandings: '5,000',
      fees: '500',
      card_status: 'Active',
      ac_status: 'Active',
    },
    {
      username: 'Samyak',
      load_id: '#F-EMI4567',
      applied_on: '12/4/2112:02 PM',
      credit_line: '10,000',
      credit_untilised: '5,000',
      outstandings: '5,000',
      fees: '500',
      card_status: 'Blocked',
      ac_status: 'Dormant',
    },
    {
      username: 'Samyak',
      load_id: '#F-EMI4567',
      applied_on: '12/4/2112:02 PM',
      credit_line: '10,000',
      credit_untilised: '5,000',
      outstandings: '5,000',
      fees: '500',
      card_status: 'Inactive',
      ac_status: 'Delinquent',
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
