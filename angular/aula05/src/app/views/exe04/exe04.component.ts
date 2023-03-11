import { Component } from '@angular/core';

@Component({
  selector: 'app-exe04',
  templateUrl: './exe04.component.html',
  styleUrls: ['./exe04.component.css']
})
export class Exe04Component {
  nome:string="JOAO FURACÃO 2000";
  album:string="A FANTASTICA FABRICA DE BICO";
  cantor:string="JAJA E PAULO GUINA";

  soma: number = 0;

  somar(num1:number,num2:number){
    this.soma=num1+num2;
  }
}
