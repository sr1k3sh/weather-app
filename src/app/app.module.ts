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
import { WeathericonComponent } from './components/weathericon/weathericon.component';
import { HourlyweatherComponent } from './components/hourlyweather/hourlyweather.component';
import { FloattitleComponent } from './components/floattitle/floattitle.component';
import { WeeklyComponent } from './components/weekly/weekly.component';
import { AddremoveIconComponent } from './components/addremove-icon/addremove-icon.component';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    UvindexComponent,
    BackgroundComponent,
    TemperatureConverterPipe,
    HourlyweatherComponent,
    CurrentweatherComponent,
    WeathericonComponent,
    FloattitleComponent,
    WeeklyComponent,
    AddremoveIconComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgScrollbarModule,
    GooglePlaceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
