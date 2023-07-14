import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { LatLngLiteral } from '@agm/core/services/google-maps-types';
import { HttpService } from 'src/app/services/http.service';

interface Location {
  lat: number;
  lng: number;
  date :any;
}

@Component({
  selector: 'app-borrower-location',
  templateUrl: './borrower-location.component.html',
  styleUrls: ['./borrower-location.component.css']
})
export class BorrowerLocationComponent implements OnInit {
  // lat: any;
  // lng: any;
  // date :any;

  zoom = 16;
  // mapCenter: Location = { lat: 19.113646, lng: 72.869736 , date:'12/06/2023 02:30 PM'};
  locations: Location[] = [
    // { lat: 19.113646 , lng: 72.869736 , date : '12/06/2023 02:30 PM'},
    // { lat: 19.108116 , lng: 72.879478 , date : '13/06/2023 02:30 PM'},
    // { lat: 19.108316 , lng: 72.879178 , date : '07/06/2023 10:30 PM'},
    // { lat: 19.108156 , lng: 72.879978 , date : '23/06/2023 11:40 PM'},
    // { lat: 19.108716 , lng: 72.874478 , date : '25/06/2023 10:50 AM'},
    // { lat: 19.108816 , lng: 72.877478 , date : '28/06/2023 09:10 AM'},
    // { lat: 19.108316 , lng: 72.871478 , date : '29/06/2023 02:30 PM'},
    // { lat: 19.108016 , lng: 72.829478 , date : '01/07/2023 01:24 PM'},
    // { lat: 19.101116 , lng: 72.879458 , date : '13/07/2023 01:50 PM'}
    // Add more locations as needed
  ];

  constructor( private srvice:HttpService ) { }

  ngOnInit() {
    this.getCurrentLocation();    
  }

  getCurrentLocation() {
  let data = {
    user_id:41623
   }
    this.srvice.getBorrowerLocation(data).subscribe((res:any)=>{
      this.locations = res?.data
      console.log("data", this.locations);
      
      })
    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition((position) => {

    //     this.mapCenter = {
    //       latitude: position.coords.latitude,
    //       longitude: position.coords.longitude,
    //       date : position.timestamp
    //     };
    //   });
    // }
  }

}
