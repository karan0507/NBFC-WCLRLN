import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fees',
  templateUrl: './fees.component.html',
  styleUrls: ['./fees.component.css']
})
export class FeesComponent implements OnInit {
  @Input() product_id: any;
  @Input() productDetails: any;

  constructor() { }

  ngOnInit(): void {
  }

}
