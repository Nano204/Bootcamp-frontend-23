import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { BrowserModule } from '@angular/platform-browser';
import { PokemonList } from './components/pokemon-list/pokemon-list.component';
import { TypeTagComponent } from './components/type-tag/type-tag.component';
import { SharedModule } from '../shared-module/shared.modules';
import { PokemonListPage } from './pages/pokemon-list/pokemon-list-page.component';
import { PokemonService } from 'src/app/services/pokemon.service';
import { SearchService } from 'src/app/services/search.service';
import { SearchBarSectionComponent } from './components/search-bar-section/search-bar-section.component';
import { GenerationSelectorComponent } from './components/generetions-selector/generation-selector..component';

@NgModule({
  declarations: [
    PokemonList,
    PokemonCardComponent,
    TypeTagComponent,
    PokemonListPage,
    GenerationSelectorComponent,
    SearchBarSectionComponent,
  ],
  imports: [BrowserModule, FormsModule, SharedModule],
  exports: [PokemonList, PokemonCardComponent, TypeTagComponent],
  providers: [PokemonService, SearchService],
})
export class PokemonModule {}
