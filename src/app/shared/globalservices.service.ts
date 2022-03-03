import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalservicesService {

  constructor() { }

  amountFromatterFinction(value){
      var val : any
      val = Math.abs(value)
      if (val >= 10000000) {
        val = (val / 10000000).toFixed(2) + ' Cr';
      } else if (val >= 100000) {
        val = (val / 100000).toFixed(2) + ' Lacs';
      } else if (val >= 1000) {
        val = (val / 1000).toFixed(2) + ' Thousand';
      }
      if(typeof val == 'string'){
      } else{
        val = val.toFixed(2)
      }
      return val;
    }
}
