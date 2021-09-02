import { Component, Input, OnInit } from '@angular/core';
import { customAnimation } from 'src/app/utls/animations';

@Component({
  selector: 'app-weekly',
  templateUrl: './weekly.component.html',
  styleUrls: ['./weekly.component.css'],
  animations: customAnimation
})
export class WeeklyComponent implements OnInit {

  @Input() daily:any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.daily)
  }

}
