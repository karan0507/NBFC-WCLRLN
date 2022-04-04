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
      refreshBorrower = new ReplaySubject<any>();
      refreshUser = new ReplaySubject<any>();
      refreshAccount = new ReplaySubject<any>();
      refreshCreditLine = new ReplaySubject<any>();
      constructor(private _http: HttpClient, private message: NzMessageService) {
      }

      public UserLogin(data): any {
            return this._http.post((this.url + `/user/auth/`), data);
      }

      /// Verify API 
      public VerifyUser(): any {
            let data;
            return this._http.post((this.url + `/user/verify-admin-user/`), data);
      }

      /// Send Otp
      public sendOtp(data): any {
            return this._http.post((this.url + `/user/forgot-password/`), data);
      }

      /// Verify OTP 
      public VerifyOtptopasswordchange(data): any {
            return this._http.post((this.url + `/user/forgot-password-validate/`), data);
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

      public fetchNBFCdata(): any {
            return this._http.get((this.url + `/master/fetch-master-data/NbfcMaster`));
      }

      /**
       * createProductDetail
       */
      public createProductDetail(data) {
            return this._http.post((this.url + `/product/v1/product`), data);
      }

      /**
       * fetchProductDetailsbyId
       */
      public fetchProductDetailsbyId(data) {
            return this._http.get((this.url + `/product/v1/product`), { params: data });
      }

      /**
       * fetchGlobalProductDetailsbyId
       */
      public fetchGlobalProductDetailsbyId(id) {
            return this._http.get((this.url + `/product/v1/global-product-view/` + id));
      }

      /**
       * fetchProductList
       */
      public fetchProductList(data?) {
            return this._http.get((this.url + `/product/v1/product`), { params: data });
      }

      /**
       * fetchEmployeeList
       */
      public fetchEmployeeList(data) {
            return this._http.get((this.url + `/user/get-users`), { params: data });
      }
      /**
       * toggleEmployeeStatus
       */
      public toggleEmployeeStatus(id) {
            return this._http.post((this.url + `/user/change-employee-status/` + id), '');
      }
      /**
       * fetchEmployeeManagerList
       */
      public fetchEmployeeManagerList(data) {
            return this._http.get((this.url + `/user/get-managers/`), { params: data });
      }

      /**
       * editProductDetail
       */
      public editProductDetail(data, id) {
            return this._http.put((this.url + `/product/v1/edit-product/` + id), data);
      }

      /**
       * createMasterPartner
       */
      public createMasterPartner(data) {
            return this._http.post((this.url + `/partner/v1/create-partner-partnermaster`), data);
      }

      public updateMasterPartner(id, data) {
            return this._http.post((this.url + `/partner/v1/edit-partner-partnermaster/${id}`), data);
      }

      /**
       * addEditEmployee
       */
      public addEditEmployee(data) {
            return this._http.patch((this.url + `/user/admin-user/`), data);
      }
      /**
       * addEmployee
       */
      public addEmployee(data) {
            return this._http.post((this.url + `/user/admin-user/`), data);
      }

      /**
       * editMasterPartner
       */
      public editMasterPartner(data, id) {
            return this._http.put((this.url + `/partner/v1/edit-partner-partnermaster/` + id), data);
      }

      /**
       * createPartnerPayout
       */
      public createPartnerPayout(data) {
            return this._http.post((this.url + `/product/v1/create-edit-partnerpayout`), data);
      }

      /**
       * editPartnerPayout
       */
      public editPartnerPayout(data, id) {
            return this._http.post((this.url + `/partner/v1/edit-partner-partnermaster/` + id), data);
      }

      /**
       * fetchMasterPartner
       */
      public fetchMasterPartner(data?) {
            return this._http.get((this.url + `/master/fetch-master-data/PartnerMaster`), { params: data });
      }

      /**
       * fetchPartner
       */
      public fetchPartner(data?) {
            return this._http.get((this.url + `/master/fetch-master-data/Partner`), { params: data });
      }


      /**
       * fetchPartnerPayout
       */
      public fetchPartnerPayout(data) {
            return this._http.get((this.url + `/product/v1/create-edit-partnerpayout`), { params: data });
      }

      /**
       * createLimits
       */
      public createLimits(data) {
            return this._http.post((this.url + `/product/v1/create-product-limit`), data);
      }

      /**
       * createBlackBox
       */
       public createBlackBox(data) {
            return this._http.post((this.url + `/platform_central/v1/black-box-test`), data);
      }

      /**
       * editLimits
       */
      public editLimits(data, id) {
            return this._http.put((this.url + `/product/v1/edit-product-limit/` + id), data);
      }

      /**
       * fetchProductLimits
       */
      public fetchProductLimits(data) {
            return this._http.get((this.url + `/product/v1/create-product-limit`), { params: data });
      }

      /**
       * createPartnerPayout
       */
      public createNbfcMapping(data) {
            return this._http.post((this.url + `/product/v1/assign-nbfc-to-product`), data);
      }

      /**
       * fetchNbfcs
       */
      public fetchNbfcs(data) {
            return this._http.get((this.url + `/product/v1/get-nbfc-product-mapping/` + data.product_id));
      }

      /**
       * fetchEntity
       */
      public fetchEntity(data) {
            return this._http.get((this.url + `/master/fetch-master-data/EntityMaster`), { params: data });
      }
      /**
       * fetchEmploymentType
       */
      public fetchEmploymentType(data) {
            return this._http.get((this.url + `/master/fetch-master-data/EmploymentTypeMaster`), { params: data });
      }
      
      /**
       * fetchCorporationCategory
       */
       public fetchCorporationCategory(data) {
            return this._http.get((this.url + `/platform_central/v1/get-corporation-category`), { params: data });
      }

      /**
       * fetchDocumentMaster
       */
      public fetchDocumentMaster(data) {
            return this._http.get((this.url + `/master/fetch-master-data/DocumentMaster`), { params: data });
      }

      /**
       * fetchThirdPartyMaster
       */
       public fetchThirdPartyMaster(data) {
            return this._http.get((this.url + `/platform_central/v1/get-all-third-party-apis-list`), { params: data });
      }

      /**
       * createLimits
       */
      public createUnderWritingRule(data) {
            return this._http.post((this.url + `/product/v1/add-edit-underwritingrule`), data);
      }

      /**
       * fetchUnderWritingRule
       */
      public fetchUnderWritingRule(data) {
            return this._http.get((this.url + `/product/v1/get-underwritingrule/` + data.product_id));
      }
      /**
       * fetchUnderWritingSpecificEntity
       */
      public fetchUnderWritingSpecificEntity() {
            return this._http.get((this.url + `/platform_central/v1/get-underwriting-specific-entites`));
      }
      /**
       * fetchTriggerMaster
       */
      public fetchTriggerMaster(data) {
            return this._http.get((this.url + `/master/fetch-master-data/TriggerMaster`), { params: data });
      }
      /**
       * fetchFrequencyMaster
       */
      public fetchFrequencyMaster(data) {
            return this._http.get((this.url + `/master/fetch-master-data/FrequencyMaster`), { params: data });
      }
      /**
       * fetchFeeTypeMaster
       */
      public fetchFeeTypeMaster(data) {
            return this._http.get((this.url + `/master/fetch-master-data/FeeTypeMaster`), { params: data });
      }
      /**
       * createProductFees
       */
      public createProductFees(data, product_id) {
            return this._http.post((this.url + `/product/v1/product-fees/` + product_id), data);
      }

      /**
       * editProductFees
       */
      public editProductFees(data, product_id) {
            return this._http.put((this.url + `/product/v1/product-fees/` + product_id), data);
      }

      /**
       * fetchProductFees
       */
      public fetchProductFees(data) {
            return this._http.get((this.url + `/product/v1/product-fees/` + data.product_id));
      }

      // Get All Products
      public getProducts() {
            return this._http.get(this.url + `/product/v1/get-all-products`);
      }
      // Get All Products Fees
      public getProductWiseFees(id?) {
            return this._http.get(this.url + `/product/v1/get-all-product-fees/` + id);
      }

      getAllProducts() {
            return this._http.get(this.url + `/product/v1/product_master`);
      }
      /**
       * createOnboardingRules
       */
      public createOnboardingRules(data, product_id) {
            return this._http.post((this.url + `/product/v1/onboarding-rules/` + product_id), data);
      }

      /**
       * editOnboardingRules
       */
      public editOnboardingRules(data, product_id) {
            return this._http.put((this.url + `/product/v1/onboarding-rules/` + product_id), data);
      }

      /**
       * fetchOnboardingRules
       */
      public fetchOnboardingRules(data) {
            return this._http.get((this.url + `/product/v1/onboarding-rules/` + data.product_id));
      }

      /**
       * fetchRoles
       */
      public fetchRoles(data) {
            return this._http.get((this.url + `/master/fetch-master-data/Roles`), { params: data });
      }

      // LMS 

      /**
       * fetchBorrowerList
       */
      public fetchBorrowerList(data) {
            return this._http.get((this.url + `/loan-application/v1/borrowers-list`), { params: data });
      }

      /**
       * fetchTransactionList
       */
      public fetchTransactionList(data) {
            return this._http.get((this.url + `/loan-application/v1/transactions-list`), { params: data });
      }

      /**
       * fetchBorrowerDetail
       */
      public fetchBorrowerDetail(id) {
            return this._http.get((this.url + `/loan-application/v1/borrowers-detail/` + id));
      }

      /**
       * changePasswordByAdmin
       */
      public changePasswordByAdmin(data) {
            return this._http.post((this.url + `/user/change-password-by-admin/`), data);
      }

      /**
       * changePassword
       */
      public changePassword(data) {
            return this._http.post((this.url + `/user/change-password/`), data);
      }

      /**
       * fetchLoanAgreementMaster
       */
      public fetchLoanAgreementMaster() {
            return this._http.get((this.url + `/platform_central/v1/get-agreements`));
      }

      /**
       * fetchLoanAgreement
       */
      public fetchLoanAgreement(data) {
            return this._http.get((this.url + `/product/v1/get-agreement-mapping/` + data.product_id));
      }

      /**
       * activeInactiveProduct
       */
      public activeInactiveProduct(id) {
            return this._http.put((this.url + `/product/v1/activate-deactivate-product/` + id), null);
      }

      /**
       * createLoanAgreement
       */
      public createLoanAgreement(data) {
            return this._http.post((this.url + `/product/v1/add-edit-agreement-mapping`), data);
      }

      /// export function
      exportMasterSectionModule(res, section, file_formate, generateloader) {
            this.message.success('File Exported');
            this.message.remove(generateloader);
            var downloadURL = window.URL.createObjectURL(res);
            var link = document.createElement('a');
            link.href = downloadURL;
            link.download = section + '.' + file_formate;
            link.click();
      }

      //************************ */
      public setProductValue(data): any {
            this.globalProductData.next(data);
      }

      /**
       * Application Module Fetch Loan 
       */
      // Track Application for Loan ID
      public trackApplicationStatus(data?): any {
            return this._http.get((this.url + `/central-api/v1/call-api`), { params: data });
      }

      public fetchLoanApplicationData(data?): any {
            return this._http.get((this.url + `/loan-application/v1/fetch-loan-application/LoanApplication`), { params: data });
      }

      //   Fetch Master Income Source Range list
      public getMasterIncomeSource() {
            return this._http.get((this.url + `/master/fetch-master-data/IncomeSourceMaster`));
      }

      //   ****************************Loan Application Module API's ***************************
      // Get Application stage count
      public getApplicationStageCount(data?){
            return this._http.get(this.url + (`/central-api/v1/call-api`), {params : data})
      }
      //  Fetch All Stages**/
      public getStageMaster(id?): any {
            return this._http.get((this.url + `/platform_central/v1/get-allowed-stages/`+id));
      }

      public getStatusStageWise(data?): any {
            return this._http.get((this.url + `/central-api/v1/call-api`), { params: data });
      }
      // Export API
      public exportLoanApplicationData(data?): any {
            return this._http.post((this.url + `/central-api/v1/call-api`), data, { responseType: 'blob' });
      }

      public editLoanData(data): any {
            return this._http.post((this.url + `/central-api/v1/call-api`), data);
      }

      public fetchLoanApplicationList(data): Observable<any> {
            return this._http.get((this.url + `/central-api/v1/call-api`), { params: data });
      }
      public fetchLoanApplicationUpload(data): Observable<any> {
            return this._http.post((this.url + `/central-api/v1/call-api`), data);
      }
      public fetchLoanApplicationDelete(data): Observable<any> {
            return this._http.post((this.url + `/central-api/v1/call-api`), data);
      }

      // fetch Cibil
      public getCibilSMSData(data): any {
            // const headers = new HttpHeaders().set('Authorization', 'Token e910e4048d4b1bde8df20a0d6e9d0250a4d39cc9');
            return this._http.get((this.url + `/central-api/v1/call-api`), { params: data });
      }

      // Pull cibil from 3rd Party
      public pullCibilThirdParty(data): any {
            return this._http.post((this.url + `/central-api/v1/call-api`), data);
      }

      // pull sms from 3rd part
      public pullSMSThirdParty(data): any {
            return this._http.post((this.url + `/central-api/v1/call-api`), data);
      }

      // Fetch SMS
      public fetchSMS(id): any {
            return this._http.get((this.url + `/loan-application/v1/fetch-data/sms/` + id));
      }

      // Pull BlackBox Data

      public pullBlackBoxData(data): any {
            return this._http.get((this.url + `/central-api/v1/call-api`),{params : data});
      }

      // Upload document for loan application
      public uploadLoanDocument(data): any {
            return this._http.post((this.url + `/central-api/v1/call-api`), data);
      }

      // Verify Loan Application Documents 
      public verifyLoanDocument(data): any {
            return this._http.post((this.url + `/central-api/v1/call-api`), data);
      }

      // Download Loan Application Documents 
      public downloadDocuments(data): any {
            return this._http.get((this.url + `/central-api/v1/call-api`), { params: data });
      }

      // Update Single Loan Application Status
      public updateSingleLoanApp(data?): any {
            return this._http.post((this.url + `/central-api/v1/call-api`), data);
      }

      // Update Multiple Loan Application Status
      public updateMultipleLoanApp(data?): any {
            return this._http.post((this.url + `/central-api/v1/call-api`), data);
      }

      // Fetch Admin Proposed Offer
      public fetchEditofferData(data?) {
            return this._http.post((this.url + `/central-api/v1/call-api`), data);
            //** */ ?source=LMS&datapoint=fetch_proposed_offers&endpoint=1
            //** */ ?source=LMS&datapoint=fetch_accepted_offers&endpoint=1
      }

      // Edit Proposed Accepted Offers
      public editAdProposedOffer(id?) {
            return this._http.put((this.url + `/central-api/v1/call-api`), id);
            //**Form Body "source" : "LMS",
            //     "datapoint" : "edit_proposed_offers",
            //     "endpoint" : "1",
            //     "amount" : 2000
      }

      // Edit Admin Accepted Offers
      public editAdAcceptedOffer(id?) {
            return this._http.put((this.url + `/central-api/v1/call-api`), id);
            //**Form Body     "source" : "LMS",
            //     "datapoint" : "edit_accepted_offers",
            //     "endpoint" : "1",
            //     "amount" : 2000
      }

      // Admin Accepted Offers
      public acceptLoanOffer(data?) {
            return this._http.put((this.url + `/central-api/v1/call-api`), data);
            //**Form Body     // "source" : "LMS",
            // "datapoint" : "accept_offer",
            // "endpoint" : "9",
            // "remarks" : "Offer was not useful"
      }

      // Admin Rejected Offers
      public rejectedOffersAd(data?) {
            return this._http.post((this.url + `/central-api/v1/call-api`), data);
      }

      public moveApplication(data?) {
            return this._http.put((this.url + `/central-api/v1/call-api`), data);
      }


      // ********************************** End Loan Application API's***************************

      public getMasterPartner(data) {
            return this._http.get((this.url + `/partner/v1/get/master`), { params: data });
            // /partner/v1/get/master
      }

      public getPartnerDSAList(data) {
            return this._http.get((this.url + `/partner/v1/get/partner`), { params: data });
            // /partner/v1/get/master
      }

      public getPartnerDSAListById(id) {
            return this._http.get((this.url + `/partner/v1/get-detail/partner/${id}`));
      }

      // /partner/v1/get-detail/partner/21



      // /partner/v1/get/partner?partner_nature=DSA

      public getMerchantList(data) {
            return this._http.get((this.url + `/partner/v1/get/partner`), { params: data });
      }

      public getListOfDocumentRequired() {
            return this._http.get((this.url + `/master/fetch-master-data/DocumentMaster`));
            // master/fetch-master-data/DocumentMaster
      }

      public createMasterPartnerForm(data) {
            return this._http.post((this.url + `/partner/v1/create-partner-partnermaster`), data);
      }

      public updateMasterPartnerForm(id, data) {
            return this._http.put((this.url + `/partner/v1/edit-partner-partnermaster/${id}`), data);
      }


      public createMerchantForm(data) {
            return this._http.post((this.url + `/merchant/v1/add-merchant`), data);
      }

      public updateMerchantForm(id, data) {
            return this._http.put((this.url + `/merchant/v1/edit-merchant/${id}`), data);
      }

      // 

      public createNBFCForm(data) {
            return this._http.post((this.url + `/nbfc/v1/add-nbfc`), data);
      }

      public updateNBFCForm(id, data) {
            return this._http.put((this.url + `/nbfc/v1/edit-nbfc/${id}`), data);
      }

      public createPartnerForm(data) {
            return this._http.post((this.url + `/partner/v1/create-partner-partnermaster`), data);
      }

      // /partner/v1/create-partner-partnermaster

      // Application Module => End point 
      public fetchLoanApplicationListExport(data): Observable<any> {
            // const headers = new HttpHeaders().set('Authorization', 'Token e910e4048d4b1bde8df20a0d6e9d0250a4d39cc9');
            return this._http.post((this.url + `/central-api/v1/call-api`), data, {responseType: 'blob' });
      }
      // Application Module => End point 
      public fetchLoanApplicationListExportGet(data): Observable<any> {
            // const headers = new HttpHeaders().set('Authorization', 'Token e910e4048d4b1bde8df20a0d6e9d0250a4d39cc9');
            return this._http.get<Blob>((this.url + `/central-api/v1/call-api`), { params: data, responseType: 'blob' as 'json'});
      }

      // Application Module => End point 
      public postLoanApplicationApi(data): Observable<any> {
            // const headers = new HttpHeaders().set('Authorization', 'Token e910e4048d4b1bde8df20a0d6e9d0250a4d39cc9');
            return this._http.post((this.url + `/central-api/v1/call-api`), data);
      }

      public updateStatusForAuthorization(data): Observable<any> {
            const headers = new HttpHeaders();
            return this._http.put((this.url + `/central-api/v1/call-api`), data, { headers: headers });
      }

      public getLMSAuthorizationList(data): Observable<any> {
            const headers = new HttpHeaders();
            return this._http.get((this.url + `/central-api/v1/call-api`), { headers: headers, params: data, });
      }

      public updateLMSAuthorizationList(data) {
            const headers = new HttpHeaders();
            return this._http.put((this.url + `/central-api/v1/call-api`), data);
      }

      public deleteUserByUserId(id) {
            // /partner/v1/delete-user/partner/23
            return this._http.delete((this.url + `/partner/v1/delete-user/partner/${id}`));
      }

      public deleteNBFCDocumentByDocumentId(id) {
            // /partner/v1/delete-user/partner/23
            return this._http.delete((this.url + `/nbfc/v1/delete-nbfc-doc/${id}`));
      }

      public deletePartnerDocumentByDocumentId(id) {
            // /partner/v1/delete-user/partner/23
            return this._http.delete((this.url + `/partner/v1/delete-doc/partner/${id}`));
      }

      public deleteMasterDocumentByDocumentId(id) {
            // /partner/v1/delete-user/partner/23
            return this._http.delete((this.url + `/partner/v1/delete-doc/master/${id}`));
      }

      public deleteMasterUserByUserId(id) {
            // /partner/v1/delete-user/partner/23
            return this._http.delete((this.url + `/partner/v1/delete-user/master/${id}`));
      }
      public deleteNBFCUserByUserId(id) {
            // /partner/v1/delete-user/partner/23
            return this._http.delete((this.url + `/nbfc/v1/delete-nbfc/${id}`));
      }

      public getMasterPartnerById(id) {
            const headers = new HttpHeaders()
            return this._http.get((this.url + `/partner/v1/get-detail/master/${id}`), { headers: headers });
      }

      public getNBFCList(data) {
            return this._http.get((this.url + `/nbfc/v1/get-nbfc-list`), { params: data });
      }

      public getNBFCDetail(id) {
            return this._http.get((this.url + `/nbfc/v1/get-nbfc-detail/${id}`));
      }

      public getMerchantDetail(id) {
            return this._http.get((this.url + `/merchant/v1/get-merchant-details/${id}`));
      }

      // 

      public getPartnerList(data) {
            return this._http.get((this.url + `/partner/v1/get/partner`), { params: data });
      }

      public getPartnerListDetail(id) {
            return this._http.get((this.url + `/partner/v1/get-detail/partner/${id}`));
      }

      // Lender Management API
      public getLenderManagementList(data?): (Observable<any>) {
            return this._http.get((this.url + `/central-api/v1/call-api`), { params: data });
      }

      public getLendersCommitmentList(data?) {
            return this._http.get((this.url + `/central-api/v1/call-api`), { params: data });
      }

      public editLenderCommitment(data?) {
            return this._http.post((this.url + `/central-api/v1/call-api`), data);
      }

      public getLenderFundRequestList(data?) {
            return this._http.get((this.url + `/central-api/v1/call-api`), { params: data });
      }

      // Add Fund Reuqest
      public addLenderFundRequest(data?) {
            return this._http.post((this.url + `/central-api/v1/call-api`), data);
      }

      public getRepaymentList(data?) {
            return this._http.get((this.url + `/central-api/v1/call-api`), { params: data });
      }

      public addRepaymentNBFC(data?) {
            return this._http.post(this.url + `/central-api/v1/call-api`, data);
      }

      public getCouponCodeList(data?) {
            return this._http.get((this.url + `/platform_central/v1/coupon-code-list`), { params: data });
      }

      // Add Edit Coupon Code Data
      public addEditCouponCode(data?) {
            return this._http.post((this.url + `/platform_central/v1/add-edit-coupon-code`), data);
      }

      // Get Detail Of Coupon Code
      public getCouponDetail(data?) {
            return this._http.get((this.url + `/platform_central/v1/coupon-code-details/` + data));
      }

      public couponStatusChange(id, status) {
            return this._http.put((this.url + `/platform_central/v1/coupon-code-toggle/` + id), status)
      }

      // sample Download
      sampleDownloadGlobalFunction(section) {
            var link = document.createElement('a');
            link.href = '/assets/imports/' + section + '.xlsx';
            link.download = section + '.xlsx';
            link.click();
      }

      // uploadFile

      uploadMCCFile(data) {
            const headers = new HttpHeaders();
            return this._http.post(this.url + `/central-api/v1/call-api`, data, { headers: headers });
      }

      //UploadAndShowAggrement
      uploadAndShowAgreement(endPoint, action, id, data?) {
            const headers = new HttpHeaders();
            if (action === 'post') {
                  return this._http.post(this.url + `/partner/v1/upload-agreement/${endPoint}/${id}`, data, { headers: headers });
            } else if (action === 'get') {
                  return this._http.get(this.url + `/partner/v1/upload-agreement/${endPoint}/${id}`);
            }
      }

      uploadAndShowAgreementForNBFC(action, id, data?) {
            const headers = new HttpHeaders();
            if (action === 'post') {
                  return this._http.post(this.url + `/nbfc/v1/upload-agreement/${id}`, data, { headers: headers });
            } else if (action === 'get') {
                  return this._http.get(this.url + `/nbfc/v1/upload-agreement/${id}`, { headers: headers });
            }
      }

      fetchDetailForUserModuleDropDown(action) {
            // /platform_central/v1/get-states
            return this._http.get(this.url + `/platform_central/v1/${action}`);
      }

      getEmployeeDetailWithEmployeeTypeAndCorporateId(data) {
            return this._http.get(this.url + `/partner/v1/fetch-employee-details`, { params: data });
      }

      viewFileBeforeSaving(data) {
            return this._http.post(this.url + `/partner/v1/view-unsaved-employee-details-file`, data);
      }

      uploadUserEmployeePreviewedFile(data) {
            return this._http.post(this.url + `/partner/v1/upload-employee-details`, data);
      }

      getDetailForDashboardAPI(data) {
            return this._http.get(this.url + `/central-api/v1/call-api`, { params: data });
      }

      getDetailForDashboardAPIExistingAndAcquisition(action, data) {
            return this._http.get(this.url + `/loan-services/v1/dashboard/get-${action}`, { params: data });
      }

      fetchBranchOfChoosenCorporate(id) {
            return this._http.get(this.url + `/partner/v1/get-all-branches/${id}`);
      }

      verifyUploadedKycDocumentForMasterAndPartner(id, data) {
            return this._http.post(this.url + `/partner/v1/verify-kyc-doc/partner/${id}`, data);
      }

      verifyUploadedKycDocumentForMaster(id, data) {
            return this._http.post(this.url + `/partner/v1/verify-kyc-doc/master/${id}`, data);
      }

      verifyUploadedKycDocumentForNBFC(id, data) {
            return this._http.post(this.url + `/nbfc/v1/verify-doc/${id}`, data);
      }

      downloadEmployeeUserDetail(id){
            return this._http.get(this.url + `/partner/v1/download-employee-details/${id}`,{ responseType:'blob' });
      }

      viewSavedFileContent(id){
            return this._http.get(this.url + `/partner/v1/view-saved-employee-details-file/${id}`);
      }

      restrictType(event) {
            if (event.which == 107 || event.which == 109 || event.which == 69) {
                  return false;
            }
      }
}
