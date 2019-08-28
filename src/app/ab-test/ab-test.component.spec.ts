import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbTestComponent } from './ab-test.component';

describe('AbTestComponent', () => {
  let component: AbTestComponent;
  let fixture: ComponentFixture<AbTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
