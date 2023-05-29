import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {OverviewComponent} from "./pages/overview/overview.component";
import {MapComponent} from "./pages/map/map.component";
import {AccountComponent} from "./pages/account/account.component";
import {PersonalScoreComponent} from "./pages/personal-score/personal-score.component";
import {LeaderboardComponent} from "./pages/leaderboard/leaderboard.component";
import {MyQrComponent} from "./pages/my-qr/my-qr.component";
import {AuthGuard} from "./guards/auth.guard";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'overview', component: OverviewComponent, canActivate:[AuthGuard] },
  { path: 'map', component: MapComponent, canActivate:[AuthGuard] },
  { path: 'account', component: AccountComponent, canActivate:[AuthGuard] },
  { path: 'leaderboard', component: LeaderboardComponent, canActivate:[AuthGuard] },
  { path: 'personal_score', component: PersonalScoreComponent, canActivate:[AuthGuard] },
  { path: 'budgets', component: LoginComponent, canActivate:[AuthGuard] },
  { path: 'settings', component: LoginComponent, canActivate:[AuthGuard] },
  { path: 'my-qr', component: MyQrComponent, canActivate:[AuthGuard] },
  { path: '**', redirectTo: '/overview' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
