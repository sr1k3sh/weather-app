import { Component, Input, OnInit } from '@angular/core';
import { customAnimation } from 'src/app/utls/animations';
@Component({
  selector: 'app-currentweather',
  templateUrl: './currentweather.component.html',
  styleUrls: ['./currentweather.component.css'],
  animations: customAnimation
})
export class CurrentweatherComponent implements OnInit {

  @Input() item:any = "";

  constructor() { }

  ngOnInit(): void {
    console.log(this.item,'here to')

  }

}
