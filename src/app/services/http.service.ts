import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
	url = 'https://devadminapi.fatakpay.com'
	token = '77ffd5bd55e4435a99274c5562266b1beb994b1e';

  url1 = 'https://devonboardingapi.fatakpay.com'

  globalProductData = new ReplaySubject<any>();
  headers: HttpHeaders;

  constructor(private _http: HttpClient, private message: NzMessageService,) { 
    
    this.headers = new HttpHeaders().set("Authorization" , "token " +  this.token)
  }

  public fetchNBFCdata():any{
    // this.token = JSON.parse(localStorage.getItem('sbs_user_data')).token;
    return this._http.get((this.url +`/master/fetch-master-data/NbfcMaster`), {headers: this.headers});
    // return this._http.get((this.url +`/master/fetch-master-data/NbfcMaster`));
  }

  /**
   * createProductDetail
   */
  public createProductDetail(data) {
    return this._http.post((this.url +`/product/v1/create-product`), data, {headers: this.headers});
  }

  /**
   * fetchProductDetailsbyId
   */
  public fetchProductDetailsbyId(data) {
    return this._http.get((this.url +`/product/v1/create-product`),{params: data, headers: this.headers});
  }

  /**
   * editProductDetail
   */
   public editProductDetail(data, id) {
    return this._http.put((this.url +`/product/v1/edit-product/` + id), data, {headers: this.headers});
  }

  /**
   * createMasterPartner
   */
  public createMasterPartner(data) {
    return this._http.post((this.url +`/partner/v1/create-partner-partnermaster`), data, {headers: this.headers});
  }

  /**
   * editMasterPartner
   */
  public editMasterPartner(data, id) {
    return this._http.put((this.url +`/partner/v1/edit-partner-partnermaster/` + id), data, {headers: this.headers});
  }

  /**
   * createPartnerPayout
   */
   public createPartnerPayout(data) {
    return this._http.post((this.url +`/partner/v1/create-edit-partnerpayout`), data, {headers: this.headers});
  }

  /**
   * editPartnerPayout
   */
  public editPartnerPayout(data, id) {
    return this._http.post((this.url +`/partner/v1/edit-partner-partnermaster/` + id), data, {headers: this.headers});
  }

  /**
   * fetchMasterPartner
   */
   public fetchMasterPartner(data) {
    return this._http.get((this.url +`/master/fetch-master-data/PartnerMaster`),{params: data, headers: this.headers});
  }

  /**
   * fetchPartner
   */
   public fetchPartner(data) {
    return this._http.get((this.url +`/master/fetch-master-data/Partner`),{params: data, headers: this.headers});
  }

  
  /**
   * fetchPartnerPayout
   */
   public fetchPartnerPayout(data) {
    return this._http.get((this.url +`/partner/v1/create-edit-partnerpayout`),{params: data, headers: this.headers});
  }

  /**
   * createLimits
   */
   public createLimits(data) {
    return this._http.post((this.url +`/product/v1/create-product-limit`), data, {headers: this.headers});
  }

  /**
   * editLimits
   */
  public editLimits(data, id) {
    return this._http.put((this.url +`/product/v1/edit-product-limit/` + id), data, {headers: this.headers});
  }

  /**
   * fetchProductLimits
   */
   public fetchProductLimits(data) {
    return this._http.get((this.url +`/product/v1/create-product-limit`),{params: data, headers: this.headers});
  }
  
  /**
   * createPartnerPayout
   */
   public createNbfcMapping(data) {
    return this._http.post((this.url +`/product/v1/assign-nbfc-to-product`), data, {headers: this.headers});
  }

  /**
   * fetchNbfcs
   */
   public fetchNbfcs(data) {
    return this._http.get((this.url +`/product/v1/get-nbfc-product-mapping/`+ data.product_id),{ headers: this.headers});
  }

  /**
   * fetchEntity
   */
   public fetchEntity(data) {
    return this._http.get((this.url +`/master/fetch-master-data/EntityMaster`),{params: data, headers: this.headers});
  }
  /**
   * fetchEmploymentType
   */
   public fetchEmploymentType(data) {
    return this._http.get((this.url +`/master/fetch-master-data/EmploymentTypeMaster`),{params: data, headers: this.headers});
  }

  
  /**
   * createLimits
   */
   public createUnderWritingRule(data) {
    return this._http.post((this.url +`/product/v1/add-edit-underwritingrule`), data, {headers: this.headers});
  }

  /**
   * fetchProductLimits
   */
   public fetchUnderWritingRule(data) {
    return this._http.get((this.url +`/product/v1/get-underwritingrule/` + data.product_id),{headers: this.headers});
  }

  //************************ */
  public setProductValue(data): any {
    this.globalProductData.next(data);
  }

  /**
   * Application Module Fetch Loan 
   */
  public fetchLoanApplicationData(): any {
    return this._http.get((this.url1 +`/loan-application/v1/fetch-loan-application/LoanApplication`),{headers: this.headers});
  }
}
