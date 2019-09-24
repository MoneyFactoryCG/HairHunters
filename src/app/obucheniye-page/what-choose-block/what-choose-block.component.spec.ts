import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatChooseBlockComponent } from './what-choose-block.component';

describe('WhatChooseBlockComponent', () => {
  let component: WhatChooseBlockComponent;
  let fixture: ComponentFixture<WhatChooseBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatChooseBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatChooseBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
