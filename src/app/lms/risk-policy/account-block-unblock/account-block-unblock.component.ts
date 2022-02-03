import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-block-unblock',
  templateUrl: './account-block-unblock.component.html',
  styleUrls: ['./account-block-unblock.component.css']
})
export class AccountBlockUnblockComponent implements OnInit {

  borrowertList = [{}]
  isRestructure = false
  isUnblock = false
  isblock = false
  constructor() { }

  ngOnInit(): void {
  }

}
