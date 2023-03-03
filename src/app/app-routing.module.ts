import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonDetailComponent } from './modules/pokemon-module/pages/pokemon-detail/pokemon-detail.component';
import { PokemonListPage } from './modules/pokemon-module/pages/pokemon-list/pokemon-list-page.component';

const routes: Routes = [
  { path: 'pokemons', title: 'Pokedex', component: PokemonListPage },
  { path: 'pokemons/:id', component: PokemonDetailComponent },
  { path: '#', redirectTo: '/pokemons', pathMatch: 'full' },
  { path: '', redirectTo: '/pokemons', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
