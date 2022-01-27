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
   * fetchEmployeeList
   */
   public fetchEmployeeList(data) {
    return this._http.get((this.url +`/user/get-users`),{params: data});
  }
  /**
   * fetchEmployeeManagerList
   */
   public fetchEmployeeManagerList(data) {
    return this._http.get((this.url +`/user/get-managers/`),{params: data});
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

  public updateMasterPartner(id,data) {
    return this._http.post((this.url +`/partner/v1/edit-partner-partnermaster/${id}`), data);
  }

  /**
   * addEditEmployee
   */
   public addEditEmployee(data) {
    return this._http.patch((this.url +`/user/admin-user/`), data);
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

  // LMS 

  /**
   * fetchBorrowerList
   */
  public fetchBorrowerList(data) {
    return this._http.get((this.url +`/loan-application/v1/borrowers-list`),{params: data});
  }

  /**
   * fetchTransactionList
   */
   public fetchTransactionList(data) {
    return this._http.get((this.url +`/loan-application/v1/transactions-list`),{params: data});
  }

  /**
   * fetchBorrowerDetail
   */
   public fetchBorrowerDetail(id) {
    return this._http.get((this.url +`/loan-application/v1/borrowers-detail/` + id));
  }

  /**
   * changePasswordByAdmin
   */
   public changePasswordByAdmin(data) {
    return this._http.post((this.url +`/user/change-password-by-admin/`), data);
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

  public getPartnerDSAList(data){
    return this._http.get((this.url +`/partner/v1/get/partner`),{params:data});
    // /partner/v1/get/master
  }

  public getPartnerDSAListById(id){
    return this._http.get((this.url +`/partner/v1/get-detail/partner/${id}`));
  }
  
  // /partner/v1/get-detail/partner/21



  // /partner/v1/get/partner?partner_nature=DSA

  public getMerchantList(data){
    return this._http.get((this.url +`/partner/v1/get/partner`),{params:data});
  }

  public getListOfDocumentRequired(){
    return this._http.get((this.url +`/master/fetch-master-data/DocumentMaster`));
// master/fetch-master-data/DocumentMaster
  }

  public createMasterPartnerForm(data){
    return this._http.post((this.url +`/partner/v1/create-partner-partnermaster`), data);
  }

  public updateMasterPartnerForm(id, data){
    return this._http.put((this.url +`/partner/v1/edit-partner-partnermaster/${id}`), data);
  }
  

  public createMerchantForm(data){
    return this._http.post((this.url +`/merchant/v1/add-merchant`), data);
  }

  public updateMerchantForm(id, data){
    return this._http.put((this.url +`/merchant/v1/edit-merchant/${id}`), data);
  }

  // 

  public createNBFCForm(data){
    return this._http.post((this.url +`/nbfc/v1/add-nbfc`), data);
  }

  public updateNBFCForm(id,data){
    return this._http.put((this.url +`/nbfc/v1/edit-nbfc/${id}`), data);
  }

  public createPartnerForm(data){
    return this._http.post((this.url +`/partner/v1/create-partner-partnermaster`), data);
  }

  // /partner/v1/create-partner-partnermaster

  // Application Module => End point 
  public fetchLoanApplicationList(data):Observable <any> {
    const headers = new HttpHeaders().set('Authorization','Token e910e4048d4b1bde8df20a0d6e9d0250a4d39cc9');
    return this._http.get((this.url +`/central-api/v1/call-api`), {headers : headers, params: data,});
  }

  public getLMSAuthorizationList(data):Observable <any> {
    const headers = new HttpHeaders();
    return this._http.get((this.url +`/central-api/v1/call-api`), {headers : headers, params: data,});
  }

  /**
   * Application Module Edit Loan Form
   */
   public editLoanData(data): any {
    return this._http.get((this.url1 +`/loan-application/v1/loan-application`),data);
  }

  public deleteUserByUserId(id){
    // /partner/v1/delete-user/partner/23
    return this._http.delete((this.url +`/partner/v1/delete-user/partner/${id}`));
  }

  public deleteNBFCDocumentByDocumentId(id){
    // /partner/v1/delete-user/partner/23
    return this._http.delete((this.url +`/nbfc/v1/delete-nbfc-doc/${id}`));
  }

  public deletePartnerDocumentByDocumentId(id){
    // /partner/v1/delete-user/partner/23
    return this._http.delete((this.url +`/partner/v1/delete-doc/partner/${id}`));
  }

  public deleteMasterDocumentByDocumentId(id){
    // /partner/v1/delete-user/partner/23
    return this._http.delete((this.url +`/partner/v1/delete-doc/master/${id}`));
  }

  public deleteMasterUserByUserId(id){
    // /partner/v1/delete-user/partner/23
    return this._http.delete((this.url +`/partner/v1/delete-user/master/${id}`));
  }
  public deleteNBFCUserByUserId(id){
    // /partner/v1/delete-user/partner/23
    return this._http.delete((this.url +`/nbfc/v1/delete-nbfc/${id}`));
  }

  public getMasterPartnerById(id){
    const headers = new HttpHeaders()
    return this._http.get((this.url +`/partner/v1/get-detail/master/${id}`), {headers: headers});
  }
  
  public getNBFCList(data){
    return this._http.get((this.url +`/nbfc/v1/get-nbfc-list`),{params:data});
  }

  public getNBFCDetail(id){
    return this._http.get((this.url +`/nbfc/v1/get-nbfc-detail/${id}`));
  }

  public getMerchantDetail(id){
    return this._http.get((this.url +`/merchant/v1/get-merchant-details/${id}`));
  }

  // 

  public getPartnerList(data){
    return this._http.get((this.url +`/partner/v1/get/partner`),{params:data});
  }

  public getPartnerListDetail(id){
    return this._http.get((this.url +`/partner/v1/get-detail/partner/${id}`));
  }

  // Lender Management API
  public getLenderManagementList(){
    return this._http.get(this.url + `/loan-application/v1/lender-management-dashboard`);
  }
}
