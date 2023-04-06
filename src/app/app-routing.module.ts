import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {OverviewComponent} from "./pages/overview/overview.component";
import {MapComponent} from "./pages/map/map.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'overview', component: OverviewComponent },
  { path: 'map', component: MapComponent },
  { path: 'accounts', component: LoginComponent },
  { path: 'bills', component: LoginComponent },
  { path: 'budgets', component: LoginComponent },
  { path: 'settings', component: LoginComponent },
  { path: '**', redirectTo: '/overview' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
