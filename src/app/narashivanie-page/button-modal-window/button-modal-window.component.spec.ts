import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonModalWindowComponent } from './button-modal-window.component';

describe('ButtonModalWindowComponent', () => {
  let component: ButtonModalWindowComponent;
  let fixture: ComponentFixture<ButtonModalWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonModalWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonModalWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
