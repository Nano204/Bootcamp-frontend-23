import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeEvoScreenerComponent } from './poke-evo-screener.component';

describe('PokeEvoScreenerComponent', () => {
  let component: PokeEvoScreenerComponent;
  let fixture: ComponentFixture<PokeEvoScreenerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokeEvoScreenerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PokeEvoScreenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
