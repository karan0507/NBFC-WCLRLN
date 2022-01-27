import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { HttpService } from 'src/app/services/http.service';
import { ThemeConstantService } from '../../services/theme-constant.service';

@Component({
    selector: 'app-quick-view',
    templateUrl: './quick-view.component.html'
})



export class QuickViewComponent {
  
    selectedHeaderColor: string;
    isSideNavDark : boolean;
    isFolded : boolean;
    _apiCallLoader: boolean = false;
    userData: any;

    constructor( private themeService: ThemeConstantService, private message: NzMessageService,
        private HttpService: HttpService,
        private router: Router,
        private route: ActivatedRoute,
        private modal: NzModalService,) {}

    ngOnInit(): void {
        this.userData = JSON.parse(localStorage.getItem('fatakpay_user_data'))
        this.themeService.isMenuFoldedChanges.subscribe(isFolded => this.isFolded = isFolded);
        this.themeService.isSideNavDarkChanges.subscribe(isDark => this.isSideNavDark = isDark);
        this.themeService.selectedHeaderColor.subscribe(color => this.selectedHeaderColor = color);
    }

    changeHeaderColor() {
        this.themeService.changeHeaderColor(this.selectedHeaderColor)
    }

    toggleSideNavDark() {
        this.themeService.toogleSideNavDark(this.isSideNavDark);
    }

    toggleFold() {
        this.themeService.toggleFold(this.isFolded);
    }

    logout() {
        this.modal.confirm({
            nzTitle: 'Are you sure ',  /*+ this.party_name + '?'*/
            nzContent: 'You want to logout',
            nzOkText: 'Yes, Logout',
            nzOkType: 'primary',
            nzOkDanger: true,
            nzOnOk: () => this.logoutUserFunction(),
            nzCancelText: 'No',
            nzOnCancel: () => console.log('Cancel')
        });
    }

    //// logout user 
    logoutUserFunction() {
        // this._apiCallLoader = true
        this.modal.closeAll()
        
        localStorage.removeItem("fatakpay_user_data");
        this.router.navigate(['/authentication/login']);
        // var end_point = JSON.parse(localStorage.getItem('biomech_user_data')).user_type.name == 'Stockists' ? 'stockist/client-auth/logout' : 'employee/employee-auth/logout'
        // this.HttpService.logoutUserAPI(end_point).subscribe((res) => {
        //     // this.globalFunction.sendUserData(null);
        //     if (JSON.parse(localStorage.getItem('biomech_user_data')).user_type.name == 'Stockists') {
        //         this.router.navigate(['/authentication/login']);
        //     } else {
        //         this.router.navigate(['/authentication/employee-login']);
        //     }
        //     localStorage.removeItem("biomech_user_token");
        //     localStorage.removeItem('biomech_user_data');
        //     localStorage.removeItem("biomech_generated_depots");
        //     this._apiCallLoader = false
        //     if (res.result) {
        //         this.message.success(res.message);
        //     }
        // }, (err) => {
        //     if (JSON.parse(localStorage.getItem('biomech_user_data')).user_type.name == 'Stockists') {
        //         this.router.navigate(['/authentication/login']);
        //     } else {
        //         this.router.navigate(['/authentication/employee-login']);
        //     }
        //     localStorage.removeItem("biomech_user_token");
        //     localStorage.removeItem('biomech_user_data');
        //     localStorage.removeItem("biomech_generated_depots");
        //     this._apiCallLoader = false
        // })
    }
}

