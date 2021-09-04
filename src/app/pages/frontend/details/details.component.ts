import { ActivatedRoute } from '@angular/router';

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

  constructor(private datapass:DetailsOrderService,private router:ActivatedRoute) {
    let id = router.snapshot.params['id']-1;
    this.date = this.datapass.detailsOrder[id].date;
    this.details = this.datapass.detailsOrder[id].details;
    this.trainer =this.datapass.detailsOrder[id].trainer;
    this.location = this.datapass.detailsOrder[id].location;
  
   }

 

  ngOnInit(): void {
  }
  
}
