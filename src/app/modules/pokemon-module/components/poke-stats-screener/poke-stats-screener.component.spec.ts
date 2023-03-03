import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeStatsScreenerComponent } from './poke-stats-screener.component';

describe('PokeStatsScreenerComponent', () => {
  let component: PokeStatsScreenerComponent;
  let fixture: ComponentFixture<PokeStatsScreenerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeStatsScreenerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokeStatsScreenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
