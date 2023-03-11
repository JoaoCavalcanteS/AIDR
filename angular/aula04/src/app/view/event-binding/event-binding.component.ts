import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {
  pais: string =  'alemanha';
  // brasil: string = 'brasil'
  imagem1: string = 'assets/boca.jpg';
  imagem2: string = 'assets/joselito.jpg';
  imagem3: string = 'assets/vampiro.jpg';

  img1: string = 'img1';
  img2: string = 'img2';
  img3: string = 'img3';

  imagemB = 'assets/joselito.jpg';

  //use This para manipular uma variavel
  trocarPais (pais:string){
      this.pais = pais;
  };

  trocarImagem (img:string){
      this.imagemB = img;
  }
}
