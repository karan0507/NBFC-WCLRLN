import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-mobile-banner',
  templateUrl: './mobile-banner.component.html',
  styleUrls: ['./mobile-banner.component.css']
})
export class MobileBannerComponent implements OnInit {
  mobileBanerForm : FormGroup;
  _currOfferId : any;
  api_calling_loader= {
    table:false,
    button:false
  }
  bannerList:any = [];
  total_size:any;
  pageIdex : any;
globalPageSize : any;

setOfCheckedId = new Set<number>();
listOfCurrentPageData: readonly Data[] = [];
indeterminate: boolean = false;
checked: boolean = false;

  constructor(private fb:FormBuilder, private message:NzMessageService, private route: ActivatedRoute, private router:Router,
  private http:HttpService) { }

  ngOnInit(): void {
    // Get Dynamic Offer Id 
    this.route.queryParams.subscribe((param:any)=>{
      if(param['id']){
        this._currOfferId = param['id'];
        this.getBannersList()
        console.log('Banneee');
        
      }
    })

  }

  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
          this.setOfCheckedId.add(id);
    } else {
          this.setOfCheckedId.delete(id);
    }
}

onCurrentPageDataChange(listOfCurrentPageData: Data[]): void {
    this.listOfCurrentPageData = listOfCurrentPageData;
    this.refreshCheckedStatus();
}

onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
}

onAllChecked(checked: boolean): void {
    this.listOfCurrentPageData
          .filter(({ disabled }) => !disabled)
          .forEach(({ id }) => this.updateCheckedSet(id, checked));
    this.refreshCheckedStatus();
}

refreshCheckedStatus(): void {
    const listOfEnabledData = this.listOfCurrentPageData.filter(({ disabled }) => !disabled);
    this.checked = listOfEnabledData.every(({ id }) => this.setOfCheckedId.has(id));
    this.indeterminate = listOfEnabledData.some(({ id }) => this.setOfCheckedId.has(id)) && !this.checked;
}

  // Method to create new Banners
  createNewBanner(){

  }

  getBannersList(tabelFilter?){
    let data = {}
    
    this.http.getMobileBannersOfProducts(data).subscribe((res:any)=>{
      if(res.data.succes){
    console.log('banners working', res)
        this.bannerList = res.data.offer_banner_data;
      }
    })
  }

  openModal(data){

  }

  saveBannerDetails(){
    // name:Health Insurance
    // banner
    // redirect_url:https://www.maxlifeinsurance.com/
    // open_in:Internal
    // offer_id:2
  }

  bannerBtnLoader:any
  onSubmitBanners(){
    this.bannerBtnLoader = true
    let data={id:this.setOfCheckedId}
    this.http.updateActiveBanners(data).subscribe((res:any)=>{
      if(res.success){
        this.message.success(res.message)
        this.getBannersList();
        this.bannerBtnLoader = false
      }else{
        this.message.error(res.message)
        this.bannerBtnLoader = false;
      }
    })
  }

}
