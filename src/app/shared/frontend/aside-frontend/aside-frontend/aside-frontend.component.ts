import { TokenService } from 'src/app/Services/token.service';
import { Router } from '@angular/router';
import { AuthService } from './../../../../Services/auth.service';
import { LoginRegisterComponent } from './../../../../pages/login-register/login-register/login-register.component';
import { Component, OnInit} from '@angular/core';



@Component({
  selector: 'app-aside-frontend',
  templateUrl: './aside-frontend.component.html',
  styleUrls: ['./aside-frontend.component.css'],
  

})
export class AsideFrontendComponent implements OnInit {


  public loggedIn:any;

  constructor(private Auth:AuthService,
              private router:Router,
              private Token:TokenService) { }

  ngOnInit(): void {
    this.Auth.authStatus.subscribe(value=>this.loggedIn = value);
  }

  logout(event:MouseEvent){
    event.preventDefault();
    this.Token.remove();
    this.Auth.changeAuthStatus(false);
    this.router.navigateByUrl('/login');

  }
}

