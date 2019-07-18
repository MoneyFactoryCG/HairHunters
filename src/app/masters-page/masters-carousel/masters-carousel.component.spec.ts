import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MastersCarouselComponent } from './masters-carousel.component';

describe('MastersCarouselComponent', () => {
  let component: MastersCarouselComponent;
  let fixture: ComponentFixture<MastersCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MastersCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MastersCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
