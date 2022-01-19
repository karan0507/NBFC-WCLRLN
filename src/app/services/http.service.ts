import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { fromEvent, merge, Observable, Observer, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
	url = 'https://devadminapi.fatakpay.com'

  url1 = 'https://devonboardingapi.fatakpay.com'

  globalProductData = new ReplaySubject<any>();

  constructor(private _http: HttpClient, private message: NzMessageService,) { 
  }

  public UserLogin(data):any {
    return this._http.post((this.url + `/user/auth/`), data);
  }

  /// Verify API 
  public VerifyUser():any{
    let data;
    return this._http.post((this.url +`/user/verify-admin-user/`), data);
  }

  public createOnline$() {
    return merge<boolean>(
      fromEvent(window, 'offline').pipe(map(() => false)),
      fromEvent(window, 'online').pipe(map(() => true)),
      new Observable((sub: Observer<boolean>) => {
        sub.next(navigator.onLine);
        sub.complete();
      }));
  }

  public fetchNBFCdata():any{
    return this._http.get((this.url +`/master/fetch-master-data/NbfcMaster`));
  }

  /**
   * createProductDetail
   */
  public createProductDetail(data) {
    return this._http.post((this.url +`/product/v1/product`), data);
  }

  /**
   * fetchProductDetailsbyId
   */
  public fetchProductDetailsbyId(data) {
    return this._http.get((this.url +`/product/v1/product`),{params: data});
  }

  /**
   * fetchProductList
   */
   public fetchProductList(data) {
    return this._http.get((this.url +`/product/v1/product`),{params: data});
  }

  /**
   * fetchProductList
   */
   public fetchEmployeeList(data) {
    return this._http.get((this.url +`/user/get-users`),{params: data});
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
    return this._http.post((this.url +`/product/v1/create-edit-partnerpayout`), data);
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
    return this._http.get((this.url +`/product/v1/create-edit-partnerpayout`),{params: data});
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

  /**
   * fetchNbfcs
   */
   public fetchNbfcs(data) {
    return this._http.get((this.url +`/product/v1/get-nbfc-product-mapping/`+ data.product_id));
  }

  /**
   * fetchEntity
   */
   public fetchEntity(data) {
    return this._http.get((this.url +`/master/fetch-master-data/EntityMaster`),{params: data});
  }
  /**
   * fetchEmploymentType
   */
   public fetchEmploymentType(data) {
    return this._http.get((this.url +`/master/fetch-master-data/EmploymentTypeMaster`),{params: data});
  }
  
  /**
   * fetchDocumentMaster
   */
   public fetchDocumentMaster(data) {
    return this._http.get((this.url +`/master/fetch-master-data/DocumentMaster`),{params: data});
  }

  
  /**
   * createLimits
   */
   public createUnderWritingRule(data) {
    return this._http.post((this.url +`/product/v1/add-edit-underwritingrule`), data);
  }

  /**
   * fetchProductLimits
   */
   public fetchUnderWritingRule(data) {
    return this._http.get((this.url +`/product/v1/get-underwritingrule/` + data.product_id));
  }
  /**
   * fetchTriggerMaster
   */
   public fetchTriggerMaster(data) {
    return this._http.get((this.url +`/master/fetch-master-data/TriggerMaster`),{params: data});
  }
  /**
   * fetchFrequencyMaster
   */
   public fetchFrequencyMaster(data) {
    return this._http.get((this.url +`/master/fetch-master-data/FrequencyMaster`),{params: data});
  }
  /**
   * fetchFeeTypeMaster
   */
   public fetchFeeTypeMaster(data) {
    return this._http.get((this.url +`/master/fetch-master-data/FeeTypeMaster`),{params: data});
  }
  /**
   * createProductFees
   */
   public createProductFees(data, product_id) {
    return this._http.post((this.url +`/product/v1/product-fees/` + product_id), data);
  }

  /**
   * editProductFees
   */
  public editProductFees(data, product_id) {
    return this._http.put((this.url +`/product/v1/product-fees/` + product_id), data);
  }

  /**
   * fetchProductFees
   */
   public fetchProductFees(data) {
    return this._http.get((this.url +`/product/v1/product-fees/` + data.product_id));
  }

  
  /**
   * createOnboardingRules
   */
   public createOnboardingRules(data, product_id) {
    return this._http.post((this.url +`/product/v1/onboarding-rules/` + product_id), data);
  }

  /**
   * editOnboardingRules
   */
  public editOnboardingRules(data, product_id) {
    return this._http.put((this.url +`/product/v1/onboarding-rules/` + product_id), data);
  }

  /**
   * fetchOnboardingRules
   */
   public fetchOnboardingRules(data) {
    return this._http.get((this.url +`/product/v1/onboarding-rules/` + data.product_id));
  }
  
  /**
   * fetchRoles
   */
   public fetchRoles(data) {
    return this._http.get((this.url +`/master/fetch-master-data/Roles`),{params: data});
  }

  //************************ */
  public setProductValue(data): any {
    this.globalProductData.next(data);
  }

  /**
   * Application Module Fetch Loan 
   */
  public fetchLoanApplicationData(data?): any {
    return this._http.get((this.url1 +`/loan-application/v1/fetch-loan-application/LoanApplication`));
  }

  public getMasterPartner(data){
    return this._http.get((this.url +`/partner/v1/get/master`),{params:data});
    // /partner/v1/get/master
  }

  public getMerchantList(data){
    const headers = new HttpHeaders()
    return this._http.get((this.url +`/merchant/v1/get-merchant-list`),{headers: headers, params:data});
  }

  public getListOfDocumentRequired(){
    return this._http.get((this.url +`/master/fetch-master-data/DocumentMaster`));
// master/fetch-master-data/DocumentMaster
  }

  public createMasterPartnerForm(data){
    return this._http.post((this.url +`/partner/v1/create-partner-partnermaster`), data);
  }

  public createMerchantForm(data){
    return this._http.post((this.url +`/merchant/v1/add-merchant`), data);
  }

  // 

  public createNBFCForm(data){
    const headers = new HttpHeaders()
    return this._http.post((this.url +`/nbfc/v1/add-nbfc`), data, {headers: headers});
  }

  public createPartnerForm(data){
    // this.token = JSON.parse(localStorage.getItem('fatakpay_user_data'))?.token;
    // const headers = new HttpHeaders().set("Authorization" , "Token " +  this.token)
    const headers = new HttpHeaders();
    return this._http.post((this.url +`/partner/v1/create-partner-partnermaster`), data, {headers: headers});
  }

  // /partner/v1/create-partner-partnermaster

  // Application Module => End point 
  public fetchLoanApplicationList(data):Observable <any> {
    return this._http.get((this.url +`/central-api/v1/call-api`), {params: data});
  }

  /**
   * Application Module Edit Loan Form
   */
   public editLoanData(data): any {
    return this._http.get((this.url1 +`/loan-application/v1/loan-application`),data);
  }

  public getMasterPartnerById(id){
    const headers = new HttpHeaders()
    return this._http.get((this.url +`/partner/v1/get-detail/master/${id}`), {headers: headers});
  }
  
  public getNBFCList(data){
    return this._http.get((this.url +`/nbfc/v1/get-nbfc-list`),{params:data});
  }

  public getNBFCDetail(id){
    // this.token = JSON.parse(localStorage.getItem('fatakpay_user_data'))?.token;
    const headers = new HttpHeaders();
    return this._http.get((this.url +`/nbfc/v1/get-nbfc-detail/${id}`), {headers: headers});
  }

  public getMerchantDetail(id){
    // this.token = JSON.parse(localStorage.getItem('fatakpay_user_data'))?.token;
    // const headers = new HttpHeaders().set("Authorization" , "Token " +  this.token)
    const headers = new HttpHeaders()
    return this._http.get((this.url +`/merchant/v1/get-merchant-details/${id}`), {headers: headers});
  }

  // 

  public getPartnerList(data){
    return this._http.get((this.url +`/partner/v1/get/partner`),{params:data});
  }

  public getPartnerListDetail(id){
    return this._http.get((this.url +`/partner/v1/get-detail/partner/${id}`));
  }

  // /nbfc/v1/get-nbfc-list
}
