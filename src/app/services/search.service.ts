import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class SearchService {
  newSearchValue = new EventEmitter<string>();
  constructor() {}
}
