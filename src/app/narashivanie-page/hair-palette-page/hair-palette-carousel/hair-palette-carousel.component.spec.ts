import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HairPaletteCarouselComponent } from './hair-palette-carousel.component';

describe('HairPaletteCarouselComponent', () => {
  let component: HairPaletteCarouselComponent;
  let fixture: ComponentFixture<HairPaletteCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HairPaletteCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HairPaletteCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
