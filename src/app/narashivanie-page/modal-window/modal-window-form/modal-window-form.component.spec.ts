import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalWindowFormComponent } from './modal-window-form.component';

describe('ModalWindowFormComponent', () => {
  let component: ModalWindowFormComponent;
  let fixture: ComponentFixture<ModalWindowFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalWindowFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalWindowFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
