import { Component } from '@angular/core';

@Component({
  selector: 'app-ngif-ex05',
  templateUrl: './ngif-ex05.component.html',
  styleUrls: ['./ngif-ex05.component.css']
})
export class NgifEx05Component {
    numero1=0;
    numero2=0;
    resultado=0;

    calcular(op: string){
      if(op=='+'){
        this.resultado = this.numero1 + this.numero1;
      }else if( op == '-'){
        this.resultado = this.numero1 - this.numero1;
      }else if(op == '*'){
        this.resultado = this.numero1 * this.numero1;
      }else if(op == '/'){
        this.resultado = this.numero1 / this.numero1;
      }
    }
}
