import { Component } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent {
    ativado: boolean = false;
    nome: string = '';


    ligaDesliga(){
      this.ativado = !this.ativado;
    }
}
