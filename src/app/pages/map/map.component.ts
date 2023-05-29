import {Component, OnInit} from '@angular/core';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit{

  center: google.maps.LatLngLiteral;
  recyclingStation: google.maps.LatLngLiteral[]

  constructor( private locationService: LocationService) {}

  ngOnInit(): void {
    this.center = this.locationService.getCurentLocation()
    this.recyclingStation = this.locationService.getRecyclingStation()
  }

}
