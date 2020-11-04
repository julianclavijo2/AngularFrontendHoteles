import { Component, OnInit } from '@angular/core';
import { HotelServiceService } from 'src/app/services/hotel-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  hotels:any[]=[];
  constructor(private hotelService:HotelServiceService) { }

  ngOnInit() {
  }

  
  Buscar(param:string){
  
    this.hotelService.filtraHoteles(param).subscribe((data:any)=>{
      this.hotels = data;
    })
  }

}
