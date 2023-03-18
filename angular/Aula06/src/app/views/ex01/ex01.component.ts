import { Component } from '@angular/core';

@Component({
  selector: 'app-ex01',
  templateUrl: './ex01.component.html',
  styleUrls: ['./ex01.component.css']
})
export class Ex01Component {
    num1: number = 0;
    num2: number = 0;
    soma: number = 0;

    somar(){
      this.soma = this.num1+this.num2;
    }
}
