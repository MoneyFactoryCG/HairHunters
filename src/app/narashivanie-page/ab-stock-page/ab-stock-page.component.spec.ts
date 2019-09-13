import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbStockPageComponent } from './ab-stock-page.component';

describe('AbStockPageComponent', () => {
  let component: AbStockPageComponent;
  let fixture: ComponentFixture<AbStockPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbStockPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbStockPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
