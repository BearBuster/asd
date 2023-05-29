import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "./modules/material.module";
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from "@angular/forms";
import { OverviewComponent } from './pages/overview/overview.component';
import { MapComponent } from './pages/map/map.component';
import { MyGoogleMapsModule } from "./modules/my-google-maps.module";
import { AccountComponent } from './pages/account/account.component';
import { PersonalScoreComponent } from './pages/personal-score/personal-score.component';
import { LeaderboardComponent } from './pages/leaderboard/leaderboard.component';
import { MyQrComponent } from './pages/my-qr/my-qr.component';
import {QRCodeModule} from "angular2-qrcode";
import {AuthGuard} from "./guards/auth.guard";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OverviewComponent,
    MapComponent,
    AccountComponent,
    PersonalScoreComponent,
    LeaderboardComponent,
    MyQrComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
        FormsModule,
        MyGoogleMapsModule,
        QRCodeModule
    ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
