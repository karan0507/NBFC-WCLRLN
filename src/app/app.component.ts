import { Component } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { HttpService } from './services/http.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
    UserPermissionDataSubscription : any
    constructor(
        private HttpService: HttpService,
        private permissionsService: NgxPermissionsService
        ) 
        {
          if(localStorage.getItem('fatakpay_user_data')){
            var check_token_exists = JSON.parse(localStorage.getItem('fatakpay_user_data')).permissions;
            check_token_exists.push('')
            this.permissionsService.loadPermissions(check_token_exists);
          }
          this.UserPermissionDataSubscription = this.HttpService.globalUserPermissionsData.subscribe((value) => {
            value.push('')
            this.permissionsService.loadPermissions(value);
          });
        }
}
