import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { customAnimation } from 'src/app/utls/animations';

@Component({
  selector: 'app-weekly',
  templateUrl: './weekly.component.html',
  styleUrls: ['./weekly.component.css'],
  animations: customAnimation
})
export class WeeklyComponent implements OnInit {

  @Input() daily:any;

  @ViewChild('myIdentifier') myIdentifier?: ElementRef;

  @Input() identifierWidth:number = 10;

  public low:number = 0;
  public high:number = 100;

  public expandObj:any = {expand:false};
  constructor() {}

  ngOnInit(): void {
    this.low = this.getLowtemp();
    this.high = this.getHighTemp();
  }

  ngAfterViewInit(): void{
    let that = this;
    Promise.resolve().then(()=>{
      that.identifierWidth = that.myIdentifier?.nativeElement.clientWidth;
    });

  }

  expandStatus(obj:object){
    this.expandObj = obj;
    return obj;
  }

  getHighTemp(){
    var highArr = this.daily.data.map((d:any)=>d.temperatureMax);
    return Math.max(...highArr)
  }

  getLowtemp(){
    var lowArr = this.daily.data.map((d:any)=>d.temperatureMin);
    return Math.min(...lowArr);
  }

}
