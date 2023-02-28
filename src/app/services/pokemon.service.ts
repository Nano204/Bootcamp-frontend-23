import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PokemonService {
  constructor(private http: HttpClient) {}

  getPokemonList(limit?: number) {
    const pokemonList = this.http.get(
      `https://pokeapi.co/api/v2/pokemon/?limit=${limit || 25}`
    );
    return pokemonList;
  }

  getPokemonInfo(url: string) {
    return this.http.get(url);
  }

  getPokemonListByGeneration(generation: string) {
    const pokemonList = `https://pokeapi.co/api/v2/generation/${generation}`;
    return this.http.get(pokemonList);
  }
}
