import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventBindingComponent } from './views/event-binding/event-binding.component';
import { AtlasComponent } from './views/atlas/atlas.component';
import { Exe04Component } from './views/exe04/exe04.component';

@NgModule({
  declarations: [
    AppComponent,
    EventBindingComponent,
    AtlasComponent,
    Exe04Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
