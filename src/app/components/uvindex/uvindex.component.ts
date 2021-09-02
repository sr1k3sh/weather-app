import { Component, Input, OnInit } from '@angular/core';
import { RequestApiService } from 'src/app/services/request-api.service';
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

  // public current:any;

  public apis: any ;

  @Input() current:any ;

  @Input() hourly:any;

  @Input() daily:any;

  public floatTitle = "test";

  constructor(private req:RequestApiService) {

  }

  ngOnInit(): void {
  }

  ngOnDestroy():void{
    this.apis.unsubscribe();
  }

}
