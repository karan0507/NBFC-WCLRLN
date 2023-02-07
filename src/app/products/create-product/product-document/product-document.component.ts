import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/services/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-document',
  templateUrl: './product-document.component.html',
  styleUrls: ['./product-document.component.css']
})
export class ProductDocumentComponent implements OnInit {
  documentsList: any = []
  documentForm: FormGroup;
  _curr_product_id: any
  constructor(private http: HttpService, private message: NzMessageService, private fb: FormBuilder, private router: Router, private acRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.acRoute.queryParams.subscribe((param) => {
      if (param['id']) {
        this._curr_product_id = param['id']
        this.getProductsDocumentDetails()
      }
    })
    this.documentForm = this.fb.group({
      parent_document: this.fb.array([])
    })
  }

  getParentDocuments(form) {

    if (this.documents(form).controls.length) {
      return this.documents(form).controls
    } else {
      return []
    }
  }

  // Get Productwise Document List
  getDocumentList() {
    this.http.fetchDocumentListProductWise().subscribe((res: any) => {
      if (res.success) {
        this.documentsList = res.data;
        for (let i = 0; i < res.data.length; i++) {
          if (res.data[i].childrens.length > 0) {
            this.createDocumentForm(res.data[i])
            for (let j = 0; j < res.data[i].childrens.length; j++) {
              this.createChildDocuments(res.data[i].childrens[j], i)
            }
          }
        }
      }
    })
  }

  createDocumentForm(data?) {
    this.parent_document.push(this.addDocuments(data));
  }

  get parent_document(): FormArray {
    return <FormArray>this.documentForm.get('parent_document');
  }

  private addDocuments(data?): FormGroup {
    return this.fb.group({
      document_master: [(data.document_master ? data?.document_master : '')],
      id: [(data.id ? data?.id : '')],
      name: [(data.name ? data?.name : '')],
      parent: [(data.id ? data?.id : '')],
      documents: this.fb.array([])
    });
  }

  // Child Array
  createChildDocuments(data, index?) {
    if (data !== null) {
      this.documents(index).push(this.addChildDocuments(data))
    }
  }

  documents(i): FormArray {
    return <FormArray>this.parent_document.controls[i].get('documents')
  }

  private addChildDocuments(data?): FormGroup {
    return this.fb.group({
      document_master: [(data?.document_master ? data?.document_master : '')],
      document_list: [(data?.id ? data?.id : '')],
      name: [(data?.name ? data?.name : '')],
      parent: [(data?.parent ? data?.parent : '')],
      required_type: [(data?.required_type == 'mandatory' ? 'mandatory' : (data?.required_type == 'optional' ? 'optional' : null))]
    });
  }


  _curr_product_data: any
  getProductsDocumentDetails() {
    this.http.getProductsDocumentDetails(this._curr_product_id).subscribe((res: any) => {
      if (res.success) {
        this._curr_product_data = res.data;
        if (res.success) {
          this.documentsList = res.data;
          for (let i = 0; i < res.data.length; i++) {
            if (res.data[i].childrens.length > 0) {
              this.createDocumentForm(res.data[i])
              for (let j = 0; j < res.data[i].childrens.length; j++) {
                this.createChildDocuments(res.data[i].childrens[j], i)
              }
            }
          }
        }
      }
    })
  }

  submitForm() {
    let docs = [];
    console.log(this.parent_document.value);
    var data = this.parent_document.value
    // data.forEach((element, index) => {
    //   data.splice(1, index)
    //   data[''] = { parent: element.id }
    //   element.documents.forEach((child_element, index) => {

    //   });
    // });

    this.http.updateProductDocuments(this._curr_product_id, this.parent_document.value).subscribe((res: any) => {
      if (res.success) {
        this.message.success(res.message)
      } else {
        this.message.error(res.message)
      }
    })
    // for (let i = 0; i < this.documentForm.value.parent_document.length; i++) {
    //   let temp = { parent: this.parent_document.value[i].id, documents: [] }
    //   for (let j = 0; j < this.documents(i).length; j++) {
    //     console.log(temp.parent, temp.documents);

    //     temp.documents.push({
    //       document_list: this.documents(j).value[j].document_list,
    //       required_type: (this.documents(j).value[j].required_type == true ? 'mandatory' : (this.documents(j).value[j].required_type == false ? 'optional' : null))
    //     })
    //   }
    //   docs.push(temp)
    //   console.log(temp)
    // }

  }
  checkRadio(data, i, j) {

    // console.log(this.parent_document.controls[i].get('documents').controls[j])
    // this.documents(id).get('required_type').setValue(false, { emitEvent: false });
  }

  check(event, i, j) {
    // this.parent_document.controls[i].get('documents').setValue[j].required_type
    // this.parent_document.controls[i].get('documents').setValue[j].required_type = null
    console.log(this.parent_document.controls[i].get('documents')[j].controls,this.parent_document.controls[i].get('documents').value[j].required_type)
    // if (this.documents(j).controls[j].get('required_type').value == type) {
    //   this.documents(j).controls[j].get('required_type').setValue(null, { emitEvent: false })
    // } else {
    //   this.documents(j).controls[j].get('required_type').setValue(type, { emitEvent: false })
    // }
    // if (this.documents(j).controls[j].get('required_type').value !== null) {
    //   this.documents(j).controls[j].get('required_type').setValue(null, { emitEvent: false })
    // } else {
    //   this.documents(j).controls[j].get('required_type').value
    // }
  }

  resetFilters(id){
    console.log(this.parent_document.controls[id].get('documents'),  this.documents(id).controls);
    this.documents(id).controls.forEach((element,index) => {
      console.log(element.get('required_type').value);
      element.get('required_type').setValue(null,{emitEvent: false})
      
    });
    
  }
}
