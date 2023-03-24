import { Component } from '@angular/core';

@Component({
  selector: 'app-ex03',
  templateUrl: './ex03.component.html',
  styleUrls: ['./ex03.component.css']
})
export class Ex03Component {
//   . Crie um select contendo alguns cursos do
// Senac e uma caixa de texto (nome). Quando
// for selecionado um curso e texto for digitado,
// informações na parte inferior devem ser
// atualizadas, exibindo o curso selecionado e o
// nome do candidato
    nome: string = '';
    curso: string = '';

}
