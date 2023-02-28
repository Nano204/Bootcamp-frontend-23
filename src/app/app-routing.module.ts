import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListPage } from './modules/pokemon-module/pages/pokemon-list/pokemon-list-page.component';

const routes: Routes = [{ path: 'pokemons', component: PokemonListPage }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
