import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForWhomBlockComponent } from './for-whom-block.component';

describe('ForWhomBlockComponent', () => {
  let component: ForWhomBlockComponent;
  let fixture: ComponentFixture<ForWhomBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForWhomBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForWhomBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
