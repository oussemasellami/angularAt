import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes } from '@angular/router';
import { ResidencesComponent } from './residences/residences.component';
import { AppartmentComponent } from './appartment/appartment.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ShowappartmentComponent } from './showappartment/showappartment.component';

const ROUTES: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: ResidencesComponent },
  { path: "appartement", component: AppartmentComponent },
  { path: "appartement/showapparment/:id", component: ShowappartmentComponent },
  { path: "**", component: PagenotfoundComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
