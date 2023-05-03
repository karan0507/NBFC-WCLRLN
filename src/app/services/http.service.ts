import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { fromEvent, merge, Observable, Observer, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
      providedIn: 'root'
})
export class HttpService {
      url = this.valueFunction();

      valueFunction(){
      var dynamic_url;

      if (location.origin == 'https://admin.fatakpay.com' || location.origin == 'http://admin.fatakpay.com') {
            dynamic_url = 'https://adminapi.fatakpay.com'
      } else if(location.origin == 'https://uatadmin.fatakpay.com' || location.origin == 'http://uatadmin.fatakpay.com'){
            dynamic_url = 'https://uatadminapi.fatakpay.com'
      } else {
            dynamic_url = 'https://devadminapi.fatakpay.com'
            // dynamic_url = 'https://adminapi.fatakpay.com'
      }
      return dynamic_url
      }
      // url1 = 'https://devonboardingapi.fatakpay.com'

      globalProductData = new ReplaySubject<any>();
      refreshBorrower = new ReplaySubject<any>();
      refreshUser = new ReplaySubject<any>();
      refreshAccount = new ReplaySubject<any>();
      refreshCreditLine = new ReplaySubject<any>();
      globalUserPermissionsData = new ReplaySubject<any>();
      limitCollapse = new ReplaySubject<any>();
      expnadList = new ReplaySubject<any>();
      constructor(private _http: HttpClient, private message: NzMessageService) {
      }

      public UserLogin(data): any {
            return this._http.post((this.url + `/user/auth/`), data);
      }

      public setPermissionValue(data): any {
            this.globalUserPermissionsData.next(data);
      }
      

      /// Verify API 
      public VerifyUser(): any {
            let data;
            return this._http.post((this.url + `/user/verify-admin-user/`), data);
      }

      // /partner/v1/export-excel-data/171
      public exportExcelDataOfPerticularCorporate(id): any {
            return this._http.get((this.url + `/partner/v1/export-excel-data/${id}`), {responseType: 'blob'});
      }

      public exportAppDataOfPerticularCorporate(id): any {
            return this._http.get((this.url + `/partner/v1/export-app-user-data/${id}`), {responseType: 'blob'});
      }

      /// Send Otp
      public sendOtp(data): any {
            return this._http.post((this.url + `/user/forgot-password/`), data);
      }

      public generateOfferForCorrespondingApplication(data): any {
            return this._http.post((this.url + `/central-api/v1/call-api`), data);
      }

      public fetchXMLData(data): any {
            return this._http.get((this.url + `/central-api/v1/call-api`), {params: data});
      }
      
      // UserKycCibil?application=15988

      public fetchExportData(data): any {
            return this._http.get((this.url + `/central-api/v1/call-api`), {params: data, responseType: 'blob'});
      }
      // generateOfferForCorrespondingApplication

      /// Verify OTP 
      public VerifyOtptopasswordchange(data): any {
            return this._http.post((this.url + `/user/forgot-password-validate/`), data);
      }

      public logout(data): any {
            return this._http.post((this.url + `/user/admin-logout`), data);
      }

      // /user/admin-logout

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
       * fetchProductAuditLog
       */
       public fetchProductAuditLog(data, endpoint) {
            return this._http.get((this.url + `/platform_central/fetch-history/` + endpoint), { params: data });
      }

      /**
       * fetchProductList
       */
      public fetchProductList(data?) {
            return this._http.get((this.url + `/product/v1/product`), { params: data });
      }
      /**
       * fetchVersionDetails
       */
       public fetchVersionDetails(id) {
            return this._http.get((this.url + `/product/v1/get-all-product-versions/` + id));
      }

      public fetchDocumentListProductWise() {
            return this._http.get((this.url + `/product/v1/document-list/`));
      }

      public getProductsDocumentDetails(id) {
            return this._http.get((this.url + `/product/v1/add-edit-product-document/` + id));
      }

      public updateProductDocuments(id,data) {
            return this._http.post((this.url + `/product/v1/add-edit-product-document/` + id), data);
      }
      
      /**
       * updateProductVersion
       */
       public updateProductVersion(data) {
            return this._http.post((this.url + `/product/v1/product-version`), data);
      }

     
      public exportPincodesType(id,type?) {
            let data={}
            return this._http.get((this.url + `/product/v1/export-pincodes/`+id+`/`+type), { params: data,responseType: 'blob' });
      }

