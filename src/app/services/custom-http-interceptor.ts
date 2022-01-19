import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize, retry } from 'rxjs/operators';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from './http.service';


@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {
  token = ''
  constructor( private message: NzMessageService, private httpService: HttpService) { }

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
        // Handle errors
        catchError((error: HttpErrorResponse) => {
          if (error.status == 400) {
            if (error.error.message[0]) {
              this.message.error(error.error.message[0]);
            } else {
              this.message.error('Bad Request');
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
}