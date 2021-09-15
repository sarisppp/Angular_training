import { TokenService } from 'src/app/Services/token.service';
import { AuthService } from './../../../Services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { DetailsOrderService } from 'src/app/service/details-order.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  date:any;
  details:any;   
  trainer:any;
  location:any;
  public loggedIn:any;

  constructor(private datapass:DetailsOrderService,private router:ActivatedRoute,
    private Auth:AuthService,
    private route:Router,
    private Token:TokenService) {
    let id = router.snapshot.params['id']-1;
    this.date = this.datapass.detailsOrder[id].date;
    this.details = this.datapass.detailsOrder[id].details;
    this.trainer =this.datapass.detailsOrder[id].trainer;
    this.location = this.datapass.detailsOrder[id].location;
  
   }

 

  ngOnInit(): void {
    this.Auth.authStatus.subscribe(value=>this.loggedIn = value);
  }
  
}
