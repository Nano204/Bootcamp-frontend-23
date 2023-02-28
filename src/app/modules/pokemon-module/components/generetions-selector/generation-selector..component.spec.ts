import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerationSelectorComponent } from './generation-selector..component';

describe('GenerationSelectorComponent', () => {
  let component: GenerationSelectorComponent;
  let fixture: ComponentFixture<GenerationSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerationSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerationSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
