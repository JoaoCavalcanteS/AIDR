import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DuasViasComponent } from './views/duas-vias/duas-vias.component';
import { Ex01Component } from './views/ex01/ex01.component';
import { Ex02Component } from './views/ex02/ex02.component';
import { Ex03Component } from './views/ex03/ex03.component';

@NgModule({
  declarations: [
    AppComponent,
    DuasViasComponent,
    Ex01Component,
    Ex02Component,
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

//para voce importar modulos, voce deve declarar eles aqui
