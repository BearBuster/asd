import { NgModule } from '@angular/core';
import { GoogleMapsModule } from "@angular/google-maps";

const GoogleMapsComponents = [
  GoogleMapsModule
]

@NgModule({
  imports: [GoogleMapsComponents],
  exports: [GoogleMapsComponents]
})
export class MyGoogleMapsModule { }
