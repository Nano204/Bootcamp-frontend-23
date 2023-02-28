import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'generation-selector',
  templateUrl: './generation-selector.component.html',
  styleUrls: ['./generation-selector.component.sass'],
})
export class GenerationSelectorComponent {
  generations = ['G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7', 'G8', 'G9'];

  constructor(private pokemonService: PokemonService) {}

  searchGeneration(index: number) {
    const generation = index + 1;
    this.pokemonService.generationSelectEvent.emit(generation);
  }

  clearGenerationSelect() {
    this.pokemonService.generationClearEvent.emit();
  }
}
