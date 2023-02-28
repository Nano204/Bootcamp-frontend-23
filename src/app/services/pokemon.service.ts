import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonResponse, Reference } from '../utils/constants/types';

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

  getPokemonInfo(url: string): Observable<PokemonResponse> {
    return this.http.get(url) as Observable<PokemonResponse>;
  }

  getGenerationInfo(generation: number) {
    const generationInfo = `https://pokeapi.co/api/v2/generation/${generation}`;
    return this.http.get(generationInfo) as Observable<{
      pokemon_species: Reference[];
    }>;
  }
}
