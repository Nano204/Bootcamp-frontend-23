import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit } from '@angular/core';
import { PokemonResponse, Type } from 'src/app/utils/types/types';
@Component({
  selector: 'pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.sass'],
})
export class PokemonDetailComponent implements OnInit {
  url!: string;
  pokemonResponse!: PokemonResponse;
  id?: string;
  types: string[] = [];
  image?: string = '';
  name?: string = '';
  primaryTypeBgColor?: string;
  primaryTypeImage?: string;
  goBackArrowIconUrl: string =
    '../../../../assets/icons/left-arrow-round-outline-icon.svg';

  constructor(private http: HttpClient, private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.getPokemonInfoFromAPI();
    this.insertSGV(this.goBackArrowIconUrl, 'back-arrow');
  }

  getPokemonInfoFromAPI(): void {
    this.url = 'https://pokeapi.co/api/v2/pokemon/1';
    this.http.get(this.url).subscribe((response) => {
      this.pokemonResponse = response as PokemonResponse;
      this.getTypeNamesFromInfo();
      this.id = String(this.pokemonResponse.id).padStart(3, '0');
      this.getImageFromInfo();
      this.name = this.capitalize(this.pokemonResponse.name);
      this.primaryTypeBgColor = `background-type-${this.types[0]}`;
      this.primaryTypeImage = `../../../../assets/types/${this.capitalize(
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

  insertSGV(realtivePath: string, classToLocate: string) {
    console.log(realtivePath)
    fetch(realtivePath)
      .then((response) => response.text())
      .then((htmlText) => {
        const d1 = this.elementRef.nativeElement.querySelector(
          `.${classToLocate}`
        );
        d1.insertAdjacentHTML('beforeend', htmlText);
      });
  }
}