      public uploadPincodes(data) {
            return this._http.post((this.url + `/product/v1/upload-pincode-file`), data);
      }
      
      /**
       * fetchEscrowStatementList
       */
       public fetchEscrowStatementList(data?) {
            return this._http.get((this.url + `/nbfc/v1/account-fetch-escrow-transactions`), { params: data });
      }

      public fetchRefundsList(data?) {
            return this._http.get((this.url + `/platform_central/v1/refund/get-list`), { params: data });
      }

      public impersonateCorporate(data?) {
            return this._http.get((this.url + `/platform_central/v1/impersonate/user/${data}`));
            // , { params: data }
      }

      /**
       * fetchGSTInvoiceList
       */
       public fetchGSTInvoiceList(data?) {
            return this._http.get((this.url + `/nbfc/v1/account-fetch-gst-list`), { params: data });
      }

      /**
       * fetchEmployeeList
       */
      public fetchEmployeeList(data) {
            return this._http.get((this.url + `/user/get-users`), { params: data });
      }

      public getApiBucketStats(data) {
            return this._http.get((this.url + `/platform_central/v1/get-api-stats`), { params: data });
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
            return this._http.get((this.url + `/master/fetch-master-data/Partner?all_partners=1`), { params: data });
      }


      /**
       * fetchPartnerPayout
       */
      public fetchPartnerPayout(data) {
            return this._http.get((this.url + `/product/v1/create-edit-partnerpayout`), { params: data });
      }

