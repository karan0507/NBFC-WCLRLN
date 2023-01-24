import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-deatils',
  templateUrl: './deatils.component.html',
  styleUrls: ['./deatils.component.css']
})
export class DeatilsComponent implements OnInit {

  @Input() uploadPermission: any;
  @Input() _currentId: any;
  seviceCall: any;
  constructor(public https: HttpService) { }

  ngOnInit(): void {
    var count = 0
    this.seviceCall = this.https.expnadList.subscribe(res => {
      console.log(res, this._currentId)
      if (this._currentId != res) {
        if (count == 0) {
          // this._currentId = res.values().next().value
          // this.getPersonalDetails()
          count++;
        }
      }
    })
  }

  ngOnDestroy(): void {
    this.https.expnadList.next()
  }

}
