import { Component } from '@angular/core';

@Component({
  selector: 'app-maisc',
  templateUrl: './maisc.component.html',
  styleUrls: ['./maisc.component.css']
})
export class MaiscComponent {
  paraMaiusculo(palavra:string){
    return palavra.toUpperCase();
  }
}
