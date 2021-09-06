import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-addremove-icon',
  templateUrl: './addremove-icon.component.html',
  styleUrls: ['./addremove-icon.component.css']
})
export class AddremoveIconComponent implements OnInit {

  @Input() index:string = "1";


  @Output() valueChange = new EventEmitter();
  public expand:boolean = false;
  // @Output() newItemEvent = new EventEmitter<string>();

  // addNewItem(value: string) {
  //   this.newItemEvent.emit(value);
  // }
  constructor() { }

  ngOnInit(): void {
  }

  handleExpand=(evt:any)=>{
    if(evt.target.classList.contains('expand')){
      evt.target.classList.remove("expand");
      this.expand = true;
    }
    else{
      evt.target.classList.add("expand");
      this.expand = false;
    }
    let obj = {expand:this.expand,index:this.index};
    this.valueChange.emit(obj);
  }

}
