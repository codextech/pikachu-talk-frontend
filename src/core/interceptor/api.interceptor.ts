import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize } from 'rxjs/operators';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {


  constructor(private spinner: NgxSpinnerService) {}


  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const token = localStorage.getItem('token') || '';
    request = request.clone({
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
      }),
   });

   this.spinner.show();

    return next.handle(request).pipe(
      finalize(() =>{
        this.spinner.hide() /* hide loader */
      })
    );
  }
}
