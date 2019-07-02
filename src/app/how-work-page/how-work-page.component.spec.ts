import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowWorkPageComponent } from './how-work-page.component';

describe('HowWorkPageComponent', () => {
  let component: HowWorkPageComponent;
  let fixture: ComponentFixture<HowWorkPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowWorkPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowWorkPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
