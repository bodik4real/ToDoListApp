import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    const jwt = this.authService.getCachedAuthJwt();
    if (jwt && jwt.authToken) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${jwt.authToken}`,
          'Content-Type': 'application/json'
        }
      });
    }

    return next.handle(request);
  }
}
