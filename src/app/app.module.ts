import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ModelsComponent } from './models/models.component';
import { NavbarV2Component } from './navbar-v2/navbar-v2.component';
import { Model1Component } from './models-item/model1/model1.component';
import { Model2Component } from './models-item/model2/model2.component';
import { Model3Component } from './models-item/model3/model3.component';
import { NgxGalleryModule } from 'ngx-gallery-9';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    ModelsComponent,
    NavbarV2Component,
    Model1Component,
    Model2Component,
    Model3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxGalleryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
