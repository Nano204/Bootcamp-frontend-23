import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared-module/shared.modules';
import { PokemonModule } from './modules/pokemon-module/pokemon-list.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    PokemonModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
