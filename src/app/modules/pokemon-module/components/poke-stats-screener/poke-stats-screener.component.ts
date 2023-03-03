import { Component, Input } from '@angular/core';
import { Stat } from 'src/app/utils/constants/types';

@Component({
  selector: 'poke-stats-screener',
  templateUrl: './poke-stats-screener.component.html',
  styleUrls: ['./poke-stats-screener.component.sass'],
})
export class PokeStatsScreenerComponent {
  @Input() stats?: Stat[];
  statsSum?: number;
}
