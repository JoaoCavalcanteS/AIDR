import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgifEx04Component } from './views/ngif-ex04/ngif-ex04.component';
import { NgifEx05Component } from './views/ngif-ex05/ngif-ex05.component';
import { NgForComponent } from './views/ng-for/ng-for.component';
import { NgForEx1Component } from './views/ng-for-ex1/ng-for-ex1.component';


@NgModule({
  declarations: [
    AppComponent,
    NgifEx04Component,
    NgifEx05Component,
    NgForComponent,
    NgForEx1Component

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
