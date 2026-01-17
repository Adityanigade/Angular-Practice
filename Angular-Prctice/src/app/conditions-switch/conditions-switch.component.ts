import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conditions-switch',
  templateUrl: './conditions-switch.component.html',
  styleUrls: ['./conditions-switch.component.css']
})
export class ConditionsSwitchComponent implements OnInit {

  constructor() { }
  color='red'

  handleColor(val:string){
    this.color=val
  }

  ngOnInit(): void {
  }

}
