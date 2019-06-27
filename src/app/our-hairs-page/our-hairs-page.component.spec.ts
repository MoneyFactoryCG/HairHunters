import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurHairsPageComponent } from './our-hairs-page.component';

describe('OurHairsPageComponent', () => {
  let component: OurHairsPageComponent;
  let fixture: ComponentFixture<OurHairsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurHairsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurHairsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
