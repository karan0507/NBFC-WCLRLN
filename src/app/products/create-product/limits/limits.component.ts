import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-limits',
  templateUrl: './limits.component.html',
  styleUrls: ['./limits.component.css']
})
export class LimitsComponent implements OnInit {

  createEditForm: FormGroup;
  @Input() product_id: any;
  @Input() productDetails: any;
  constructor(private fb: FormBuilder, public http: HttpService, private message: NzMessageService,
    private router : Router,
    private route: ActivatedRoute,) { }

    ngOnInit(): void {
      console.log(this.product_id)
      this.createEditForm = this.fb.group({})
    }
  
    submitForm() {
      // this.createProductDetail();
    }

}
