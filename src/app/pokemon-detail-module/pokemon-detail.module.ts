import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';

@NgModule({
  declarations: [PokemonDetailComponent],
  imports: [BrowserModule, FormsModule],
  exports: [PokemonDetailComponent],
  providers: [],
})
export class PokemonDetailModule {}
