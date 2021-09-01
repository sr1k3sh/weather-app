import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { UvindexComponent } from './components/uvindex/uvindex.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BackgroundComponent } from './components/background/background.component';

import { TemperatureConverterPipe } from './utls/TemperatureConverter';
import { CurrentweatherComponent } from './components/currentweather/currentweather.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    UvindexComponent,
    BackgroundComponent,
    TemperatureConverterPipe,
    CurrentweatherComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgScrollbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
