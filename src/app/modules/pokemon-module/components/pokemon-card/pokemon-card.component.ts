import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { PokemonResponse, Reference, Type } from 'src/app/utils/types/types';

@Component({
  selector: 'pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.sass'],
})
export class PokemonCardComponent implements OnInit {
  @Input() pokemon!: Reference;
  url!: string;
  pokemonResponse!: PokemonResponse;
  id?: string;
  types: string[] = [];
  primaryTypeBgColor?: string;
  primaryTypeImage?: string;
  image?: string = '';
  name?: string = '';
  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.url = this.pokemon.url;
    this.getPokemonInfoFromAPI();
  }

  getPokemonInfoFromAPI(): void {
    this.pokemonService.getPokemonInfo(this.url).subscribe((response) => {
      this.pokemonResponse = response as PokemonResponse;
      this.getTypeNamesFromInfo();
      this.id = String(this.pokemonResponse.id).padStart(3, '0');
      this.getImageFromInfo();
      this.name = this.capitalize(this.pokemonResponse.name);
      this.primaryTypeBgColor = `background-type-${this.types[0]}`;
      this.primaryTypeImage = `../../assets/types/${this.capitalize(
        this.types[0]
      )}.svg`;
    });
  }

  getTypeNamesFromInfo(): void {
    this.types = this.pokemonResponse.types.map((type: Type) => type.type.name);
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
