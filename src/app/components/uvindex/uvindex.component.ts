import { Component, OnInit } from '@angular/core';
import { RequestApiService } from 'src/app/services/request-api.service';
import { SearchResults } from 'src/app/utls/interfaces';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-uvindex',
  templateUrl: './uvindex.component.html',
  styleUrls: ['./uvindex.component.css'],
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            style({ height: 0, opacity: 0 }),
            animate('1s ease-out',
                    style({ height: 300, opacity: 1 }))
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
