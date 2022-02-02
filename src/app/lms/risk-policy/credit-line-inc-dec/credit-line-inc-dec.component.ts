import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-credit-line-inc-dec',
  templateUrl: './credit-line-inc-dec.component.html',
  styleUrls: ['./credit-line-inc-dec.component.css']
})
export class CreditLineIncDecComponent implements OnInit {

  borrowertList = [{}]
  isIncLine = false
  isDescLine = false
  createIncLine: FormGroup;
  createDescLine: FormGroup;
  constructor(private fb: FormBuilder, public http: HttpService, private message: NzMessageService,
    private router : Router,
    private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.createDescLineFunction()
    this.createIncLineFunction()
  }

  createIncLineFunction() {
    this.createIncLine = this.fb.group({
      incBy: [],
      newCred: [],
      activation_from: []
    })
  }
  createDescLineFunction() {
    this.createDescLine = this.fb.group({
      incBy: [],
      newCred: [],
      activation_from: []
    })
  }

}
