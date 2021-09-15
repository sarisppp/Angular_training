import { TokenService } from 'src/app/Services/token.service';
import { PathService } from './../../../Services/path.service';
import { Component, OnInit,Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  public form = {
    firstname:null,
    lastname:null,
    department:null,
    employeeid:null,
    email:null,
    password:null,
    password_confirmation:null,
 };

 public error:any=[];

  constructor(private Path:PathService,
              private Token:TokenService,
              private router:Router) { }



  onSubmit(){  
   this.Path.register(this.form).subscribe(
      data=>this.handleResponse(data),
      error=>this.handleError(error)
    );
   }
  
   handleResponse(data: any) {
    this.Token.handle(data.access_token);
    this.router.navigateByUrl('/profile');
  }

   handleError(error:any){
    this.error = error.error.errors; 
   }

  ngOnInit(): void {
  }

}
