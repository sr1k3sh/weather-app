import { Component, Input, OnInit } from '@angular/core';
import { RequestApiService } from 'src/app/services/request-api.service';
import { CurrentResults, SearchResults } from 'src/app/utls/interfaces';
import { customAnimation } from 'src/app/utls/animations';

@Component({
  selector: 'app-uvindex',
  templateUrl: './uvindex.component.html',
  styleUrls: ['./uvindex.component.css'],
  animations: [
    customAnimation
  ]
})
export class UvindexComponent implements OnInit {

  public current:any;

  public apis: any ;

  constructor(private req:RequestApiService) {

  }

  ngOnInit(): void {
    this.apis = this.req.getPosition().subscribe(pos=>{
      let requestApi = this.req.requestApi(pos.lat,pos.lng);
      requestApi.subscribe( (searchresult:SearchResults) =>{
        this.current = searchresult.currently;
      });
    });
  }

  ngOnDestroy():void{
    this.apis.unsubscribe();
  }

}
