import { TokenService } from 'src/app/Services/token.service';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeforeLoginService implements CanActivate{

 
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean |
   UrlTree | Observable<boolean |
   UrlTree> | Promise<boolean | UrlTree> {
    return !this.Token.loggedIn();
  }

  constructor(private Token:TokenService) { }
}
