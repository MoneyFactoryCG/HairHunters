import { TestBed } from '@angular/core/testing';

import { ModalWindowFormService } from './modal-window-form.service';

describe('ModalWindowFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModalWindowFormService = TestBed.get(ModalWindowFormService);
    expect(service).toBeTruthy();
  });
});
