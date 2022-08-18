import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NgxPermissionsService } from 'ngx-permissions';
import { HttpService } from 'src/app/services/http.service';


@Component({
      templateUrl: './login-1.component.html'
})

export class Login1Component {
      loginForm: FormGroup;
      forgetForm: FormGroup;
      api_calling_loader: boolean;
      captchaSiteKey = '6LfuMccUAAAAAKTA7nzlRVaqT0ZGtEvXNTmt5V7Z';
      // captchaSiteKey = location.origin == 'http://localhost:4200' ? '6LfuMccUAAAAAKTA7nzlRVaqT0ZGtEvXNTmt5V7Z' : '6LdJhCEgAAAAAIDh0nvmJOoq4V52Vpopp3reNWho';
      carousel_data = [
            "assets/images/image (3).png",
            "assets/images/image (4).png",
            "assets/images/image (2).png",
      ]
      is_forget: boolean = false;
      is_link_send: boolean;
      otp = '';
      new_password = '';
      retype_password = '';
      isView: boolean = false;
      UserPermissionDataSubscription : any

      constructor(
            private fb: FormBuilder,
            private http: HttpService,
            private message: NzMessageService,
            private router: Router,
            private permissionsService: NgxPermissionsService) {
                  if (JSON.parse(localStorage.getItem('fatakpay_user_data'))?.token) {
                        this.router.navigate(['/dashboard/home']);
                  }
      }

      ngOnInit(): void {
            this.loginForm = this.fb.group({
                  mobile: [null, [Validators.required]],
                  password: [null, [Validators.required]],
                  recaptcha: [null, [Validators.required]]
            });
            this.forgetForm = this.fb.group({
                  email: ['', [Validators.required]],
            });
      }
      submitForm(form): void {
            if (this.is_forget) {
                  if (this.forgetForm.invalid) {
                        return;
                  } else {
                        let data = { 'email': form.value.email }
                        this.api_calling_loader = true,
                              this.http.sendOtp(data).subscribe((res) => {
                                    this.api_calling_loader = false
                                    if (res.success) {
                                          this.is_link_send = true;
                                          this.message.success(res.message);
                                    }
                                    else {
                                          this.message.error(res.message);
                                    }
                              }, (err) => {
                                    this.api_calling_loader = false
                                    console.log(err)
                              })
                  }
            } else {
                  if (this.loginForm.invalid) {
                        return;
                  }
                  else {
                        let data = new FormData();
                        data.append('mobile', form.value.mobile)
                        data.append('password', form.value.password)
                        this.api_calling_loader = true
                        this.http.UserLogin(data).subscribe((res) => {
                              this.api_calling_loader = false
                              if (res.success) {
                                    localStorage.setItem('fatakpay_user_data', JSON.stringify(res.data));
                                    if(localStorage.getItem('fatakpay_user_data')){
                                          var check_token_exists = JSON.parse(localStorage.getItem('fatakpay_user_data')).permissions;
                                          check_token_exists.push('')
                                          this.permissionsService.loadPermissions(check_token_exists);
                                        }
                                        this.UserPermissionDataSubscription = this.http.globalUserPermissionsData.subscribe((value) => {
                                          value.push('')
                                          this.permissionsService.loadPermissions(value);
                                        });
                                    // this.HttpService.setPermissionValue(res.data.data.permissions_slug_list)
                                    this.message.success('Welcome to Fatak Pay');
                                    this.router.navigate(['/dashboard/home']);

                              }
                              else {
                                    this.message.error(res.message);
                              }

                        }, (err) => {
                              this.api_calling_loader = false
                              console.log(err)
                        })
                  }
            }
      }
      VerifyOtp() {
            console.log(this.otp)
            if (!this.otp) {
                  this.message.error('Please enter OTP')
                  return false
            }
            if (!this.new_password) {
                  this.message.error('Pleasen enter new password')
                  return false
            }
            if (!this.retype_password) {
                  this.message.error('Please retype new password')
                  return false
            }
            if (this.new_password !== this.retype_password) {
                  this.message.error('new password and retype password should be match')
                  return false
            }
            let data = {
                  'email': this.forgetForm.value.email,
                  'otp': this.otp,
                  'new_password': this.new_password,
                  'retype_password': this.retype_password
            }
            this.api_calling_loader = true
            this.http.VerifyOtptopasswordchange(data).subscribe((res) => {
                  this.api_calling_loader = false
                  if (res.success) {
                        this.message.success(res.message);
                        this.is_forget = false
                        this.is_link_send = false
                  }
                  else {
                        this.message.error(res.message);
                  }
            }, (err) => {
                  this.api_calling_loader = false
                  console.log(err)
            })
      }

      hidePassword() {
            if (this.isView) {
                  this.isView = false;
            } else {
                  this.isView = true
            }

      }
 
      handleSuccess(event) {
            this.loginForm.get('recaptcha').setValue(event);
      }
}    