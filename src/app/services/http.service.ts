import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
	url = 'https://devadminapi.fatakpay.com'
	token = '';

  url1 = 'https://devonboardingapi.fatakpay.com'

  globalProductData = new ReplaySubject<any>();

  constructor(private _http: HttpClient, private message: NzMessageService,) { 
  }

  public UserLogin(data):any {
    const headers = new HttpHeaders()
    return this._http.post((this.url + `/user/auth/`), data, {headers:headers});
  }

  /// Verify API 
  public VerifyUser():any{
    let data;
    this.token = JSON.parse(localStorage.getItem('fatakpay_user_data'))?.token;
    const headers = new HttpHeaders().set("Authorization" , "token " +  this.token)
    return this._http.post((this.url +`/user/verify-admin-user/`), data, {headers: headers});
  }

  public fetchNBFCdata():any{
    this.token = JSON.parse(localStorage.getItem('fatakpay_user_data'))?.token;
    const headers = new HttpHeaders().set("Authorization" , "token " +  this.token)
    return this._http.get((this.url +`/master/fetch-master-data/NbfcMaster`), {headers: headers});
  }

  /**
   * createProductDetail
   */
  public createProductDetail(data) {
    this.token = JSON.parse(localStorage.getItem('fatakpay_user_data'))?.token;
    const headers = new HttpHeaders().set("Authorization" , "Token " +  this.token)
    return this._http.post((this.url +`/product/v1/create-product`), data, {headers: headers});
  }

  /**
   * fetchProductDetailsbyId
   */
  public fetchProductDetailsbyId(data) {
    this.token = JSON.parse(localStorage.getItem('fatakpay_user_data'))?.token;
    const headers = new HttpHeaders().set("Authorization" , "Token " +  this.token)
    return this._http.get((this.url +`/product/v1/create-product`),{params: data, headers: headers});
  }

  /**
   * fetchProductList
   */
   public fetchProductList(data) {
    this.token = JSON.parse(localStorage.getItem('fatakpay_user_data'))?.token;
    const headers = new HttpHeaders().set("Authorization" , "Token " +  this.token)
    return this._http.get((this.url +`/product/v1/create-product`),{params: data, headers: headers});
  }

  /**
   * editProductDetail
   */
   public editProductDetail(data, id) {
    this.token = JSON.parse(localStorage.getItem('fatakpay_user_data'))?.token;
    const headers = new HttpHeaders().set("Authorization" , "Token " +  this.token)
    return this._http.put((this.url +`/product/v1/edit-product/` + id), data, {headers: headers});
  }

  /**
   * createMasterPartner
   */
  public createMasterPartner(data) {
    this.token = JSON.parse(localStorage.getItem('fatakpay_user_data'))?.token;
    const headers = new HttpHeaders().set("Authorization" , "Token " +  this.token)
    return this._http.post((this.url +`/partner/v1/create-partner-partnermaster`), data, {headers: headers});
  }

  /**
   * editMasterPartner
   */
  public editMasterPartner(data, id) {
    this.token = JSON.parse(localStorage.getItem('fatakpay_user_data'))?.token;
    const headers = new HttpHeaders().set("Authorization" , "Token " +  this.token)
    return this._http.put((this.url +`/partner/v1/edit-partner-partnermaster/` + id), data, {headers: headers});
  }

  /**
   * createPartnerPayout
   */
   public createPartnerPayout(data) {
    this.token = JSON.parse(localStorage.getItem('fatakpay_user_data'))?.token;
    const headers = new HttpHeaders().set("Authorization" , "Token " +  this.token)
    return this._http.post((this.url +`/partner/v1/create-edit-partnerpayout`), data, {headers: headers});
  }

  /**
   * editPartnerPayout
   */
  public editPartnerPayout(data, id) {
    this.token = JSON.parse(localStorage.getItem('fatakpay_user_data'))?.token;
    const headers = new HttpHeaders().set("Authorization" , "Token " +  this.token)
    return this._http.post((this.url +`/partner/v1/edit-partner-partnermaster/` + id), data, {headers: headers});
  }

  /**
   * fetchMasterPartner
   */
   public fetchMasterPartner(data) {
    this.token = JSON.parse(localStorage.getItem('fatakpay_user_data'))?.token;
    const headers = new HttpHeaders().set("Authorization" , "Token " +  this.token)
    return this._http.get((this.url +`/master/fetch-master-data/PartnerMaster`),{params: data, headers: headers});
  }

  /**
   * fetchPartner
   */
   public fetchPartner(data) {
    this.token = JSON.parse(localStorage.getItem('fatakpay_user_data'))?.token;
    const headers = new HttpHeaders().set("Authorization" , "Token " +  this.token)
    return this._http.get((this.url +`/master/fetch-master-data/Partner`),{params: data, headers: headers});
  }

  
  /**
   * fetchPartnerPayout
   */
   public fetchPartnerPayout(data) {
    this.token = JSON.parse(localStorage.getItem('fatakpay_user_data'))?.token;
    const headers = new HttpHeaders().set("Authorization" , "Token " +  this.token)
    return this._http.get((this.url +`/partner/v1/create-edit-partnerpayout`),{params: data, headers: headers});
  }

  /**
   * createLimits
   */
   public createLimits(data) {
    this.token = JSON.parse(localStorage.getItem('fatakpay_user_data'))?.token;
    const headers = new HttpHeaders().set("Authorization" , "Token " +  this.token)
    return this._http.post((this.url +`/product/v1/create-product-limit`), data, {headers: headers});
  }

  /**
   * editLimits
   */
  public editLimits(data, id) {
    this.token = JSON.parse(localStorage.getItem('fatakpay_user_data'))?.token;
    const headers = new HttpHeaders().set("Authorization" , "Token " +  this.token)
    return this._http.put((this.url +`/product/v1/edit-product-limit/` + id), data, {headers: headers});
  }

  /**
   * fetchProductLimits
   */
   public fetchProductLimits(data) {
    this.token = JSON.parse(localStorage.getItem('fatakpay_user_data'))?.token;
    const headers = new HttpHeaders().set("Authorization" , "Token " +  this.token)
    return this._http.get((this.url +`/product/v1/create-product-limit`),{params: data, headers: headers});
  }
  
  /**
   * createPartnerPayout
   */
   public createNbfcMapping(data) {
    this.token = JSON.parse(localStorage.getItem('fatakpay_user_data'))?.token;
    const headers = new HttpHeaders().set("Authorization" , "Token " +  this.token)
    return this._http.post((this.url +`/product/v1/assign-nbfc-to-product`), data, {headers: headers});
  }

  /**
   * fetchNbfcs
   */
   public fetchNbfcs(data) {
    this.token = JSON.parse(localStorage.getItem('fatakpay_user_data'))?.token;
    const headers = new HttpHeaders().set("Authorization" , "Token " +  this.token)
    return this._http.get((this.url +`/product/v1/get-nbfc-product-mapping/`+ data.product_id),{ headers: headers});
  }

  /**
   * fetchEntity
   */
   public fetchEntity(data) {
    this.token = JSON.parse(localStorage.getItem('fatakpay_user_data'))?.token;
    const headers = new HttpHeaders().set("Authorization" , "Token " +  this.token)
    return this._http.get((this.url +`/master/fetch-master-data/EntityMaster`),{params: data, headers: headers});
  }
  /**
   * fetchEmploymentType
   */
   public fetchEmploymentType(data) {
    this.token = JSON.parse(localStorage.getItem('fatakpay_user_data'))?.token;
    const headers = new HttpHeaders().set("Authorization" , "Token " +  this.token)
    return this._http.get((this.url +`/master/fetch-master-data/EmploymentTypeMaster`),{params: data, headers: headers});
  }
  
  /**
   * fetchDocumentMaster
   */
   public fetchDocumentMaster(data) {
    this.token = JSON.parse(localStorage.getItem('fatakpay_user_data'))?.token;
    const headers = new HttpHeaders().set("Authorization" , "Token " +  this.token)
    return this._http.get((this.url +`/master/fetch-master-data/DocumentMaster`),{params: data, headers: headers});
  }

  
  /**
   * createLimits
   */
   public createUnderWritingRule(data) {
    this.token = JSON.parse(localStorage.getItem('fatakpay_user_data'))?.token;
    const headers = new HttpHeaders().set("Authorization" , "Token " +  this.token)
    return this._http.post((this.url +`/product/v1/add-edit-underwritingrule`), data, {headers: headers});
  }

  /**
   * fetchProductLimits
   */
   public fetchUnderWritingRule(data) {
    this.token = JSON.parse(localStorage.getItem('fatakpay_user_data'))?.token;
    const headers = new HttpHeaders().set("Authorization" , "Token " +  this.token)
    return this._http.get((this.url +`/product/v1/get-underwritingrule/` + data.product_id),{headers: headers});
  }
  /**
   * fetchTriggerMaster
   */
   public fetchTriggerMaster(data) {
    this.token = JSON.parse(localStorage.getItem('fatakpay_user_data'))?.token;
    const headers = new HttpHeaders().set("Authorization" , "Token " +  this.token)
    return this._http.get((this.url +`/master/fetch-master-data/TriggerMaster`),{params: data, headers: headers});
  }
  /**
   * fetchFrequencyMaster
   */
   public fetchFrequencyMaster(data) {
    this.token = JSON.parse(localStorage.getItem('fatakpay_user_data'))?.token;
    const headers = new HttpHeaders().set("Authorization" , "Token " +  this.token)
    return this._http.get((this.url +`/master/fetch-master-data/FrequencyMaster`),{params: data, headers: headers});
  }
  /**
   * fetchFeeTypeMaster
   */
   public fetchFeeTypeMaster(data) {
    this.token = JSON.parse(localStorage.getItem('fatakpay_user_data'))?.token;
    const headers = new HttpHeaders().set("Authorization" , "Token " +  this.token)
    return this._http.get((this.url +`/master/fetch-master-data/FeeTypeMaster`),{params: data, headers: headers});
  }
  /**
   * createProductFees
   */
   public createProductFees(data, product_id) {
    this.token = JSON.parse(localStorage.getItem('fatakpay_user_data'))?.token;
    const headers = new HttpHeaders().set("Authorization" , "Token " +  this.token)
    return this._http.post((this.url +`/product/v1/product-fees/` + product_id), data, {headers: headers});
  }

  /**
   * editProductFees
   */
  public editProductFees(data, product_id) {
    this.token = JSON.parse(localStorage.getItem('fatakpay_user_data'))?.token;
    const headers = new HttpHeaders().set("Authorization" , "Token " +  this.token)
    return this._http.put((this.url +`/product/v1/product-fees/` + product_id), data, {headers: headers});
  }

  /**
   * fetchProductFees
   */
   public fetchProductFees(data) {
    this.token = JSON.parse(localStorage.getItem('fatakpay_user_data'))?.token;
    const headers = new HttpHeaders().set("Authorization" , "Token " +  this.token)
    return this._http.get((this.url +`/product/v1/product-fees/` + data.product_id),{headers: headers});
  }

  
  /**
   * createOnboardingRules
   */
   public createOnboardingRules(data, product_id) {
    this.token = JSON.parse(localStorage.getItem('fatakpay_user_data'))?.token;
    const headers = new HttpHeaders().set("Authorization" , "Token " +  this.token)
    return this._http.post((this.url +`/product/v1/onboarding-rules/` + product_id), data, {headers: headers});
  }

  /**
   * editOnboardingRules
   */
  public editOnboardingRules(data, product_id) {
    this.token = JSON.parse(localStorage.getItem('fatakpay_user_data'))?.token;
    const headers = new HttpHeaders().set("Authorization" , "Token " +  this.token)
    return this._http.put((this.url +`/product/v1/onboarding-rules/` + product_id), data, {headers: headers});
  }

  /**
   * fetchOnboardingRules
   */
   public fetchOnboardingRules(data) {
    this.token = JSON.parse(localStorage.getItem('fatakpay_user_data'))?.token;
    const headers = new HttpHeaders().set("Authorization" , "Token " +  this.token)
    return this._http.get((this.url +`/product/v1/onboarding-rules/` + data.product_id),{headers: headers});
  }

  //************************ */
  public setProductValue(data): any {
    this.globalProductData.next(data);
  }

  /**
   * Application Module Fetch Loan 
   */
  public fetchLoanApplicationData(): any {
    this.token = JSON.parse(localStorage.getItem('fatakpay_user_data'))?.token;
    const headers = new HttpHeaders().set("Authorization" , "Token " +  this.token)
    return this._http.get((this.url1 +`/loan-application/v1/fetch-loan-application/LoanApplication`),{headers: headers});
  }

  public getMasterPartner(data){
    this.token = JSON.parse(localStorage.getItem('fatakpay_user_data'))?.token;
    const headers = new HttpHeaders().set("Authorization" , "Token " +  this.token)
    return this._http.get((this.url +`/partner/v1/get/master`),{headers: headers, params:data});
    // /partner/v1/get/master
  }

  public getListOfDocumentRequired(){
    this.token = JSON.parse(localStorage.getItem('fatakpay_user_data'))?.token;
    const headers = new HttpHeaders().set("Authorization" , "Token " +  this.token)
    return this._http.get((this.url +`/master/fetch-master-data/DocumentMaster`),{headers: headers});
// master/fetch-master-data/DocumentMaster
  }

  public createMasterPartnerForm(data){
    this.token = JSON.parse(localStorage.getItem('fatakpay_user_data'))?.token;
    const headers = new HttpHeaders().set("Authorization" , "Token " +  this.token)
    return this._http.post((this.url +`/partner/v1/create-partner-partnermaster`), data, {headers: headers});
    // {{url}}/partner/v1/create-partner-partnermaster
  }
}
