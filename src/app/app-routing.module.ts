import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {OverviewComponent} from "./pages/overview/overview.component";
import {MapComponent} from "./pages/map/map.component";
import {AccountComponent} from "./pages/account/account.component";
import {PersonalScoreComponent} from "./pages/personal-score/personal-score.component";
import {LeaderboardComponent} from "./pages/leaderboard/leaderboard.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'overview', component: OverviewComponent },
  { path: 'map', component: MapComponent },
  { path: 'account', component: AccountComponent },
  { path: 'leaderboard', component: LeaderboardComponent },
  { path: 'personal_score', component: PersonalScoreComponent },
  { path: 'budgets', component: LoginComponent },
  { path: 'settings', component: LoginComponent },
  { path: '**', redirectTo: '/overview' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
