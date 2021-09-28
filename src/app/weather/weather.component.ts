import { Component, OnInit } from '@angular/core';
import { RequestApiService } from '../services/request-api.service';
import { SearchResults } from '../utls/interfaces';
import { customAnimation } from '../utls/animations';
import * as mapboxgl from 'mapbox-gl';
import * as MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  animations: customAnimation
})


export class WeatherComponent implements OnInit {

  public current:any;
  public currentLocation:any;
  public hourly:any;

  public time: any;

  public apis: any ;

  public icon: any = 'rain';

  public daily: any;

  public placeholder: string = "placeholder";

  constructor(private req: RequestApiService) {
  }

  ngOnInit(): void {
    this.apis = this.req.getPosition().subscribe(pos=>{
      let requestApi = this.req.requestApi(pos.lat,pos.lng);
      requestApi.subscribe( (searchresult:SearchResults) =>{
        this.currentLocation = searchresult.timezone;
        this.hourly = searchresult.hourly;
        this.current = searchresult.currently;
        this.daily = searchresult.daily;
      });

      //learning purpose
      // var map = new mapboxgl.Map({
      //   accessToken:'pk.eyJ1IjoicjFrM3NoIiwiYSI6ImNrdGp5Nmx5cDFnczAzMnJ0OHMwaDEwbWkifQ.E2jcYVFQPA6IJ9xLQ4A7sw',
      //   container: 'ng-mapbox',
      //   center: [ pos.lng , pos.lat], // starting position
      //   zoom: 14, // starting zoom
      //   style: 'mapbox://styles/mapbox/streets-v11'
      // });

      // map.addControl(
      //   new MapboxGeocoder({
      //   accessToken: "pk.eyJ1IjoicjFrM3NoIiwiYSI6ImNrdGp5Nmx5cDFnczAzMnJ0OHMwaDEwbWkifQ.E2jcYVFQPA6IJ9xLQ4A7sw",
      //   mapboxgl: map,
      //   marker:false
      //   })
      // );

      // map.addControl(
      //   new mapboxgl.GeolocateControl({
      //     positionOptions: {
      //       enableHighAccuracy: true
      //     },
      //     // When active the map will receive updates to the device's location as it changes.
      //     trackUserLocation: true,
      //     // Draw an arrow next to the location dot to indicate which direction the device is heading.
      //     // showUserHeading: true
      //   })
      // );

      // map.on('idle',function(){
      //   map.resize()
      // });

    });

    setInterval(()=>{
      this.time = {hour:this.getCurrentDate().hour,minute:this.getCurrentDate().minutes, sec:this.getCurrentDate().seconds<10?"0"+this.getCurrentDate().seconds:this.getCurrentDate().seconds};
    },1000);


  }

  handleAddressChange(address: any) {
    let requestApi = this.req.requestApi(address.geometry.location.lat(),address.geometry.location.lng());
    requestApi.subscribe( (searchresult:SearchResults) =>{
      this.currentLocation = address.name;
      this.hourly = searchresult.hourly;
      this.current = searchresult.currently;
      this.daily = searchresult.daily;
    });
  }

  ngOnDestroy():void{
    this.apis.unsubscribe();
  }

  getCurrentDate(): DateResults{
    var date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    return {hour:hr,minutes:min,seconds:sec};
  }


}

interface DateResults{
  hour:number;
  minutes:number;
  seconds:number;
}