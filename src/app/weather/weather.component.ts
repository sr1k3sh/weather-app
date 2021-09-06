import { Component, OnInit } from '@angular/core';
import { RequestApiService } from '../services/request-api.service';
import { SearchResults } from '../utls/interfaces';
import { customAnimation } from '../utls/animations';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
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
        console.log(this.daily)
      });
      // this.req.testApi(pos.lat,pos.lng).subscribe(d=>{
      //   console.log(d,'test')
      // })
    });



    let that = this;
    // this.req.testApi().subscribe((d:any)=>{
    // })
    setInterval(()=>{
      this.time = {hour:this.getCurrentDate().hour,minute:this.getCurrentDate().minutes, sec:this.getCurrentDate().seconds<10?"0"+this.getCurrentDate().seconds:this.getCurrentDate().seconds};
    },1000);
  }

  ngOnDestroy():void{
    this.apis.unsubscribe();
  }

  getCurrentDate(): any{
    var date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    return {hour:hr,minutes:min,seconds:sec};
  }


}
