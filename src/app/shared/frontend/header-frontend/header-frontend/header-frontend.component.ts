import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/Services/token.service';
import { Router } from '@angular/router';
import { AuthService } from './../../../../Services/auth.service';

@Component({
  selector: 'app-header-frontend',
  templateUrl: './header-frontend.component.html',
  styleUrls: ['./header-frontend.component.css']
})
export class HeaderFrontendComponent implements OnInit {

  public loggedIn:any;
  
  constructor(private Auth:AuthService,
    private router:Router,
    private Token:TokenService) { }

  ngOnInit():void {
    this.Auth.authStatus.subscribe(value=>this.loggedIn = value);
  }




}
