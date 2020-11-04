import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HotelServiceService {

  constructor(private http:HttpClient) { }

  getHoteles(){
   return  this.http.get("http://localhost:3001/api/hoteles/");
  }

  filtraHoteles(param:string){
    return this.http.get(`http://localhost:3001/api/hoteles/${param}`)
  }
}
