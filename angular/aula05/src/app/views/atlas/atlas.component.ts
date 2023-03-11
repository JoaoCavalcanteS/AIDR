import { Component } from '@angular/core';

@Component({
  selector: 'app-atlas',
  templateUrl: './atlas.component.html',
  styleUrls: ['./atlas.component.css']
})
export class AtlasComponent {
  classe1:string='visivel';
  classe2:string='invisivel';
  classe3:string='invisivel';

  trocarAba(aba:number){
      if(aba==1){
      this.classe1='visivel';
      this.classe2='invisivel';
      this.classe3='invisivel';
    }
    else{
      if(aba==2){
        this.classe1='invisivel';
        this.classe2='visivel';
        this.classe3='invisivel';
    }else{
        this.classe1='invisivel';
        this.classe2='invisivel';
        this.classe3='visivel';
      }
    }
  }
}
