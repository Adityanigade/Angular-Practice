import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conditions',
  templateUrl: './conditions.component.html',
  styleUrls: ['./conditions.component.css']
})
export class ConditionsComponent implements OnInit {

  constructor() { }
display=true
x=3
hide(){
  this.display=false
}
show(){
  this.display=true
}
toggle(){
  this.display=!this.display;
}
  ngOnInit(): void {
  }

}
