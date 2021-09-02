import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weathericon',
  templateUrl: './weathericon.component.html',
  styleUrls: ['./weathericon.component.css']
})
export class WeathericonComponent implements OnInit {

  @Input() icon:string = "rain";

  @Input() width:string = "32";

  constructor() { }

  ngOnInit(): void {
  }

}
