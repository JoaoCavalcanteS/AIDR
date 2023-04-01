import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgifComponent } from './views/ngif/ngif.component';
import { NgifEx1Component } from './views/ngif-ex1/ngif-ex1.component';
import { NgifEx2Component } from './views/ngif-ex2/ngif-ex2.component';
import { Ex03Component } from './views/ngif-ex03/ex03.component';

@NgModule({
  declarations: [
    AppComponent,
    NgifComponent,
    NgifEx1Component,
    NgifEx2Component,
    Ex03Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
