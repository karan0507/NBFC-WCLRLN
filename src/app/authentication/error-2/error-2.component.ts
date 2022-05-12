import { Component } from '@angular/core'
import { Router } from '@angular/router';

@Component({
    templateUrl: './error-2.component.html'
})

export class Error2Component {
    constructor(private router: Router){
        if(!JSON.parse(localStorage.getItem('fatakpay_user_data'))){
          this.router.navigate(["/authentication/login"]);
        }
      } 

      onClickRedirectToAssignedRouter(){
        let res = JSON.parse(localStorage.getItem('fatakpay_user_data'))
        // if(!JSON.parse(localStorage.getItem('iyc_user_data')){
        //     this.router.navigate(["/authentication/login"]);
        // }
        if(!res?.permissions || res?.permissions.length == 0){
              localStorage.removeItem("fatakpay_user_data");
              res = null;
              // this.router.navigate(["/authentication/login"]);
              // return;
        }
        if(!res){
          this.router.navigate(["/authentication/login"]);
          return;
        }
        // if(res.data?.user_type?.name == 'Superuser'){
        //   this.router.navigate(["/data-operator/home"]);
        //   } else if(res.data?.user_type?.name == 'Data Operator'){
        //     this.router.navigate(["/data-operator/home"]);
        //   }  else if(res.data?.user_type?.name == 'Account Manager'){
        //     this.router.navigate(["/accounts/vouchers"]);
        //   } 
        if(res.permissions.length >= 1){
                this.router.navigate(["dashboard/home"]);
        }
    }
}    