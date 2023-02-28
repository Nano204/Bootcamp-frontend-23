import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { SearchService } from 'src/app/services/search.service';
import { PokemonResponse, Reference } from 'src/app/utils/constants/types';

@Component({
  selector: 'pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass'],
})
export class PokemonList implements OnInit {
  pokemonReferenceList: Reference[] = [];
  pokemonList: PokemonResponse[] = [];
  displayablePokemons: PokemonResponse[] = this.pokemonList;
  constructor(
    private pokemonService: PokemonService,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.getPokemonReferencesFromAPI();
    this.eventSubcriptions();
  }

  getPokemonReferencesFromAPI(): void {
    this.pokemonService
      .getPokemonReferenceList(27)
      .subscribe((allPokemonData: any) => {
        this.pokemonReferenceList = allPokemonData.results;
        this.buildPokemonsFromReferences();
      });
  }

  buildPokemonsFromReferences(): void {
    this.pokemonReferenceList.forEach((reference, index) => {
      this.getPokemonInfoFromAPI(reference.url, index);
    });
  }

  getPokemonInfoFromAPI(url: string, index: number) {
    this.pokemonService
      .getPokemonInfo(url)
      .subscribe((response: PokemonResponse) => {
        this.pokemonList[index] = response;
        this.displayablePokemons = this.pokemonList;
      });
  }

  eventSubcriptions() {
    this.searchService.newSearchValue.subscribe((response: string) => {
      this.onSearch(response);
    });
    this.pokemonService.generationSelectEvent.subscribe((response) => {
      this.pokemonList = [];
      this.onGenerationSelect(response);
    });
    this.pokemonService.generationClearEvent.subscribe((response) => {
      this.pokemonList = [];
      this.onClearGeneration();
    });
  }

  onSearch(searchValue: string) {
    const validSearch = searchValue && searchValue != '';
    if (validSearch) {
      this.displayablePokemons = this.pokemonList.filter((pokemon) => {
        const hasSameType = pokemon.types?.some((type) => {
          return type.type.name.toUpperCase() == searchValue.toUpperCase();
        });
        const hasSameId = pokemon.id == Number(searchValue);
        const hasSameName =
          pokemon.name.toUpperCase() == searchValue.toUpperCase();
        return hasSameId || hasSameName || hasSameType;
      });
    } else {
      this.displayablePokemons = this.pokemonList;
    }
  }

  onGenerationSelect(generation: number) {
    this.pokemonService.getGenerationInfo(generation).subscribe((response) => {
      console.log(this.pokemonList);
      const pokemonSpecieReferenceList = response.pokemon_species;
      console.log(response);
      this.pokemonReferenceList = pokemonSpecieReferenceList.map(
        (reference) => {
          reference.url = reference.url.replace('-species', '');
          return reference;
        }
      );
      this.buildPokemonsFromReferences();
    });
  }

  onClearGeneration() {
    this.getPokemonReferencesFromAPI();
  }
}
