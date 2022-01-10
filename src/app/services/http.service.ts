import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
	url = 'https://devadminapi.fatakpay.com'
	token : any;

  globalProductData = new ReplaySubject<any>();

  constructor(private _http: HttpClient, private message: NzMessageService,) { }

  public fetchNBFCdata():any{
    // this.token = JSON.parse(localStorage.getItem('sbs_user_data')).token;
    // const headers = new HttpHeaders().set("Authorization" , "token " +  this.token)
    // return this._http.get((this.url +`/master/fetch-master-data/NbfcMaster`), {headers:headers});
    return this._http.get((this.url +`/master/fetch-master-data/NbfcMaster`));
  }

  /**
   * createProductDetail
   */
  public createProductDetail(data) {
    return this._http.post((this.url +`/product/v1/create-product`), data);
  }

  /**
   * fetchProductDetailsbyId
   */
  public fetchProductDetailsbyId(data) {
    return this._http.get((this.url +`/product/v1/create-product`),{params: data});
  }

  /**
   * editProductDetail
   */
   public editProductDetail(data, id) {
    return this._http.put((this.url +`/product/v1/edit-product/` + id), data);
  }

  /**
   * createMasterPartner
   */
  public createMasterPartner(data) {
    return this._http.post((this.url +`/partner/v1/create-partner-partnermaster`), data);
  }

  /**
   * editMasterPartner
   */
  public editMasterPartner(data, id) {
    return this._http.put((this.url +`/partner/v1/edit-partner-partnermaster/` + id), data);
  }

  /**
   * createPartnerPayout
   */
   public createPartnerPayout(data) {
    return this._http.post((this.url +`/partner/v1/create-edit-partnerpayout`), data);
  }

  /**
   * editPartnerPayout
   */
  public editPartnerPayout(data, id) {
    return this._http.post((this.url +`/partner/v1/edit-partner-partnermaster/` + id), data);
  }

  /**
   * fetchMasterPartner
   */
   public fetchMasterPartner(data) {
    return this._http.get((this.url +`/master/fetch-master-data/PartnerMaster`),{params: data});
  }

  /**
   * fetchPartner
   */
   public fetchPartner(data) {
    return this._http.get((this.url +`/master/fetch-master-data/Partner`),{params: data});
  }

  
  /**
   * fetchPartnerPayout
   */
   public fetchPartnerPayout(data) {
    return this._http.get((this.url +`/partner/v1/create-edit-partnerpayout`),{params: data});
  }

  /**
   * createLimits
   */
   public createLimits(data) {
    return this._http.post((this.url +`/product/v1/create-product-limit`), data);
  }

  /**
   * editLimits
   */
  public editLimits(data, id) {
    return this._http.put((this.url +`/product/v1/edit-product-limit/` + id), data);
  }

  /**
   * fetchProductLimits
   */
   public fetchProductLimits(data) {
    return this._http.get((this.url +`/product/v1/create-product-limit`),{params: data});
  }
  
  /**
   * createPartnerPayout
   */
   public createNbfcMapping(data) {
    return this._http.post((this.url +`/product/v1/assign-nbfc-to-product`), data);
  }

  // /**
  //  * editPartnerPayout
  //  */
  // public editPartnerPayout(data, id) {
  //   return this._http.post((this.url +`/partner/v1/edit-partner-partnermaster/` + id), data);
  // }


  //************************ */
  public setProductValue(data): any {
    this.globalProductData.next(data);
  }
}
