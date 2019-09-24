import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesBlockComponent } from './courses-block.component';

describe('CoursesBlockComponent', () => {
  let component: CoursesBlockComponent;
  let fixture: ComponentFixture<CoursesBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
