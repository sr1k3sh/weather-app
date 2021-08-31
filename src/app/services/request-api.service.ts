import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SearchResults } from '../utls/interfaces';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RequestApiService {

  constructor(public http: HttpClient) {
    this.http = http;
  }

  requestApi(lat:number,lng:number):Observable<SearchResults>{
    return this.http.get<SearchResults>(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/8adaa664d67a4ecfcc5aff8a99260f16/${lat},${lng}`).pipe(take(1));
  }

  testApi():any{
    //http://www.nepalstock.com/stocklive
    return this.http.get<SearchResults>(`http://www.nepalstock.com/stocklive`);

    //return this.http.get<SearchResults>(`https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&APPID=48e7d8cbcc9406a77fe837a3f041fb02`);
  }

  getPosition():Observable<any>{
    return new Observable((observer) => {
      let watchId: number;

      // Simple geolocation API check provides values to publish
      if ('geolocation' in navigator) {
        watchId = navigator.geolocation.watchPosition((position: GeolocationPosition) => {
          observer.next({lng: position.coords.longitude, lat: position.coords.latitude});
        }, (error: GeolocationPositionError) => {
          observer.error(error);
        });
      } else {
        observer.error('Geolocation not available');
      }

      // When the consumer unsubscribes, clean up data ready for next subscription.
      return {
        unsubscribe() {
          navigator.geolocation.clearWatch(watchId);
        }
      };
    }).pipe(take(1));

  }

}
