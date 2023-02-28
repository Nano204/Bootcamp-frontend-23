import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { BrowserModule } from '@angular/platform-browser';
import { PokemonList } from './components/pokemon-list/pokemon-list.component';
import { TypeTagComponent } from './components/type-tag/type-tag.component';
import { SharedModule } from '../shared-module/shared.modules';
import { PokemonListPage } from './pages/pokemon-list/pokemon-list-page.component';
import { PokemonService } from 'src/app/services/pokemon.service';

@NgModule({
  declarations: [
    PokemonList,
    PokemonCardComponent,
    TypeTagComponent,
    PokemonListPage,
  ],
  imports: [BrowserModule, FormsModule, SharedModule],
  exports: [PokemonList, PokemonCardComponent, TypeTagComponent],
  providers: [PokemonService],
})
export class PokemonModule {}
