import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent implements OnInit {

  @Input() product_id: any;
  @Input() productDetails: any;
  constructor() { }

  ngOnInit(): void {
  }

}
