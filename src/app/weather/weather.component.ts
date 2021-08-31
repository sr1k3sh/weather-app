import { Component, OnInit } from '@angular/core';
import { RequestApiService } from '../services/request-api.service';
import { SearchResults } from '../utls/interfaces';
import { trigger, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            style({ height: 0, opacity: 0 }),
            animate('1s ease-out',
                    style({ height: 200, opacity: 1 }))
          ]
        ),
        transition(
          ':leave',
          [
            style({ height: 300, opacity: 1 }),
            animate('1s ease-in',
                    style({ height: 0, opacity: 0 }))
          ]
        )
      ]
    ),
    trigger(
      'fadeInAnimation',
      [
        transition(
          ':enter',
          [
            style({ opacity: 0 }),
            animate('1s ease-out',
                    style({opacity: 1 }))
          ]
        ),
        transition(
          ':leave',
          [
            style({ height: 300, opacity: 1 }),
            animate('1s ease-in',
                    style({ height: 0, opacity: 0 }))
          ]
        )
      ]
    )
  ]
})


export class WeatherComponent implements OnInit {

  public totalAngularPackages:any;
  public currentLocation:any;
  public hourly:any;

  public time: any;

  public apis: any ;

  constructor(private req: RequestApiService) {
  }

  ngOnInit(): void {
    this.apis = this.req.getPosition().subscribe(pos=>{
      let requestApi = this.req.requestApi(pos.lat,pos.lng);
      console.log('test')
      requestApi.subscribe( (searchresult:SearchResults) =>{
        this.currentLocation = searchresult.timezone;
        this.hourly = searchresult.hourly;
      });
    });

    let that = this;

    setInterval(()=>{
      this.time = {hour:this.getCurrentDate().hour,minute:this.getCurrentDate().minutes, sec:this.getCurrentDate().seconds};
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

// interface SearchResults {
//   total: number;
//   timezone: string;
//   summary: string;
//   hourly: object;
//   results: Array<object>;
//   currently: object;
// }