import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService, NzMessageServiceModule } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/services/http.service';
import { GlobalservicesService } from '../../globalservices.service';
import { ThemeConstantService } from '../../services/theme-constant.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent{

    searchVisible : boolean = false;
    quickViewVisible : boolean = false;
    isFolded : boolean;
    isExpand : boolean;
    userDetails: any;
    loanApplicationData: any;
    isLoading: boolean = false
    debounce;
    
    constructor( private themeService: ThemeConstantService, private globalFunction :GlobalservicesService, private https: HttpService, private message: NzMessageService, private route: Router
        ,private globaldata: GlobalservicesService) {}

    ngOnInit(): void {
        this.globalFunction.globalUserData.subscribe(res => {
            console.log(res);
            this.userDetails = res;
        })
        this.getFormLoanData();
        // this.userDetails = JSON.parse(localStorage.getItem('fatakpay_user_data'));
        // if(!this.userDetails){
        //     this.userDetails = JSON.parse(localStorage.getItem('fatakpay_user_data'))
        //     console.log(this?.userDetails);
        // } 
        // else {
            // setTimeout(function () {
            //     // ...
            //     this.userDetails = JSON.parse(localStorage.getItem('fatakpay_user_data'))
            // }, 10000);
            // this.userDetails = JSON.parse(localStorage.getItem('fatakpay_user_data'))
            // console.log(this?.userDetails);
        // }
        this.themeService.isMenuFoldedChanges.subscribe(isFolded => this.isFolded = isFolded);
        this.themeService.isExpandChanges.subscribe(isExpand => this.isExpand = isExpand);
    }

    searchValue: String
    getFormLoanData(e?) {
        // if(e){
        // const search = e
        // if(search?.length >= 3){
        //   this.searchValue = search;
        // } else {
        //     return;
        // }           
        // }
        this.isLoading = true;
        // this.api_calling_loader['listLoader'] = true
        // this.loanApplicationData = [];
        var data = { 'datapoint': 'loan_application', 'endpoint': 'LoanApplication', 'source': 'Onboarding', 'page': 1, 'limit': 30 }

        if (this.searchValue) {
            //   data['page'] = 1
              data['name'] = this.searchValue
        }
        this.https.fetchLoanApplicationList(data).subscribe(res => {
              if (res?.success) {
                  console.log(res);
                  this.isLoading = false;
                    //   this.loanApplicationData = [];
                    // if(this._activeLoans){
                    //       this._activeLoans.forEach(element => {
                    //             this.expandSet.delete(element?.id)
                    //        });  
                    // }
                    // this.global.setApplicationCount();
                    this.loanApplicationData = res?.data?.results;
              } else {
                this.isLoading = false;
                this.message.error(res?.message)
                    // this.api_calling_loader['listLoader'] = false
                    // this.total_count = null
              }
        }, (err) => {
            this.isLoading = false;
            //   this.api_calling_loader['listLoader'] = false
        })
  }

  onClickRedirectToSpecificComponent(e){
    console.log(e)
    this.selectedApplication = '';
    console.log(this.selectedApplication);
    // this.globaldata.selectedGlobalApplicationLoan(e?.application_code);
    if(!e){
        return this.selectedApplication;
    }
    if(e?.stage_id?.pk == 1){
        this.route.navigate(["applications/form-filling"],{ queryParams: {loan_id: e?.application_code}});
            //     let newRouterLink = "applications/form-filling";
            //     this.route.navigate(["/"]).then(() => {
            //     this.route.navigate([newRouterLink,{ queryParams: {loan_id: e?.application_code}}]);
            //   });
    } else if(e?.stage_id?.pk == 2){
        this.route.navigate(["applications/document-upload"],{ queryParams: {loan_id: e?.application_code}});
    } else if(e?.stage_id?.pk == 3){
        this.route.navigate(["applications/underwriting"],{ queryParams: {loan_id: e?.application_code}});
    } else if(e?.stage_id?.pk == 4){
        this.route.navigate(["applications/offer-proposed"],{ queryParams: {loan_id: e?.application_code}});
    } else if(e?.stage_id?.pk == 5){
        this.route.navigate(["applications/offer-acceptance"],{ queryParams: {loan_id: e?.application_code}});
    } else if(e?.stage_id?.pk == 6){
        this.route.navigate(["applications/e-signing"],{ queryParams: {loan_id: e?.application_code}});
    } else if(e?.stage_id?.pk == 7){
        this.route.navigate(["applications/disbursement"],{ queryParams: {loan_id: e?.application_code}});
    } else if(e?.stage_id?.pk == 8){
        this.route.navigate(["applications/rejected"],{ queryParams: {loan_id: e?.application_code}});
    } else if(e?.stage_id?.pk == 9){
        this.route.navigate(["applications/pre-approved"],{ queryParams: {loan_id: e?.application_code}});
    } else if(e?.stage_id?.pk == 10){
        this.route.navigate(["nbfc-approval"],{ queryParams: {loan_id: e?.application_code}});
    } else if(e?.stage_id?.pk == 11){
        this.route.navigate(["applications/dormant"],{ queryParams: {loan_id: e?.application_code}});
    } else if(e?.stage_id?.pk == 15){
        this.route.navigate(["applications/closed"],{ queryParams: {loan_id: e?.application_code}});
    }
    e = null
    // return
    // return e = -1, this.selectedApplication = null;
    this.selectedApplication = null;
    
    

    // document.getElementById('globalSearch').value = ''
    // this.loanApplicationData
    // console.log(e);
    // application_code
  }

  selectedApplication: any

  onSearchGetList(e) {
        const search = e
        if(e.length >= 3){
          this.searchValue = e
          clearTimeout(this.debounce);
          this.debounce = setTimeout(() => {
          this.getFormLoanData();
      }, 500);
    }
  }

    toggleFold() {
        this.isFolded = !this.isFolded;
        this.themeService.toggleFold(this.isFolded);
    }

    toggleExpand() {
        this.isFolded = false;
        this.isExpand = !this.isExpand;
        this.themeService.toggleExpand(this.isExpand);
        this.themeService.toggleFold(this.isFolded);
    }

    searchToggle(): void {
        this.searchVisible = !this.searchVisible;
    }

    quickViewToggle(): void {
        this.quickViewVisible = !this.quickViewVisible;
    }

    notificationList = [
        {
            title: 'You received a new message',
            time: '8 min',
            icon: 'mail',
            color: 'ant-avatar-' + 'blue'
        },
        {
            title: 'New user registered',
            time: '7 hours',
            icon: 'user-add',
            color: 'ant-avatar-' + 'cyan'
        },
        {
            title: 'System Alert',
            time: '8 hours',
            icon: 'warning',
            color: 'ant-avatar-' + 'red'
        },
        {
            title: 'You have a new update',
            time: '2 days',
            icon: 'sync',
            color: 'ant-avatar-' + 'gold'
        }
    ];
}
