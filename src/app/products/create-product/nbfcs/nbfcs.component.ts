import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nbfcs',
  templateUrl: './nbfcs.component.html',
  styleUrls: ['./nbfcs.component.css']
})
export class NbfcsComponent implements OnInit {

  @Input() product_id: any;
  @Input() productDetails: any;
  constructor() { }

  ngOnInit(): void {
  }

}
