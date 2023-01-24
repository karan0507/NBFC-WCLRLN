import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-deatils',
  templateUrl: './deatils.component.html',
  styleUrls: ['./deatils.component.css']
})
export class DeatilsComponent implements OnInit {

  @Input() _currentId: any;
  constructor() { }

  ngOnInit(): void {
  }

}
