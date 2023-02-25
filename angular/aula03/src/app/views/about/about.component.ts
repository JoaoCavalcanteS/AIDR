import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  nome: string = "João";
  semestre: string = "3° Semestre";
  imagem = 'assets/minions.jpeg';

  somar(valor1:number, valor2:number){
    return valor1 + valor2;
  }
}
