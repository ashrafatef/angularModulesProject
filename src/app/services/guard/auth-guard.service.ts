import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { UserAuthService } from '../auth/user-auth.service';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate  {

  constructor(private userAuth : UserAuthService , 
              private router : Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    //return this.userAuth.isAuthenticated();
    console.log("route is" + route + "state is" + state)
    if (!this.userAuth.isAuthenticated()) {
      this.router.navigate(['auth/login']);
    }
    return true;
  }
}
