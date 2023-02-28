import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { PokemonResponse, Type } from 'src/app/utils/constants/types';

@Component({
  selector: 'pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.sass'],
})
export class PokemonCardComponent implements OnInit {
  @Input() pokemon!: PokemonResponse;
  url!: string;
  id?: string;
  types: string[] = [];
  primaryTypeBgColor?: string;
  primaryTypeImage?: string;
  image?: string = '';
  name?: string = '';
  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getVariablesFromPokemon();
  }

  getVariablesFromPokemon(): void {
    if (!this.pokemon) return;
    this.getTypeNamesFromInfo();
    this.id = String(this.pokemon.id).padStart(3, '0');
    this.getImageFromInfo();
    this.name = this.capitalize(this.pokemon.name);
    this.primaryTypeBgColor = `background-type-${this.types[0]}`;
    this.primaryTypeImage = `../../assets/types/${this.capitalize(
      this.types[0]
    )}.svg`;
  }

  getTypeNamesFromInfo(): void {
    this.types = this.pokemon.types.map((type: Type) => type.type.name);
  }

  getImageFromInfo(): void {
    const sprites = this.pokemon.sprites;
    const artWork = sprites.other['official-artwork'];
    this.image = artWork.front_default;
  }

  capitalize(str: string): string {
    return str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
  }
}
