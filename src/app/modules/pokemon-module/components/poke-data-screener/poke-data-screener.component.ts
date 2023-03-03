import { Component, Input,  } from '@angular/core';

@Component({
  selector: 'poke-data-screener',
  templateUrl: './poke-data-screener.component.html',
  styleUrls: ['./poke-data-screener.component.sass'],
})
export class PokeDataScreenerComponent {
  @Input() description?: string;
}
