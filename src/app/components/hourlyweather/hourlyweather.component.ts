import { Component, Input, OnInit } from '@angular/core';
import { customAnimation } from 'src/app/utls/animations';

@Component({
  selector: 'app-hourlyweather',
  templateUrl: './hourlyweather.component.html',
  styleUrls: ['./hourlyweather.component.css'],
  animations: customAnimation
})
export class HourlyweatherComponent implements OnInit {

  @Input() hourly:any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.hourly,'test')
  }

}
