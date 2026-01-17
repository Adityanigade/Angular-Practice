import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor() { }
 handleEvent(event: Event) {
    console.log('function called', event.type);
    console.log('value', (event.target as HTMLInputElement).value);
  }
  ngOnInit(): void {
  }

}
