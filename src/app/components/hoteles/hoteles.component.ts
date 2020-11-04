import { Component, OnInit } from '@angular/core';
import { HotelServiceService } from 'src/app/services/hotel-service.service';

@Component({
  selector: 'app-hoteles',
  templateUrl: './hoteles.component.html',
  styleUrls: ['./hoteles.component.css']
})
export class HotelesComponent implements OnInit {

  hoteles:any[] = [];


  constructor(private hotelService:HotelServiceService) { 
    this.hotelService.getHoteles().subscribe((data:any)=>{
      console.log(data);
      


      this.hoteles = data;
    });
  }

  ngOnInit() {

  }

}
