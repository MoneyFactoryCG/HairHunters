import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfitTwoPageComponent } from './profit-two-page.component';

describe('ProfitTwoPageComponent', () => {
  let component: ProfitTwoPageComponent;
  let fixture: ComponentFixture<ProfitTwoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfitTwoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfitTwoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
