import { Component, Input, OnInit } from '@angular/core';
import { RequestApiService } from 'src/app/services/request-api.service';
import { customAnimation } from 'src/app/utls/animations';
@Component({
  selector: 'app-currentweather',
  templateUrl: './currentweather.component.html',
  styleUrls: ['./currentweather.component.css'],
  animations: customAnimation
})
export class CurrentweatherComponent implements OnInit {

  @Input() item:any = "";

  @Input() current:any ;

  @Input() hourly:any;

  @Input() daily:any;

  constructor(private http:RequestApiService) { }

  ngOnInit(): void {
    console.log(this.hourly,'here to');
  }

}
