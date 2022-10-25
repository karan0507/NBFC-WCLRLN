import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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
    api_calling_loader: boolean;
    employeeData: any;
    isChangePassword = false
    changePasswordForm: any;
    formLoading: boolean;

    constructor( private themeService: ThemeConstantService, private message: NzMessageService,
        private router: Router,
        private route: ActivatedRoute,
        private modal: NzModalService,public http: HttpService, private fb: FormBuilder) {}

    ngOnInit(): void {
        this.userData = JSON.parse(sessionStorage.getItem('fatakpay_user_data'))
        this.themeService.isMenuFoldedChanges.subscribe(isFolded => this.isFolded = isFolded);
        this.themeService.isSideNavDarkChanges.subscribe(isDark => this.isSideNavDark = isDark);
        this.themeService.selectedHeaderColor.subscribe(color => this.selectedHeaderColor = color);
        setTimeout(() => {
            this.fetchEmployeeList();
        }, 2000);
        this.changePasswordFormFunction()
    }

    fetchEmployeeList() {
        if (!this.userData?.user?.id) {
            this.userData = JSON.parse(sessionStorage.getItem('fatakpay_user_data'))
        }
        let data = {
          id : this.userData?.user?.id
        }
        this.api_calling_loader = true
        if (this.userData?.user?.id) {
            this.http.fetchEmployeeList(data).subscribe(res => {
                this.api_calling_loader = false
                this.employeeData = res['data'].results[0]
            }, (err) => {
                this.api_calling_loader = false
            })
        }
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
      let data;
      this.http.logout(data).subscribe((res: any)=>{
        if(res?.success){
          this.message.success(res?.message);
          this.modal.closeAll()
          sessionStorage.removeItem("fatakpay_user_data");
          this.router.navigate(['/authentication/login']);
        }
      })
    }
    changePasswordFormFunction() {
        this.changePasswordForm = this.fb.group({
          id: [this.employeeData ? this.employeeData.id : ''],
          mobile: [this.employeeData ? this.employeeData.mobile : ''],
          new_password: [''],
          retype_password: [''],
          old_password: [''],
        })
      }

    changePassword() {
        if (!this.changePasswordForm.value.old_password) {
          this.message.error('Old Password Mandatory')
          return;
        }
        if (!this.changePasswordForm.value.new_password) {
          this.message.error('New Password Mandatory')
          return;
        }
        if (!this.changePasswordForm.value.retype_password) {
          this.message.error('Confirm New Password Field Mandatory')
          return;
        }
        if (this.changePasswordForm.value.new_password !== this.changePasswordForm.value.retype_password) {
          this.message.error('Password Miss Match')
          return;
        }
        if (this.changePasswordForm.value.old_password && this.changePasswordForm.value.new_password && this.changePasswordForm.value.retype_password) {
          this.http.changePassword(this.changePasswordForm.value).subscribe(res => {
            if (res['success']) {
              this.isChangePassword = false
              this.message.success(res['message'])
            } else {
              this.message.error(res['message'])
            }
          })
        }
      }
}

