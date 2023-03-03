import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';
import {
  Evolution,
  PokemonResponse,
  Reference,
} from 'src/app/utils/constants/types';

@Component({
  selector: 'poke-evo-screener',
  templateUrl: './poke-evo-screener.component.html',
  styleUrls: ['./poke-evo-screener.component.sass'],
})
export class PokeEvoScreenerComponent implements OnInit {
  @Input() url!: string;
  evolutionChain: { data: PokemonResponse; image: string }[] = [];

  constructor(private pokemonService: PokemonService, private router: Router) {}

  ngOnInit(): void {
    this.pokemonService
      .getPokemonEvolutionChain(this.url)
      .subscribe((evolutionItem) => {
        let current: Evolution | null = evolutionItem.chain;
        do {
          const pokemonId = this.getIdFromPokemonReference(current.species);
          this.pokemonService
            .getPokemonInfo(pokemonId)
            .subscribe((response) => {
              const image = response.sprites.other['official-artwork'].front_default;
              this.evolutionChain.push({ data: response, image });
            });
          current = current?.evolves_to ? current.evolves_to[0] : null;
        } while (current?.evolves_to);
        console.log(this.evolutionChain);
      });
  }

  getIdFromPokemonReference(reference: Reference) {
    let id = reference.url.replace(
      'https://pokeapi.co/api/v2/pokemon-species/',
      ''
    );
    id = id.replace('/', '');
    return Number(id);
  }

  goToPokemon(id: number) {
    this.router.navigate([`pokemons/${id}`]);
  }
}
