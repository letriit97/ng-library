import { TestBed } from '@angular/core/testing';

import { InputUploadService } from './input-upload.service';

describe('InputUploadService', () => {
  let service: InputUploadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InputUploadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
