import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = environment.token;

    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}/${environment.baseUrl}`,
        },
      });
    }

    return next.handle(request);
  }
}