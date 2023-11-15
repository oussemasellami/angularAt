import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ResidencesComponent } from './residences/residences.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AppartmentComponent } from './appartment/appartment.component';
import { AppRoutingModule } from './app-routing.module';
import { ShowappartmentComponent } from './showappartment/showappartment.component';

@NgModule({
  declarations: [
    AppComponent,
    ResidencesComponent,
    HeaderComponent,
    FooterComponent,
    PagenotfoundComponent,
    AppartmentComponent,
    ShowappartmentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
