import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize, retry } from 'rxjs/operators';
import { NzMessageService } from 'ng-zorro-antd/message';


@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {
  constructor( private message: NzMessageService,) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  return next.handle(req)
    .pipe(
      // Handle errors
      catchError((error: HttpErrorResponse) => {
        if(error.status == 400){
          this.message.error('Bad Request');
        } else if (error.status == 403){
          this.message.error("You don't have permission to access this");
        } else{
          this.message.error('Something Went Wrong');
        }
        return throwError(error);
      }),
    );
  }
}