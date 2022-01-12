import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { NzMessageService } from 'ng-zorro-antd/message';
import { Observable } from "rxjs";
import { distinctUntilChanged, filter, map, startWith } from "rxjs/operators";
import { HttpService } from 'src/app/services/http.service';
import { IBreadcrumb } from "../../shared/interfaces/breadcrumb.type";
import { ThemeConstantService } from '../../shared/services/theme-constant.service';

@Component({
    selector: 'app-common-layout',
    templateUrl: './common-layout.component.html',
})

export class CommonLayoutComponent  {

    breadcrumbs$: Observable<IBreadcrumb[]>;
    contentHeaderDisplay: string;
    isFolded : boolean ;
    isSideNavDark : boolean;
    isExpand: boolean;
    selectedHeaderColor: string;

    constructor(private router: Router,  private activatedRoute: ActivatedRoute, private themeService: ThemeConstantService,private http: HttpService,
        private message: NzMessageService,) {
        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd),
            map(() => {
                let child = this.activatedRoute.firstChild;
                while (child) {
                    if (child.firstChild) {
                        child = child.firstChild;
                    } else if (child.snapshot.data && child.snapshot.data['headerDisplay']) {
                        return child.snapshot.data['headerDisplay'];
                    } else {
                        return null;
                    }
                }
                return null;
            })
        ).subscribe( (data: any) => {
            this.contentHeaderDisplay = data;
        });
    }

    ngOnInit() {
        if(localStorage.getItem('fatakpay_user_data')){
            var check_token_exists = JSON.parse(localStorage.getItem('fatakpay_user_data')).token;
            if(check_token_exists){
              this.VerifyUserFunction()
            }
          }
          else{
            this.router.navigate(['/authentication/login']);
            console.log('something')
            this.message.error('Authorization Details Not Found, Kindly Login again');
          }
        this.breadcrumbs$ = this.router.events.pipe(
            startWith(new NavigationEnd(0, '/', '/')),
            filter(event => event instanceof NavigationEnd),distinctUntilChanged(),
            map(data => this.buildBreadCrumb(this.activatedRoute.root))
        );
        this.themeService.isMenuFoldedChanges.subscribe(isFolded => this.isFolded = isFolded);
        this.themeService.isSideNavDarkChanges.subscribe(isDark => this.isSideNavDark = isDark);
        this.themeService.selectedHeaderColor.subscribe(color => this.selectedHeaderColor = color);   
        this.themeService.isExpandChanges.subscribe(isExpand => this.isExpand = isExpand);     
    }

    private buildBreadCrumb(route: ActivatedRoute, url: string = '', breadcrumbs: IBreadcrumb[] = []): IBreadcrumb[] {
        let label = '', path = '/', display = null, title;

        if (route.routeConfig) {
            if (route.routeConfig.data) {
                label = route.routeConfig.data['parent'] ? route.routeConfig.data['parent'] : route.routeConfig.data['title'];
                path += route.routeConfig.path;
                title = route.routeConfig.data['title'];
                // label = route.routeConfig.data['title'];
                // if (route.routeConfig.data['custom_url']) {
                //     path += route.routeConfig.data['custom_url'];
                // } else {
                //     path += route.routeConfig.path;
                // }
                // if(route.routeConfig.data['params']){
                //     params = route.routeConfig.data['params']
                // }
            }
        } 
        // else {
        //     label = 'Dashboard';
        //     path += 'dashboard';
        // }

        const nextUrl = path && path !== '/dashboard' ? `${url}${path}` : url;
        const breadcrumb = <IBreadcrumb>{
            label: label, url: nextUrl, title: title
        };

        const newBreadcrumbs = label ? [...breadcrumbs, breadcrumb] : [...breadcrumbs];
        if (route.firstChild) {
            return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
        }
        return newBreadcrumbs;
    }

    VerifyUserFunction(){
        this.http.VerifyUser().subscribe((res) => {
          if(res.success){
            // this.http.setPermissionValue(res.data.data.permissions_slug_list)
            localStorage.setItem('fatakpay_user_data', JSON.stringify(res.data));
            // if(res.data.data.icon){
            // //   this.http.setBrandLogoValueOnChange(res.data.data.icon)
            // }
          }
          else{
            this.router.navigate(['/authentication/login']);
            this.message.error(res.message);
            localStorage.removeItem('fatakpay_user_data')
          }
        }, (err) => {
          this.router.navigate(['/authentication/login']);
          this.message.error('Oops! something went wrong, Kindly Login again');
          localStorage.removeItem('fatakpay_user_data')
        })
      }
}