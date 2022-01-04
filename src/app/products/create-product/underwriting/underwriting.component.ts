import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-underwriting',
  templateUrl: './underwriting.component.html',
  styleUrls: ['./underwriting.component.css']
})
export class UnderwritingComponent implements OnInit {

  @Input() product_id: any;
  @Input() productDetails: any;
  constructor() { }

  ngOnInit(): void {
  }

}
