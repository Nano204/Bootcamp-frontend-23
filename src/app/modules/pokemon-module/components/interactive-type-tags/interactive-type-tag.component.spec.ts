import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractiveTypeTagComponent } from './interactive-type-tag.component';

describe('InteractiveTypeTagComponent', () => {
  let component: InteractiveTypeTagComponent;
  let fixture: ComponentFixture<InteractiveTypeTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteractiveTypeTagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteractiveTypeTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
