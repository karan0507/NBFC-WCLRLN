import { Component } from '@angular/core'
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/services/http.service';


@Component({
    templateUrl: './login-1.component.html'
})

export class Login1Component {
    loginForm: FormGroup;
    api_calling_loader: boolean;
    carousel_data = [
      "assets/images/image (3).png",
      "assets/images/image (4).png",
      "assets/images/image (2).png",
    ]


    constructor(
        private fb: FormBuilder, 
        private http: HttpService,
        private message: NzMessageService,
        private router : Router,) {
    }

    ngOnInit(): void {
        this.loginForm = this.fb.group({
            mobile: [ null, [ Validators.required ] ],
            password: [ null, [ Validators.required ] ]
        });
    }
    submitForm(form): void {
        if (this.loginForm.invalid) {
            return;
          }
          else{
            let data = new FormData();
            data.append('mobile', form.value.mobile)
            data.append('password', form.value.password)
            this.api_calling_loader = true
            this.http.UserLogin(data).subscribe((res) => {
              this.api_calling_loader = false
              if(res.success){
                localStorage.setItem('fatakpay_user_data', JSON.stringify(res.data));
                // this.HttpService.setPermissionValue(res.data.data.permissions_slug_list)
                this.message.success('Welcome to Fatak Pay');
                this.router.navigate(['/dashboard/home']);
                
              }
              else{
                this.message.error(res.message);
              }
              
            }, (err) => {
              this.api_calling_loader = false
              console.log(err)
            })
          }
    }
}    