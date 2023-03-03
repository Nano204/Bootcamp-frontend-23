import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SearchBarSectionComponent } from '../pokemon-module/components/search-bar-section/search-bar-section.component';
import { SearchService } from 'src/app/services/search.service';
import { BrowserModule } from '@angular/platform-browser';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    SearchBarComponent,
    NavBarComponent,
    NotFoundComponent
  ],
  imports: [FormsModule],
  exports: [NavBarComponent, SearchBarComponent, NotFoundComponent],
  providers: [SearchService],
})
export class SharedModule {}
