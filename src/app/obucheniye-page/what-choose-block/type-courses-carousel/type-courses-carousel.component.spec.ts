import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeCoursesCarouselComponent } from './type-courses-carousel.component';

describe('TypeCoursesCarouselComponent', () => {
  let component: TypeCoursesCarouselComponent;
  let fixture: ComponentFixture<TypeCoursesCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeCoursesCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeCoursesCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
