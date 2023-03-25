import { Component } from '@angular/core';

@Component({
  selector: 'app-ngif-ex1',
  templateUrl: './ngif-ex1.component.html',
  styleUrls: ['./ngif-ex1.component.css']
})
export class NgifEx1Component {
  cor = false;

  mudaCor(){
    this.cor = !this.cor;
  }
}
