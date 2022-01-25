import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-terminate-unblock',
  templateUrl: './user-terminate-unblock.component.html',
  styleUrls: ['./user-terminate-unblock.component.css']
})
export class UserTerminateUnblockComponent implements OnInit {

  borrowertList = [{}]
  constructor() { }

  ngOnInit(): void {
  }

}
