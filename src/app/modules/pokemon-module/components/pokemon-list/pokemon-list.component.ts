import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Reference } from 'src/app/utils/types/types';

@Component({
  selector: 'pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass'],
})
export class PokemonList implements OnInit {
  pokemonList: Reference[] = [];
  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getPokemonsFromAPI();
  }

  getPokemonsFromAPI(): void {
    this.pokemonService
      .getPokemonList(27)
      .subscribe((allPokemonData: any) => {
        this.pokemonList = allPokemonData.results;
      });
  }
}
