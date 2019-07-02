import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HairPalettePageComponent } from './hair-palette-page.component';

describe('HairPalettePageComponent', () => {
  let component: HairPalettePageComponent;
  let fixture: ComponentFixture<HairPalettePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HairPalettePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HairPalettePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