      public createNewBusinessNature(data){
            return this._http.post((this.url + `/platform_central/v1/add-business-nature`), data );
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
       * getCorporateWithBillDate
       */
       public getCorporateWithBillDate(data) {
            return this._http.get((this.url + `/partner/v1/get-corporate-with-bill-dates`), { params: data });
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
       * createOnboardingRules
       */
      public createRules(data, product_id) {
            return this._http.post((this.url + `/product/v1/save-product-transaction-configuration`), data);
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
       * fetchOnboardingRules
       */
      public fetchTransactionConfig(data) {
            return this._http.get((this.url + `/product/v1/get-product-transaction-configuration/` + data.product_id));
      }

      /**
       * fetchAllDocumentRules
       */
       public fetchAllDocumentRules(data) {
            return this._http.get((this.url + `/product/v1/get-product-document-rules/` + data));
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
      // 
      public fetchBorrowerList(data) {
            return this._http.get((this.url + `/loan-application/v1/borrowers-list`), { params: data });
      }

      public fetchEmiBorrowersList(data) {
            return this._http.get((this.url + `/loan-application/v1/fetch-emi-borrowers-list`), { params: data });
      }
      
      public fetchEmiBorrowersDetails(data) {
            return this._http.get((this.url + `/loan-application/v1/fetch-emi-borrowers-details`), { params: data });
      }

      public getEmiBillReport(data) {
            return this._http.get((this.url + `/loan-application/v1/generate-emi-bill-report`), { params: data ,responseType:'blob'});
      }

 
      public fetchEMIEligibilityList(data) {
            return this._http.get((this.url + `/platform_central/v1/emi-eligibility/list-file`), { params: data });
      }

      public viewEMIEligibilityList(id,data) {
            return this._http.get((this.url + `/platform_central/v1/emi-eligibility/view-file/`+ id),{params:data});
      }

      public uploadEMIEligibilityData(data) {
            return this._http.post((this.url + `/platform_central/v1/emi-eligibility/upload-file`), data);
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

      public activeInactive(id) {
            return this._http.put((this.url + `/partner/v1/corporate-block-all-employees/` + id), null);
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

      public exportDPDDays(data): any {
            return this._http.get((this.url + `/loan-application/v1/export-dpd-borrowers-list`), { responseType: 'blob', params: data });
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

      public uploadLoanSelfieDocument(data): any {
            return this._http.put((this.url + `/central-api/v1/call-api`), data);
      }

      // Upload document for loan application
      public uploadOcrDocument(data): any {
            return this._http.post((this.url + `/external/v1/validate-ocr`), data);
      }

      // Verify Loan Application Documents 
      public verifyLoanDocument(data): any {
            return this._http.post((this.url + `/central-api/v1/call-api`), data);
      }

      // Send E-mandate Link 
      public sendEmandateLink(data): any {
            return this._http.post((this.url + `/loan-application/v1/create-emandate-registration-link`), data);
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
      public exportReferral(id): Observable<any> {
            return this._http.get<Blob>((this.url + `/partner/v1/export-corporate-referral-cashback/` + id), { responseType: 'blob' as 'json'});
      }
      public exportCashback(id): Observable<any> {
            return this._http.get<Blob>((this.url + `/partner/v1/export-corporate-cashback-program/` + id), { responseType: 'blob' as 'json'});
      }

      public exportMonthWiseCorporateData(data): Observable<any> {
            // const headers = new HttpHeaders().set('Authorization', 'Token e910e4048d4b1bde8df20a0d6e9d0250a4d39cc9');
            return this._http.get<Blob>((this.url + `/partner/v1/corporate-employee-month-wise-data-export`), { params: data, responseType: 'blob' as 'json'});
      }


      public exportBilledUnBilled(data) {
            // const headers = new HttpHeaders().set('Authorization', 'Token e910e4048d4b1bde8df20a0d6e9d0250a4d39cc9');
            return this._http.get((this.url + `/central-api/v1/borrowers-bills`), { params: data});
      }
      
      public exportEscrowStatement(data): Observable<any> {
            // const headers = new HttpHeaders().set('Authorization', 'Token e910e4048d4b1bde8df20a0d6e9d0250a4d39cc9');
            return this._http.get<Blob>((this.url + `/nbfc/v1/account-export-escrow-transactions`), { params: data, responseType: 'blob' as 'json'});
      }
      public exportGSTList(data): Observable<any> {
            // const headers = new HttpHeaders().set('Authorization', 'Token e910e4048d4b1bde8df20a0d6e9d0250a4d39cc9');
            return this._http.get<Blob>((this.url + `/nbfc/v1/account-export-gst-list`), { params: data, responseType: 'blob' as 'json'});
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
            return this._http.delete((this.url + `/partner/v1/delete-doc/master/${id}`));
      }

      public upgradeToMasterPartner(id, data) {
            return this._http.put((this.url + `/partner/v1/upgrade-to-master/${id}`), data);
      }

      public resetPasswordForCorporateAdmin(data) {
            return this._http.post((this.url + `/partner/v1/reset-password-corporate-admin/partner`), data);
      }

      public resetPasswordForLenderAdmin(data) {
            return this._http.post((this.url + `/nbfc/v1/reset-nbfc-user-password`), data);
      }

      public getListOfEmployeeBasedOnParameter(data) {
            return this._http.get((this.url + `/partner/v1/corporate/all-employees`),{params: data});
      }

      public getListOfEmployeeAttandance(data) {
            return this._http.get((this.url + `/partner/v1/get-corporate-attendance-data`),{params: data});
      }
      public getMonthWiseCorporateData(data) {
            return this._http.get((this.url + `/partner/v1/corporate-employee-month-wise-data`),{params: data});
      }

      // /partner/v1/get-corporate-attendance-data

      public markEmployeeDetailsAsVerify(data){
            return this._http.post((this.url + `/partner/v1/mark-as-done-by-admin`), data);
      }

      public showPasswordOfCorporateAdmin(id) {
            return this._http.get((this.url + `/partner/v1/show-password-corporate-admin/${id}`));
      }

      public showPasswordOfLenderAdmin(id) {
            return this._http.get((this.url + `/nbfc/v1/show-nbfc-user-password/${id}`));
      }

      // /partner/v1/reset-password-corporate-admin/partner


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

      public getUserEmployeeDetails(data) {
            return this._http.get((this.url + `/partner/v1/admin-fetch-corporate-uploads-list`), { params: data });
      }

      public getDetailsOfUploadedFile(id,data) {
            return this._http.get((this.url + `/partner/v1/view-corporate-uploads/${id}`), { params: data });
      }

      public getDetailsOfUploadedEmpAttendanceFile(id,data) {
            return this._http.get((this.url + `/partner/v1/view-detailed-attendance-data/${id}`), { params: data });
      }

      // /partner/v1/view-detailed-attendance-data

      public downloadUploadedUserDetailFile(id) {
            return this._http.get((this.url + `/partner/v1/download-corporate-upload/${id}`), { responseType:'blob' });
      }

      public downloadUploadedEmpAttendanceDetailFile(id) {
            return this._http.get((this.url + `/partner/v1/export-detailed-attendance-data/${id}`), { responseType:'blob' });
      }

      public verifyUploadedFile(id, data){
            return this._http.put((this.url + `/partner/v1/verify-corporate-upload/${id}`), data);
      }

      public getListOfSection(){
            return this._http.get((this.url + `/partner/v1/file-sections-list`));
      }

      public 
      // /partner/v1/view-corporate-uploads/1?page=1&limit=10

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

      public fetchPermissionSlugsForEmployee(data){
            return this._http.get((this.url + `/platform_central/v1/get-controller-list`),{params: data});
      }

      public updateAppVersion(data?) {
            return this._http.post((this.url + `/platform_central/v1/app-version`), data);
      }

      public getAppVersion(){
            return this._http.get((this.url + `/platform_central/v1/app-version`));
      }

      public updatePermissionBasedOnType(id,data){
            return this._http.post((this.url + `/platform_central/v1/permissions/${id}`), data);
      }

      // /platform_central/permissions/

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

      public addEditExistingRole(data?) {
            return this._http.post(this.url + `/platform_central/v1/add-edit-role`, data);
      }

      public deleteRole(id,data) {
            return this._http.delete(this.url + `/platform_central/v1/delete-role/${id}`, data);
      }

      // 

      public getCouponCodeList(data?) {
            return this._http.get((this.url + `/platform_central/v1/coupon-code-list`), { params: data });
      }
      public getCashbackList(data?) {
            return this._http.get((this.url + `/partner/v1/corporate-cashback-screen`), { params: data });
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

      getCorporateDashboardList(data){
            return this._http.get(this.url + `/partner/v1/fetch-dashboard-corporate`, { params: data });
            // http://localhost:8000/partner/v1/fetch-dashboard-corporate?filter_type=This
      }

      getDetailForDashboardMandate(data) {
            return this._http.get(this.url + `/platform_central/v1/admin-dashboard/get-mandate-stats`, { params: data });
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

      getDormatSupportedStageList(data?){
            return this._http.get(this.url + `/platform_central/v1/get-dormant-supported_stage-data`,{params: data});
      }

      updataeDormantStage(data) {
            return this._http.post(this.url + `/platform_central/v1/update-stage-dormant-days`, data);
      }

      // /platform_central/v1/update-stage-dormant-days

      // /platform_central/v1/get-dormant-supported_stage-data

      viewSavedFileContent(id, data){
            return this._http.get(this.url + `/partner/v1/view-saved-employee-details-file/${id}`, {params: data});
      }

      downloadReport(data, url){
            return this._http.get(this.url + `/nbfc/v1/${url}`, {params: data , responseType: 'blob'});
      }

      restrictType(event) {
            if (event.which == 107 || event.which == 109 || event.which == 69 || event.which == 187 || event.which == 189) {
                  return false;
            }
      }
      
      updateLeftEmployeeStatus(id,data) {
            return this._http.put(this.url + `/partner/v1/corporate/deactivate-employee/${id}`, data);
      }

      toggleApplicationTODormantBasedOnTimeSpan(id,data) {
            return this._http.put(this.url + `/platform_central/v1/toggle-application-dormant/${id}`, data);
      }

      // 
      public getInvpoiceOfCorrespondingCorporate(id, data) {
            return this._http.get(this.url + `/partner/v1/export-invoice-pdf/${id}`,{responseType: 'blob',params: data})
      }

      public getAllExployees() {
            return this._http.get(this.url + `/partner/v1/corporate/get-all-employees`)
      }

      getListOfOTPSent( data){
            return this._http.get(this.url + `/platform_central/v1/fetch-otp-send-customers`, {params: data});
      }

      // platform_central/v1/fetch-otp-send-customers

      // Get Application stage count
      public getBorrowersStageCount(data?){
            return this._http.get(this.url + (`/loan-application/v1/get-lms-staging-list`), {params : data})
      }
      fetchVersionList( data){
            return this._http.get(this.url + `/loan-application/v1/get-app-version-list`, {params: data});
      }
      public fetchDeductionList(data?): Observable<any> {
            return this._http.get((this.url + `/hrms-api/quesscorp-deduction`), { params: data});
      }

      public exportDeductionList(data?): Observable<any> {
            return this._http.get((this.url + `/hrms-api/quesscorp-deduction`), { responseType: 'blob', params: data});
      }
      // public fetchLoanApplicationListExportGet(data): Observable<any> {
      //       // const headers = new HttpHeaders().set('Authorization', 'Token e910e4048d4b1bde8df20a0d6e9d0250a4d39cc9');
      //       return this._http.get<Blob>((this.url + `/central-api/v1/call-api`), { params: data, responseType: 'blob' as 'json'});
      // }
      public deductionApproval(id) {
            return this._http.post((this.url + `/hrms-api/quesscorp-deduction/` + id), id);
      }
      
      public deductionApprovalAmount(id) {
            return this._http.post((this.url + `/hrms-api/quesscorp-approve-deduction/` + id), id);
      }

      public deductionRejectAmount(id) {
            return this._http.post((this.url + `/hrms-api/quesscorp-reject-deduction/` + id), id);
      }

      public fetchReferralList(data?) {
            return this._http.get((this.url + `/partner/v1/get-referrals-list`), { params: data });
      }


      public fetchCashbackList(data?) {
            return this._http.get((this.url + `/partner/v1/get-corporate-cashback-program/`), { params: data });
      }

      public toggleReferralStatus(id) {
            return this._http.post((this.url + `/partner/v1/change-referral-status/` + id), id);
      }

      public toggleCashbackStatus(id) {
            return this._http.post((this.url + `/partner/v1/change-corporate-cashback-status/` + id), id);
      }

      public createReferral(data) {
            return this._http.post((this.url + `/partner/v1/create-referral-program`), data);
      }

      public createCashback(data) {
            return this._http.post((this.url + `/partner/v1/create-corporate-cashback-program/`), data);
      }

      public editCashback(data) {
            return this._http.put((this.url + `/partner/v1/edit-corporate-cashback-program`), data);
      }
      public editReferral(data) {
            return this._http.put((this.url + `/partner/v1/edit-referral-program`), data);
      }

      getBlockReason(id) {
            return this._http.get((this.url + `/loan-application/v1/get-borrowers-block-reasons/` + id));
      }

      showAttendance(id) {
            return this._http.get((this.url + `/partner/v1/show-attendance/` + id), {responseType: 'blob'});
      }

      pullprofile(id) {
            return this._http.get((this.url + `/loan-application/v1/pull-quess-profile-data/` + id));
      }
      pullAttendance(data) {
            return this._http.post((this.url + `/partner/v1/pull-attendance`), data);
      }
      public getCategoryList(data?) {
            return this._http.get((this.url + `/bbps/v1/category`), { params: data });
      }
      public getCategoryById(id) {
            return this._http.get((this.url + `/bbps/v1/category/`+ id));
      }
      public getBillersList(data?) {
            return this._http.get((this.url + `/bbps/v1/billers/`), { params: data });
      }
      public toogleStatusBillers(id) {
            return this._http.put((this.url + `/bbps/v1/billers/status/` + id), id);
      }
      public toogleStatusCategory(id) {
            return this._http.put((this.url + `/bbps/v1/category/status/` + id), id);
      }
      public fetchDownloads(data) {
            return this._http.get((this.url + `/platform_central/v1/fetch-downloads`), { params: data });
      }
      public exportApiStats(data): Observable<any> {
            return this._http.get<Blob>((this.url + `/platform_central/v1/export-api-stats`), { params: data, responseType: 'blob' as 'json' });
      }
      dpdSettlement(data) {
            return this._http.post((this.url + `/nbfc/v1/change-borrower-stages`), data);
      }
      moveToDocumentPending(data) {
            return this._http.post((this.url + `/loan-application/v1/move-to-document-pending`), data);
      }
      getLmhConfig(product_id) {
            return this._http.get((this.url + `/product/v1/get-product-lmh-configurations/` + product_id));
      }

      getLmhRule(product_id) {
            return this._http.get((this.url + `/product/v1/fetch-product-lms-rules/` + product_id));
      }

      createConfiguration(data) {
            return this._http.post((this.url + `/product/v1/save-product-lmh-configurations`), data);
      }
      createConfigurationRule(data) {
            return this._http.post((this.url + `/product/v1/save-product-lmh-rules`), data);
      }

      public getPersonalDetails(id) {
            return this._http.get((this.url + `/loan-application/v1/fetch-loan-application-personal-details/`+ id));
      }

      public getBankDetails(id) {
            return this._http.get((this.url + `/loan-application/v1/fetch-loan-application-offer-details/` + id));
      }
      public getKycDetails(id) {
            return this._http.get((this.url + `/loan-application/v1/fetch-loan-application-kyc-details/` + id));
      }
      public fetchGlobalProductView(id) {
            return this._http.get((this.url + `/product/v1/global-product-view/` + id));
      }
      public fetchProductEMI(id) {
            return this._http.get((this.url + `/product/v1/get-product-emi/` + id));
      }
      public fetchMasterData(master) {
            return this._http.get((this.url + `/master/fetch-master-data/` + master));
      }
      public createEmiConfiguration(data, id) {
            return this._http.post((this.url + `/product/v1/add-edit-product-emi/`+ id), data);
      }

      public fetchLoanApplicationEMIData(data) {
            return this._http.get((this.url + `/nbfc/v1/fetch-user-loan-application-details`), {params: data});
      }

      public createOfflineEMI(data) {
            return this._http.post((this.url + `/loan-application/v1/create-entries-offline-emi`), data);
      }

      public changeProductTypeAPICall(data) {
            return this._http.post((this.url + `/loan-application/v1/change-application-product`), data);
      }

      public getLMSCliList(data) {
            return this._http.get((this.url + `/platform_central/v1/admin-cli-section`), {params: data});
      }

      public getMasterDepartment() {
            return this._http.get((this.url + `/master/fetch-master-data/Departement`));
      }

      public getMasterDesignation() {
            return this._http.get((this.url + `/master/fetch-master-data/Desigination`));
      }

      public createRefund(data) {
            return this._http.post((this.url + `/central-api/v1/call-api`), data);
      }
      
      public updateTransactionDataStatus(data) {
            return this._http.post((this.url + `/platform_central/v1/bulk-transaction-action`), data);
      }

      public getTransactionActionList(data) {
            return this._http.get((this.url + `/platform_central/v1/bulk-transaction-action-list`),{params:data});
      }

      public getDetailTransactionAction(data,id) {
            return this._http.get((this.url + ` /platform_central/v1/show-bulk-transaction-action-content/`+id),{params:data});
      }

      public updateNachStatus(data) {
            return this._http.post((this.url + `/platform_central/v1/verify-bulk-enach-file`), data);
      }
      
      public changeSubStage(data) {
            return this._http.post((this.url + `/loan-application/v1/change-application-substage`), data);
      }
      
      public mapDSAtoProduct(data) {
            return this._http.post((this.url + `/product/v1/assign-product-to-dsa`), data);
      }

      public uploadCommissionDsa(data) {
            return this._http.post((this.url + `/partner/v1/commission/upload-file`), data);
      }
      
      public fetchBorrowersPaymentLinks(data,id) {
            return this._http.get((this.url + `/loan-application/v1/fetch-payment-links/`+id),{params:data});
      }
      public getProductTenureFromApplication(id) {
            return this._http.get((this.url + `/loan-application/v1/fetch-product-tenures/`+id));
      }
          
      public updateEmiManualOffer(data) {
            return this._http.post((this.url + `/loan-application/v1/emi-manual-offer`), data);
      }
      
      public getOutstandingBifurcation(data) {
            return this._http.get((this.url + `/loan-application/v1/fetch-product-tenures/`),{params:data});
      }

      public uploadPhysicalVerificationDocument(data){
            console.log(data, 'In Http');
            
            return this._http.post((this.url + `/partner/v1/commission/upload-file`), data);
      }

      public byPasPhysicalVerification(data){
            return this._http.post((this.url + `/loan-application/v1/bypass-physical-verification`), data);
      }
      
      public verifyPhysicalVerification(data){
            return this._http.post((this.url + `/loan-application/v1/verify-physical-verification`), data);
      }
      
      
      
}