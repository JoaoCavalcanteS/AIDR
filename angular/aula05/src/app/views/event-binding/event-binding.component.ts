import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {
  pokemon: string = 'assets/pokedex.jpg';

  imagemB = 'assets/pokedex.jpg';

  escolherPokemon(pokemon:string){
    this.pokemon = pokemon;
  }
}
