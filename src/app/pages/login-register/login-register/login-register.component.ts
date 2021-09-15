import { AuthService } from './../../../Services/auth.service';
import { PathService } from './../../../Services/path.service';
import { TokenService } from 'src/app/Services/token.service';
import { Component, OnInit, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit {

  public form = {
    email: null,
    password: null,
  };

  public error = null;
  constructor(private Path: PathService,
    private Token: TokenService,
    private router: Router,
    private Auth : AuthService
  ) { }


  onSubmit() {
    this.Path.login(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }


  handleResponse(data: any) {
    this.Token.handle(data.access_token);
    this.Auth.changeAuthStatus(true);
    this.router.navigateByUrl('/profile');
  }

  handleError(error: any) {
    this.error = error.error.error;
  }


 

  ngOnInit(): void {
  }

}
