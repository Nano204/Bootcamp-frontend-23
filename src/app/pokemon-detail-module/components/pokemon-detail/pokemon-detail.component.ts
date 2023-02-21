import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PokemonResponse, Type } from 'src/app/utils/types/types';

@Component({
  selector: 'pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.sass'],
})
export class PokemonDetailComponent implements OnInit {
  // @Input() pokemon!: Reference;
  url!: string;
  pokemonResponse!: PokemonResponse;
  id?: string;
  types: string[] = [];
  image?: string = '';
  name?: string = '';
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getPokemonInfoFromAPI();
  }

  getPokemonInfoFromAPI(): void {
    this.url = 'https://pokeapi.co/api/v2/pokemon/1';
    this.http.get(this.url).subscribe((response) => {
      this.pokemonResponse = response as PokemonResponse;
      this.getTypeNamesFromInfo();
      this.id = String(this.pokemonResponse.id).padStart(3, '0');
      this.getImageFromInfo();
      this.name = this.capitalize(this.pokemonResponse.name);
      console.log(response);
    });
  }

  getTypeNamesFromInfo(): void {
    this.types = this.pokemonResponse.types.map((type: Type) =>
      this.capitalize(type.type.name)
    );
  }

  getImageFromInfo(): void {
    const sprites = this.pokemonResponse.sprites;
    const artWork = sprites.other['official-artwork'];
    this.image = artWork.front_default;
  }

  capitalize(str: string): string {
    return str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
  }
}
