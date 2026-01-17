import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conditions-elseif',
  templateUrl: './conditions-elseif.component.html',
  styleUrls: ['./conditions-elseif.component.css']
})
export class ConditionsElseifComponent implements OnInit {

  constructor() { }
  color=1

  handleColor(val:number){
   this.color=val
}
handleInput(event:Event){
console.log(parseInt((event.target as HTMLInputElement).value));
this.color=parseInt((event.target as HTMLInputElement).value)
}

  ngOnInit(): void {
  }

}
