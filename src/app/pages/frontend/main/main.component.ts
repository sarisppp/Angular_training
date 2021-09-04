import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DetailsOrderService } from 'src/app/service/details-order.service';
import { ThisReceiver } from '@angular/compiler';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
  id:number=0;

  
  constructor(private data:DetailsOrderService,private router:Router) {
   
  }
  

  ngOnInit(): void {
  }

  onSelect(id:number){
    this.data.detailsOrder = 
   [
      {date:"25 ส.ค.64",details:"การทำการตลาดเพื่อกระจายแบรนด์ให้เข้าถึงกลุ่มลูกค้าผ่านสื่อกลาง Digital Marketing ก็คือการทำการตลาดรูปแบบใหม่บน Platform ดิจิทัลต่างๆ เพื่อเข้าถึงกลุ่มลูกค้าที่โลดแล่นอยู่บนโลกดิจิทัลที่มีอุปกรณ์อิเล็กทรอนิกส์ (Electronic) เป็นสื่อกลาง ",trainer:"นายวรกร กรมปร",location:"28 ส.ต. 64"},
      {date:"28 ส.ค.64",details:"รายละเอียด 1",trainer:"นายจันทร์ อังคาร",location:"30 ส.ต. 64"},
      {date:"30 ส.ค.64",details:"รายละเอียด 2",trainer:"นางอังคาร พุธ",location:"30 ส.ต. 64"}
   ]
    this.router.navigateByUrl("/details/"+id)
  }

 
}
