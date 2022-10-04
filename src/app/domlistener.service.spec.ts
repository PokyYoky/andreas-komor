import { TestBed } from '@angular/core/testing';

import { DOMListenerService } from './domlistener.service';

describe('DOMListenerService', () => {
  let service: DOMListenerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DOMListenerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
