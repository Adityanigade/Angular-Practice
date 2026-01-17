import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-functions',
  templateUrl: './functions.component.html',
  styleUrls: ['./functions.component.css']
})
export class FunctionsComponent implements OnInit {

  constructor() { }
 count=0
  // increase(){
  //   this.count=this.count+1
  // }
  //   reset(){
  //   this.count=0
  // }
  //   dencrease(){
  //   this.count=this.count-1
  // }

  handle(val:string){
  if(val=='plus'){
this.count=this.count+1
  }
  else if(val=='minus' && this.count > 0){
    this.count=this.count-1
  }
  else{
    this.count=0
  }
  
}
  ngOnInit(): void {
  }

}
