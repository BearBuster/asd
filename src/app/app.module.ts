import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "./modules/material.module";
import { LoginComponent } from './pages/login/login.component';
import {FormsModule} from "@angular/forms";
import { OverviewComponent } from './pages/overview/overview.component';
import { MapComponent } from './pages/map/map.component';
import {GoogleMapsModule} from "@angular/google-maps";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OverviewComponent,
    MapComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
        FormsModule,
        GoogleMapsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
