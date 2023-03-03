import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeDataScreenerComponent } from './poke-data-screener.component';

describe('PokeDataScreenerComponent', () => {
  let component: PokeDataScreenerComponent;
  let fixture: ComponentFixture<PokeDataScreenerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeDataScreenerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokeDataScreenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
