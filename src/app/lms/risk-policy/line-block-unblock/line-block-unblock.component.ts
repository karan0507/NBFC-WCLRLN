import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-block-unblock',
  templateUrl: './line-block-unblock.component.html',
  styleUrls: ['./line-block-unblock.component.css']
})
export class LineBlockUnblockComponent implements OnInit {

  borrowertList = [{}]
  constructor() { }

  ngOnInit(): void {
  }

}
