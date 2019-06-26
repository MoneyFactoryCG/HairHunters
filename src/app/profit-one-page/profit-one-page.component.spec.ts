import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfitOnePageComponent } from './profit-one-page.component';

describe('ProfitOnePageComponent', () => {
  let component: ProfitOnePageComponent;
  let fixture: ComponentFixture<ProfitOnePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfitOnePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfitOnePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
