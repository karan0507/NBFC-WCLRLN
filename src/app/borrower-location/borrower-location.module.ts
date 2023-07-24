import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BorrowerLocationRoutingModule } from './borrower-location-routing.module';
import { BorrowerLocationComponent } from './borrower-location/borrower-location.component';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [BorrowerLocationComponent],
  imports: [
    CommonModule,
    BorrowerLocationRoutingModule,
    AgmCoreModule.forRoot({
      // please get your own API key here:
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      apiKey: 'AIzaSyCSjDeHEK3djS0i52qlNaE4eGfMB82jaH4'
      // AIzaSyCSjDeHEK3djS0i52qlNaE4eGfMB82jaH4
    })
  ]
})
export class BorrowerLocationModule { }
