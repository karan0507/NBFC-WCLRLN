import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
  category_id: any;
  api_calling_loader: boolean;
  dataList: any;

  constructor(private fb: FormBuilder, public http: HttpService, private message: NzMessageService,
    private router: Router,
    private route: ActivatedRoute,
    private sanitized: DomSanitizer) {
    this.route.queryParams.subscribe(params => {
      if (params['id']) {
        this.category_id = params['id']
        this.getCategoryById()
      }
    });
  }

  ngOnInit(): void {
  }

  getCategoryById() {
    this.api_calling_loader = true
    this.http.getCategoryById(this.category_id).subscribe(res => {
      this.api_calling_loader = false
      this.dataList = res['data']
      // this.message.success(res['message'])
    }, (err) => {
      this.api_calling_loader = false
    })
  }

}
