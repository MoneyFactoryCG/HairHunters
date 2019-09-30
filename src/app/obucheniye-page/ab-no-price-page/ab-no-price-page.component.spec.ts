import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbNoPricePageComponent } from './ab-no-price-page.component';

describe('AbNoPricePageComponent', () => {
  let component: AbNoPricePageComponent;
  let fixture: ComponentFixture<AbNoPricePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbNoPricePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbNoPricePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
