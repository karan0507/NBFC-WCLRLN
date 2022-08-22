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
        this.getFormLoanData();
        this.globalFunction.globalUserData.subscribe(res => {
            console.log(res);
            this.userDetails = res;
        })
        // this.getFormLoanData();
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
        // source=Onboarding&datapoint=loan_application_global_search&keyword=9167937459
        var data = { 'datapoint': 'loan_application_global_search', 'source': 'Onboarding', 'page': 1, 'limit': 30,'keyword': this.searchValue ? this.searchValue : ''}

        if (this.searchValue) {
            //   data['page'] = 1
              data['keyword'] = this.searchValue
        }
        this.loanApplicationData = [];
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
                    if(res?.data){
                        res?.data.map((data)=>{
                            if(data['product_type'] == 'loan_application_onboarding'){
                                data['product_type'] = 'Application'
                            } else {
                                data['product_type'] = 'LMS'
                            }
                            this.loanApplicationData.push(data);
                        })
                    }
                    console.log(this.loanApplicationData);
                    // this.loanApplicationData = res?.data?.results;
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

//   nzFilterOption(query, option){
//     let val = option.nzLabel
//     console.log(option.nzLabel)
//     return option.nzLabel.toString().includes(query.toLowerCase());
//     // return option.nzLabel.includes(query.toLowerCase());
//   }

    nzFilterOption(inputValue: string, item: any) {
        return item.title.indexOf(inputValue) > -1;
    }

  onClickRedirectToSpecificComponent(e){
    console.log(e)
    console.log(this.selectedApplication);
    // this.globaldata.selectedGlobalApplicationLoan(e?.application_code);
    if(!e){
        return null;
    }
    if(e?.product_type == "Application"){
    if(e?.stage_id == 1){
        this.route.navigate(["applications/form-filling"],{ queryParams: {loan_id: e?.application_code}});
    } else if(e?.stage_id == 2){
        this.route.navigate(["applications/document-upload"],{ queryParams: {loan_id: e?.application_code}});
    } else if(e?.stage_id == 3){
        this.route.navigate(["applications/underwriting"],{ queryParams: {loan_id: e?.application_code}});
    } else if(e?.stage_id == 4){
        this.route.navigate(["applications/offer-proposed"],{ queryParams: {loan_id: e?.application_code}});
    } else if(e?.stage_id == 5){
        this.route.navigate(["applications/offer-acceptance"],{ queryParams: {loan_id: e?.application_code}});
    } else if(e?.stage_id == 6){
        this.route.navigate(["applications/e-signing"],{ queryParams: {loan_id: e?.application_code}});
    } else if(e?.stage_id == 7){
        this.route.navigate(["applications/disbursement"],{ queryParams: {loan_id: e?.application_code}});
    } else if(e?.stage_id == 8){
        this.route.navigate(["applications/rejected"],{ queryParams: {loan_id: e?.application_code}});
    } else if(e?.stage_id == 9){
        this.route.navigate(["applications/pre-approved"],{ queryParams: {loan_id: e?.application_code}});
    } else if(e?.stage_id == 10){
        this.route.navigate(["applications/nbfc-approval"],{ queryParams: {loan_id: e?.application_code}});
    } else if(e?.stage_id == 11){
        this.route.navigate(["applications/dormant"],{ queryParams: {loan_id: e?.application_code}});
    } else if(e?.stage_id == 15){
        this.route.navigate(["applications/closed"],{ queryParams: {loan_id: e?.application_code}});
    } } else {
        this.route.navigate(["lms/borrowers/all"],{ queryParams: {loan_id: e?.application_code}});
    }
    return null
    // return e = -1, this.selectedApplication = null;
    // this.selectedApplication = null;
    
    

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
      }, 1000);
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
