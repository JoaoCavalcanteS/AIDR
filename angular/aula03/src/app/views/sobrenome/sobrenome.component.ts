import { Component } from '@angular/core';

@Component({
  selector: 'app-sobrenome',
  templateUrl: './sobrenome.component.html',
  styleUrls: ['./sobrenome.component.css']
})
export class SobrenomeComponent {

  paraMaiusculo(palavra:string){
    return palavra.toUpperCase();
  }

}
