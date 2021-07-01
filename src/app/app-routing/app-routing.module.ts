import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from "../app.component";
import { ContactPageComponent } from "../contact-page/contact-page.component";
import { Routes, RouterModule } from "@angular/router";
import {HomePageComponent} from "../home-page/home-page.component";

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'contact-page', component: ContactPageComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
