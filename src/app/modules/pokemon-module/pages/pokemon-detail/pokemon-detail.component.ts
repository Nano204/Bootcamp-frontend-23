import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';
import { PokemonResponse, Type, Stat } from 'src/app/utils/constants/types';
@Component({
  selector: 'pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.sass'],
})
export class PokemonDetailComponent implements OnInit {
  url!: string;
  pokemonResponse!: PokemonResponse;
  id?: number;
  displayNumber?: string;
  types: string[] = [];
  image?: string = '';
  name?: string = '';
  primaryTypeBgColor?: string;
  primaryTypeImage?: string;
  nextPokemonId!: number;
  nextPokemonDisplayNum!: string;
  previousPokemonId!: number;
  previousPokemonDisplayNum!: string;
  maxNumPokemon = 1008;
  goBackArrowIconUrl: string =
    '../../../../assets/icons/left-arrow-round-outline-icon.svg';
  screenSelection: string = 'Data';
  pokemonDescription?: string;
  pokemonSpecie?: string;
  displayableWeight!: string;
  displayableHeight!: string;
  evolutionChainURL!: string;

  constructor(
    private elementRef: ElementRef,
    private pokemonService: PokemonService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.getPokemonInfoFromAPI();
      this.getPokemonSpeciesInfo();
    });
    this.insertSGV(this.goBackArrowIconUrl, 'back-arrow');
  }

  getPokemonInfoFromAPI(): void {
    if (!this.id) return;
    this.pokemonService.getPokemonInfo(this.id).subscribe((response) => {
      this.pokemonResponse = response as PokemonResponse;
      this.getTypeNamesFromInfo();
      this.id = this.pokemonResponse.id;
      this.displayNumber = String(this.id).padStart(3, '0');
      this.getImageFromInfo();
      this.name = this.capitalize(this.pokemonResponse.name);
      this.primaryTypeBgColor = `background-type-${this.types[0]}`;
      this.primaryTypeImage = `../../../../assets/types/${this.capitalize(
        this.types[0]
      )}.svg`;
      this.nextPokemonId = this.id == this.maxNumPokemon ? 1 : this.id + 1;
      this.previousPokemonId = this.id == 1 ? this.maxNumPokemon : this.id - 1;
      this.nextPokemonDisplayNum = String(this.nextPokemonId).padStart(3, '0');
      this.previousPokemonDisplayNum = String(this.previousPokemonId).padStart(
        3,
        '0'
      );
      this.setWeightAndHeight();
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
    console.log(realtivePath);
    fetch(realtivePath)
      .then((response) => response.text())
      .then((htmlText) => {
        const d1 = this.elementRef.nativeElement.querySelector(
          `.${classToLocate}`
        );
        d1.insertAdjacentHTML('beforeend', htmlText);
      });
  }

  goBack() {
    this.router.navigate([`/pokemons/`]);
  }

  nextPokemon() {
    if (!this.id) return;
    return this.router.navigate([`/pokemons/${this.nextPokemonId}`]);
  }

  previousPokemon() {
    if (!this.id) return;
    return this.router.navigate([`/pokemons/${this.previousPokemonId}`]);
  }

  getPokemonSpeciesInfo() {
    if (!this.id) return;
    this.pokemonService.getPokemonSpeciesInfo(this.id).subscribe((response) => {
      this.pokemonDescription =
        response.flavor_text_entries.find((flavor) => {
          return flavor.language.name == 'en';
        })?.flavor_text ||
        'This pokedex does not contain enough info about this pokemon';
      this.pokemonSpecie =
        response.genera.find((gen) => {
          return gen.language.name == 'en';
        })?.genus || 'Unavailable';
      this.evolutionChainURL = response.evolution_chain.url;
    });
  }

  setWeightAndHeight() {
    if (!this.id) return;
    const kgWeight = this.pokemonResponse.weight / 10;
    const lbsWeight = Math.round(kgWeight * 2.20462 * 10) / 10;
    this.displayableWeight = `${kgWeight}kg (${lbsWeight}lbs)`;
    const mHeight = this.pokemonResponse.height / 10;
    const ftHeight = mHeight * 3.281;
    const inchHeight = Math.round(((ftHeight % 1) * 3.37008) / 10) * 10;
    this.displayableHeight = `${mHeight}m (${Math.floor(
      ftHeight
    )}'${inchHeight}")`;
  }

  changeScreen(screen: string) {
    this.screenSelection = screen;
  }
}
