import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  Evolution,
  PokemonResponse,
  Reference,
  SpecieRequest,
} from '../utils/constants/types';

@Injectable()
export class PokemonService {
  generationSelectEvent = new EventEmitter<number>();
  generationClearEvent = new EventEmitter<undefined>();

  constructor(private http: HttpClient) {}

  getPokemonReferenceList(limit?: number): Observable<Reference[]> {
    const pokemonList = this.http.get(
      `https://pokeapi.co/api/v2/pokemon/?limit=${limit || 25}`
    );
    return pokemonList as Observable<Reference[]>;
  }

  getPokemonInfo(id: number): Observable<PokemonResponse> {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    return this.http.get(url) as Observable<PokemonResponse>;
  }

  getGenerationInfo(generation: number) {
    const url = `https://pokeapi.co/api/v2/generation/${generation}`;
    return this.http.get(url) as Observable<{
      pokemon_species: Reference[];
    }>;
  }

  getPokemonSpeciesInfo(id: number) {
    const url = `https://pokeapi.co/api/v2/pokemon-species/${id}`;
    return this.http.get(url) as Observable<SpecieRequest>;
  }

  getPokemonEvolutionChain(url: string) {
    return this.http.get(url) as Observable<{ chain: Evolution }>;
  }
}
