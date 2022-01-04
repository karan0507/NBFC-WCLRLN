import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
	url = 'https://devadminapi.fatakpay.com'
	token : any;

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
    return this._http.post((this.url +`/product/v1/create-product/` + id), data);
  }
}
