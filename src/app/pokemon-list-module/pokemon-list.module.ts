import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { BrowserModule } from '@angular/platform-browser';
import { PokemonList } from './components/pokemon-list/pokemon-list.component';
import { TypeTagComponent } from './components/type-tag/type-tag.component';

@NgModule({
  declarations: [PokemonList, PokemonCardComponent, TypeTagComponent],
  imports: [BrowserModule, FormsModule],
  exports: [PokemonList, PokemonCardComponent, TypeTagComponent],
  providers: [],
})
export class PokemonListModule {}
