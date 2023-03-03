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
import { GenerationSelectorComponent } from './components/generetions-selector/generation-selector.component';
import { InteractiveTypeTagComponent } from './components/interactive-type-tags/interactive-type-tag.component';
import { PokemonDetailComponent } from './pages/pokemon-detail/pokemon-detail.component';
import { PokeDataScreenerComponent } from './components/poke-data-screener/poke-data-screener.component';
import { PokeEvoScreenerComponent } from './components/poke-evo-screener/poke-evo-screener.component';
import { PokeStatsScreenerComponent } from './components/poke-stats-screener/poke-stats-screener.component';

@NgModule({
  declarations: [
    PokemonList,
    PokemonDetailComponent,
    PokemonCardComponent,
    TypeTagComponent,
    InteractiveTypeTagComponent,
    PokemonListPage,
    GenerationSelectorComponent,
    SearchBarSectionComponent,
    PokeDataScreenerComponent,
    PokeEvoScreenerComponent,
    PokeStatsScreenerComponent,
  ],
  imports: [BrowserModule, FormsModule, SharedModule],
  exports: [PokemonList, PokemonCardComponent, TypeTagComponent],
  providers: [PokemonService, SearchService],
})
export class PokemonModule {}
