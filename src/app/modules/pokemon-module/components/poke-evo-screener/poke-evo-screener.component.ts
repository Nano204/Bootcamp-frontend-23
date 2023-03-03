import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
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
  evolutionChain: {
    data: PokemonResponse;
    image: string;
    displayables?: { id?: string; name?: string };
  }[] = [];

  constructor(private pokemonService: PokemonService, private router: Router) {}

  ngOnInit(): void {
    this.setEvolutionChain();
  }

  setEvolutionChain() {
    this.pokemonService
      .getPokemonEvolutionChain(this.url)
      .subscribe((evolutionItem) => {
        let current: Evolution | null = evolutionItem.chain;
        do {
          const pokemonId = this.getIdFromPokemonReference(current.species);
          this.pokemonService
            .getPokemonInfo(pokemonId)
            .subscribe((response) => {
              const id = String(response.id).padStart(3, '0');
              const name = this.capitalize(response.name);
              const image =
                response.sprites.other['official-artwork'].front_default;
              this.evolutionChain.push({
                data: response,
                image,
                displayables: { id, name },
              });
            });
          current = current?.evolves_to ? current.evolves_to[0] : null;
        } while (current?.evolves_to);
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

  capitalize(str: string): string {
    return str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
  }

  goToPokemon(id: number) {
    this.router.navigate([`pokemons/${id}`]);
  }
}
