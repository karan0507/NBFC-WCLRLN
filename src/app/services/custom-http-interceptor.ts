import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, finalize, retry,  map, takeUntil } from 'rxjs/operators';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from './http.service';
import { Router, ActivationStart } from '@angular/router';


@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {
  token = ''
  private pendingHTTPRequests$ = new Subject<void>();
  constructor( private message: NzMessageService, private router : Router, private httpService: HttpService) {
    router.events.subscribe(event => {
      if (event instanceof ActivationStart) {
        // Cancel pending calls
        this.cancelPendingRequests();
      }
    });
   }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let check_status;
    this.httpService.createOnline$().subscribe((isOnline) => {
      check_status = isOnline
    })
    if (check_status) {
      if (!(req.url.includes("user/auth/"))) {
        this.token = JSON.parse(localStorage.getItem('fatakpay_user_data'))?.token
        if (this.token) {
          req = req.clone({
            setHeaders: {
              Authorization: `Token ${this.token}`
            }
          });
        }
      }
      return next.handle(req)
      .pipe(
        takeUntil(this.onCancelPendingRequests()),
        map((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            if(event.body.result == 0){
              this.message.error(event.body.errors[0]);
            }
            // if(event.body.status_code == 200 && !event.body.success){
            //   this.message.error(event.body.message[0]);
            //   return null;
            // }
            if(event.body.status_code == 500){
              this.message.error(event.body.message);
            }
          }
          return event;
        }),
        // Handle errors
        catchError((error: HttpErrorResponse) => {
          if (error.status == 400) {
            if (Array.isArray(error.error.message)) {
              this.message.error(error.error.message[0]);
            } else {
              this.message.error(error.error.message  );
            }
          } else if (error.status == 403) {
            this.message.error("You don't have permission to access this");
          } else {
            this.message.error('Something Went Wrong');
          }
          return throwError(error);
        }),
      );
    } else {
      this.message.error('Kindly check your network');  
    }
  }

  public cancelPendingRequests() {
    this.pendingHTTPRequests$.next();
  }

  public onCancelPendingRequests() {
    return this.pendingHTTPRequests$.asObservable();
  }

}