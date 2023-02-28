import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SearchBarSectionComponent } from './components/search-bar-section/search-bar-section.component';

@NgModule({
  declarations: [
    SearchBarComponent,
    NavBarComponent,
    SearchBarSectionComponent,
  ],
  imports: [FormsModule],
  exports: [NavBarComponent, SearchBarComponent, SearchBarSectionComponent],
  providers: [],
})
export class SharedModule {}
