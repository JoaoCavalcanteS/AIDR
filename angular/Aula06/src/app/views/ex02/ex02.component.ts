import { Component } from '@angular/core';

@Component({
  selector: 'app-ex02',
  templateUrl: './ex02.component.html',
  styleUrls: ['./ex02.component.css']
})
export class Ex02Component {
    dog: string = '';
    ftDog: string = '';

    procurar(dog:string){
        if(dog=='caramelo'){
          this.ftDog = 'assets/caramelo.jpg';
        }else{
          if(dog=='pinscher'){
            this.ftDog = 'assets/pinscher.jpg';
          }else{
            if(dog=='chihuahua'){
              this.ftDog = 'assets/chihuahua.jpg';
            }else{
              this.ftDog = 'assets/404.jpg';
            }
          }
        }

    }
}
