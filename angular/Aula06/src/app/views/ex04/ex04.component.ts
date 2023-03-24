import { Component } from '@angular/core';

@Component({
  selector: 'app-ex04',
  templateUrl: './ex04.component.html',
  styleUrls: ['./ex04.component.css']
})
export class Ex04Component {

  // Crie 3 caixas de texto e rádios contendo as
  // operações básicas. Quando valores forem
  // digitados nas caixas de texto, a operação
  // selecionada deve ser realizada e o resultado
  // exibido na 3ª caixa
  num1:number=0;
  num2:number=0;
  num3:number=0;

  soma:number = 0;

  adicao(num1:number,num2:number, num3:number){
    this.soma = num1 + num2 + num3;
  }
}
