import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserAuthService } from '../services/auth/user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor( private authService : UserAuthService) { }

  intercept(req : HttpRequest<any> , next:HttpHandler):Observable<HttpEvent<any>>{
    const copiedReq = req.clone({
      params : req.params.append('auth',this.authService.getToken())
    });
    
    return next.handle(copiedReq);
  }
}
