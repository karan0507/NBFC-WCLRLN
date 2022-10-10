import { Component } from '@angular/core'
import { Router } from '@angular/router';

@Component({
    templateUrl: './error-2.component.html'
})

export class Error2Component {
    constructor(private router: Router){
        if(!JSON.parse(sessionStorage.getItem('fatakpay_user_data'))){
          this.router.navigate(["/authentication/login"]);
        }
      } 

      onClickRedirectToAssignedRouter(){
        // sessionStorage.removeItem("fatakpay_user_data");
        // this.router.navigate(['/authentication/login']);
        history.back()
    }
}    