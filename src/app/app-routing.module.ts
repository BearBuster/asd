import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HacMainComponent} from "./pages/hac-main/hac-main.component";

const routes: Routes = [
  { path: '', component: HacMainComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
