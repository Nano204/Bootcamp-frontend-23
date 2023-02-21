import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PokemonResponse, Reference } from 'src/app/utils/types/types';

@Component({
  selector: 'pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass'],
})
export class PokemonList implements OnInit {
  pokemonList: Reference[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getPokemonsFromAPI();
  }

  getPokemonsFromAPI(): void {
    const url = 'https://pokeapi.co/api/v2/pokemon/';
    this.http.get(url).subscribe((response) => {
      const pokemonResponse = response as { results: Reference[] };
      this.pokemonList = pokemonResponse.results as Reference[];
    });
  }
}
