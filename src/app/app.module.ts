import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PokemonListModule } from './pokemon-list-module/pokemon-list.module';
import { SharedModule } from './shared-module/shared.modules';
import { PokemonDetailModule } from './pokemon-detail-module/pokemon-detail.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    PokemonListModule,
    SharedModule,
    PokemonDetailModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
