import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  product_id: any;
  isLoading: boolean;
  productDetails: any;
  
  pdf_viewer_object_values = {
    'boolean': false,
    'url': '',
    'title': ''
  }

  constructor(private fb: FormBuilder, public http: HttpService, private message: NzMessageService,
    private router : Router,
    private route: ActivatedRoute,
    private sanitized: DomSanitizer) { 
      this.route.queryParams.subscribe(params => {
        if(params['id']){
          this.product_id = params['id']
          this.fetchProductDetailsbyId()
        } else {
          this.product_id = null
        }
      });
    }

  ngOnInit(): void {
  }

  fetchProductDetailsbyId() {
    this.isLoading = true
    this.http.fetchGlobalProductDetailsbyId(this.product_id).subscribe(res => {
      this.productDetails = res['data']
      this.isLoading = false
      // this.message.success(res['message'])
    }, (err) => {
      this.isLoading = false
    })
  }
  
  modalPreview(value) {
    const generateloader = this.message.loading('Generating Report..', { nzDuration: 0 }).messageId;
    this.pdf_viewer_object_values['title'] = value.file_name
    this.pdf_viewer_object_values['url'] = value.agreement_file
    this.pdf_viewer_object_values['boolean'] = true
    this.message.remove(generateloader);
  }
  handleCancel() {
    this.pdf_viewer_object_values['boolean'] = false
    this.pdf_viewer_object_values['url'] = ''
  }
  sanatizeUrlToSafe(value) {
    return this.sanitized.bypassSecurityTrustResourceUrl(value);
  }

}
