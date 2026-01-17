import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FunctionsComponent } from './functions/functions.component';
import { EventsComponent } from './events/events.component';
import { ConditionsComponent } from './conditions-If/conditions.component';
import { ConditionsElseifComponent } from './conditions-elseif/conditions-elseif.component';
import { ConditionsSwitchComponent } from './conditions-switch/conditions-switch.component';

@NgModule({
  declarations: [
    AppComponent,
    FunctionsComponent,
    EventsComponent,
    ConditionsComponent,
    ConditionsElseifComponent,
    ConditionsSwitchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
