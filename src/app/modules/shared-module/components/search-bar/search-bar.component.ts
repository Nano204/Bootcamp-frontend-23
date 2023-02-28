import { Component, EventEmitter, Output } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.sass'],
})
export class SearchBarComponent {
  searchInput!: string;

  constructor(private searchService: SearchService) {}

  onChange(searchInput: string) {
    this.searchService.newSearchValue.emit(searchInput);
  }
}
