import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  
  @Input() userData;
  @Input() subTitle;
  @Input() submitBtnTxt;
  @Input() cancelBtnTxt;
  @Input() icon;
  @Output() onOkCall = new EventEmitter<any>();
  @Output() onCencelCall = new EventEmitter<any>();
  passwordForm!: FormGroup;
  isLoading =false;
  passwordVisible = false;

  constructor(private fb: FormBuilder, private message: NzMessageService ) { }

  ngOnInit(): void {
    console.log(this.userData)
    this.createPasswordForm();
  }

  createPasswordForm(){
    this.passwordForm = this.fb.group({
      id: [ this.userData?.[0]?.id, [Validators.required]],
      new_password: [ '', [Validators.required]],
      retype_password: [ '', [Validators.required]],
    })
  }

  onClickSubmitForm(){
    for (const i in this.passwordForm.controls) {
      this.passwordForm.controls[ i ].markAsDirty();
      this.passwordForm.controls[ i ].updateValueAndValidity();
    }

    if(this.passwordForm.valid){
      this.isLoading = true;
      if(this.passwordForm.value.new_password !== this.passwordForm.value.retype_password){
        this.message.error("New Password and Confirm Password Does not Match")
        this.isLoading = false;
        return;
      } else {
        this.isLoading = true;
        this.onOkCall.emit(this.passwordForm.value);
      }
      // this.newItemEvent.emit(value);   
      console.log('Success', this.passwordForm.value.confirmPassword)
    } 
    console.log(this.passwordForm.value)
  }

}
