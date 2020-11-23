import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
//import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CarrosComponent } from './carros/carros.component';

@NgModule({
  declarations: [
    AppComponent,
    CarrosComponent
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
