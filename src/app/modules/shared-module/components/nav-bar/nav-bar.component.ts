import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.sass'],
})
export class NavBarComponent {
  constructor(private router: Router) {}
  onLogoClick() {
    this.router.navigate([`/pokemons/`]);
  }
}
