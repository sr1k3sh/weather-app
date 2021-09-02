import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-floattitle',
  templateUrl: './floattitle.component.html',
  styleUrls: ['./floattitle.component.css']
})
export class FloattitleComponent implements OnInit {

  @Input() floatTitle:string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
