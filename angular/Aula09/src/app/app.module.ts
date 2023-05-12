import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { CepComponent } from './views/cep/cep.component';
import { FormsModule } from '@angular/forms';
import { HorasComponent } from './views/horas/horas.component';

@NgModule({
  declarations: [
    AppComponent,
    CepComponent,
    HorasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
