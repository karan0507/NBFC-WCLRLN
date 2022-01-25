import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-downloads',
  templateUrl: './app-downloads.component.html',
  styleUrls: ['./app-downloads.component.css']
})
export class AppDownloadsComponent implements OnInit {
  dataSet = [{},{}]

  constructor() { }

  ngOnInit(): void {
  }

}
