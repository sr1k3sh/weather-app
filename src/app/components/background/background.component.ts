import { Component, OnInit } from '@angular/core';
import { Pixel } from 'src/app/utls/bgColor';

@Component({
  selector: 'app-bg',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent implements OnInit {

  public canvas:any;
  public ctx:any;
  public pixels = [
    new Pixel( 0, 0 ),
    new Pixel( 1, 0 ),
    new Pixel( 0, 1 ),
    new Pixel( 1, 1 ),
  ];

  constructor() {
  }

  ngOnInit(): void {
    this.canvas = document.querySelector("canvas");
    this.ctx = this.canvas.getContext('2d');
    this.animate();
  }

  animate = ():any => {
    var that = this;
    this.pixels.forEach( function( pixel ) {
      pixel.update();
      pixel.render( that.ctx );
    });
    requestAnimationFrame( this.animate);
  }


}
