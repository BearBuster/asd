import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor() { }

  getCurentLocation(): google.maps.LatLngLiteral {
    return {
      lat: 47.010452,
      lng: 28.863810
    }
  }

  getRecyclingStation(): google.maps.LatLngLiteral[] {
    return [
      {lat: 47.0201949000198, lng: 28.845907828835426}, // glass
      {lat: 47.00274661279846, lng: 28.904090996350075}, // iron
      {lat: 47.0674716550517, lng: 28.77490862001604}, // tires
      {lat: 47.008350185999845, lng: 28.92117139819815}, // electro
      {lat: 47.01755055496008, lng: 28.823368427033788}, // banners
      {lat: 47.05085865066857, lng: 28.839758794503442}, // clothes
      {lat: 46.97769821540176, lng: 28.877810951977057}, // oil
    ]
  }

  getInfo(i: google.maps.LatLngLiteral) {
    let tmp = [
      {lat: 47.0201949000198, lng: 28.845907828835426, type: "glass", workTime: "09:00-18:00"}, // glass
      {lat: 47.00274661279846, lng: 28.904090996350075, type: "iron", workTime: "09:00-18:00"}, // iron
      {lat: 47.0674716550517, lng: 28.77490862001604, type: "tires", workTime: "09:00-18:00"}, // tires
      {lat: 47.008350185999845, lng: 28.92117139819815, type: "electro", workTime: "09:00-18:00"}, // electro
      {lat: 47.01755055496008, lng: 28.823368427033788, type: "banners", workTime: "09:00-18:00"}, // banners
      {lat: 47.05085865066857, lng: 28.839758794503442, type: "clothes", workTime: "09:00-18:00"}, // clothes
      {lat: 46.97769821540176, lng: 28.877810951977057, type: "oil", workTime: "09:00-18:00"}, // oil
    ]
    return tmp.find((el)=>{
      return el.lat == i.lat && el.lng == i.lng
    })
  }
}
