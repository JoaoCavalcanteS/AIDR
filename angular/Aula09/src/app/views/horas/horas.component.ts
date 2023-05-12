import { Component } from '@angular/core';

@Component({
  selector: 'app-horas',
  templateUrl: './horas.component.html',
  styleUrls: ['./horas.component.css']
})
export class HorasComponent {
  cidade = '';
  horas?: Horas = undefined;

  constructor(private horasService: horasService){}

  consultarHoras(){
    this.horasService.obterHoras(this.cidade).subscribe(horas=> {
      this.horas = horas;
    });//toda function que retonar um obserble, use um subscribe
      //passe uma arrowFunction, que sempre que tiver algo ele retorna algo
  }
}
