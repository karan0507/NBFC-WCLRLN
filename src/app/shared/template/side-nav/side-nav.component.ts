import { Component } from '@angular/core';
import { ROUTES } from './side-nav-routes.config';
import { ThemeConstantService } from '../../services/theme-constant.service';
import { NzIconService } from 'ng-zorro-antd/icon';
import { HttpService } from 'src/app/services/http.service';
import { GlobalservicesService } from '../../globalservices.service';

@Component({
      selector: 'app-sidenav',
      templateUrl: './side-nav.component.html'
})

export class SideNavComponent {

      public menuItems: any[]
      isFolded: boolean;
      isSideNavDark: boolean;
      isExpand: boolean;
      applicationCount: any = [];

      constructor(private themeService: ThemeConstantService, private iconService: NzIconService, public http: HttpService, public global: GlobalservicesService) {
            var ngZorroIconLiteral = '<svg width="14" height="14" viewBox="0 0 14 14" class="fill-white" fill="white" xmlns="http://www.w3.org/2000/svg"><circle cx="7" cy="7" r="6.5" stroke="currentColor"/><path d="M9.318 4.242H7.08C7.36 4.39 7.57 4.572 7.71 4.788C7.854 5.004 7.948 5.25 7.992 5.526H9.318V6.36H7.98C7.9 6.796 7.698 7.174 7.374 7.494C7.054 7.814 6.628 8.044 6.096 8.184C6.268 8.276 6.416 8.41 6.54 8.586L9.048 12H8.01C7.802 12 7.648 11.918 7.548 11.754L5.316 8.682C5.248 8.586 5.174 8.518 5.094 8.478C5.018 8.434 4.898 8.412 4.734 8.412H3.726V7.608H4.854C5.418 7.608 5.868 7.494 6.204 7.266C6.544 7.038 6.764 6.736 6.864 6.36H3.714V5.526H6.888C6.812 5.126 6.608 4.818 6.276 4.602C5.944 4.382 5.486 4.272 4.902 4.272H3.726V3.402H9.318V4.242Z" fill="currentColor"/></svg>'
            this.iconService.addIconLiteral('ng-zorro:indian_rupee', ngZorroIconLiteral);
      }

      ngOnInit(): void {
            this.menuItems = ROUTES.filter(menuItem => menuItem);
            this.themeService.isMenuFoldedChanges.subscribe(isFolded => this.isFolded = isFolded);
            this.themeService.isExpandChanges.subscribe(isExpand => this.isExpand = isExpand);
            this.themeService.isSideNavDarkChanges.subscribe(isDark => this.isSideNavDark = isDark);
            this.global.setApplicationCount();
            this.global.applicationStageCount.subscribe(res => {
                 if(res){
                  this.applicationCount = res;
                  console.log(this.applicationCount);
                 }
            })
            
      }

      closeMobileMenu(): void {
            if (window.innerWidth < 992) {
                  this.isFolded = false;
                  this.isExpand = !this.isExpand;
                  this.themeService.toggleExpand(this.isExpand);
                  this.themeService.toggleFold(this.isFolded);
            }
      }

      onCheckReturn(data){
            var testVar = []
            testVar = data;
            console.log(testVar);
            // testVar.forEach(element => {
            //       console.log(element)
            //       // return element;
            // });
      }

      getCount(item) {
            // console.log(this.applicationCount, item);

            switch (item) {
                  case 'Form Filling':
                        return this.applicationCount ? this.applicationCount.find(res => res?.stage_name == 'Form Filling')?.applications : 0
                  case 'Pre Approved': return this.applicationCount ? this.applicationCount.find(res => res?.stage_name == 'Pre Approved')?.applications : 0
                  case 'Document Upload': return this.applicationCount ? this.applicationCount.find(res => res?.stage_name == 'Document Upload')?.applications : 0
                  case 'Underwriting': return this.applicationCount ? this.applicationCount.find(res => res?.stage_name == 'Underwriting')?.applications : 0
                  case 'NBFC Approval': return this.applicationCount ? this.applicationCount.find(res => res?.stage_name == 'NBFC Approval')?.applications : 0
                  case 'Offer Proposed': return this.applicationCount ? this.applicationCount.find(res => res?.stage_name == 'Offer Proposed')?.applications : 0
                  case 'Offer Acceptance': return this.applicationCount ? this.applicationCount.find(res => res?.stage_name == 'Offer Acceptance')?.applications : 0
                  case 'E-Nach/Signing': return this.applicationCount ? this.applicationCount.find(res => res?.stage_name == 'E-Nach / Signing')?.applications : 0
                  case 'Disbursement': return this.applicationCount ? this.applicationCount.find(res => res?.stage_name == 'Disbursement')?.applications : 0
                  case 'Rejected': return this.applicationCount ? this.applicationCount.find(res => res?.stage_name == 'Rejected')?.applications : 0
                  case 'Dormant ': return this.applicationCount ? this.applicationCount.find(res => res?.stage_name == 'Dormant')?.applications : 0
                  case 'Closed ': return this.applicationCount ? this.applicationCount.find(res => res?.stage_name == 'Closed')?.applications : 0
            }

      }
}
