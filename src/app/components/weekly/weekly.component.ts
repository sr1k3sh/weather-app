import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ExpandObj } from '../../utls/interfaces';
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

  public expandObj:ExpandObj = {};

  public detailData:any = "";
  constructor() {}

  ngOnInit(): void {
    this.low = this.getLowtemp();
    this.high = this.getHighTemp();
  }

  ngOnChanges():void{
    this.low = this.getLowtemp();
    this.high = this.getHighTemp();
    console.log('changed',this.low,this.daily.data)
  }

  ngAfterViewInit(): void{
    let that = this;
    Promise.resolve().then(()=>{
      that.identifierWidth = that.myIdentifier?.nativeElement.clientWidth;
    });
  }

  expandStatus(obj:object){
    this.expandObj = obj;
    let id = this.expandObj.index? this.expandObj.index : 0;
    this.expandObj.data = this.daily.data[id];
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